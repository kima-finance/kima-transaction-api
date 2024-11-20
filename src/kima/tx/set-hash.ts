import _m0 from "../../config/probuff.config";
import { DeepPartial, Exact, isSet, longToNumber } from "../../utils";

export interface MsgSetTxHash {
  creator: string;
  txId: number;
  txHash: string;
  /** request_transaction, request_provision_transaction, request_drain_transaction */
  txType: string;
}

export interface MsgSetTxHashResponse {
  code: string;
  msg: string;
}

function createBaseMsgSetTxHash(): MsgSetTxHash {
  return { creator: "", txId: 0, txHash: "", txType: "" };
}

export const MsgSetTxHash = {
  encode(
    message: MsgSetTxHash,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.txId !== 0) {
      writer.uint32(16).uint64(message.txId);
    }
    if (message.txHash !== "") {
      writer.uint32(26).string(message.txHash);
    }
    if (message.txType !== "") {
      writer.uint32(34).string(message.txType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetTxHash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetTxHash();
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
          message.txHash = reader.string();
          break;
        case 4:
          message.txType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetTxHash {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      txId: isSet(object.txId) ? Number(object.txId) : 0,
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      txType: isSet(object.txType) ? String(object.txType) : "",
    };
  },

  toJSON(message: MsgSetTxHash): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txId !== undefined && (obj.txId = Math.round(message.txId));
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.txType !== undefined && (obj.txType = message.txType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetTxHash>, I>>(
    object: I
  ): MsgSetTxHash {
    const message = createBaseMsgSetTxHash();
    message.creator = object.creator ?? "";
    message.txId = object.txId ?? 0;
    message.txHash = object.txHash ?? "";
    message.txType = object.txType ?? "";
    return message;
  },
};

function createBaseMsgSetTxHashResponse(): MsgSetTxHashResponse {
  return { code: "", msg: "" };
}

export const MsgSetTxHashResponse = {
  encode(
    message: MsgSetTxHashResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgSetTxHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetTxHashResponse();
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
    return {
      code: isSet(object.code) ? String(object.code) : "",
      msg: isSet(object.msg) ? String(object.msg) : "",
    };
  },

  toJSON(message: MsgSetTxHashResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetTxHashResponse>, I>>(
    object: I
  ): MsgSetTxHashResponse {
    const message = createBaseMsgSetTxHashResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};
