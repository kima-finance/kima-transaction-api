import _m0 from "../../config/probuff.config";
import { DeepPartial, Exact, isSet, longToNumber } from "../../utils";

export interface MsgUpdateLiquidityProvisionParams {
  authority: string;
  maxBTC: string;
  maxUSDT: string;
}

export interface MsgUpdateLiquidityProvisionParamsResponse {}

function createBaseMsgUpdateLiquidityProvisionParams(): MsgUpdateLiquidityProvisionParams {
  return { authority: "", maxBTC: "", maxUSDT: "" };
}

export const MsgUpdateLiquidityProvisionParams = {
  encode(
    message: MsgUpdateLiquidityProvisionParams,
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
  ): MsgUpdateLiquidityProvisionParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateLiquidityProvisionParams();
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

  fromJSON(object: any): MsgUpdateLiquidityProvisionParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      maxBTC: isSet(object.maxBTC) ? String(object.maxBTC) : "",
      maxUSDT: isSet(object.maxUSDT) ? String(object.maxUSDT) : "",
    };
  },

  toJSON(message: MsgUpdateLiquidityProvisionParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.maxBTC !== undefined && (obj.maxBTC = message.maxBTC);
    message.maxUSDT !== undefined && (obj.maxUSDT = message.maxUSDT);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgUpdateLiquidityProvisionParams>, I>
  >(object: I): MsgUpdateLiquidityProvisionParams {
    const message = createBaseMsgUpdateLiquidityProvisionParams();
    message.authority = object.authority ?? "";
    message.maxBTC = object.maxBTC ?? "";
    message.maxUSDT = object.maxUSDT ?? "";
    return message;
  },
};

function createBaseMsgUpdateLiquidityProvisionParamsResponse(): MsgUpdateLiquidityProvisionParamsResponse {
  return {};
}

export const MsgUpdateLiquidityProvisionParamsResponse = {
  encode(
    _: MsgUpdateLiquidityProvisionParamsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateLiquidityProvisionParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateLiquidityProvisionParamsResponse();
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

  fromJSON(_: any): MsgUpdateLiquidityProvisionParamsResponse {
    return {};
  },

  toJSON(_: MsgUpdateLiquidityProvisionParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgUpdateLiquidityProvisionParamsResponse>, I>
  >(_: I): MsgUpdateLiquidityProvisionParamsResponse {
    const message = createBaseMsgUpdateLiquidityProvisionParamsResponse();
    return message;
  },
};
