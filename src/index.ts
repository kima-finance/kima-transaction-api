import { DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { TxClient } from "./kima/common";
import { MsgRequestTransaction } from "./kima/tx";

interface Props {
  originChain: string;
  originAddress: string;
  targetChain: string;
  targetAddress: string;
  amount: number;
  fee: number;
}

export async function submitKimaTransaction({
  originChain,
  originAddress,
  targetChain,
  targetAddress,
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
    amount: amount.toString(),
    fee: fee.toString(),
  };

  const msg = await client.msgRequestTransaction(params);
  return await client.signAndBroadcast([msg]);
}
