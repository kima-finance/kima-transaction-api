import _m0 from "../../config/probuff.config";
import { DeepPartial, Exact, isSet, longToNumber } from "../../utils";

export interface MsgSetTxProcess {
  creator: string;
  txId: number;
  timestamp: number;
  msgId: string;
  /** request_transaction, request_provision_transaction, request_drain_transaction, withdraw_pool */
  txType: string;
}

export interface MsgSetTxProcessResponse {}

function createBaseMsgSetTxProcess(): MsgSetTxProcess {
  return { creator: "", txId: 0, timestamp: 0, msgId: "", txType: "" };
}

export const MsgSetTxProcess = {
  encode(
    message: MsgSetTxProcess,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.txId !== 0) {
      writer.uint32(16).uint64(message.txId);
    }
    if (message.timestamp !== 0) {
      writer.uint32(24).uint64(message.timestamp);
    }
    if (message.msgId !== "") {
      writer.uint32(34).string(message.msgId);
    }
    if (message.txType !== "") {
      writer.uint32(42).string(message.txType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetTxProcess {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetTxProcess();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.txId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.timestamp = longToNumber(reader.uint64() as Long);
          break;
        case 4:
          message.msgId = reader.string();
          break;
        case 5:
          message.txType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetTxProcess {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      txId: isSet(object.txId) ? Number(object.txId) : 0,
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
      msgId: isSet(object.msgId) ? String(object.msgId) : "",
      txType: isSet(object.txType) ? String(object.txType) : "",
    };
  },

  toJSON(message: MsgSetTxProcess): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txId !== undefined && (obj.txId = Math.round(message.txId));
    message.timestamp !== undefined &&
      (obj.timestamp = Math.round(message.timestamp));
    message.msgId !== undefined && (obj.msgId = message.msgId);
    message.txType !== undefined && (obj.txType = message.txType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetTxProcess>, I>>(
    object: I
  ): MsgSetTxProcess {
    const message = createBaseMsgSetTxProcess();
    message.creator = object.creator ?? "";
    message.txId = object.txId ?? 0;
    message.timestamp = object.timestamp ?? 0;
    message.msgId = object.msgId ?? "";
    message.txType = object.txType ?? "";
    return message;
  },
};

function createBaseMsgSetTxProcessResponse(): MsgSetTxProcessResponse {
  return {};
}

export const MsgSetTxProcessResponse = {
  encode(
    _: MsgSetTxProcessResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetTxProcessResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetTxProcessResponse();
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
    return {};
  },

  toJSON(_: MsgSetTxProcessResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetTxProcessResponse>, I>>(
    _: I
  ): MsgSetTxProcessResponse {
    const message = createBaseMsgSetTxProcessResponse();
    return message;
  },
};
