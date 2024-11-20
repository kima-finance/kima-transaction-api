import _m0 from "../../config/probuff.config";
import { base64FromBytes, bytesFromBase64, DeepPartial, Exact, isSet } from "../../utils";

export interface MsgRequestTransaction {
  creator: string;
  originChain: string;
  originAddress: string;
  targetChain: string;
  targetAddress: string;
  originSymbol: string;
  targetSymbol: string;
  amount: string;
  fee: string;
  /** the timestamp when the HTLC contract expires and the user can reclaim the funds locked there */
  htlcExpirationTimestamp: string;
  /** the txhash locking the funds in the HTLC */
  htlcCreationHash: string;
  /** the output index of the locked funds  in the HTLC creation transaction */
  htlcCreationVout: number;
  /** a version denoting which HTLC script version is being using for the HTLC transaction */
  htlcVersion: string;
  /** for bitcoin transaction this is the public key of the sender */
  senderPubKey: Uint8Array;
  /** additional data JSON object */
  options: string;
}

function createBaseMsgRequestTransaction(): MsgRequestTransaction {
  return {
    creator: "",
    originChain: "",
    originAddress: "",
    targetChain: "",
    targetAddress: "",
    originSymbol: "",
    targetSymbol: "",
    amount: "",
    fee: "",
    htlcExpirationTimestamp: "",
    htlcCreationHash: "",
    htlcCreationVout: 0,
    htlcVersion: "",
    senderPubKey: new Uint8Array(),
    options: "",
  };
}

export const MsgRequestTransaction = {
  encode(
    message: MsgRequestTransaction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    if (message.originSymbol !== "") {
      writer.uint32(50).string(message.originSymbol);
    }
    if (message.targetSymbol !== "") {
      writer.uint32(58).string(message.targetSymbol);
    }
    if (message.amount !== "") {
      writer.uint32(66).string(message.amount);
    }
    if (message.fee !== "") {
      writer.uint32(74).string(message.fee);
    }
    if (message.htlcExpirationTimestamp !== "") {
      writer.uint32(82).string(message.htlcExpirationTimestamp);
    }
    if (message.htlcCreationHash !== "") {
      writer.uint32(90).string(message.htlcCreationHash);
    }
    if (message.htlcCreationVout !== 0) {
      writer.uint32(96).uint32(message.htlcCreationVout);
    }
    if (message.htlcVersion !== "") {
      writer.uint32(106).string(message.htlcVersion);
    }
    if (message.senderPubKey.length !== 0) {
      writer.uint32(114).bytes(message.senderPubKey);
    }
    if (message.options !== "") {
      writer.uint32(122).string(message.options);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRequestTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestTransaction();
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
          message.originSymbol = reader.string();
          break;
        case 7:
          message.targetSymbol = reader.string();
          break;
        case 8:
          message.amount = reader.string();
          break;
        case 9:
          message.fee = reader.string();
          break;
        case 10:
          message.htlcExpirationTimestamp = reader.string();
          break;
        case 11:
          message.htlcCreationHash = reader.string();
          break;
        case 12:
          message.htlcCreationVout = reader.uint32();
          break;
        case 13:
          message.htlcVersion = reader.string();
          break;
        case 14:
          message.senderPubKey = reader.bytes();
          break;
        case 15:
          message.options = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestTransaction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      originChain: isSet(object.originChain) ? String(object.originChain) : "",
      originAddress: isSet(object.originAddress)
        ? String(object.originAddress)
        : "",
      targetChain: isSet(object.targetChain) ? String(object.targetChain) : "",
      targetAddress: isSet(object.targetAddress)
        ? String(object.targetAddress)
        : "",
      originSymbol: isSet(object.originSymbol)
        ? String(object.originSymbol)
        : "",
      targetSymbol: isSet(object.targetSymbol)
        ? String(object.targetSymbol)
        : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      fee: isSet(object.fee) ? String(object.fee) : "",
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
      options: isSet(object.options) ? String(object.options) : "",
    };
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
    message.originSymbol !== undefined &&
      (obj.originSymbol = message.originSymbol);
    message.targetSymbol !== undefined &&
      (obj.targetSymbol = message.targetSymbol);
    message.amount !== undefined && (obj.amount = message.amount);
    message.fee !== undefined && (obj.fee = message.fee);
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
    message.options !== undefined && (obj.options = message.options);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestTransaction>, I>>(
    object: I
  ): MsgRequestTransaction {
    const message = createBaseMsgRequestTransaction();
    message.creator = object.creator ?? "";
    message.originChain = object.originChain ?? "";
    message.originAddress = object.originAddress ?? "";
    message.targetChain = object.targetChain ?? "";
    message.targetAddress = object.targetAddress ?? "";
    message.originSymbol = object.originSymbol ?? "";
    message.targetSymbol = object.targetSymbol ?? "";
    message.amount = object.amount ?? "";
    message.fee = object.fee ?? "";
    message.htlcExpirationTimestamp = object.htlcExpirationTimestamp ?? "";
    message.htlcCreationHash = object.htlcCreationHash ?? "";
    message.htlcCreationVout = object.htlcCreationVout ?? 0;
    message.htlcVersion = object.htlcVersion ?? "";
    message.senderPubKey = object.senderPubKey ?? new Uint8Array();
    message.options = object.options ?? "";
    return message;
  },
};
