import _m0 from "../../config/probuff.config";
import { DeepPartial, Exact, isSet, longToNumber } from "../../utils";

export interface MsgRequestHtlcLock {
  creator: string;
  fromAddress: string;
  senderPubkey: string;
  amount: string;
  htlcTimeout: string;
  txHash: string;
  htlcAddress: string;
}

export interface MsgRequestHtlcLockResponse {}

function createBaseMsgRequestHtlcLock(): MsgRequestHtlcLock {
  return {
    creator: "",
    fromAddress: "",
    senderPubkey: "",
    amount: "",
    htlcTimeout: "",
    txHash: "",
    htlcAddress: "",
  };
}

export const MsgRequestHtlcLock = {
  encode(
    message: MsgRequestHtlcLock,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.fromAddress !== "") {
      writer.uint32(18).string(message.fromAddress);
    }
    if (message.senderPubkey !== "") {
      writer.uint32(26).string(message.senderPubkey);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    if (message.htlcTimeout !== "") {
      writer.uint32(42).string(message.htlcTimeout);
    }
    if (message.txHash !== "") {
      writer.uint32(50).string(message.txHash);
    }
    if (message.htlcAddress !== "") {
      writer.uint32(58).string(message.htlcAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestHtlcLock {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestHtlcLock();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.fromAddress = reader.string();
          break;
        case 3:
          message.senderPubkey = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        case 5:
          message.htlcTimeout = reader.string();
          break;
        case 6:
          message.txHash = reader.string();
          break;
        case 7:
          message.htlcAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestHtlcLock {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      senderPubkey: isSet(object.senderPubkey)
        ? String(object.senderPubkey)
        : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      htlcTimeout: isSet(object.htlcTimeout) ? String(object.htlcTimeout) : "",
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      htlcAddress: isSet(object.htlcAddress) ? String(object.htlcAddress) : "",
    };
  },

  toJSON(message: MsgRequestHtlcLock): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.fromAddress !== undefined &&
      (obj.fromAddress = message.fromAddress);
    message.senderPubkey !== undefined &&
      (obj.senderPubkey = message.senderPubkey);
    message.amount !== undefined && (obj.amount = message.amount);
    message.htlcTimeout !== undefined &&
      (obj.htlcTimeout = message.htlcTimeout);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.htlcAddress !== undefined &&
      (obj.htlcAddress = message.htlcAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestHtlcLock>, I>>(
    object: I
  ): MsgRequestHtlcLock {
    const message = createBaseMsgRequestHtlcLock();
    message.creator = object.creator ?? "";
    message.fromAddress = object.fromAddress ?? "";
    message.senderPubkey = object.senderPubkey ?? "";
    message.amount = object.amount ?? "";
    message.htlcTimeout = object.htlcTimeout ?? "";
    message.txHash = object.txHash ?? "";
    message.htlcAddress = object.htlcAddress ?? "";
    return message;
  },
};

function createBaseMsgRequestHtlcLockResponse(): MsgRequestHtlcLockResponse {
  return {};
}

export const MsgRequestHtlcLockResponse = {
  encode(
    _: MsgRequestHtlcLockResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRequestHtlcLockResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestHtlcLockResponse();
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

  fromJSON(_: any): MsgRequestHtlcLockResponse {
    return {};
  },

  toJSON(_: MsgRequestHtlcLockResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestHtlcLockResponse>, I>>(
    _: I
  ): MsgRequestHtlcLockResponse {
    const message = createBaseMsgRequestHtlcLockResponse();
    return message;
  },
};
