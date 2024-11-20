import _m0 from "../../config/probuff.config";
import { base64FromBytes, bytesFromBase64, DeepPartial, Exact, isSet, longToNumber } from "../../utils";

export interface MsgRequestProvisionTransaction {
  creator: string;
  chain: string;
  fromAddress: string;
  symbol: string;
  amount: string;
  options: string;
  /** BTC transaction */
  htlcExpirationTimestamp: string;
  /** the txhash locking the funds in the HTLC */
  htlcCreationHash: string;
  /** the output index of the locked funds  in the HTLC creation transaction */
  htlcCreationVout: number;
  /** a version denoting which HTLC script version is being using for the HTLC transaction */
  htlcVersion: string;
  /** the (compressed) public key of the sender */
  senderPubKey: Uint8Array;
}

export interface MsgRequestProvisionTransactionResponse {
  code: string;
  msg: string;
  txId: number;
}

function createBaseMsgRequestProvisionTransaction(): MsgRequestProvisionTransaction {
  return {
    creator: "",
    chain: "",
    fromAddress: "",
    symbol: "",
    amount: "",
    options: "",
    htlcExpirationTimestamp: "",
    htlcCreationHash: "",
    htlcCreationVout: 0,
    htlcVersion: "",
    senderPubKey: new Uint8Array(),
  };
}

export const MsgRequestProvisionTransaction = {
  encode(
    message: MsgRequestProvisionTransaction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.fromAddress !== "") {
      writer.uint32(26).string(message.fromAddress);
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
    if (message.htlcExpirationTimestamp !== "") {
      writer.uint32(58).string(message.htlcExpirationTimestamp);
    }
    if (message.htlcCreationHash !== "") {
      writer.uint32(66).string(message.htlcCreationHash);
    }
    if (message.htlcCreationVout !== 0) {
      writer.uint32(72).uint32(message.htlcCreationVout);
    }
    if (message.htlcVersion !== "") {
      writer.uint32(82).string(message.htlcVersion);
    }
    if (message.senderPubKey.length !== 0) {
      writer.uint32(90).bytes(message.senderPubKey);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRequestProvisionTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestProvisionTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chain = reader.string();
          break;
        case 3:
          message.fromAddress = reader.string();
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
        case 7:
          message.htlcExpirationTimestamp = reader.string();
          break;
        case 8:
          message.htlcCreationHash = reader.string();
          break;
        case 9:
          message.htlcCreationVout = reader.uint32();
          break;
        case 10:
          message.htlcVersion = reader.string();
          break;
        case 11:
          message.senderPubKey = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestProvisionTransaction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chain: isSet(object.chain) ? String(object.chain) : "",
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      options: isSet(object.options) ? String(object.options) : "",
      htlcExpirationTimestamp: isSet(object.htlcExpirationTimestamp)
        ? String(object.htlcExpirationTimestamp)
        : "",
      htlcCreationHash: isSet(object.htlcCreationHash)
        ? String(object.htlcCreationHash)
        : "",
      htlcCreationVout: isSet(object.htlcCreationVout)
        ? Number(object.htlcCreationVout)
        : 0,
      htlcVersion: isSet(object.htlcVersion) ? String(object.htlcVersion) : "",
      senderPubKey: isSet(object.senderPubKey)
        ? bytesFromBase64(object.senderPubKey)
        : new Uint8Array(),
    };
  },

  toJSON(message: MsgRequestProvisionTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chain !== undefined && (obj.chain = message.chain);
    message.fromAddress !== undefined &&
      (obj.fromAddress = message.fromAddress);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = message.amount);
    message.options !== undefined && (obj.options = message.options);
    message.htlcExpirationTimestamp !== undefined &&
      (obj.htlcExpirationTimestamp = message.htlcExpirationTimestamp);
    message.htlcCreationHash !== undefined &&
      (obj.htlcCreationHash = message.htlcCreationHash);
    message.htlcCreationVout !== undefined &&
      (obj.htlcCreationVout = Math.round(message.htlcCreationVout));
    message.htlcVersion !== undefined &&
      (obj.htlcVersion = message.htlcVersion);
    message.senderPubKey !== undefined &&
      (obj.senderPubKey = base64FromBytes(
        message.senderPubKey !== undefined
          ? message.senderPubKey
          : new Uint8Array()
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestProvisionTransaction>, I>>(
    object: I
  ): MsgRequestProvisionTransaction {
    const message = createBaseMsgRequestProvisionTransaction();
    message.creator = object.creator ?? "";
    message.chain = object.chain ?? "";
    message.fromAddress = object.fromAddress ?? "";
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? "";
    message.options = object.options ?? "";
    message.htlcExpirationTimestamp = object.htlcExpirationTimestamp ?? "";
    message.htlcCreationHash = object.htlcCreationHash ?? "";
    message.htlcCreationVout = object.htlcCreationVout ?? 0;
    message.htlcVersion = object.htlcVersion ?? "";
    message.senderPubKey = object.senderPubKey ?? new Uint8Array();
    return message;
  },
};

function createBaseMsgRequestProvisionTransactionResponse(): MsgRequestProvisionTransactionResponse {
  return { code: "", msg: "", txId: 0 };
}

export const MsgRequestProvisionTransactionResponse = {
  encode(
    message: MsgRequestProvisionTransactionResponse,
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
  ): MsgRequestProvisionTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestProvisionTransactionResponse();
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

  fromJSON(object: any): MsgRequestProvisionTransactionResponse {
    return {
      code: isSet(object.code) ? String(object.code) : "",
      msg: isSet(object.msg) ? String(object.msg) : "",
      txId: isSet(object.txId) ? Number(object.txId) : 0,
    };
  },

  toJSON(message: MsgRequestProvisionTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    message.txId !== undefined && (obj.txId = Math.round(message.txId));
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgRequestProvisionTransactionResponse>, I>
  >(object: I): MsgRequestProvisionTransactionResponse {
    const message = createBaseMsgRequestProvisionTransactionResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    message.txId = object.txId ?? 0;
    return message;
  },
};
