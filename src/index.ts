import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import http from "http";
import https from "https";
import { URL } from "url";
import { TxClient } from "./kima/common";
import {
  MsgHtlcReclaim,
  MsgRequestHtlcLock,
  MsgRequestTransaction,
  MsgRequestExternalTransaction,
} from "./kima/transfer_tx";

import {
  MsgRequestSwapTransaction,
} from "./kima/swap_tx";

import {
  RequestHtlcReclaimProps,
  RequestHtlcLockProps,
  HtlcLockingTransactionResponse,
  QueryHtlcLockingTransactionParams,
  RequestTransferTxProps,
  RequestSwapTxProps,
  RequestExternalTxProps,
} from "./types";

const requestJson = async <T>(url: string): Promise<T> => {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const transport = parsed.protocol === "https:" ? https : http;
    const req = transport.get(parsed, (res) => {
      const chunks: Buffer[] = [];
      res.on("data", (chunk) => {
        chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
      });
      res.on("end", () => {
        const body = Buffer.concat(chunks).toString("utf8");
        const status = res.statusCode ?? 0;
        if (status < 200 || status >= 300) {
          const error = new Error(`Request failed with status ${status}`);
          (error as any).status = status;
          (error as any).body = body;
          reject(error);
          return;
        }
        try {
          resolve(JSON.parse(body) as T);
        } catch (err) {
          reject(err);
        }
      });
    });
    req.on("error", reject);
  });
};

export async function getHtlcLockingTransactions({
  baseUrl,
  limit,
  offset,
  paginationKey,
}: QueryHtlcLockingTransactionParams): Promise<HtlcLockingTransactionResponse> {
  if (!baseUrl) {
    throw new Error("baseUrl is required");
  }
  const url = new URL(
    "/kima-finance/kima-blockchain/transaction/htlc_locking_transaction",
    baseUrl
  );
  if (limit != null) url.searchParams.set("pagination.limit", String(limit));
  if (offset != null) url.searchParams.set("pagination.offset", String(offset));
  if (paginationKey) url.searchParams.set("pagination.key", paginationKey);
  return requestJson<HtlcLockingTransactionResponse>(url.toString());
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

export async function getCreatorAddress() {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    process.env.KIMA_BACKEND_MNEMONIC as string,
    { prefix: "kima" }
  );
  const [firstAccount] = await wallet.getAccounts();
  return firstAccount;
}

export async function submitKimaTransferTransaction({
  originChain,
  originAddress,
  targetChain,
  targetAddress,
  originSymbol,
  targetSymbol,
  amount,
  fee,
  htlcCreationHash,
  htlcCreationVout = 0,
  htlcExpirationTimestamp,
  htlcVersion = "",
  senderPubKey,
  options,
}: RequestTransferTxProps) {
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
    htlcCreationHash: htlcCreationHash || "",
    htlcCreationVout: htlcCreationVout || 0,
    htlcExpirationTimestamp: htlcExpirationTimestamp || "",
    htlcVersion,
    senderPubKey: senderPubKey || new Uint8Array(),
    options,
  };

  const msgTx = await client.msgRequestTransaction(params);
  const result = await client.signAndBroadcast([msgTx]);

  return result;
}

export async function submitKimaSwapTransaction({
  originChain,
  originAddress,
  targetChain,
  targetAddress,
  originSymbol,
  targetSymbol,
  amountIn,
  amountOut,
  fee,
  dex,
  slippage,
  options,
}: RequestSwapTxProps) {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    process.env.KIMA_BACKEND_MNEMONIC as string,
    { prefix: "kima" }
  );
  const client = await TxClient(wallet);
  const [firstAccount] = await wallet.getAccounts();
  const params: MsgRequestSwapTransaction = {
    creator: firstAccount.address,
    originChain,
    originAddress,
    targetChain,
    targetAddress,
    originSymbol,
    targetSymbol,
    amountIn: amountIn,
    amountOut: amountOut,
    fee: fee,
    dex: dex,
    slippage: slippage,
    options: options,
  };

  const msgTx = await client.msgRequestSwapTransaction(params);
  const result = await client.signAndBroadcast([msgTx]);

  return result;
}

export async function submitKimaExternalTransaction({
  originChain,
  originAddress,
  targetChain,
  targetAddress,
  originSymbol,
  targetSymbol,
  amount,
  fee,
  options,
}: RequestExternalTxProps) {
  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(
    process.env.KIMA_BACKEND_MNEMONIC as string,
    { prefix: "kima" }
  );
  const client = await TxClient(wallet);
  const [firstAccount] = await wallet.getAccounts();
  const params: MsgRequestExternalTransaction = {
    creator: firstAccount.address,
    originChain,
    originAddress,
    targetChain,
    targetAddress,
    originSymbol,
    targetSymbol,
    amount: amount,
    fee: fee,
    options,
  };

  const msgTx = await client.msgRequestExternalTransaction(params);
  const result = await client.signAndBroadcast([msgTx]);

  return result;
}
