import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { TxClient } from "./kima/common";
import {
  MsgHtlcReclaim,
  MsgRequestHtlcLock,
  MsgRequestTransaction,
} from "./kima/tx";

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

interface RequestHtlcReclaimProps {
  senderAddress: string;
  txHash: string;
}

export async function HtlcReclaim({
  senderAddress,
  txHash,
}: RequestHtlcReclaimProps) {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    process.env.KIMA_BACKEND_MNEMONIC as string,
    { prefix: "kima" }
  );
  const client = await TxClient(wallet);
  const [firstAccount] = await wallet.getAccounts();
  const params: MsgHtlcReclaim = {
    creator: firstAccount.address,
    senderAddress,
    txHash,
  };

  let msg = await client.msgHtlcReclaim(params);
  const result = await client.signAndBroadcast([msg]);

  return result;
}

interface RequestHtlcLockProps {
  fromAddress: string;
  senderPubkey: string;
  amount: string;
  htlcTimeout: string;
  txHash: string;
  htlcAddress: string;
}

export async function submitHtlcLock({
  fromAddress,
  senderPubkey,
  amount,
  htlcTimeout,
  txHash,
  htlcAddress,
}: RequestHtlcLockProps) {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    process.env.KIMA_BACKEND_MNEMONIC as string,
    { prefix: "kima" }
  );
  const client = await TxClient(wallet);
  const [firstAccount] = await wallet.getAccounts();
  const params: MsgRequestHtlcLock = {
    creator: firstAccount.address,
    fromAddress,
    senderPubkey,
    amount,
    htlcTimeout,
    htlcAddress,
    txHash,
  };

  let msg = await client.msgRequestHtlcLock(params);
  const result = await client.signAndBroadcast([msg]);

  return result;
}

interface RequestTxProps {
  originChain: SupportedNetworks;
  originAddress: string;
  targetChain: SupportedNetworks;
  targetAddress: string;
  originSymbol: CurrencyOptions;
  targetSymbol: CurrencyOptions;
  amount: string; // number in whole units i.e. "12.34"
  fee: string; // number in whole units i.e "0.061234"
  htlcCreationHash: string;
  htlcCreationVout: number;
  htlcExpirationTimestamp: string;
  htlcVersion: string;
  senderPubKey: Uint8Array;
  options: string;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getCreatorAddress() {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    process.env.KIMA_BACKEND_MNEMONIC as string,
    { prefix: "kima" }
  );
  const [firstAccount] = await wallet.getAccounts();
  return firstAccount;
}

export async function submitKimaTransaction({
  originChain,
  originAddress,
  targetChain,
  targetAddress,
  originSymbol,
  targetSymbol,
  amount,
  fee,
  htlcCreationHash,
  htlcCreationVout,
  htlcExpirationTimestamp,
  htlcVersion,
  senderPubKey,
  options,
}: RequestTxProps) {
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
    originSymbol,
    targetSymbol,
    amount: amount,
    fee: fee,
    htlcCreationHash,
    htlcCreationVout,
    htlcExpirationTimestamp,
    htlcVersion,
    senderPubKey,
    options,
  };

  const msgTx = await client.msgRequestTransaction(params);
  const result = await client.signAndBroadcast([msgTx]);

  if (result.code !== 0) {
    return result;
  }

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

  await sleep(5000);

  const msgSetHash = await client.msgSetTxHash({
    creator: firstAccount.address,
    txId,
    txHash: result.transactionHash,
    txType: "request_transaction",
  });

  console.log(msgSetHash);

  let hashResult;
  do {
    try {
      hashResult = await client.signAndBroadcast([msgSetHash]);
    } catch (error) {
      console.log(error);
      await sleep(5000);
      continue;
    }
  } while (hashResult?.code !== 0);

  return result;
}
