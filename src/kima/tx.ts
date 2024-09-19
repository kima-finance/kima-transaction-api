/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kimablockchain.transaction";

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

export interface MsgRequestTransactionResponse {
  code: string;
  msg: string;
  txId: number;
}

export interface MsgFinalizeTransaction {
  creator: string;
  txId: number;
  txHash: string;
  success: boolean;
  signedKey: string;
  errReason: string;
}

export interface MsgFinalizeTransactionResponse {
  code: string;
  msg: string;
}

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

export interface MsgCancelTransaction {
  creator: string;
  transactionId: string;
}

export interface MsgCancelTransactionResponse {
  code: string;
  msg: string;
}

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

export interface MsgSetTxProcess {
  creator: string;
  txId: number;
  timestamp: number;
  msgId: string;
  /** request_transaction, request_provision_transaction, request_drain_transaction, withdraw_pool */
  txType: string;
}

export interface MsgSetTxProcessResponse {}

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

export interface MsgFinalizeDrainTransaction {
  creator: string;
  txId: number;
  txHash: string;
  success: boolean;
  signedKey: string;
  errReason: string;
}

export interface MsgFinalizeDrainTransactionResponse {
  code: string;
  msg: string;
}

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

export interface MsgHtlcReclaim {
  creator: string;
  txHash: string;
  senderAddress: string;
}

export interface MsgHtlcReclaimResponse {}

export interface MsgUpdateLiquidityProvisionParams {
  authority: string;
  maxBTC: string;
  maxUSDT: string;
}

export interface MsgUpdateLiquidityProvisionParamsResponse {}

export interface MsgUpdateTransferLimitParams {
  authority: string;
  maxBTC: string;
  maxUSDT: string;
}

export interface MsgUpdateTransferLimitParamsResponse {}

export interface MsgFinalizeWithdrawTransaction {
  creator: string;
  txId: number;
  txHash: string;
  success: boolean;
  signedKey: string;
  errReason: string;
}

export interface MsgFinalizeWithdrawTransactionResponse {
  code: string;
  msg: string;
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

function createBaseMsgRequestTransactionResponse(): MsgRequestTransactionResponse {
  return { code: "", msg: "", txId: 0 };
}

export const MsgRequestTransactionResponse = {
  encode(
    message: MsgRequestTransactionResponse,
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
  ): MsgRequestTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestTransactionResponse();
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

  fromJSON(object: any): MsgRequestTransactionResponse {
    return {
      code: isSet(object.code) ? String(object.code) : "",
      msg: isSet(object.msg) ? String(object.msg) : "",
      txId: isSet(object.txId) ? Number(object.txId) : 0,
    };
  },

  toJSON(message: MsgRequestTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    message.txId !== undefined && (obj.txId = Math.round(message.txId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestTransactionResponse>, I>>(
    object: I
  ): MsgRequestTransactionResponse {
    const message = createBaseMsgRequestTransactionResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    message.txId = object.txId ?? 0;
    return message;
  },
};

function createBaseMsgFinalizeTransaction(): MsgFinalizeTransaction {
  return {
    creator: "",
    txId: 0,
    txHash: "",
    success: false,
    signedKey: "",
    errReason: "",
  };
}

export const MsgFinalizeTransaction = {
  encode(
    message: MsgFinalizeTransaction,
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
  ): MsgFinalizeTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFinalizeTransaction();
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

  fromJSON(object: any): MsgFinalizeTransaction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      txId: isSet(object.txId) ? Number(object.txId) : 0,
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      success: isSet(object.success) ? Boolean(object.success) : false,
      signedKey: isSet(object.signedKey) ? String(object.signedKey) : "",
      errReason: isSet(object.errReason) ? String(object.errReason) : "",
    };
  },

  toJSON(message: MsgFinalizeTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txId !== undefined && (obj.txId = Math.round(message.txId));
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.success !== undefined && (obj.success = message.success);
    message.signedKey !== undefined && (obj.signedKey = message.signedKey);
    message.errReason !== undefined && (obj.errReason = message.errReason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFinalizeTransaction>, I>>(
    object: I
  ): MsgFinalizeTransaction {
    const message = createBaseMsgFinalizeTransaction();
    message.creator = object.creator ?? "";
    message.txId = object.txId ?? 0;
    message.txHash = object.txHash ?? "";
    message.success = object.success ?? false;
    message.signedKey = object.signedKey ?? "";
    message.errReason = object.errReason ?? "";
    return message;
  },
};

function createBaseMsgFinalizeTransactionResponse(): MsgFinalizeTransactionResponse {
  return { code: "", msg: "" };
}

export const MsgFinalizeTransactionResponse = {
  encode(
    message: MsgFinalizeTransactionResponse,
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
  ): MsgFinalizeTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFinalizeTransactionResponse();
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

  fromJSON(object: any): MsgFinalizeTransactionResponse {
    return {
      code: isSet(object.code) ? String(object.code) : "",
      msg: isSet(object.msg) ? String(object.msg) : "",
    };
  },

  toJSON(message: MsgFinalizeTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFinalizeTransactionResponse>, I>>(
    object: I
  ): MsgFinalizeTransactionResponse {
    const message = createBaseMsgFinalizeTransactionResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

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

function createBaseMsgCancelTransaction(): MsgCancelTransaction {
  return { creator: "", transactionId: "" };
}

export const MsgCancelTransaction = {
  encode(
    message: MsgCancelTransaction,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.transactionId !== "") {
      writer.uint32(18).string(message.transactionId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCancelTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.transactionId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCancelTransaction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      transactionId: isSet(object.transactionId)
        ? String(object.transactionId)
        : "",
    };
  },

  toJSON(message: MsgCancelTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.transactionId !== undefined &&
      (obj.transactionId = message.transactionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelTransaction>, I>>(
    object: I
  ): MsgCancelTransaction {
    const message = createBaseMsgCancelTransaction();
    message.creator = object.creator ?? "";
    message.transactionId = object.transactionId ?? "";
    return message;
  },
};

function createBaseMsgCancelTransactionResponse(): MsgCancelTransactionResponse {
  return { code: "", msg: "" };
}

export const MsgCancelTransactionResponse = {
  encode(
    message: MsgCancelTransactionResponse,
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
  ): MsgCancelTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCancelTransactionResponse();
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

  fromJSON(object: any): MsgCancelTransactionResponse {
    return {
      code: isSet(object.code) ? String(object.code) : "",
      msg: isSet(object.msg) ? String(object.msg) : "",
    };
  },

  toJSON(message: MsgCancelTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelTransactionResponse>, I>>(
    object: I
  ): MsgCancelTransactionResponse {
    const message = createBaseMsgCancelTransactionResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

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

function createBaseMsgFinalizeDrainTransaction(): MsgFinalizeDrainTransaction {
  return {
    creator: "",
    txId: 0,
    txHash: "",
    success: false,
    signedKey: "",
    errReason: "",
  };
}

export const MsgFinalizeDrainTransaction = {
  encode(
    message: MsgFinalizeDrainTransaction,
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
  ): MsgFinalizeDrainTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFinalizeDrainTransaction();
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

  fromJSON(object: any): MsgFinalizeDrainTransaction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      txId: isSet(object.txId) ? Number(object.txId) : 0,
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      success: isSet(object.success) ? Boolean(object.success) : false,
      signedKey: isSet(object.signedKey) ? String(object.signedKey) : "",
      errReason: isSet(object.errReason) ? String(object.errReason) : "",
    };
  },

  toJSON(message: MsgFinalizeDrainTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txId !== undefined && (obj.txId = Math.round(message.txId));
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.success !== undefined && (obj.success = message.success);
    message.signedKey !== undefined && (obj.signedKey = message.signedKey);
    message.errReason !== undefined && (obj.errReason = message.errReason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFinalizeDrainTransaction>, I>>(
    object: I
  ): MsgFinalizeDrainTransaction {
    const message = createBaseMsgFinalizeDrainTransaction();
    message.creator = object.creator ?? "";
    message.txId = object.txId ?? 0;
    message.txHash = object.txHash ?? "";
    message.success = object.success ?? false;
    message.signedKey = object.signedKey ?? "";
    message.errReason = object.errReason ?? "";
    return message;
  },
};

function createBaseMsgFinalizeDrainTransactionResponse(): MsgFinalizeDrainTransactionResponse {
  return { code: "", msg: "" };
}

export const MsgFinalizeDrainTransactionResponse = {
  encode(
    message: MsgFinalizeDrainTransactionResponse,
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
  ): MsgFinalizeDrainTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFinalizeDrainTransactionResponse();
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

  fromJSON(object: any): MsgFinalizeDrainTransactionResponse {
    return {
      code: isSet(object.code) ? String(object.code) : "",
      msg: isSet(object.msg) ? String(object.msg) : "",
    };
  },

  toJSON(message: MsgFinalizeDrainTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgFinalizeDrainTransactionResponse>, I>
  >(object: I): MsgFinalizeDrainTransactionResponse {
    const message = createBaseMsgFinalizeDrainTransactionResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

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

function createBaseMsgFinalizeWithdrawTransaction(): MsgFinalizeWithdrawTransaction {
  return {
    creator: "",
    txId: 0,
    txHash: "",
    success: false,
    signedKey: "",
    errReason: "",
  };
}

export const MsgFinalizeWithdrawTransaction = {
  encode(
    message: MsgFinalizeWithdrawTransaction,
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
  ): MsgFinalizeWithdrawTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFinalizeWithdrawTransaction();
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

  fromJSON(object: any): MsgFinalizeWithdrawTransaction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      txId: isSet(object.txId) ? Number(object.txId) : 0,
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      success: isSet(object.success) ? Boolean(object.success) : false,
      signedKey: isSet(object.signedKey) ? String(object.signedKey) : "",
      errReason: isSet(object.errReason) ? String(object.errReason) : "",
    };
  },

  toJSON(message: MsgFinalizeWithdrawTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txId !== undefined && (obj.txId = Math.round(message.txId));
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.success !== undefined && (obj.success = message.success);
    message.signedKey !== undefined && (obj.signedKey = message.signedKey);
    message.errReason !== undefined && (obj.errReason = message.errReason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFinalizeWithdrawTransaction>, I>>(
    object: I
  ): MsgFinalizeWithdrawTransaction {
    const message = createBaseMsgFinalizeWithdrawTransaction();
    message.creator = object.creator ?? "";
    message.txId = object.txId ?? 0;
    message.txHash = object.txHash ?? "";
    message.success = object.success ?? false;
    message.signedKey = object.signedKey ?? "";
    message.errReason = object.errReason ?? "";
    return message;
  },
};

function createBaseMsgFinalizeWithdrawTransactionResponse(): MsgFinalizeWithdrawTransactionResponse {
  return { code: "", msg: "" };
}

export const MsgFinalizeWithdrawTransactionResponse = {
  encode(
    message: MsgFinalizeWithdrawTransactionResponse,
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
  ): MsgFinalizeWithdrawTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFinalizeWithdrawTransactionResponse();
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

  fromJSON(object: any): MsgFinalizeWithdrawTransactionResponse {
    return {
      code: isSet(object.code) ? String(object.code) : "",
      msg: isSet(object.msg) ? String(object.msg) : "",
    };
  },

  toJSON(message: MsgFinalizeWithdrawTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<
    I extends Exact<DeepPartial<MsgFinalizeWithdrawTransactionResponse>, I>
  >(object: I): MsgFinalizeWithdrawTransactionResponse {
    const message = createBaseMsgFinalizeWithdrawTransactionResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  RequestTransaction(
    request: MsgRequestTransaction
  ): Promise<MsgRequestTransactionResponse>;
  FinalizeTransaction(
    request: MsgFinalizeTransaction
  ): Promise<MsgFinalizeTransactionResponse>;
  RequestProvisionTransaction(
    request: MsgRequestProvisionTransaction
  ): Promise<MsgRequestProvisionTransactionResponse>;
  CancelTransaction(
    request: MsgCancelTransaction
  ): Promise<MsgCancelTransactionResponse>;
  SetTxHash(request: MsgSetTxHash): Promise<MsgSetTxHashResponse>;
  SetTxProcess(request: MsgSetTxProcess): Promise<MsgSetTxProcessResponse>;
  FinalizeProvisionTransaction(
    request: MsgFinalizeProvisionTransaction
  ): Promise<MsgFinalizeProvisionTransactionResponse>;
  RequestDrainTransaction(
    request: MsgRequestDrainTransaction
  ): Promise<MsgRequestDrainTransactionResponse>;
  FinalizeDrainTransaction(
    request: MsgFinalizeDrainTransaction
  ): Promise<MsgFinalizeDrainTransactionResponse>;
  RequestHtlcLock(
    request: MsgRequestHtlcLock
  ): Promise<MsgRequestHtlcLockResponse>;
  HtlcReclaim(request: MsgHtlcReclaim): Promise<MsgHtlcReclaimResponse>;
  UpdateLiquidityProvisionParams(
    request: MsgUpdateLiquidityProvisionParams
  ): Promise<MsgUpdateLiquidityProvisionParamsResponse>;
  UpdateTransferLimitParams(
    request: MsgUpdateTransferLimitParams
  ): Promise<MsgUpdateTransferLimitParamsResponse>;
  FinalizeWithdrawTransaction(
    request: MsgFinalizeWithdrawTransaction
  ): Promise<MsgFinalizeWithdrawTransactionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RequestTransaction = this.RequestTransaction.bind(this);
    this.FinalizeTransaction = this.FinalizeTransaction.bind(this);
    this.RequestProvisionTransaction =
      this.RequestProvisionTransaction.bind(this);
    this.CancelTransaction = this.CancelTransaction.bind(this);
    this.SetTxHash = this.SetTxHash.bind(this);
    this.SetTxProcess = this.SetTxProcess.bind(this);
    this.FinalizeProvisionTransaction =
      this.FinalizeProvisionTransaction.bind(this);
    this.RequestDrainTransaction = this.RequestDrainTransaction.bind(this);
    this.FinalizeDrainTransaction = this.FinalizeDrainTransaction.bind(this);
    this.RequestHtlcLock = this.RequestHtlcLock.bind(this);
    this.HtlcReclaim = this.HtlcReclaim.bind(this);
    this.UpdateLiquidityProvisionParams =
      this.UpdateLiquidityProvisionParams.bind(this);
    this.UpdateTransferLimitParams = this.UpdateTransferLimitParams.bind(this);
    this.FinalizeWithdrawTransaction =
      this.FinalizeWithdrawTransaction.bind(this);
  }
  RequestTransaction(
    request: MsgRequestTransaction
  ): Promise<MsgRequestTransactionResponse> {
    const data = MsgRequestTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "RequestTransaction",
      data
    );
    return promise.then((data) =>
      MsgRequestTransactionResponse.decode(new _m0.Reader(data))
    );
  }

  FinalizeTransaction(
    request: MsgFinalizeTransaction
  ): Promise<MsgFinalizeTransactionResponse> {
    const data = MsgFinalizeTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "FinalizeTransaction",
      data
    );
    return promise.then((data) =>
      MsgFinalizeTransactionResponse.decode(new _m0.Reader(data))
    );
  }

  RequestProvisionTransaction(
    request: MsgRequestProvisionTransaction
  ): Promise<MsgRequestProvisionTransactionResponse> {
    const data = MsgRequestProvisionTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "RequestProvisionTransaction",
      data
    );
    return promise.then((data) =>
      MsgRequestProvisionTransactionResponse.decode(new _m0.Reader(data))
    );
  }

  CancelTransaction(
    request: MsgCancelTransaction
  ): Promise<MsgCancelTransactionResponse> {
    const data = MsgCancelTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "CancelTransaction",
      data
    );
    return promise.then((data) =>
      MsgCancelTransactionResponse.decode(new _m0.Reader(data))
    );
  }

  SetTxHash(request: MsgSetTxHash): Promise<MsgSetTxHashResponse> {
    const data = MsgSetTxHash.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "SetTxHash",
      data
    );
    return promise.then((data) =>
      MsgSetTxHashResponse.decode(new _m0.Reader(data))
    );
  }

  SetTxProcess(request: MsgSetTxProcess): Promise<MsgSetTxProcessResponse> {
    const data = MsgSetTxProcess.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "SetTxProcess",
      data
    );
    return promise.then((data) =>
      MsgSetTxProcessResponse.decode(new _m0.Reader(data))
    );
  }

  FinalizeProvisionTransaction(
    request: MsgFinalizeProvisionTransaction
  ): Promise<MsgFinalizeProvisionTransactionResponse> {
    const data = MsgFinalizeProvisionTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "FinalizeProvisionTransaction",
      data
    );
    return promise.then((data) =>
      MsgFinalizeProvisionTransactionResponse.decode(new _m0.Reader(data))
    );
  }

  RequestDrainTransaction(
    request: MsgRequestDrainTransaction
  ): Promise<MsgRequestDrainTransactionResponse> {
    const data = MsgRequestDrainTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "RequestDrainTransaction",
      data
    );
    return promise.then((data) =>
      MsgRequestDrainTransactionResponse.decode(new _m0.Reader(data))
    );
  }

  FinalizeDrainTransaction(
    request: MsgFinalizeDrainTransaction
  ): Promise<MsgFinalizeDrainTransactionResponse> {
    const data = MsgFinalizeDrainTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "FinalizeDrainTransaction",
      data
    );
    return promise.then((data) =>
      MsgFinalizeDrainTransactionResponse.decode(new _m0.Reader(data))
    );
  }

  RequestHtlcLock(
    request: MsgRequestHtlcLock
  ): Promise<MsgRequestHtlcLockResponse> {
    const data = MsgRequestHtlcLock.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "RequestHtlcLock",
      data
    );
    return promise.then((data) =>
      MsgRequestHtlcLockResponse.decode(new _m0.Reader(data))
    );
  }

  HtlcReclaim(request: MsgHtlcReclaim): Promise<MsgHtlcReclaimResponse> {
    const data = MsgHtlcReclaim.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "HtlcReclaim",
      data
    );
    return promise.then((data) =>
      MsgHtlcReclaimResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateLiquidityProvisionParams(
    request: MsgUpdateLiquidityProvisionParams
  ): Promise<MsgUpdateLiquidityProvisionParamsResponse> {
    const data = MsgUpdateLiquidityProvisionParams.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "UpdateLiquidityProvisionParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateLiquidityProvisionParamsResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateTransferLimitParams(
    request: MsgUpdateTransferLimitParams
  ): Promise<MsgUpdateTransferLimitParamsResponse> {
    const data = MsgUpdateTransferLimitParams.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "UpdateTransferLimitParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateTransferLimitParamsResponse.decode(new _m0.Reader(data))
    );
  }

  FinalizeWithdrawTransaction(
    request: MsgFinalizeWithdrawTransaction
  ): Promise<MsgFinalizeWithdrawTransactionResponse> {
    const data = MsgFinalizeWithdrawTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "FinalizeWithdrawTransaction",
      data
    );
    return promise.then((data) =>
      MsgFinalizeWithdrawTransactionResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
declare var global: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") {
    return globalThis;
  }
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw "Unable to locate global object";
})();

function bytesFromBase64(b64: string): Uint8Array {
  if (globalThis.Buffer) {
    return Uint8Array.from(globalThis.Buffer.from(b64, "base64"));
  } else {
    const bin = globalThis.atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
      arr[i] = bin.charCodeAt(i);
    }
    return arr;
  }
}

function base64FromBytes(arr: Uint8Array): string {
  if (globalThis.Buffer) {
    return globalThis.Buffer.from(arr).toString("base64");
  } else {
    const bin: string[] = [];
    arr.forEach((byte) => {
      bin.push(String.fromCharCode(byte));
    });
    return globalThis.btoa(bin.join(""));
  }
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & {
      [K in Exclude<keyof I, KeysOfUnion<P>>]: never;
    };

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
