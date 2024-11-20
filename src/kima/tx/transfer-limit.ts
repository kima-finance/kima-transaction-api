import _m0 from "../../config/probuff.config";
import { DeepPartial, Exact, isSet, longToNumber } from "../../utils";

export interface MsgUpdateTransferLimitParams {
  authority: string;
  maxBTC: string;
  maxUSDT: string;
}

export interface MsgUpdateTransferLimitParamsResponse {}

function createBaseMsgUpdateTransferLimitParams(): MsgUpdateTransferLimitParams {
  return { authority: "", maxBTC: "", maxUSDT: "" };
}

export const MsgUpdateTransferLimitParams = {
  encode(
    message: MsgUpdateTransferLimitParams,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.maxBTC !== "") {
      writer.uint32(18).string(message.maxBTC);
    }
    if (message.maxUSDT !== "") {
      writer.uint32(26).string(message.maxUSDT);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateTransferLimitParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTransferLimitParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.maxBTC = reader.string();
          break;
        case 3:
          message.maxUSDT = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTransferLimitParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      maxBTC: isSet(object.maxBTC) ? String(object.maxBTC) : "",
      maxUSDT: isSet(object.maxUSDT) ? String(object.maxUSDT) : "",
    };
  },

  toJSON(message: MsgUpdateTransferLimitParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.maxBTC !== undefined && (obj.maxBTC = message.maxBTC);
    message.maxUSDT !== undefined && (obj.maxUSDT = message.maxUSDT);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateTransferLimitParams>, I>>(
    object: I
  ): MsgUpdateTransferLimitParams {
    const message = createBaseMsgUpdateTransferLimitParams();
    message.authority = object.authority ?? "";
    message.maxBTC = object.maxBTC ?? "";
    message.maxUSDT = object.maxUSDT ?? "";
    return message;
  },
};

function createBaseMsgUpdateTransferLimitParamsResponse(): MsgUpdateTransferLimitParamsResponse {
  return {};
}

export const MsgUpdateTransferLimitParamsResponse = {
  encode(
    _: MsgUpdateTransferLimitParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateTransferLimitParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTransferLimitParamsResponse();
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

  fromJSON(_: any): MsgUpdateTransferLimitParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateTransferLimitParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgUpdateTransferLimitParamsResponse>, I>
  >(_: I): MsgUpdateTransferLimitParamsResponse {
    const message = createBaseMsgUpdateTransferLimitParamsResponse();
    return message;
  },
};
