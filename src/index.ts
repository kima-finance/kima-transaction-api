import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
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
  RequestTransferTxProps,
  RequestSwapTxProps,
  RequestExternalTxProps,
} from "./types";

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
