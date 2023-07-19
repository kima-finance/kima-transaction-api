import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { TxClient } from "./kima/common";
import { MsgRequestTransaction } from "./kima/tx";

export enum SupportedNetworks {
  ETHEREUM = "ETH",
  POLYGON = "POL",
  AVALANCHE = "AVX",
  SOLANA = "SOL",
  FUSE = "FUS",
  CELO = "CEL",
  BSC = "BSC",
  ARBITRIUM = "ARB",
  OPTIMISM = "OPT",
  POLYGON_ZKEVM = "ZKE",
}

export enum CurrencyOptions {
  USDT = "USDT",
  USDC = "USDC",
  USDK = "USDK",
}

interface Props {
  originChain: SupportedNetworks;
  originAddress: string;
  targetChain: SupportedNetworks;
  targetAddress: string;
  symbol: CurrencyOptions;
  amount: number;
  fee: number;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function submitKimaTransaction({
  originChain,
  originAddress,
  targetChain,
  targetAddress,
  symbol,
  amount,
  fee,
}: Props) {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    process.env.KIMA_BACKEND_MNEMONIC as string,
    { prefix: "kima" }
  );
  const client = await TxClient(wallet);
  const [firstAccount] = await wallet.getAccounts();
  const params: MsgRequestTransaction = {
    creator: firstAccount.address,
    originChain,
    originAddress,
    targetChain,
    targetAddress,
    symbol,
    amount: amount.toString(),
    fee: fee.toString(),
  };

  let msg = await client.msgRequestTransaction(params);
  const result = await client.signAndBroadcast([msg]);

  let txId = 1;

  for (const event of result.events) {
    if (event.type === "transaction_requested") {
      for (const attr of event.attributes) {
        if (attr.key === "txId") {
          txId = +attr.value;
        }
      }
    }
  }

  msg = await client.msgSetTxHash({
    creator: firstAccount.address,
    txId,
    txHash: result.transactionHash,
  });

  let hashResult;
  do {
    hashResult = await client.signAndBroadcast([msg]);
    await sleep(1000);
  } while (hashResult.code !== 0);

  return result;
}
