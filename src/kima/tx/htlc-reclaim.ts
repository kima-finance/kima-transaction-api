import _m0 from "../../config/probuff.config";
import { DeepPartial, Exact, isSet, longToNumber } from "../../utils";

export interface MsgHtlcReclaim {
  creator: string;
  txHash: string;
  senderAddress: string;
}

export interface MsgHtlcReclaimResponse {}

function createBaseMsgHtlcReclaim(): MsgHtlcReclaim {
  return { creator: "", txHash: "", senderAddress: "" };
}

export const MsgHtlcReclaim = {
  encode(
    message: MsgHtlcReclaim,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.txHash !== "") {
      writer.uint32(18).string(message.txHash);
    }
    if (message.senderAddress !== "") {
      writer.uint32(26).string(message.senderAddress);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgHtlcReclaim {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHtlcReclaim();
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
          message.senderAddress = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgHtlcReclaim {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      senderAddress: isSet(object.senderAddress)
        ? String(object.senderAddress)
        : "",
    };
  },

  toJSON(message: MsgHtlcReclaim): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.senderAddress !== undefined &&
      (obj.senderAddress = message.senderAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgHtlcReclaim>, I>>(
    object: I
  ): MsgHtlcReclaim {
    const message = createBaseMsgHtlcReclaim();
    message.creator = object.creator ?? "";
    message.txHash = object.txHash ?? "";
    message.senderAddress = object.senderAddress ?? "";
    return message;
  },
};

function createBaseMsgHtlcReclaimResponse(): MsgHtlcReclaimResponse {
  return {};
}

export const MsgHtlcReclaimResponse = {
  encode(
    _: MsgHtlcReclaimResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgHtlcReclaimResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgHtlcReclaimResponse();
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

  fromJSON(_: any): MsgHtlcReclaimResponse {
    return {};
  },

  toJSON(_: MsgHtlcReclaimResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgHtlcReclaimResponse>, I>>(
    _: I
  ): MsgHtlcReclaimResponse {
    const message = createBaseMsgHtlcReclaimResponse();
    return message;
  },
};
