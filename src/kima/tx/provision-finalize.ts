import _m0 from "../../config/probuff.config";
import { DeepPartial, Exact, isSet, longToNumber } from "../../utils";

export interface MsgFinalizeProvisionTransaction {
  creator: string;
  txId: number;
  txHash: string;
  success: boolean;
  signedKey: string;
  errReason: string;
}

export interface MsgFinalizeProvisionTransactionResponse {
  code: string;
  msg: string;
}

function createBaseMsgFinalizeProvisionTransaction(): MsgFinalizeProvisionTransaction {
  return {
    creator: "",
    txId: 0,
    txHash: "",
    success: false,
    signedKey: "",
    errReason: "",
  };
}

export const MsgFinalizeProvisionTransaction = {
  encode(
    message: MsgFinalizeProvisionTransaction,
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
    if (message.success === true) {
      writer.uint32(32).bool(message.success);
    }
    if (message.signedKey !== "") {
      writer.uint32(42).string(message.signedKey);
    }
    if (message.errReason !== "") {
      writer.uint32(50).string(message.errReason);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgFinalizeProvisionTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFinalizeProvisionTransaction();
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
          message.success = reader.bool();
          break;
        case 5:
          message.signedKey = reader.string();
          break;
        case 6:
          message.errReason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFinalizeProvisionTransaction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      txId: isSet(object.txId) ? Number(object.txId) : 0,
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      success: isSet(object.success) ? Boolean(object.success) : false,
      signedKey: isSet(object.signedKey) ? String(object.signedKey) : "",
      errReason: isSet(object.errReason) ? String(object.errReason) : "",
    };
  },

  toJSON(message: MsgFinalizeProvisionTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txId !== undefined && (obj.txId = Math.round(message.txId));
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.success !== undefined && (obj.success = message.success);
    message.signedKey !== undefined && (obj.signedKey = message.signedKey);
    message.errReason !== undefined && (obj.errReason = message.errReason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFinalizeProvisionTransaction>, I>>(
    object: I
  ): MsgFinalizeProvisionTransaction {
    const message = createBaseMsgFinalizeProvisionTransaction();
    message.creator = object.creator ?? "";
    message.txId = object.txId ?? 0;
    message.txHash = object.txHash ?? "";
    message.success = object.success ?? false;
    message.signedKey = object.signedKey ?? "";
    message.errReason = object.errReason ?? "";
    return message;
  },
};

function createBaseMsgFinalizeProvisionTransactionResponse(): MsgFinalizeProvisionTransactionResponse {
  return { code: "", msg: "" };
}

export const MsgFinalizeProvisionTransactionResponse = {
  encode(
    message: MsgFinalizeProvisionTransactionResponse,
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
  ): MsgFinalizeProvisionTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFinalizeProvisionTransactionResponse();
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

  fromJSON(object: any): MsgFinalizeProvisionTransactionResponse {
    return {
      code: isSet(object.code) ? String(object.code) : "",
      msg: isSet(object.msg) ? String(object.msg) : "",
    };
  },

  toJSON(message: MsgFinalizeProvisionTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgFinalizeProvisionTransactionResponse>, I>
  >(object: I): MsgFinalizeProvisionTransactionResponse {
    const message = createBaseMsgFinalizeProvisionTransactionResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};
