import { SigningStargateClient, StdFee } from "@cosmjs/stargate";
import dotenv from "dotenv";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { MsgRequestTransaction } from "./tx/request";
import { MsgRequestHtlcLock } from "./tx/htlc-lock";
import { MsgSetTxHash } from "./tx/set-hash";
import { MsgHtlcReclaim } from "./tx/htlc-reclaim";

dotenv.config();

const defaultFee = {
  amount: [],
  gas: "10000000",
};

interface SignAndBroadcastOptions {
  fee: StdFee;
  memo?: string;
}

const types = [
  ["/kimablockchain.transaction.MsgRequestTransaction", MsgRequestTransaction],
  ["/kimablockchain.transaction.MsgRequestHtlcLock", MsgRequestHtlcLock],
  ["/kimablockchain.transaction.MsgSetTxHash", MsgSetTxHash],
  ["/kimablockchain.transaction.MsgHtlcReclaim", MsgHtlcReclaim],
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
      typeUrl: "/kimablockchain.transaction.MsgRequestTransaction",
      value: MsgRequestTransaction.fromPartial(data),
    }),
    msgRequestHtlcLock: (data: MsgRequestHtlcLock): EncodeObject => ({
      typeUrl: "/kimablockchain.transaction.MsgRequestHtlcLock",
      value: MsgRequestHtlcLock.fromPartial(data),
    }),
    msgSetTxHash: (data: MsgSetTxHash): EncodeObject => ({
      typeUrl: "/kimablockchain.transaction.MsgSetTxHash",
      value: MsgSetTxHash.fromPartial(data),
    }),
    msgHtlcReclaim: (data: MsgHtlcReclaim): EncodeObject => ({
      typeUrl: "/kimablockchain.transaction.MsgHtlcReclaim",
      value: MsgHtlcReclaim.fromPartial(data),
    }),
  };
};
