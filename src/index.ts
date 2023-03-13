import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { TxClient } from "./kima/common";
import { MsgRequestTransaction } from "./kima/tx";

interface Props {
  originChain: string;
  originAddress: string;
  targetChain: string;
  targetAddress: string;
  symbol: string;
  amount: number;
  fee: number;
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

  let txId = "1";

  for (const event of result.events) {
    if (event.type === "transaction_requested") {
      for (const attr of event.attributes) {
        if (attr.key === "txId") {
          txId = attr.value;
        }
      }
    }
  }

  msg = await client.msgSetTxHash({
    creator: firstAccount.address,
    txId,
    txHash: result.transactionHash,
  });

  await client.signAndBroadcast([msg]);

  return result;
}
