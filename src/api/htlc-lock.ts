import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { TxClient } from "../kima/common";
import { MsgRequestHtlcLock } from "../kima/tx/htlc-lock";

export interface RequestHtlcLockProps {
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
