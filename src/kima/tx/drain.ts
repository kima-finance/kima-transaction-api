import _m0 from "../../config/probuff.config";
import { DeepPartial, Exact, isSet, longToNumber } from "../../utils";

export interface MsgRequestDrainTransaction {
  creator: string;
  toChain: string;
  toAddress: string;
  symbol: string;
  amount: string;
  options: string;
}

export interface MsgRequestDrainTransactionResponse {
  code: string;
  msg: string;
  txId: number;
}

function createBaseMsgRequestDrainTransaction(): MsgRequestDrainTransaction {
  return {
    creator: "",
    toChain: "",
    toAddress: "",
    symbol: "",
    amount: "",
    options: "",
  };
}

export const MsgRequestDrainTransaction = {
  encode(
    message: MsgRequestDrainTransaction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.toChain !== "") {
      writer.uint32(18).string(message.toChain);
    }
    if (message.toAddress !== "") {
      writer.uint32(26).string(message.toAddress);
    }
    if (message.symbol !== "") {
      writer.uint32(34).string(message.symbol);
    }
    if (message.amount !== "") {
      writer.uint32(42).string(message.amount);
    }
    if (message.options !== "") {
      writer.uint32(50).string(message.options);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRequestDrainTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestDrainTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.toChain = reader.string();
          break;
        case 3:
          message.toAddress = reader.string();
          break;
        case 4:
          message.symbol = reader.string();
          break;
        case 5:
          message.amount = reader.string();
          break;
        case 6:
          message.options = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestDrainTransaction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      toChain: isSet(object.toChain) ? String(object.toChain) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      options: isSet(object.options) ? String(object.options) : "",
    };
  },

  toJSON(message: MsgRequestDrainTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.toChain !== undefined && (obj.toChain = message.toChain);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = message.amount);
    message.options !== undefined && (obj.options = message.options);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestDrainTransaction>, I>>(
    object: I
  ): MsgRequestDrainTransaction {
    const message = createBaseMsgRequestDrainTransaction();
    message.creator = object.creator ?? "";
    message.toChain = object.toChain ?? "";
    message.toAddress = object.toAddress ?? "";
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? "";
    message.options = object.options ?? "";
    return message;
  },
};

function createBaseMsgRequestDrainTransactionResponse(): MsgRequestDrainTransactionResponse {
  return { code: "", msg: "", txId: 0 };
}

export const MsgRequestDrainTransactionResponse = {
  encode(
    message: MsgRequestDrainTransactionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    if (message.txId !== 0) {
      writer.uint32(24).uint64(message.txId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRequestDrainTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestDrainTransactionResponse();
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
          message.txId = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestDrainTransactionResponse {
    return {
      code: isSet(object.code) ? String(object.code) : "",
      msg: isSet(object.msg) ? String(object.msg) : "",
      txId: isSet(object.txId) ? Number(object.txId) : 0,
    };
  },

  toJSON(message: MsgRequestDrainTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    message.txId !== undefined && (obj.txId = Math.round(message.txId));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgRequestDrainTransactionResponse>, I>
  >(object: I): MsgRequestDrainTransactionResponse {
    const message = createBaseMsgRequestDrainTransactionResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    message.txId = object.txId ?? 0;
    return message;
  },
};
