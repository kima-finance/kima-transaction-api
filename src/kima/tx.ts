/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "KimaFinance.kima.kima";

export interface MsgRequestTransaction {
  creator: string;
  originChain: string;
  originAddress: string;
  targetChain: string;
  targetAddress: string;
  symbol: string;
  amount: string;
  fee: string;
}

export interface MsgRequestTransactionResponse {
  code: string;
  msg: string;
  txId: string;
}

export interface MsgApproveTransaction {
  creator: string;
  txId: string;
  txTHash: string;
  success: string;
  signedKey: string;
}

export interface MsgApproveTransactionResponse {
  code: string;
  msg: string;
}

export interface MsgObservationVote {
  creator: string;
  txHash: string;
  chainId: string;
  from: string;
  to: string;
  amount: string;
  payType: string;
  kimaTxID: string;
  succeed: string;
}

export interface MsgObservationVoteResponse {
  code: string;
  msg: string;
}

export interface MsgUpdateBalance {
  creator: string;
  chainId: string;
  balance: string;
  decimal: string;
}

export interface MsgUpdateBalanceResponse {
  code: string;
  msg: string;
}

export interface MsgKeysignVote {
  creator: string;
  txHash: string;
  pubKey: string;
}

export interface MsgKeysignVoteResponse {
  code: string;
  msg: string;
}

export interface MsgUpdateGasFee {
  creator: string;
  chainId: string;
  fee: string;
}

export interface MsgUpdateGasFeeResponse {
  code: string;
  msg: string;
}

export interface MsgProvisionTransaction {
  creator: string;
  fromChain: string;
  fromAddress: string;
  symbol: string;
  tokenAddr: string;
  amount: string;
  options: string;
}

export interface MsgProvisionTransactionResponse {
  code: string;
  msg: string;
}

export interface MsgDrainTransaction {
  creator: string;
  fromChain: string;
  toChain: string;
  toAddress: string;
  nftAddr: string;
  amount: string;
  options: string;
}

export interface MsgDrainTransactionResponse {
  code: string;
  msg: string;
}

export interface MsgCancelTransaction {
  creator: string;
  transactionId: string;
}

export interface MsgCancelTransactionResponse {
  code: string;
  msg: string;
}

export interface MsgAddWhitelisted {
  creator: string;
  address: string;
}

export interface MsgAddWhitelistedResponse {
  code: string;
  msg: string;
}

export interface MsgSetAdmin {
  creator: string;
}

export interface MsgSetAdminResponse {
  code: string;
  msg: string;
}

export interface MsgAddPubkey {
  creator: string;
  pubkey: string;
}

export interface MsgAddPubkeyResponse {
  code: string;
  msg: string;
}

export interface MsgUpdateTssPubkey {
  creator: string;
  tssPubkey: string;
  ecdsa: string;
  eddsa: string;
  reserved: string;
}

export interface MsgUpdateTssPubkeyResponse {
  code: string;
  msg: string;
}

export interface MsgRemoveWhitelisted {
  creator: string;
  address: string;
}

export interface MsgRemoveWhitelistedResponse {
  code: string;
  msg: string;
}

export interface MsgClearTssInfo {
  creator: string;
}

export interface MsgClearTssInfoResponse {
  code: string;
  msg: string;
}

export interface MsgAddChain {
  creator: string;
  name: string;
  symbol: string;
  tokens: string[];
}

export interface MsgAddChainResponse {
  code: string;
  msg: string;
}

export interface MsgUpdateTssHash {
  creator: string;
  txId: string;
  tssPullHash: string;
}

export interface MsgUpdateTssHashResponse {
  code: string;
  msg: string;
}

export interface MsgUpdateChainStatus {
  creator: string;
  chainSymbol: string;
  disabled: boolean;
}

export interface MsgUpdateChainStatusResponse {
  code: string;
  msg: string;
}

export interface MsgAddToken {
  creator: string;
  chainSymbol: string;
  tokenSymbol: string;
}

export interface MsgAddTokenResponse {
  code: string;
  msg: string;
}

export interface MsgUpdateTssStatus {
  creator: string;
  status: string;
}

export interface MsgUpdateTssStatusResponse {}

export interface MsgSetTxHash {
  creator: string;
  txId: string;
  txHash: string;
}

export interface MsgSetTxHashResponse {
  code: string;
  msg: string;
}

export interface MsgSetTxProcess {
  creator: string;
  txId: string;
  timestamp: string;
  msgId: string;
}

export interface MsgSetTxProcessResponse {}

export interface MsgFinalizeTransaction {
  creator: string;
  txId: string;
  txHash: string;
  success: string;
  signedKey: string;
}

export interface MsgFinalizeTransactionResponse {
  code: string;
  msg: string;
}

const baseMsgRequestTransaction: object = {
  creator: "",
  originChain: "",
  originAddress: "",
  targetChain: "",
  targetAddress: "",
  symbol: "",
  amount: "",
  fee: "",
};

export const MsgRequestTransaction = {
  encode(
    message: MsgRequestTransaction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.originChain !== "") {
      writer.uint32(18).string(message.originChain);
    }
    if (message.originAddress !== "") {
      writer.uint32(26).string(message.originAddress);
    }
    if (message.targetChain !== "") {
      writer.uint32(34).string(message.targetChain);
    }
    if (message.targetAddress !== "") {
      writer.uint32(42).string(message.targetAddress);
    }
    if (message.symbol !== "") {
      writer.uint32(50).string(message.symbol);
    }
    if (message.amount !== "") {
      writer.uint32(58).string(message.amount);
    }
    if (message.fee !== "") {
      writer.uint32(66).string(message.fee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRequestTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRequestTransaction } as MsgRequestTransaction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.originChain = reader.string();
          break;
        case 3:
          message.originAddress = reader.string();
          break;
        case 4:
          message.targetChain = reader.string();
          break;
        case 5:
          message.targetAddress = reader.string();
          break;
        case 6:
          message.symbol = reader.string();
          break;
        case 7:
          message.amount = reader.string();
          break;
        case 8:
          message.fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestTransaction {
    const message = { ...baseMsgRequestTransaction } as MsgRequestTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.originChain !== undefined && object.originChain !== null) {
      message.originChain = String(object.originChain);
    } else {
      message.originChain = "";
    }
    if (object.originAddress !== undefined && object.originAddress !== null) {
      message.originAddress = String(object.originAddress);
    } else {
      message.originAddress = "";
    }
    if (object.targetChain !== undefined && object.targetChain !== null) {
      message.targetChain = String(object.targetChain);
    } else {
      message.targetChain = "";
    }
    if (object.targetAddress !== undefined && object.targetAddress !== null) {
      message.targetAddress = String(object.targetAddress);
    } else {
      message.targetAddress = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol);
    } else {
      message.symbol = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = String(object.fee);
    } else {
      message.fee = "";
    }
    return message;
  },

  toJSON(message: MsgRequestTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.originChain !== undefined &&
      (obj.originChain = message.originChain);
    message.originAddress !== undefined &&
      (obj.originAddress = message.originAddress);
    message.targetChain !== undefined &&
      (obj.targetChain = message.targetChain);
    message.targetAddress !== undefined &&
      (obj.targetAddress = message.targetAddress);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = message.amount);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRequestTransaction>
  ): MsgRequestTransaction {
    const message = { ...baseMsgRequestTransaction } as MsgRequestTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.originChain !== undefined && object.originChain !== null) {
      message.originChain = object.originChain;
    } else {
      message.originChain = "";
    }
    if (object.originAddress !== undefined && object.originAddress !== null) {
      message.originAddress = object.originAddress;
    } else {
      message.originAddress = "";
    }
    if (object.targetChain !== undefined && object.targetChain !== null) {
      message.targetChain = object.targetChain;
    } else {
      message.targetChain = "";
    }
    if (object.targetAddress !== undefined && object.targetAddress !== null) {
      message.targetAddress = object.targetAddress;
    } else {
      message.targetAddress = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    } else {
      message.symbol = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    } else {
      message.fee = "";
    }
    return message;
  },
};

const baseMsgRequestTransactionResponse: object = {
  code: "",
  msg: "",
  txId: "",
};

export const MsgRequestTransactionResponse = {
  encode(
    message: MsgRequestTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    if (message.txId !== "") {
      writer.uint32(26).string(message.txId);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRequestTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRequestTransactionResponse,
    } as MsgRequestTransactionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        case 3:
          message.txId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestTransactionResponse {
    const message = {
      ...baseMsgRequestTransactionResponse,
    } as MsgRequestTransactionResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    if (object.txId !== undefined && object.txId !== null) {
      message.txId = String(object.txId);
    } else {
      message.txId = "";
    }
    return message;
  },

  toJSON(message: MsgRequestTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    message.txId !== undefined && (obj.txId = message.txId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRequestTransactionResponse>
  ): MsgRequestTransactionResponse {
    const message = {
      ...baseMsgRequestTransactionResponse,
    } as MsgRequestTransactionResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    if (object.txId !== undefined && object.txId !== null) {
      message.txId = object.txId;
    } else {
      message.txId = "";
    }
    return message;
  },
};

const baseMsgApproveTransaction: object = {
  creator: "",
  txId: "",
  txTHash: "",
  success: "",
  signedKey: "",
};

export const MsgApproveTransaction = {
  encode(
    message: MsgApproveTransaction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.txId !== "") {
      writer.uint32(18).string(message.txId);
    }
    if (message.txTHash !== "") {
      writer.uint32(26).string(message.txTHash);
    }
    if (message.success !== "") {
      writer.uint32(34).string(message.success);
    }
    if (message.signedKey !== "") {
      writer.uint32(42).string(message.signedKey);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgApproveTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgApproveTransaction } as MsgApproveTransaction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.txId = reader.string();
          break;
        case 3:
          message.txTHash = reader.string();
          break;
        case 4:
          message.success = reader.string();
          break;
        case 5:
          message.signedKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgApproveTransaction {
    const message = { ...baseMsgApproveTransaction } as MsgApproveTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.txId !== undefined && object.txId !== null) {
      message.txId = String(object.txId);
    } else {
      message.txId = "";
    }
    if (object.txTHash !== undefined && object.txTHash !== null) {
      message.txTHash = String(object.txTHash);
    } else {
      message.txTHash = "";
    }
    if (object.success !== undefined && object.success !== null) {
      message.success = String(object.success);
    } else {
      message.success = "";
    }
    if (object.signedKey !== undefined && object.signedKey !== null) {
      message.signedKey = String(object.signedKey);
    } else {
      message.signedKey = "";
    }
    return message;
  },

  toJSON(message: MsgApproveTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txId !== undefined && (obj.txId = message.txId);
    message.txTHash !== undefined && (obj.txTHash = message.txTHash);
    message.success !== undefined && (obj.success = message.success);
    message.signedKey !== undefined && (obj.signedKey = message.signedKey);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgApproveTransaction>
  ): MsgApproveTransaction {
    const message = { ...baseMsgApproveTransaction } as MsgApproveTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.txId !== undefined && object.txId !== null) {
      message.txId = object.txId;
    } else {
      message.txId = "";
    }
    if (object.txTHash !== undefined && object.txTHash !== null) {
      message.txTHash = object.txTHash;
    } else {
      message.txTHash = "";
    }
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = "";
    }
    if (object.signedKey !== undefined && object.signedKey !== null) {
      message.signedKey = object.signedKey;
    } else {
      message.signedKey = "";
    }
    return message;
  },
};

const baseMsgApproveTransactionResponse: object = { code: "", msg: "" };

export const MsgApproveTransactionResponse = {
  encode(
    message: MsgApproveTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgApproveTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgApproveTransactionResponse,
    } as MsgApproveTransactionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgApproveTransactionResponse {
    const message = {
      ...baseMsgApproveTransactionResponse,
    } as MsgApproveTransactionResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: MsgApproveTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgApproveTransactionResponse>
  ): MsgApproveTransactionResponse {
    const message = {
      ...baseMsgApproveTransactionResponse,
    } as MsgApproveTransactionResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

const baseMsgObservationVote: object = {
  creator: "",
  txHash: "",
  chainId: "",
  from: "",
  to: "",
  amount: "",
  payType: "",
  kimaTxID: "",
  succeed: "",
};

export const MsgObservationVote = {
  encode(
    message: MsgObservationVote,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.txHash !== "") {
      writer.uint32(18).string(message.txHash);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.from !== "") {
      writer.uint32(34).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(42).string(message.to);
    }
    if (message.amount !== "") {
      writer.uint32(50).string(message.amount);
    }
    if (message.payType !== "") {
      writer.uint32(58).string(message.payType);
    }
    if (message.kimaTxID !== "") {
      writer.uint32(66).string(message.kimaTxID);
    }
    if (message.succeed !== "") {
      writer.uint32(74).string(message.succeed);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgObservationVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgObservationVote } as MsgObservationVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.txHash = reader.string();
          break;
        case 3:
          message.chainId = reader.string();
          break;
        case 4:
          message.from = reader.string();
          break;
        case 5:
          message.to = reader.string();
          break;
        case 6:
          message.amount = reader.string();
          break;
        case 7:
          message.payType = reader.string();
          break;
        case 8:
          message.kimaTxID = reader.string();
          break;
        case 9:
          message.succeed = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgObservationVote {
    const message = { ...baseMsgObservationVote } as MsgObservationVote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.txHash !== undefined && object.txHash !== null) {
      message.txHash = String(object.txHash);
    } else {
      message.txHash = "";
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from);
    } else {
      message.from = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.payType !== undefined && object.payType !== null) {
      message.payType = String(object.payType);
    } else {
      message.payType = "";
    }
    if (object.kimaTxID !== undefined && object.kimaTxID !== null) {
      message.kimaTxID = String(object.kimaTxID);
    } else {
      message.kimaTxID = "";
    }
    if (object.succeed !== undefined && object.succeed !== null) {
      message.succeed = String(object.succeed);
    } else {
      message.succeed = "";
    }
    return message;
  },

  toJSON(message: MsgObservationVote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount);
    message.payType !== undefined && (obj.payType = message.payType);
    message.kimaTxID !== undefined && (obj.kimaTxID = message.kimaTxID);
    message.succeed !== undefined && (obj.succeed = message.succeed);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgObservationVote>): MsgObservationVote {
    const message = { ...baseMsgObservationVote } as MsgObservationVote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.txHash !== undefined && object.txHash !== null) {
      message.txHash = object.txHash;
    } else {
      message.txHash = "";
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.payType !== undefined && object.payType !== null) {
      message.payType = object.payType;
    } else {
      message.payType = "";
    }
    if (object.kimaTxID !== undefined && object.kimaTxID !== null) {
      message.kimaTxID = object.kimaTxID;
    } else {
      message.kimaTxID = "";
    }
    if (object.succeed !== undefined && object.succeed !== null) {
      message.succeed = object.succeed;
    } else {
      message.succeed = "";
    }
    return message;
  },
};

const baseMsgObservationVoteResponse: object = { code: "", msg: "" };

export const MsgObservationVoteResponse = {
  encode(
    message: MsgObservationVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgObservationVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgObservationVoteResponse,
    } as MsgObservationVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgObservationVoteResponse {
    const message = {
      ...baseMsgObservationVoteResponse,
    } as MsgObservationVoteResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: MsgObservationVoteResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgObservationVoteResponse>
  ): MsgObservationVoteResponse {
    const message = {
      ...baseMsgObservationVoteResponse,
    } as MsgObservationVoteResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

const baseMsgUpdateBalance: object = {
  creator: "",
  chainId: "",
  balance: "",
  decimal: "",
};

export const MsgUpdateBalance = {
  encode(message: MsgUpdateBalance, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.balance !== "") {
      writer.uint32(26).string(message.balance);
    }
    if (message.decimal !== "") {
      writer.uint32(34).string(message.decimal);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBalance {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateBalance } as MsgUpdateBalance;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.balance = reader.string();
          break;
        case 4:
          message.decimal = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateBalance {
    const message = { ...baseMsgUpdateBalance } as MsgUpdateBalance;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = String(object.balance);
    } else {
      message.balance = "";
    }
    if (object.decimal !== undefined && object.decimal !== null) {
      message.decimal = String(object.decimal);
    } else {
      message.decimal = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateBalance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.balance !== undefined && (obj.balance = message.balance);
    message.decimal !== undefined && (obj.decimal = message.decimal);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateBalance>): MsgUpdateBalance {
    const message = { ...baseMsgUpdateBalance } as MsgUpdateBalance;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = "";
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    } else {
      message.balance = "";
    }
    if (object.decimal !== undefined && object.decimal !== null) {
      message.decimal = object.decimal;
    } else {
      message.decimal = "";
    }
    return message;
  },
};

const baseMsgUpdateBalanceResponse: object = { code: "", msg: "" };

export const MsgUpdateBalanceResponse = {
  encode(
    message: MsgUpdateBalanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateBalanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateBalanceResponse,
    } as MsgUpdateBalanceResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateBalanceResponse {
    const message = {
      ...baseMsgUpdateBalanceResponse,
    } as MsgUpdateBalanceResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateBalanceResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateBalanceResponse>
  ): MsgUpdateBalanceResponse {
    const message = {
      ...baseMsgUpdateBalanceResponse,
    } as MsgUpdateBalanceResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

const baseMsgKeysignVote: object = { creator: "", txHash: "", pubKey: "" };

export const MsgKeysignVote = {
  encode(message: MsgKeysignVote, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.txHash !== "") {
      writer.uint32(18).string(message.txHash);
    }
    if (message.pubKey !== "") {
      writer.uint32(26).string(message.pubKey);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgKeysignVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgKeysignVote } as MsgKeysignVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.txHash = reader.string();
          break;
        case 3:
          message.pubKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgKeysignVote {
    const message = { ...baseMsgKeysignVote } as MsgKeysignVote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.txHash !== undefined && object.txHash !== null) {
      message.txHash = String(object.txHash);
    } else {
      message.txHash = "";
    }
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = String(object.pubKey);
    } else {
      message.pubKey = "";
    }
    return message;
  },

  toJSON(message: MsgKeysignVote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgKeysignVote>): MsgKeysignVote {
    const message = { ...baseMsgKeysignVote } as MsgKeysignVote;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.txHash !== undefined && object.txHash !== null) {
      message.txHash = object.txHash;
    } else {
      message.txHash = "";
    }
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = object.pubKey;
    } else {
      message.pubKey = "";
    }
    return message;
  },
};

const baseMsgKeysignVoteResponse: object = { code: "", msg: "" };

export const MsgKeysignVoteResponse = {
  encode(
    message: MsgKeysignVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgKeysignVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgKeysignVoteResponse } as MsgKeysignVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgKeysignVoteResponse {
    const message = { ...baseMsgKeysignVoteResponse } as MsgKeysignVoteResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: MsgKeysignVoteResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgKeysignVoteResponse>
  ): MsgKeysignVoteResponse {
    const message = { ...baseMsgKeysignVoteResponse } as MsgKeysignVoteResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

const baseMsgUpdateGasFee: object = { creator: "", chainId: "", fee: "" };

export const MsgUpdateGasFee = {
  encode(message: MsgUpdateGasFee, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.fee !== "") {
      writer.uint32(26).string(message.fee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateGasFee {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateGasFee } as MsgUpdateGasFee;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGasFee {
    const message = { ...baseMsgUpdateGasFee } as MsgUpdateGasFee;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId);
    } else {
      message.chainId = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = String(object.fee);
    } else {
      message.fee = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateGasFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateGasFee>): MsgUpdateGasFee {
    const message = { ...baseMsgUpdateGasFee } as MsgUpdateGasFee;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId;
    } else {
      message.chainId = "";
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee;
    } else {
      message.fee = "";
    }
    return message;
  },
};

const baseMsgUpdateGasFeeResponse: object = { code: "", msg: "" };

export const MsgUpdateGasFeeResponse = {
  encode(
    message: MsgUpdateGasFeeResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateGasFeeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateGasFeeResponse,
    } as MsgUpdateGasFeeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGasFeeResponse {
    const message = {
      ...baseMsgUpdateGasFeeResponse,
    } as MsgUpdateGasFeeResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateGasFeeResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateGasFeeResponse>
  ): MsgUpdateGasFeeResponse {
    const message = {
      ...baseMsgUpdateGasFeeResponse,
    } as MsgUpdateGasFeeResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

const baseMsgProvisionTransaction: object = {
  creator: "",
  fromChain: "",
  fromAddress: "",
  symbol: "",
  tokenAddr: "",
  amount: "",
  options: "",
};

export const MsgProvisionTransaction = {
  encode(
    message: MsgProvisionTransaction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.fromChain !== "") {
      writer.uint32(18).string(message.fromChain);
    }
    if (message.fromAddress !== "") {
      writer.uint32(26).string(message.fromAddress);
    }
    if (message.symbol !== "") {
      writer.uint32(34).string(message.symbol);
    }
    if (message.tokenAddr !== "") {
      writer.uint32(42).string(message.tokenAddr);
    }
    if (message.amount !== "") {
      writer.uint32(50).string(message.amount);
    }
    if (message.options !== "") {
      writer.uint32(58).string(message.options);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgProvisionTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgProvisionTransaction,
    } as MsgProvisionTransaction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.fromChain = reader.string();
          break;
        case 3:
          message.fromAddress = reader.string();
          break;
        case 4:
          message.symbol = reader.string();
          break;
        case 5:
          message.tokenAddr = reader.string();
          break;
        case 6:
          message.amount = reader.string();
          break;
        case 7:
          message.options = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgProvisionTransaction {
    const message = {
      ...baseMsgProvisionTransaction,
    } as MsgProvisionTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.fromChain !== undefined && object.fromChain !== null) {
      message.fromChain = String(object.fromChain);
    } else {
      message.fromChain = "";
    }
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = String(object.fromAddress);
    } else {
      message.fromAddress = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol);
    } else {
      message.symbol = "";
    }
    if (object.tokenAddr !== undefined && object.tokenAddr !== null) {
      message.tokenAddr = String(object.tokenAddr);
    } else {
      message.tokenAddr = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = String(object.options);
    } else {
      message.options = "";
    }
    return message;
  },

  toJSON(message: MsgProvisionTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.fromChain !== undefined && (obj.fromChain = message.fromChain);
    message.fromAddress !== undefined &&
      (obj.fromAddress = message.fromAddress);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.tokenAddr !== undefined && (obj.tokenAddr = message.tokenAddr);
    message.amount !== undefined && (obj.amount = message.amount);
    message.options !== undefined && (obj.options = message.options);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgProvisionTransaction>
  ): MsgProvisionTransaction {
    const message = {
      ...baseMsgProvisionTransaction,
    } as MsgProvisionTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.fromChain !== undefined && object.fromChain !== null) {
      message.fromChain = object.fromChain;
    } else {
      message.fromChain = "";
    }
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = object.fromAddress;
    } else {
      message.fromAddress = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    } else {
      message.symbol = "";
    }
    if (object.tokenAddr !== undefined && object.tokenAddr !== null) {
      message.tokenAddr = object.tokenAddr;
    } else {
      message.tokenAddr = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = object.options;
    } else {
      message.options = "";
    }
    return message;
  },
};

const baseMsgProvisionTransactionResponse: object = { code: "", msg: "" };

export const MsgProvisionTransactionResponse = {
  encode(
    message: MsgProvisionTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgProvisionTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgProvisionTransactionResponse,
    } as MsgProvisionTransactionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgProvisionTransactionResponse {
    const message = {
      ...baseMsgProvisionTransactionResponse,
    } as MsgProvisionTransactionResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: MsgProvisionTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgProvisionTransactionResponse>
  ): MsgProvisionTransactionResponse {
    const message = {
      ...baseMsgProvisionTransactionResponse,
    } as MsgProvisionTransactionResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

const baseMsgDrainTransaction: object = {
  creator: "",
  fromChain: "",
  toChain: "",
  toAddress: "",
  nftAddr: "",
  amount: "",
  options: "",
};

export const MsgDrainTransaction = {
  encode(
    message: MsgDrainTransaction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.fromChain !== "") {
      writer.uint32(18).string(message.fromChain);
    }
    if (message.toChain !== "") {
      writer.uint32(26).string(message.toChain);
    }
    if (message.toAddress !== "") {
      writer.uint32(34).string(message.toAddress);
    }
    if (message.nftAddr !== "") {
      writer.uint32(42).string(message.nftAddr);
    }
    if (message.amount !== "") {
      writer.uint32(50).string(message.amount);
    }
    if (message.options !== "") {
      writer.uint32(58).string(message.options);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDrainTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDrainTransaction } as MsgDrainTransaction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.fromChain = reader.string();
          break;
        case 3:
          message.toChain = reader.string();
          break;
        case 4:
          message.toAddress = reader.string();
          break;
        case 5:
          message.nftAddr = reader.string();
          break;
        case 6:
          message.amount = reader.string();
          break;
        case 7:
          message.options = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDrainTransaction {
    const message = { ...baseMsgDrainTransaction } as MsgDrainTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.fromChain !== undefined && object.fromChain !== null) {
      message.fromChain = String(object.fromChain);
    } else {
      message.fromChain = "";
    }
    if (object.toChain !== undefined && object.toChain !== null) {
      message.toChain = String(object.toChain);
    } else {
      message.toChain = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = String(object.toAddress);
    } else {
      message.toAddress = "";
    }
    if (object.nftAddr !== undefined && object.nftAddr !== null) {
      message.nftAddr = String(object.nftAddr);
    } else {
      message.nftAddr = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount);
    } else {
      message.amount = "";
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = String(object.options);
    } else {
      message.options = "";
    }
    return message;
  },

  toJSON(message: MsgDrainTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.fromChain !== undefined && (obj.fromChain = message.fromChain);
    message.toChain !== undefined && (obj.toChain = message.toChain);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.nftAddr !== undefined && (obj.nftAddr = message.nftAddr);
    message.amount !== undefined && (obj.amount = message.amount);
    message.options !== undefined && (obj.options = message.options);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDrainTransaction>): MsgDrainTransaction {
    const message = { ...baseMsgDrainTransaction } as MsgDrainTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.fromChain !== undefined && object.fromChain !== null) {
      message.fromChain = object.fromChain;
    } else {
      message.fromChain = "";
    }
    if (object.toChain !== undefined && object.toChain !== null) {
      message.toChain = object.toChain;
    } else {
      message.toChain = "";
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = object.toAddress;
    } else {
      message.toAddress = "";
    }
    if (object.nftAddr !== undefined && object.nftAddr !== null) {
      message.nftAddr = object.nftAddr;
    } else {
      message.nftAddr = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount;
    } else {
      message.amount = "";
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = object.options;
    } else {
      message.options = "";
    }
    return message;
  },
};

const baseMsgDrainTransactionResponse: object = { code: "", msg: "" };

export const MsgDrainTransactionResponse = {
  encode(
    message: MsgDrainTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDrainTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDrainTransactionResponse,
    } as MsgDrainTransactionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDrainTransactionResponse {
    const message = {
      ...baseMsgDrainTransactionResponse,
    } as MsgDrainTransactionResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: MsgDrainTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDrainTransactionResponse>
  ): MsgDrainTransactionResponse {
    const message = {
      ...baseMsgDrainTransactionResponse,
    } as MsgDrainTransactionResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

const baseMsgCancelTransaction: object = { creator: "", transactionId: "" };

export const MsgCancelTransaction = {
  encode(
    message: MsgCancelTransaction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.transactionId !== "") {
      writer.uint32(18).string(message.transactionId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCancelTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCancelTransaction } as MsgCancelTransaction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.transactionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelTransaction {
    const message = { ...baseMsgCancelTransaction } as MsgCancelTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.transactionId !== undefined && object.transactionId !== null) {
      message.transactionId = String(object.transactionId);
    } else {
      message.transactionId = "";
    }
    return message;
  },

  toJSON(message: MsgCancelTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.transactionId !== undefined &&
      (obj.transactionId = message.transactionId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCancelTransaction>): MsgCancelTransaction {
    const message = { ...baseMsgCancelTransaction } as MsgCancelTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.transactionId !== undefined && object.transactionId !== null) {
      message.transactionId = object.transactionId;
    } else {
      message.transactionId = "";
    }
    return message;
  },
};

const baseMsgCancelTransactionResponse: object = { code: "", msg: "" };

export const MsgCancelTransactionResponse = {
  encode(
    message: MsgCancelTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCancelTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgCancelTransactionResponse,
    } as MsgCancelTransactionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelTransactionResponse {
    const message = {
      ...baseMsgCancelTransactionResponse,
    } as MsgCancelTransactionResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: MsgCancelTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgCancelTransactionResponse>
  ): MsgCancelTransactionResponse {
    const message = {
      ...baseMsgCancelTransactionResponse,
    } as MsgCancelTransactionResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

const baseMsgAddWhitelisted: object = { creator: "", address: "" };

export const MsgAddWhitelisted = {
  encode(message: MsgAddWhitelisted, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddWhitelisted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddWhitelisted } as MsgAddWhitelisted;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddWhitelisted {
    const message = { ...baseMsgAddWhitelisted } as MsgAddWhitelisted;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgAddWhitelisted): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddWhitelisted>): MsgAddWhitelisted {
    const message = { ...baseMsgAddWhitelisted } as MsgAddWhitelisted;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgAddWhitelistedResponse: object = { code: "", msg: "" };

export const MsgAddWhitelistedResponse = {
  encode(
    message: MsgAddWhitelistedResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAddWhitelistedResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAddWhitelistedResponse,
    } as MsgAddWhitelistedResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddWhitelistedResponse {
    const message = {
      ...baseMsgAddWhitelistedResponse,
    } as MsgAddWhitelistedResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: MsgAddWhitelistedResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAddWhitelistedResponse>
  ): MsgAddWhitelistedResponse {
    const message = {
      ...baseMsgAddWhitelistedResponse,
    } as MsgAddWhitelistedResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

const baseMsgSetAdmin: object = { creator: "" };

export const MsgSetAdmin = {
  encode(message: MsgSetAdmin, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetAdmin {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetAdmin } as MsgSetAdmin;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetAdmin {
    const message = { ...baseMsgSetAdmin } as MsgSetAdmin;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgSetAdmin): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetAdmin>): MsgSetAdmin {
    const message = { ...baseMsgSetAdmin } as MsgSetAdmin;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgSetAdminResponse: object = { code: "", msg: "" };

export const MsgSetAdminResponse = {
  encode(
    message: MsgSetAdminResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetAdminResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetAdminResponse } as MsgSetAdminResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetAdminResponse {
    const message = { ...baseMsgSetAdminResponse } as MsgSetAdminResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: MsgSetAdminResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetAdminResponse>): MsgSetAdminResponse {
    const message = { ...baseMsgSetAdminResponse } as MsgSetAdminResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

const baseMsgAddPubkey: object = { creator: "", pubkey: "" };

export const MsgAddPubkey = {
  encode(message: MsgAddPubkey, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pubkey !== "") {
      writer.uint32(18).string(message.pubkey);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddPubkey {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddPubkey } as MsgAddPubkey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pubkey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddPubkey {
    const message = { ...baseMsgAddPubkey } as MsgAddPubkey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = String(object.pubkey);
    } else {
      message.pubkey = "";
    }
    return message;
  },

  toJSON(message: MsgAddPubkey): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddPubkey>): MsgAddPubkey {
    const message = { ...baseMsgAddPubkey } as MsgAddPubkey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.pubkey !== undefined && object.pubkey !== null) {
      message.pubkey = object.pubkey;
    } else {
      message.pubkey = "";
    }
    return message;
  },
};

const baseMsgAddPubkeyResponse: object = { code: "", msg: "" };

export const MsgAddPubkeyResponse = {
  encode(
    message: MsgAddPubkeyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddPubkeyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddPubkeyResponse } as MsgAddPubkeyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddPubkeyResponse {
    const message = { ...baseMsgAddPubkeyResponse } as MsgAddPubkeyResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: MsgAddPubkeyResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddPubkeyResponse>): MsgAddPubkeyResponse {
    const message = { ...baseMsgAddPubkeyResponse } as MsgAddPubkeyResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

const baseMsgUpdateTssPubkey: object = {
  creator: "",
  tssPubkey: "",
  ecdsa: "",
  eddsa: "",
  reserved: "",
};

export const MsgUpdateTssPubkey = {
  encode(
    message: MsgUpdateTssPubkey,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tssPubkey !== "") {
      writer.uint32(18).string(message.tssPubkey);
    }
    if (message.ecdsa !== "") {
      writer.uint32(26).string(message.ecdsa);
    }
    if (message.eddsa !== "") {
      writer.uint32(34).string(message.eddsa);
    }
    if (message.reserved !== "") {
      writer.uint32(42).string(message.reserved);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTssPubkey {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateTssPubkey } as MsgUpdateTssPubkey;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.tssPubkey = reader.string();
          break;
        case 3:
          message.ecdsa = reader.string();
          break;
        case 4:
          message.eddsa = reader.string();
          break;
        case 5:
          message.reserved = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTssPubkey {
    const message = { ...baseMsgUpdateTssPubkey } as MsgUpdateTssPubkey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.tssPubkey !== undefined && object.tssPubkey !== null) {
      message.tssPubkey = String(object.tssPubkey);
    } else {
      message.tssPubkey = "";
    }
    if (object.ecdsa !== undefined && object.ecdsa !== null) {
      message.ecdsa = String(object.ecdsa);
    } else {
      message.ecdsa = "";
    }
    if (object.eddsa !== undefined && object.eddsa !== null) {
      message.eddsa = String(object.eddsa);
    } else {
      message.eddsa = "";
    }
    if (object.reserved !== undefined && object.reserved !== null) {
      message.reserved = String(object.reserved);
    } else {
      message.reserved = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateTssPubkey): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tssPubkey !== undefined && (obj.tssPubkey = message.tssPubkey);
    message.ecdsa !== undefined && (obj.ecdsa = message.ecdsa);
    message.eddsa !== undefined && (obj.eddsa = message.eddsa);
    message.reserved !== undefined && (obj.reserved = message.reserved);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateTssPubkey>): MsgUpdateTssPubkey {
    const message = { ...baseMsgUpdateTssPubkey } as MsgUpdateTssPubkey;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.tssPubkey !== undefined && object.tssPubkey !== null) {
      message.tssPubkey = object.tssPubkey;
    } else {
      message.tssPubkey = "";
    }
    if (object.ecdsa !== undefined && object.ecdsa !== null) {
      message.ecdsa = object.ecdsa;
    } else {
      message.ecdsa = "";
    }
    if (object.eddsa !== undefined && object.eddsa !== null) {
      message.eddsa = object.eddsa;
    } else {
      message.eddsa = "";
    }
    if (object.reserved !== undefined && object.reserved !== null) {
      message.reserved = object.reserved;
    } else {
      message.reserved = "";
    }
    return message;
  },
};

const baseMsgUpdateTssPubkeyResponse: object = { code: "", msg: "" };

export const MsgUpdateTssPubkeyResponse = {
  encode(
    message: MsgUpdateTssPubkeyResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateTssPubkeyResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateTssPubkeyResponse,
    } as MsgUpdateTssPubkeyResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTssPubkeyResponse {
    const message = {
      ...baseMsgUpdateTssPubkeyResponse,
    } as MsgUpdateTssPubkeyResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateTssPubkeyResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateTssPubkeyResponse>
  ): MsgUpdateTssPubkeyResponse {
    const message = {
      ...baseMsgUpdateTssPubkeyResponse,
    } as MsgUpdateTssPubkeyResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

const baseMsgRemoveWhitelisted: object = { creator: "", address: "" };

export const MsgRemoveWhitelisted = {
  encode(
    message: MsgRemoveWhitelisted,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRemoveWhitelisted {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRemoveWhitelisted } as MsgRemoveWhitelisted;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveWhitelisted {
    const message = { ...baseMsgRemoveWhitelisted } as MsgRemoveWhitelisted;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: MsgRemoveWhitelisted): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRemoveWhitelisted>): MsgRemoveWhitelisted {
    const message = { ...baseMsgRemoveWhitelisted } as MsgRemoveWhitelisted;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseMsgRemoveWhitelistedResponse: object = { code: "", msg: "" };

export const MsgRemoveWhitelistedResponse = {
  encode(
    message: MsgRemoveWhitelistedResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRemoveWhitelistedResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRemoveWhitelistedResponse,
    } as MsgRemoveWhitelistedResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveWhitelistedResponse {
    const message = {
      ...baseMsgRemoveWhitelistedResponse,
    } as MsgRemoveWhitelistedResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: MsgRemoveWhitelistedResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgRemoveWhitelistedResponse>
  ): MsgRemoveWhitelistedResponse {
    const message = {
      ...baseMsgRemoveWhitelistedResponse,
    } as MsgRemoveWhitelistedResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

const baseMsgClearTssInfo: object = { creator: "" };

export const MsgClearTssInfo = {
  encode(message: MsgClearTssInfo, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgClearTssInfo {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgClearTssInfo } as MsgClearTssInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClearTssInfo {
    const message = { ...baseMsgClearTssInfo } as MsgClearTssInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgClearTssInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgClearTssInfo>): MsgClearTssInfo {
    const message = { ...baseMsgClearTssInfo } as MsgClearTssInfo;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgClearTssInfoResponse: object = { code: "", msg: "" };

export const MsgClearTssInfoResponse = {
  encode(
    message: MsgClearTssInfoResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgClearTssInfoResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgClearTssInfoResponse,
    } as MsgClearTssInfoResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgClearTssInfoResponse {
    const message = {
      ...baseMsgClearTssInfoResponse,
    } as MsgClearTssInfoResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: MsgClearTssInfoResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgClearTssInfoResponse>
  ): MsgClearTssInfoResponse {
    const message = {
      ...baseMsgClearTssInfoResponse,
    } as MsgClearTssInfoResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

const baseMsgAddChain: object = {
  creator: "",
  name: "",
  symbol: "",
  tokens: "",
};

export const MsgAddChain = {
  encode(message: MsgAddChain, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    for (const v of message.tokens) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddChain {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddChain } as MsgAddChain;
    message.tokens = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.tokens.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddChain {
    const message = { ...baseMsgAddChain } as MsgAddChain;
    message.tokens = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol);
    } else {
      message.symbol = "";
    }
    if (object.tokens !== undefined && object.tokens !== null) {
      for (const e of object.tokens) {
        message.tokens.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: MsgAddChain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => e);
    } else {
      obj.tokens = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddChain>): MsgAddChain {
    const message = { ...baseMsgAddChain } as MsgAddChain;
    message.tokens = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    } else {
      message.symbol = "";
    }
    if (object.tokens !== undefined && object.tokens !== null) {
      for (const e of object.tokens) {
        message.tokens.push(e);
      }
    }
    return message;
  },
};

const baseMsgAddChainResponse: object = { code: "", msg: "" };

export const MsgAddChainResponse = {
  encode(
    message: MsgAddChainResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddChainResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddChainResponse } as MsgAddChainResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddChainResponse {
    const message = { ...baseMsgAddChainResponse } as MsgAddChainResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: MsgAddChainResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddChainResponse>): MsgAddChainResponse {
    const message = { ...baseMsgAddChainResponse } as MsgAddChainResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

const baseMsgUpdateTssHash: object = { creator: "", txId: "", tssPullHash: "" };

export const MsgUpdateTssHash = {
  encode(message: MsgUpdateTssHash, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.txId !== "") {
      writer.uint32(18).string(message.txId);
    }
    if (message.tssPullHash !== "") {
      writer.uint32(26).string(message.tssPullHash);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTssHash {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateTssHash } as MsgUpdateTssHash;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.txId = reader.string();
          break;
        case 3:
          message.tssPullHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTssHash {
    const message = { ...baseMsgUpdateTssHash } as MsgUpdateTssHash;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.txId !== undefined && object.txId !== null) {
      message.txId = String(object.txId);
    } else {
      message.txId = "";
    }
    if (object.tssPullHash !== undefined && object.tssPullHash !== null) {
      message.tssPullHash = String(object.tssPullHash);
    } else {
      message.tssPullHash = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateTssHash): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txId !== undefined && (obj.txId = message.txId);
    message.tssPullHash !== undefined &&
      (obj.tssPullHash = message.tssPullHash);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateTssHash>): MsgUpdateTssHash {
    const message = { ...baseMsgUpdateTssHash } as MsgUpdateTssHash;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.txId !== undefined && object.txId !== null) {
      message.txId = object.txId;
    } else {
      message.txId = "";
    }
    if (object.tssPullHash !== undefined && object.tssPullHash !== null) {
      message.tssPullHash = object.tssPullHash;
    } else {
      message.tssPullHash = "";
    }
    return message;
  },
};

const baseMsgUpdateTssHashResponse: object = { code: "", msg: "" };

export const MsgUpdateTssHashResponse = {
  encode(
    message: MsgUpdateTssHashResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateTssHashResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateTssHashResponse,
    } as MsgUpdateTssHashResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTssHashResponse {
    const message = {
      ...baseMsgUpdateTssHashResponse,
    } as MsgUpdateTssHashResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateTssHashResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateTssHashResponse>
  ): MsgUpdateTssHashResponse {
    const message = {
      ...baseMsgUpdateTssHashResponse,
    } as MsgUpdateTssHashResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

const baseMsgUpdateChainStatus: object = {
  creator: "",
  chainSymbol: "",
  disabled: false,
};

export const MsgUpdateChainStatus = {
  encode(
    message: MsgUpdateChainStatus,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainSymbol !== "") {
      writer.uint32(18).string(message.chainSymbol);
    }
    if (message.disabled === true) {
      writer.uint32(24).bool(message.disabled);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateChainStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateChainStatus } as MsgUpdateChainStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainSymbol = reader.string();
          break;
        case 3:
          message.disabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateChainStatus {
    const message = { ...baseMsgUpdateChainStatus } as MsgUpdateChainStatus;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.chainSymbol !== undefined && object.chainSymbol !== null) {
      message.chainSymbol = String(object.chainSymbol);
    } else {
      message.chainSymbol = "";
    }
    if (object.disabled !== undefined && object.disabled !== null) {
      message.disabled = Boolean(object.disabled);
    } else {
      message.disabled = false;
    }
    return message;
  },

  toJSON(message: MsgUpdateChainStatus): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainSymbol !== undefined &&
      (obj.chainSymbol = message.chainSymbol);
    message.disabled !== undefined && (obj.disabled = message.disabled);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateChainStatus>): MsgUpdateChainStatus {
    const message = { ...baseMsgUpdateChainStatus } as MsgUpdateChainStatus;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.chainSymbol !== undefined && object.chainSymbol !== null) {
      message.chainSymbol = object.chainSymbol;
    } else {
      message.chainSymbol = "";
    }
    if (object.disabled !== undefined && object.disabled !== null) {
      message.disabled = object.disabled;
    } else {
      message.disabled = false;
    }
    return message;
  },
};

const baseMsgUpdateChainStatusResponse: object = { code: "", msg: "" };

export const MsgUpdateChainStatusResponse = {
  encode(
    message: MsgUpdateChainStatusResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateChainStatusResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateChainStatusResponse,
    } as MsgUpdateChainStatusResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateChainStatusResponse {
    const message = {
      ...baseMsgUpdateChainStatusResponse,
    } as MsgUpdateChainStatusResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateChainStatusResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgUpdateChainStatusResponse>
  ): MsgUpdateChainStatusResponse {
    const message = {
      ...baseMsgUpdateChainStatusResponse,
    } as MsgUpdateChainStatusResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

const baseMsgAddToken: object = {
  creator: "",
  chainSymbol: "",
  tokenSymbol: "",
};

export const MsgAddToken = {
  encode(message: MsgAddToken, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainSymbol !== "") {
      writer.uint32(18).string(message.chainSymbol);
    }
    if (message.tokenSymbol !== "") {
      writer.uint32(26).string(message.tokenSymbol);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddToken {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddToken } as MsgAddToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainSymbol = reader.string();
          break;
        case 3:
          message.tokenSymbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddToken {
    const message = { ...baseMsgAddToken } as MsgAddToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.chainSymbol !== undefined && object.chainSymbol !== null) {
      message.chainSymbol = String(object.chainSymbol);
    } else {
      message.chainSymbol = "";
    }
    if (object.tokenSymbol !== undefined && object.tokenSymbol !== null) {
      message.tokenSymbol = String(object.tokenSymbol);
    } else {
      message.tokenSymbol = "";
    }
    return message;
  },

  toJSON(message: MsgAddToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainSymbol !== undefined &&
      (obj.chainSymbol = message.chainSymbol);
    message.tokenSymbol !== undefined &&
      (obj.tokenSymbol = message.tokenSymbol);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddToken>): MsgAddToken {
    const message = { ...baseMsgAddToken } as MsgAddToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.chainSymbol !== undefined && object.chainSymbol !== null) {
      message.chainSymbol = object.chainSymbol;
    } else {
      message.chainSymbol = "";
    }
    if (object.tokenSymbol !== undefined && object.tokenSymbol !== null) {
      message.tokenSymbol = object.tokenSymbol;
    } else {
      message.tokenSymbol = "";
    }
    return message;
  },
};

const baseMsgAddTokenResponse: object = { code: "", msg: "" };

export const MsgAddTokenResponse = {
  encode(
    message: MsgAddTokenResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAddTokenResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgAddTokenResponse } as MsgAddTokenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddTokenResponse {
    const message = { ...baseMsgAddTokenResponse } as MsgAddTokenResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: MsgAddTokenResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgAddTokenResponse>): MsgAddTokenResponse {
    const message = { ...baseMsgAddTokenResponse } as MsgAddTokenResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

const baseMsgUpdateTssStatus: object = { creator: "", status: "" };

export const MsgUpdateTssStatus = {
  encode(
    message: MsgUpdateTssStatus,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateTssStatus {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateTssStatus } as MsgUpdateTssStatus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTssStatus {
    const message = { ...baseMsgUpdateTssStatus } as MsgUpdateTssStatus;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = String(object.status);
    } else {
      message.status = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateTssStatus): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateTssStatus>): MsgUpdateTssStatus {
    const message = { ...baseMsgUpdateTssStatus } as MsgUpdateTssStatus;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.status !== undefined && object.status !== null) {
      message.status = object.status;
    } else {
      message.status = "";
    }
    return message;
  },
};

const baseMsgUpdateTssStatusResponse: object = {};

export const MsgUpdateTssStatusResponse = {
  encode(
    _: MsgUpdateTssStatusResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateTssStatusResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgUpdateTssStatusResponse,
    } as MsgUpdateTssStatusResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateTssStatusResponse {
    const message = {
      ...baseMsgUpdateTssStatusResponse,
    } as MsgUpdateTssStatusResponse;
    return message;
  },

  toJSON(_: MsgUpdateTssStatusResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgUpdateTssStatusResponse>
  ): MsgUpdateTssStatusResponse {
    const message = {
      ...baseMsgUpdateTssStatusResponse,
    } as MsgUpdateTssStatusResponse;
    return message;
  },
};

const baseMsgSetTxHash: object = { creator: "", txId: "", txHash: "" };

export const MsgSetTxHash = {
  encode(message: MsgSetTxHash, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.txId !== "") {
      writer.uint32(18).string(message.txId);
    }
    if (message.txHash !== "") {
      writer.uint32(26).string(message.txHash);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetTxHash {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetTxHash } as MsgSetTxHash;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.txId = reader.string();
          break;
        case 3:
          message.txHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetTxHash {
    const message = { ...baseMsgSetTxHash } as MsgSetTxHash;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.txId !== undefined && object.txId !== null) {
      message.txId = String(object.txId);
    } else {
      message.txId = "";
    }
    if (object.txHash !== undefined && object.txHash !== null) {
      message.txHash = String(object.txHash);
    } else {
      message.txHash = "";
    }
    return message;
  },

  toJSON(message: MsgSetTxHash): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txId !== undefined && (obj.txId = message.txId);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetTxHash>): MsgSetTxHash {
    const message = { ...baseMsgSetTxHash } as MsgSetTxHash;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.txId !== undefined && object.txId !== null) {
      message.txId = object.txId;
    } else {
      message.txId = "";
    }
    if (object.txHash !== undefined && object.txHash !== null) {
      message.txHash = object.txHash;
    } else {
      message.txHash = "";
    }
    return message;
  },
};

const baseMsgSetTxHashResponse: object = { code: "", msg: "" };

export const MsgSetTxHashResponse = {
  encode(
    message: MsgSetTxHashResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetTxHashResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetTxHashResponse } as MsgSetTxHashResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetTxHashResponse {
    const message = { ...baseMsgSetTxHashResponse } as MsgSetTxHashResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: MsgSetTxHashResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetTxHashResponse>): MsgSetTxHashResponse {
    const message = { ...baseMsgSetTxHashResponse } as MsgSetTxHashResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

const baseMsgSetTxProcess: object = {
  creator: "",
  txId: "",
  timestamp: "",
  msgId: "",
};

export const MsgSetTxProcess = {
  encode(message: MsgSetTxProcess, writer: Writer = Writer.create()): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.txId !== "") {
      writer.uint32(18).string(message.txId);
    }
    if (message.timestamp !== "") {
      writer.uint32(26).string(message.timestamp);
    }
    if (message.msgId !== "") {
      writer.uint32(34).string(message.msgId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetTxProcess {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSetTxProcess } as MsgSetTxProcess;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.txId = reader.string();
          break;
        case 3:
          message.timestamp = reader.string();
          break;
        case 4:
          message.msgId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetTxProcess {
    const message = { ...baseMsgSetTxProcess } as MsgSetTxProcess;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.txId !== undefined && object.txId !== null) {
      message.txId = String(object.txId);
    } else {
      message.txId = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = String(object.timestamp);
    } else {
      message.timestamp = "";
    }
    if (object.msgId !== undefined && object.msgId !== null) {
      message.msgId = String(object.msgId);
    } else {
      message.msgId = "";
    }
    return message;
  },

  toJSON(message: MsgSetTxProcess): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txId !== undefined && (obj.txId = message.txId);
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.msgId !== undefined && (obj.msgId = message.msgId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSetTxProcess>): MsgSetTxProcess {
    const message = { ...baseMsgSetTxProcess } as MsgSetTxProcess;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.txId !== undefined && object.txId !== null) {
      message.txId = object.txId;
    } else {
      message.txId = "";
    }
    if (object.timestamp !== undefined && object.timestamp !== null) {
      message.timestamp = object.timestamp;
    } else {
      message.timestamp = "";
    }
    if (object.msgId !== undefined && object.msgId !== null) {
      message.msgId = object.msgId;
    } else {
      message.msgId = "";
    }
    return message;
  },
};

const baseMsgSetTxProcessResponse: object = {};

export const MsgSetTxProcessResponse = {
  encode(_: MsgSetTxProcessResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSetTxProcessResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgSetTxProcessResponse,
    } as MsgSetTxProcessResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSetTxProcessResponse {
    const message = {
      ...baseMsgSetTxProcessResponse,
    } as MsgSetTxProcessResponse;
    return message;
  },

  toJSON(_: MsgSetTxProcessResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgSetTxProcessResponse>
  ): MsgSetTxProcessResponse {
    const message = {
      ...baseMsgSetTxProcessResponse,
    } as MsgSetTxProcessResponse;
    return message;
  },
};

const baseMsgFinalizeTransaction: object = {
  creator: "",
  txId: "",
  txHash: "",
  success: "",
  signedKey: "",
};

export const MsgFinalizeTransaction = {
  encode(
    message: MsgFinalizeTransaction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.txId !== "") {
      writer.uint32(18).string(message.txId);
    }
    if (message.txHash !== "") {
      writer.uint32(26).string(message.txHash);
    }
    if (message.success !== "") {
      writer.uint32(34).string(message.success);
    }
    if (message.signedKey !== "") {
      writer.uint32(42).string(message.signedKey);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgFinalizeTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgFinalizeTransaction } as MsgFinalizeTransaction;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.txId = reader.string();
          break;
        case 3:
          message.txHash = reader.string();
          break;
        case 4:
          message.success = reader.string();
          break;
        case 5:
          message.signedKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFinalizeTransaction {
    const message = { ...baseMsgFinalizeTransaction } as MsgFinalizeTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.txId !== undefined && object.txId !== null) {
      message.txId = String(object.txId);
    } else {
      message.txId = "";
    }
    if (object.txHash !== undefined && object.txHash !== null) {
      message.txHash = String(object.txHash);
    } else {
      message.txHash = "";
    }
    if (object.success !== undefined && object.success !== null) {
      message.success = String(object.success);
    } else {
      message.success = "";
    }
    if (object.signedKey !== undefined && object.signedKey !== null) {
      message.signedKey = String(object.signedKey);
    } else {
      message.signedKey = "";
    }
    return message;
  },

  toJSON(message: MsgFinalizeTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txId !== undefined && (obj.txId = message.txId);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.success !== undefined && (obj.success = message.success);
    message.signedKey !== undefined && (obj.signedKey = message.signedKey);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgFinalizeTransaction>
  ): MsgFinalizeTransaction {
    const message = { ...baseMsgFinalizeTransaction } as MsgFinalizeTransaction;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.txId !== undefined && object.txId !== null) {
      message.txId = object.txId;
    } else {
      message.txId = "";
    }
    if (object.txHash !== undefined && object.txHash !== null) {
      message.txHash = object.txHash;
    } else {
      message.txHash = "";
    }
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success;
    } else {
      message.success = "";
    }
    if (object.signedKey !== undefined && object.signedKey !== null) {
      message.signedKey = object.signedKey;
    } else {
      message.signedKey = "";
    }
    return message;
  },
};

const baseMsgFinalizeTransactionResponse: object = { code: "", msg: "" };

export const MsgFinalizeTransactionResponse = {
  encode(
    message: MsgFinalizeTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgFinalizeTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgFinalizeTransactionResponse,
    } as MsgFinalizeTransactionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string();
          break;
        case 2:
          message.msg = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFinalizeTransactionResponse {
    const message = {
      ...baseMsgFinalizeTransactionResponse,
    } as MsgFinalizeTransactionResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code);
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg);
    } else {
      message.msg = "";
    }
    return message;
  },

  toJSON(message: MsgFinalizeTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgFinalizeTransactionResponse>
  ): MsgFinalizeTransactionResponse {
    const message = {
      ...baseMsgFinalizeTransactionResponse,
    } as MsgFinalizeTransactionResponse;
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code;
    } else {
      message.code = "";
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg;
    } else {
      message.msg = "";
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  RequestTransaction(
    request: MsgRequestTransaction
  ): Promise<MsgRequestTransactionResponse>;
  ApproveTransaction(
    request: MsgApproveTransaction
  ): Promise<MsgApproveTransactionResponse>;
  ObservationVote(
    request: MsgObservationVote
  ): Promise<MsgObservationVoteResponse>;
  UpdateBalance(request: MsgUpdateBalance): Promise<MsgUpdateBalanceResponse>;
  KeysignVote(request: MsgKeysignVote): Promise<MsgKeysignVoteResponse>;
  UpdateGasFee(request: MsgUpdateGasFee): Promise<MsgUpdateGasFeeResponse>;
  ProvisionTransaction(
    request: MsgProvisionTransaction
  ): Promise<MsgProvisionTransactionResponse>;
  DrainTransaction(
    request: MsgDrainTransaction
  ): Promise<MsgDrainTransactionResponse>;
  CancelTransaction(
    request: MsgCancelTransaction
  ): Promise<MsgCancelTransactionResponse>;
  AddWhitelisted(
    request: MsgAddWhitelisted
  ): Promise<MsgAddWhitelistedResponse>;
  SetAdmin(request: MsgSetAdmin): Promise<MsgSetAdminResponse>;
  AddPubkey(request: MsgAddPubkey): Promise<MsgAddPubkeyResponse>;
  UpdateTssPubkey(
    request: MsgUpdateTssPubkey
  ): Promise<MsgUpdateTssPubkeyResponse>;
  RemoveWhitelisted(
    request: MsgRemoveWhitelisted
  ): Promise<MsgRemoveWhitelistedResponse>;
  ClearTssInfo(request: MsgClearTssInfo): Promise<MsgClearTssInfoResponse>;
  AddChain(request: MsgAddChain): Promise<MsgAddChainResponse>;
  UpdateTssHash(request: MsgUpdateTssHash): Promise<MsgUpdateTssHashResponse>;
  UpdateChainStatus(
    request: MsgUpdateChainStatus
  ): Promise<MsgUpdateChainStatusResponse>;
  AddToken(request: MsgAddToken): Promise<MsgAddTokenResponse>;
  UpdateTssStatus(
    request: MsgUpdateTssStatus
  ): Promise<MsgUpdateTssStatusResponse>;
  SetTxHash(request: MsgSetTxHash): Promise<MsgSetTxHashResponse>;
  SetTxProcess(request: MsgSetTxProcess): Promise<MsgSetTxProcessResponse>;
  /** this line is used by starport scaffolding # proto/tx/rpc */
  FinalizeTransaction(
    request: MsgFinalizeTransaction
  ): Promise<MsgFinalizeTransactionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  RequestTransaction(
    request: MsgRequestTransaction
  ): Promise<MsgRequestTransactionResponse> {
    const data = MsgRequestTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "RequestTransaction",
      data
    );
    return promise.then((data) =>
      MsgRequestTransactionResponse.decode(new Reader(data))
    );
  }

  ApproveTransaction(
    request: MsgApproveTransaction
  ): Promise<MsgApproveTransactionResponse> {
    const data = MsgApproveTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "ApproveTransaction",
      data
    );
    return promise.then((data) =>
      MsgApproveTransactionResponse.decode(new Reader(data))
    );
  }

  ObservationVote(
    request: MsgObservationVote
  ): Promise<MsgObservationVoteResponse> {
    const data = MsgObservationVote.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "ObservationVote",
      data
    );
    return promise.then((data) =>
      MsgObservationVoteResponse.decode(new Reader(data))
    );
  }

  UpdateBalance(request: MsgUpdateBalance): Promise<MsgUpdateBalanceResponse> {
    const data = MsgUpdateBalance.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "UpdateBalance",
      data
    );
    return promise.then((data) =>
      MsgUpdateBalanceResponse.decode(new Reader(data))
    );
  }

  KeysignVote(request: MsgKeysignVote): Promise<MsgKeysignVoteResponse> {
    const data = MsgKeysignVote.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "KeysignVote",
      data
    );
    return promise.then((data) =>
      MsgKeysignVoteResponse.decode(new Reader(data))
    );
  }

  UpdateGasFee(request: MsgUpdateGasFee): Promise<MsgUpdateGasFeeResponse> {
    const data = MsgUpdateGasFee.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "UpdateGasFee",
      data
    );
    return promise.then((data) =>
      MsgUpdateGasFeeResponse.decode(new Reader(data))
    );
  }

  ProvisionTransaction(
    request: MsgProvisionTransaction
  ): Promise<MsgProvisionTransactionResponse> {
    const data = MsgProvisionTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "ProvisionTransaction",
      data
    );
    return promise.then((data) =>
      MsgProvisionTransactionResponse.decode(new Reader(data))
    );
  }

  DrainTransaction(
    request: MsgDrainTransaction
  ): Promise<MsgDrainTransactionResponse> {
    const data = MsgDrainTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "DrainTransaction",
      data
    );
    return promise.then((data) =>
      MsgDrainTransactionResponse.decode(new Reader(data))
    );
  }

  CancelTransaction(
    request: MsgCancelTransaction
  ): Promise<MsgCancelTransactionResponse> {
    const data = MsgCancelTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "CancelTransaction",
      data
    );
    return promise.then((data) =>
      MsgCancelTransactionResponse.decode(new Reader(data))
    );
  }

  AddWhitelisted(
    request: MsgAddWhitelisted
  ): Promise<MsgAddWhitelistedResponse> {
    const data = MsgAddWhitelisted.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "AddWhitelisted",
      data
    );
    return promise.then((data) =>
      MsgAddWhitelistedResponse.decode(new Reader(data))
    );
  }

  SetAdmin(request: MsgSetAdmin): Promise<MsgSetAdminResponse> {
    const data = MsgSetAdmin.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "SetAdmin",
      data
    );
    return promise.then((data) => MsgSetAdminResponse.decode(new Reader(data)));
  }

  AddPubkey(request: MsgAddPubkey): Promise<MsgAddPubkeyResponse> {
    const data = MsgAddPubkey.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "AddPubkey",
      data
    );
    return promise.then((data) =>
      MsgAddPubkeyResponse.decode(new Reader(data))
    );
  }

  UpdateTssPubkey(
    request: MsgUpdateTssPubkey
  ): Promise<MsgUpdateTssPubkeyResponse> {
    const data = MsgUpdateTssPubkey.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "UpdateTssPubkey",
      data
    );
    return promise.then((data) =>
      MsgUpdateTssPubkeyResponse.decode(new Reader(data))
    );
  }

  RemoveWhitelisted(
    request: MsgRemoveWhitelisted
  ): Promise<MsgRemoveWhitelistedResponse> {
    const data = MsgRemoveWhitelisted.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "RemoveWhitelisted",
      data
    );
    return promise.then((data) =>
      MsgRemoveWhitelistedResponse.decode(new Reader(data))
    );
  }

  ClearTssInfo(request: MsgClearTssInfo): Promise<MsgClearTssInfoResponse> {
    const data = MsgClearTssInfo.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "ClearTssInfo",
      data
    );
    return promise.then((data) =>
      MsgClearTssInfoResponse.decode(new Reader(data))
    );
  }

  AddChain(request: MsgAddChain): Promise<MsgAddChainResponse> {
    const data = MsgAddChain.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "AddChain",
      data
    );
    return promise.then((data) => MsgAddChainResponse.decode(new Reader(data)));
  }

  UpdateTssHash(request: MsgUpdateTssHash): Promise<MsgUpdateTssHashResponse> {
    const data = MsgUpdateTssHash.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "UpdateTssHash",
      data
    );
    return promise.then((data) =>
      MsgUpdateTssHashResponse.decode(new Reader(data))
    );
  }

  UpdateChainStatus(
    request: MsgUpdateChainStatus
  ): Promise<MsgUpdateChainStatusResponse> {
    const data = MsgUpdateChainStatus.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "UpdateChainStatus",
      data
    );
    return promise.then((data) =>
      MsgUpdateChainStatusResponse.decode(new Reader(data))
    );
  }

  AddToken(request: MsgAddToken): Promise<MsgAddTokenResponse> {
    const data = MsgAddToken.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "AddToken",
      data
    );
    return promise.then((data) => MsgAddTokenResponse.decode(new Reader(data)));
  }

  UpdateTssStatus(
    request: MsgUpdateTssStatus
  ): Promise<MsgUpdateTssStatusResponse> {
    const data = MsgUpdateTssStatus.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "UpdateTssStatus",
      data
    );
    return promise.then((data) =>
      MsgUpdateTssStatusResponse.decode(new Reader(data))
    );
  }

  SetTxHash(request: MsgSetTxHash): Promise<MsgSetTxHashResponse> {
    const data = MsgSetTxHash.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "SetTxHash",
      data
    );
    return promise.then((data) =>
      MsgSetTxHashResponse.decode(new Reader(data))
    );
  }

  SetTxProcess(request: MsgSetTxProcess): Promise<MsgSetTxProcessResponse> {
    const data = MsgSetTxProcess.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "SetTxProcess",
      data
    );
    return promise.then((data) =>
      MsgSetTxProcessResponse.decode(new Reader(data))
    );
  }

  FinalizeTransaction(
    request: MsgFinalizeTransaction
  ): Promise<MsgFinalizeTransactionResponse> {
    const data = MsgFinalizeTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "KimaFinance.kima.kima.Msg",
      "FinalizeTransaction",
      data
    );
    return promise.then((data) =>
      MsgFinalizeTransactionResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
