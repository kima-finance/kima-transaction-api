import { SigningStargateClient, StdFee } from "@cosmjs/stargate";
import dotenv from "dotenv";
import {
  Registry,
  OfflineSigner,
  EncodeObject,
  coin,
} from "@cosmjs/proto-signing";

import {
  MsgRequestHtlcLock,
  MsgRequestTransaction,
  MsgSetTxHash,
  MsgHtlcReclaim,
} from "./transfer_tx";

import {
  MsgRequestSwapTransaction,
} from "./swap_tx";

dotenv.config();

const defaultFee = {
  amount: [coin(200, "uKIMA")],
  gas: "200000", // Gas limit
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
  ["/kimablockchain.swap.MsgRequestSwapTransaction", MsgRequestSwapTransaction],
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
    signAndBroadcast: async (msgs: EncodeObject[]) => {
      const gasInfo = await client.simulate(address, msgs, "");
      return client.signAndBroadcast(
        address,
        msgs,
        { ...defaultFee, gas: (gasInfo * 2).toString() },
        ""
      );
    },
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
    msgRequestSwapTransaction: (data: MsgRequestSwapTransaction): EncodeObject => ({
      typeUrl: "/kimablockchain.swap.MsgRequestSwapTransaction",
      value: MsgRequestSwapTransaction.fromPartial(data),
    }),
  };
};
