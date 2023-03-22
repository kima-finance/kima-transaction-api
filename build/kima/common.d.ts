import { StdFee } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject } from "@cosmjs/proto-signing";
import { MsgRequestTransaction, MsgSetTxHash } from "./tx";
interface SignAndBroadcastOptions {
    fee: StdFee;
    memo?: string;
}
export declare const registry: Registry;
export declare const TxClient: (wallet: OfflineSigner) => Promise<{
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }?: SignAndBroadcastOptions) => Promise<import("@cosmjs/stargate").DeliverTxResponse>;
    msgRequestTransaction: (data: MsgRequestTransaction) => EncodeObject;
    msgSetTxHash: (data: MsgSetTxHash) => EncodeObject;
}>;
export {};
