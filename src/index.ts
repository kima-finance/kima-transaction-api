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


/**
 * Cancel an HTCL lock by user taking back the funds
 * @export
 * @async
 * @param {RequestHtlcReclaimProps} param0
 * @param {string} param0.senderAddress - The creator wallet address
 * @param {string} param0.txHash - The transaction hash of the HTLC lock
 * @returns {Promise<DeliverTxResponse>}
 */
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


/**
 * Create an HTCL transaction
 *
 * @export
 * @async
 * @param {RequestHtlcLockProps} param0
 * @param {string} param0.fromAddress - The creator wallet address
 * @param {string} param0.senderPubkey - The creator wallet public key
 * @param {string} param0.amount - The total amount to be locked including fees
 * @param {string} param0.htlcTimeout - The time in seconds the HTLC will be valid for
 * @param {string} param0.txHash - The transaction hash of the HTLC lock
 * @param {string} param0.htlcAddress - The HTLC address
 * @returns {Promise<DeliverTxResponse>}
 */
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
  amount: number;
  fee: number;
  htlcCreationHash: string;
  htlcCreationVout: number;
  htlcExpirationTimestamp: string;
  htlcVersion: string;
  senderPubKey: Uint8Array;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


/**
 * Create a Kima transfer transaction. The HTLC parameters are only required on Bitcoin, use blank strings (or zeros) for other chains.
 * The approval or HTLC transaction must be completed before submitting the Kima transaction or it will fail.
 *
 * @export
 * @async
 * @param {RequestTxProps} param0
 * @param {SupportedNetworks} param0.originChain - The chain the funds are being transferred from
 * @param {string} param0.originAddress - The user wallet address
 * @param {SupportedNetworks} param0.targetChain - The chain the funds are being transferred to
 * @param {string} param0.targetAddress - The destination wallet address
 * @param {CurrencyOptions} param0.originSymbol - The starting token symbol
 * @param {CurrencyOptions} param0.targetSymbol - The destination token symbol
 * @param {number} param0.amount - amount of tokens to be transferred
 * @param {number} param0.fee - The total fees to be paid
 * @param {string} param0.htlcCreationHash - (if applicable) The transaction hash of the HTLC lock
 * @param {number} param0.htlcCreationVout - (if applicable) The vout of the HTLC lock
 * @param {string} param0.htlcExpirationTimestamp - (if applicable) The expiration timestamp of the HTLC lock
 * @param {string} param0.htlcVersion - (if applicable) The version of the HTLC lock
 * @param {Uint8Array} param0.senderPubKey - (if HTLC) The creator wallet public key
 * @returns {Promise<DeliverTxResponse>}
 */
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
    amount: amount.toString(),
    fee: fee.toString(),
    htlcCreationHash,
    htlcCreationVout,
    htlcExpirationTimestamp,
    htlcVersion,
    senderPubKey,
    options: "",
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
    txType: "request_transaction",
  });

  console.log(msg);

  let hashResult;
  do {
    hashResult = await client.signAndBroadcast([msg]);
    await sleep(1000);
  } while (hashResult.code !== 0);

  return result;
}
