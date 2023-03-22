import { SigningStargateClient, StdFee } from "@cosmjs/stargate";
import dotenv from "dotenv";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { MsgRequestTransaction, MsgSetTxHash } from "./tx";

dotenv.config();

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface SignAndBroadcastOptions {
  fee: StdFee;
  memo?: string;
}

const types = [
  ["/KimaFinance.kima.MsgRequestTransaction", MsgRequestTransaction],
  ["/KimaFinance.kima.MsgSetTxHash", MsgSetTxHash],
];

export const registry = new Registry(<any>types);

export const TxClient = async (wallet: OfflineSigner) => {
  const client = await SigningStargateClient.connectWithSigner(
    process.env.KIMA_BACKEND_NODE_PROVIDER as string,
    wallet,
    { registry }
  );
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (
      msgs: EncodeObject[],
      { fee, memo }: SignAndBroadcastOptions = { fee: defaultFee, memo: "" }
    ) => client.signAndBroadcast(address, msgs, fee, memo),
    msgRequestTransaction: (data: MsgRequestTransaction): EncodeObject => ({
      typeUrl: "/KimaFinance.kima.MsgRequestTransaction",
      value: MsgRequestTransaction.fromPartial(data),
    }),
    msgSetTxHash: (data: MsgSetTxHash): EncodeObject => ({
      typeUrl: "/KimaFinance.kima.MsgSetTxHash",
      value: MsgSetTxHash.fromPartial(data),
    }),
  };
};
