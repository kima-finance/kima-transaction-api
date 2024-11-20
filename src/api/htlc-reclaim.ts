import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { TxClient } from "../kima/common";
import { MsgHtlcReclaim } from "../kima/tx/htlc-reclaim";

export interface RequestHtlcReclaimProps {
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
