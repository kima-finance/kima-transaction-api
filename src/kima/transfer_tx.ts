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
  tssMsgId: string;
  txType: string;
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
  tssMsgId: string;
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
  handleId: number;
  /** request_transaction, request_provision_transaction, request_drain_transaction, withdraw_pool */
  txType: string;
  /** the fee id for the transaction */
  feeId: string;
  /** the origin gas fee of the transaction */
  originGasFee: string;
  /** the target gas fee of the transaction */
  targetGasFee: string;
  /** the kima processing fee of the transaction */
  kimaProcessingFee: string;
  /** the total fee of the transaction */
  totalFee: string;
  /** the pegged to of the transaction */
  peggedTo: string;
  /** the expiration of the transaction */
  expiration: number;
}

export interface MsgSetTxProcessResponse {
}

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
  tssMsgId: string;
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

export interface MsgRequestHtlcLockResponse {
}

export interface MsgHtlcReclaim {
  creator: string;
  txHash: string;
  senderAddress: string;
}

export interface MsgHtlcReclaimResponse {
}

export interface MsgUpdateLiquidityProvisionParams {
  authority: string;
  maxBTC: string;
  maxUSDT: string;
}

export interface MsgUpdateLiquidityProvisionParamsResponse {
}

export interface MsgUpdateTransferLimitParams {
  authority: string;
  maxBTC: string;
  maxUSDT: string;
}

export interface MsgUpdateTransferLimitParamsResponse {
}

export interface MsgSetFiatTransactionParams {
  authority: string;
  daca: string;
}

export interface MsgSetFiatTransactionParamsResponse {
}

export interface MsgFinalizeWithdrawTransaction {
  creator: string;
  txId: number;
  txHash: string;
  success: boolean;
  signedKey: string;
  errReason: string;
  tssMsgId: string;
}

export interface MsgFinalizeWithdrawTransactionResponse {
  code: string;
  msg: string;
}

export interface MsgConfirmTransaction {
  creator: string;
  transactionId: string;
  amount: string;
  currency: string;
  confirmed: boolean;
  failReason: string;
  timestamp: number;
}

export interface MsgConfirmTransactionResponse {
  code: string;
  msg: string;
}

export interface MsgUpdateTransactionStatus {
  creator: string;
  txId: string;
  newStatus: string;
  failReason: string;
}

export interface MsgUpdateTransactionStatusResponse {
  code: string;
  msg: string;
}

export interface MsgUpdateMaxConcurrentLimit {
  authority: string;
  maxLimit: number;
}

export interface MsgUpdateMaxConcurrentLimitResponse {
  code: string;
  msg: string;
}

export interface MsgRequestExternalTransaction {
  creator: string;
  originChain: string;
  originAddress: string;
  targetChain: string;
  targetAddress: string;
  originSymbol: string;
  targetSymbol: string;
  amount: string;
  fee: string;
  options: string;
}

export interface MsgRequestExternalTransactionResponse {
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
  encode(message: MsgRequestTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestTransaction {
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
      originAddress: isSet(object.originAddress) ? String(object.originAddress) : "",
      targetChain: isSet(object.targetChain) ? String(object.targetChain) : "",
      targetAddress: isSet(object.targetAddress) ? String(object.targetAddress) : "",
      originSymbol: isSet(object.originSymbol) ? String(object.originSymbol) : "",
      targetSymbol: isSet(object.targetSymbol) ? String(object.targetSymbol) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      fee: isSet(object.fee) ? String(object.fee) : "",
      htlcExpirationTimestamp: isSet(object.htlcExpirationTimestamp) ? String(object.htlcExpirationTimestamp) : "",
      htlcCreationHash: isSet(object.htlcCreationHash) ? String(object.htlcCreationHash) : "",
      htlcCreationVout: isSet(object.htlcCreationVout) ? Number(object.htlcCreationVout) : 0,
      htlcVersion: isSet(object.htlcVersion) ? String(object.htlcVersion) : "",
      senderPubKey: isSet(object.senderPubKey) ? bytesFromBase64(object.senderPubKey) : new Uint8Array(),
      options: isSet(object.options) ? String(object.options) : "",
    };
  },

  toJSON(message: MsgRequestTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.originChain !== undefined && (obj.originChain = message.originChain);
    message.originAddress !== undefined && (obj.originAddress = message.originAddress);
    message.targetChain !== undefined && (obj.targetChain = message.targetChain);
    message.targetAddress !== undefined && (obj.targetAddress = message.targetAddress);
    message.originSymbol !== undefined && (obj.originSymbol = message.originSymbol);
    message.targetSymbol !== undefined && (obj.targetSymbol = message.targetSymbol);
    message.amount !== undefined && (obj.amount = message.amount);
    message.fee !== undefined && (obj.fee = message.fee);
    message.htlcExpirationTimestamp !== undefined && (obj.htlcExpirationTimestamp = message.htlcExpirationTimestamp);
    message.htlcCreationHash !== undefined && (obj.htlcCreationHash = message.htlcCreationHash);
    message.htlcCreationVout !== undefined && (obj.htlcCreationVout = Math.round(message.htlcCreationVout));
    message.htlcVersion !== undefined && (obj.htlcVersion = message.htlcVersion);
    message.senderPubKey !== undefined
      && (obj.senderPubKey = base64FromBytes(
        message.senderPubKey !== undefined ? message.senderPubKey : new Uint8Array(),
      ));
    message.options !== undefined && (obj.options = message.options);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestTransaction>, I>>(object: I): MsgRequestTransaction {
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
  encode(message: MsgRequestTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestTransactionResponse {
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
    object: I,
  ): MsgRequestTransactionResponse {
    const message = createBaseMsgRequestTransactionResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    message.txId = object.txId ?? 0;
    return message;
  },
};

function createBaseMsgFinalizeTransaction(): MsgFinalizeTransaction {
  return { creator: "", txId: 0, txHash: "", success: false, signedKey: "", errReason: "", tssMsgId: "", txType: "" };
}

export const MsgFinalizeTransaction = {
  encode(message: MsgFinalizeTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.tssMsgId !== "") {
      writer.uint32(58).string(message.tssMsgId);
    }
    if (message.txType !== "") {
      writer.uint32(66).string(message.txType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFinalizeTransaction {
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
        case 7:
          message.tssMsgId = reader.string();
          break;
        case 8:
          message.txType = reader.string();
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
      tssMsgId: isSet(object.tssMsgId) ? String(object.tssMsgId) : "",
      txType: isSet(object.txType) ? String(object.txType) : "",
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
    message.tssMsgId !== undefined && (obj.tssMsgId = message.tssMsgId);
    message.txType !== undefined && (obj.txType = message.txType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFinalizeTransaction>, I>>(object: I): MsgFinalizeTransaction {
    const message = createBaseMsgFinalizeTransaction();
    message.creator = object.creator ?? "";
    message.txId = object.txId ?? 0;
    message.txHash = object.txHash ?? "";
    message.success = object.success ?? false;
    message.signedKey = object.signedKey ?? "";
    message.errReason = object.errReason ?? "";
    message.tssMsgId = object.tssMsgId ?? "";
    message.txType = object.txType ?? "";
    return message;
  },
};

function createBaseMsgFinalizeTransactionResponse(): MsgFinalizeTransactionResponse {
  return { code: "", msg: "" };
}

export const MsgFinalizeTransactionResponse = {
  encode(message: MsgFinalizeTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFinalizeTransactionResponse {
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
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgFinalizeTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFinalizeTransactionResponse>, I>>(
    object: I,
  ): MsgFinalizeTransactionResponse {
    const message = createBaseMsgFinalizeTransactionResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgFinalizeProvisionTransaction(): MsgFinalizeProvisionTransaction {
  return { creator: "", txId: 0, txHash: "", success: false, signedKey: "", errReason: "", tssMsgId: "" };
}

export const MsgFinalizeProvisionTransaction = {
  encode(message: MsgFinalizeProvisionTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.tssMsgId !== "") {
      writer.uint32(58).string(message.tssMsgId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFinalizeProvisionTransaction {
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
        case 7:
          message.tssMsgId = reader.string();
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
      tssMsgId: isSet(object.tssMsgId) ? String(object.tssMsgId) : "",
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
    message.tssMsgId !== undefined && (obj.tssMsgId = message.tssMsgId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFinalizeProvisionTransaction>, I>>(
    object: I,
  ): MsgFinalizeProvisionTransaction {
    const message = createBaseMsgFinalizeProvisionTransaction();
    message.creator = object.creator ?? "";
    message.txId = object.txId ?? 0;
    message.txHash = object.txHash ?? "";
    message.success = object.success ?? false;
    message.signedKey = object.signedKey ?? "";
    message.errReason = object.errReason ?? "";
    message.tssMsgId = object.tssMsgId ?? "";
    return message;
  },
};

function createBaseMsgFinalizeProvisionTransactionResponse(): MsgFinalizeProvisionTransactionResponse {
  return { code: "", msg: "" };
}

export const MsgFinalizeProvisionTransactionResponse = {
  encode(message: MsgFinalizeProvisionTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFinalizeProvisionTransactionResponse {
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
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgFinalizeProvisionTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFinalizeProvisionTransactionResponse>, I>>(
    object: I,
  ): MsgFinalizeProvisionTransactionResponse {
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
  encode(message: MsgRequestProvisionTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestProvisionTransaction {
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
      htlcExpirationTimestamp: isSet(object.htlcExpirationTimestamp) ? String(object.htlcExpirationTimestamp) : "",
      htlcCreationHash: isSet(object.htlcCreationHash) ? String(object.htlcCreationHash) : "",
      htlcCreationVout: isSet(object.htlcCreationVout) ? Number(object.htlcCreationVout) : 0,
      htlcVersion: isSet(object.htlcVersion) ? String(object.htlcVersion) : "",
      senderPubKey: isSet(object.senderPubKey) ? bytesFromBase64(object.senderPubKey) : new Uint8Array(),
    };
  },

  toJSON(message: MsgRequestProvisionTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chain !== undefined && (obj.chain = message.chain);
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = message.amount);
    message.options !== undefined && (obj.options = message.options);
    message.htlcExpirationTimestamp !== undefined && (obj.htlcExpirationTimestamp = message.htlcExpirationTimestamp);
    message.htlcCreationHash !== undefined && (obj.htlcCreationHash = message.htlcCreationHash);
    message.htlcCreationVout !== undefined && (obj.htlcCreationVout = Math.round(message.htlcCreationVout));
    message.htlcVersion !== undefined && (obj.htlcVersion = message.htlcVersion);
    message.senderPubKey !== undefined
      && (obj.senderPubKey = base64FromBytes(
        message.senderPubKey !== undefined ? message.senderPubKey : new Uint8Array(),
      ));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestProvisionTransaction>, I>>(
    object: I,
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
  encode(message: MsgRequestProvisionTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestProvisionTransactionResponse {
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

  fromPartial<I extends Exact<DeepPartial<MsgRequestProvisionTransactionResponse>, I>>(
    object: I,
  ): MsgRequestProvisionTransactionResponse {
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
  encode(message: MsgCancelTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.transactionId !== "") {
      writer.uint32(18).string(message.transactionId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelTransaction {
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
      transactionId: isSet(object.transactionId) ? String(object.transactionId) : "",
    };
  },

  toJSON(message: MsgCancelTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.transactionId !== undefined && (obj.transactionId = message.transactionId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelTransaction>, I>>(object: I): MsgCancelTransaction {
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
  encode(message: MsgCancelTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCancelTransactionResponse {
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
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgCancelTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCancelTransactionResponse>, I>>(object: I): MsgCancelTransactionResponse {
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
  encode(message: MsgSetTxHash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  fromPartial<I extends Exact<DeepPartial<MsgSetTxHash>, I>>(object: I): MsgSetTxHash {
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
  encode(message: MsgSetTxHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetTxHashResponse {
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
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgSetTxHashResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetTxHashResponse>, I>>(object: I): MsgSetTxHashResponse {
    const message = createBaseMsgSetTxHashResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgSetTxProcess(): MsgSetTxProcess {
  return {
    creator: "",
    txId: 0,
    timestamp: 0,
    msgId: "",
    handleId: 0,
    txType: "",
    feeId: "",
    originGasFee: "",
    targetGasFee: "",
    kimaProcessingFee: "",
    totalFee: "",
    peggedTo: "",
    expiration: 0,
  };
}

export const MsgSetTxProcess = {
  encode(message: MsgSetTxProcess, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.handleId !== 0) {
      writer.uint32(40).uint64(message.handleId);
    }
    if (message.txType !== "") {
      writer.uint32(50).string(message.txType);
    }
    if (message.feeId !== "") {
      writer.uint32(58).string(message.feeId);
    }
    if (message.originGasFee !== "") {
      writer.uint32(66).string(message.originGasFee);
    }
    if (message.targetGasFee !== "") {
      writer.uint32(74).string(message.targetGasFee);
    }
    if (message.kimaProcessingFee !== "") {
      writer.uint32(82).string(message.kimaProcessingFee);
    }
    if (message.totalFee !== "") {
      writer.uint32(90).string(message.totalFee);
    }
    if (message.peggedTo !== "") {
      writer.uint32(98).string(message.peggedTo);
    }
    if (message.expiration !== 0) {
      writer.uint32(104).int32(message.expiration);
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
          message.handleId = longToNumber(reader.uint64() as Long);
          break;
        case 6:
          message.txType = reader.string();
          break;
        case 7:
          message.feeId = reader.string();
          break;
        case 8:
          message.originGasFee = reader.string();
          break;
        case 9:
          message.targetGasFee = reader.string();
          break;
        case 10:
          message.kimaProcessingFee = reader.string();
          break;
        case 11:
          message.totalFee = reader.string();
          break;
        case 12:
          message.peggedTo = reader.string();
          break;
        case 13:
          message.expiration = reader.int32();
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
      handleId: isSet(object.handleId) ? Number(object.handleId) : 0,
      txType: isSet(object.txType) ? String(object.txType) : "",
      feeId: isSet(object.feeId) ? String(object.feeId) : "",
      originGasFee: isSet(object.originGasFee) ? String(object.originGasFee) : "",
      targetGasFee: isSet(object.targetGasFee) ? String(object.targetGasFee) : "",
      kimaProcessingFee: isSet(object.kimaProcessingFee) ? String(object.kimaProcessingFee) : "",
      totalFee: isSet(object.totalFee) ? String(object.totalFee) : "",
      peggedTo: isSet(object.peggedTo) ? String(object.peggedTo) : "",
      expiration: isSet(object.expiration) ? Number(object.expiration) : 0,
    };
  },

  toJSON(message: MsgSetTxProcess): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txId !== undefined && (obj.txId = Math.round(message.txId));
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    message.msgId !== undefined && (obj.msgId = message.msgId);
    message.handleId !== undefined && (obj.handleId = Math.round(message.handleId));
    message.txType !== undefined && (obj.txType = message.txType);
    message.feeId !== undefined && (obj.feeId = message.feeId);
    message.originGasFee !== undefined && (obj.originGasFee = message.originGasFee);
    message.targetGasFee !== undefined && (obj.targetGasFee = message.targetGasFee);
    message.kimaProcessingFee !== undefined && (obj.kimaProcessingFee = message.kimaProcessingFee);
    message.totalFee !== undefined && (obj.totalFee = message.totalFee);
    message.peggedTo !== undefined && (obj.peggedTo = message.peggedTo);
    message.expiration !== undefined && (obj.expiration = Math.round(message.expiration));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetTxProcess>, I>>(object: I): MsgSetTxProcess {
    const message = createBaseMsgSetTxProcess();
    message.creator = object.creator ?? "";
    message.txId = object.txId ?? 0;
    message.timestamp = object.timestamp ?? 0;
    message.msgId = object.msgId ?? "";
    message.handleId = object.handleId ?? 0;
    message.txType = object.txType ?? "";
    message.feeId = object.feeId ?? "";
    message.originGasFee = object.originGasFee ?? "";
    message.targetGasFee = object.targetGasFee ?? "";
    message.kimaProcessingFee = object.kimaProcessingFee ?? "";
    message.totalFee = object.totalFee ?? "";
    message.peggedTo = object.peggedTo ?? "";
    message.expiration = object.expiration ?? 0;
    return message;
  },
};

function createBaseMsgSetTxProcessResponse(): MsgSetTxProcessResponse {
  return {};
}

export const MsgSetTxProcessResponse = {
  encode(_: MsgSetTxProcessResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetTxProcessResponse {
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

  fromPartial<I extends Exact<DeepPartial<MsgSetTxProcessResponse>, I>>(_: I): MsgSetTxProcessResponse {
    const message = createBaseMsgSetTxProcessResponse();
    return message;
  },
};

function createBaseMsgRequestDrainTransaction(): MsgRequestDrainTransaction {
  return { creator: "", toChain: "", toAddress: "", symbol: "", amount: "", options: "" };
}

export const MsgRequestDrainTransaction = {
  encode(message: MsgRequestDrainTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestDrainTransaction {
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

  fromPartial<I extends Exact<DeepPartial<MsgRequestDrainTransaction>, I>>(object: I): MsgRequestDrainTransaction {
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
  encode(message: MsgRequestDrainTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestDrainTransactionResponse {
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

  fromPartial<I extends Exact<DeepPartial<MsgRequestDrainTransactionResponse>, I>>(
    object: I,
  ): MsgRequestDrainTransactionResponse {
    const message = createBaseMsgRequestDrainTransactionResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    message.txId = object.txId ?? 0;
    return message;
  },
};

function createBaseMsgFinalizeDrainTransaction(): MsgFinalizeDrainTransaction {
  return { creator: "", txId: 0, txHash: "", success: false, signedKey: "", errReason: "", tssMsgId: "" };
}

export const MsgFinalizeDrainTransaction = {
  encode(message: MsgFinalizeDrainTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.tssMsgId !== "") {
      writer.uint32(58).string(message.tssMsgId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFinalizeDrainTransaction {
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
        case 7:
          message.tssMsgId = reader.string();
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
      tssMsgId: isSet(object.tssMsgId) ? String(object.tssMsgId) : "",
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
    message.tssMsgId !== undefined && (obj.tssMsgId = message.tssMsgId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFinalizeDrainTransaction>, I>>(object: I): MsgFinalizeDrainTransaction {
    const message = createBaseMsgFinalizeDrainTransaction();
    message.creator = object.creator ?? "";
    message.txId = object.txId ?? 0;
    message.txHash = object.txHash ?? "";
    message.success = object.success ?? false;
    message.signedKey = object.signedKey ?? "";
    message.errReason = object.errReason ?? "";
    message.tssMsgId = object.tssMsgId ?? "";
    return message;
  },
};

function createBaseMsgFinalizeDrainTransactionResponse(): MsgFinalizeDrainTransactionResponse {
  return { code: "", msg: "" };
}

export const MsgFinalizeDrainTransactionResponse = {
  encode(message: MsgFinalizeDrainTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFinalizeDrainTransactionResponse {
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
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgFinalizeDrainTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFinalizeDrainTransactionResponse>, I>>(
    object: I,
  ): MsgFinalizeDrainTransactionResponse {
    const message = createBaseMsgFinalizeDrainTransactionResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgRequestHtlcLock(): MsgRequestHtlcLock {
  return { creator: "", fromAddress: "", senderPubkey: "", amount: "", htlcTimeout: "", txHash: "", htlcAddress: "" };
}

export const MsgRequestHtlcLock = {
  encode(message: MsgRequestHtlcLock, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      senderPubkey: isSet(object.senderPubkey) ? String(object.senderPubkey) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      htlcTimeout: isSet(object.htlcTimeout) ? String(object.htlcTimeout) : "",
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      htlcAddress: isSet(object.htlcAddress) ? String(object.htlcAddress) : "",
    };
  },

  toJSON(message: MsgRequestHtlcLock): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.senderPubkey !== undefined && (obj.senderPubkey = message.senderPubkey);
    message.amount !== undefined && (obj.amount = message.amount);
    message.htlcTimeout !== undefined && (obj.htlcTimeout = message.htlcTimeout);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.htlcAddress !== undefined && (obj.htlcAddress = message.htlcAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestHtlcLock>, I>>(object: I): MsgRequestHtlcLock {
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
  encode(_: MsgRequestHtlcLockResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestHtlcLockResponse {
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

  fromPartial<I extends Exact<DeepPartial<MsgRequestHtlcLockResponse>, I>>(_: I): MsgRequestHtlcLockResponse {
    const message = createBaseMsgRequestHtlcLockResponse();
    return message;
  },
};

function createBaseMsgHtlcReclaim(): MsgHtlcReclaim {
  return { creator: "", txHash: "", senderAddress: "" };
}

export const MsgHtlcReclaim = {
  encode(message: MsgHtlcReclaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      senderAddress: isSet(object.senderAddress) ? String(object.senderAddress) : "",
    };
  },

  toJSON(message: MsgHtlcReclaim): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.senderAddress !== undefined && (obj.senderAddress = message.senderAddress);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgHtlcReclaim>, I>>(object: I): MsgHtlcReclaim {
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
  encode(_: MsgHtlcReclaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgHtlcReclaimResponse {
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

  fromPartial<I extends Exact<DeepPartial<MsgHtlcReclaimResponse>, I>>(_: I): MsgHtlcReclaimResponse {
    const message = createBaseMsgHtlcReclaimResponse();
    return message;
  },
};

function createBaseMsgUpdateLiquidityProvisionParams(): MsgUpdateLiquidityProvisionParams {
  return { authority: "", maxBTC: "", maxUSDT: "" };
}

export const MsgUpdateLiquidityProvisionParams = {
  encode(message: MsgUpdateLiquidityProvisionParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateLiquidityProvisionParams {
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

  fromPartial<I extends Exact<DeepPartial<MsgUpdateLiquidityProvisionParams>, I>>(
    object: I,
  ): MsgUpdateLiquidityProvisionParams {
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
  encode(_: MsgUpdateLiquidityProvisionParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateLiquidityProvisionParamsResponse {
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

  fromPartial<I extends Exact<DeepPartial<MsgUpdateLiquidityProvisionParamsResponse>, I>>(
    _: I,
  ): MsgUpdateLiquidityProvisionParamsResponse {
    const message = createBaseMsgUpdateLiquidityProvisionParamsResponse();
    return message;
  },
};

function createBaseMsgUpdateTransferLimitParams(): MsgUpdateTransferLimitParams {
  return { authority: "", maxBTC: "", maxUSDT: "" };
}

export const MsgUpdateTransferLimitParams = {
  encode(message: MsgUpdateTransferLimitParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTransferLimitParams {
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

  fromPartial<I extends Exact<DeepPartial<MsgUpdateTransferLimitParams>, I>>(object: I): MsgUpdateTransferLimitParams {
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
  encode(_: MsgUpdateTransferLimitParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTransferLimitParamsResponse {
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

  fromPartial<I extends Exact<DeepPartial<MsgUpdateTransferLimitParamsResponse>, I>>(
    _: I,
  ): MsgUpdateTransferLimitParamsResponse {
    const message = createBaseMsgUpdateTransferLimitParamsResponse();
    return message;
  },
};

function createBaseMsgSetFiatTransactionParams(): MsgSetFiatTransactionParams {
  return { authority: "", daca: "" };
}

export const MsgSetFiatTransactionParams = {
  encode(message: MsgSetFiatTransactionParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.daca !== "") {
      writer.uint32(18).string(message.daca);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFiatTransactionParams {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFiatTransactionParams();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.daca = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetFiatTransactionParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      daca: isSet(object.daca) ? String(object.daca) : "",
    };
  },

  toJSON(message: MsgSetFiatTransactionParams): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.daca !== undefined && (obj.daca = message.daca);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetFiatTransactionParams>, I>>(object: I): MsgSetFiatTransactionParams {
    const message = createBaseMsgSetFiatTransactionParams();
    message.authority = object.authority ?? "";
    message.daca = object.daca ?? "";
    return message;
  },
};

function createBaseMsgSetFiatTransactionParamsResponse(): MsgSetFiatTransactionParamsResponse {
  return {};
}

export const MsgSetFiatTransactionParamsResponse = {
  encode(_: MsgSetFiatTransactionParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetFiatTransactionParamsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetFiatTransactionParamsResponse();
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

  fromJSON(_: any): MsgSetFiatTransactionParamsResponse {
    return {};
  },

  toJSON(_: MsgSetFiatTransactionParamsResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetFiatTransactionParamsResponse>, I>>(
    _: I,
  ): MsgSetFiatTransactionParamsResponse {
    const message = createBaseMsgSetFiatTransactionParamsResponse();
    return message;
  },
};

function createBaseMsgFinalizeWithdrawTransaction(): MsgFinalizeWithdrawTransaction {
  return { creator: "", txId: 0, txHash: "", success: false, signedKey: "", errReason: "", tssMsgId: "" };
}

export const MsgFinalizeWithdrawTransaction = {
  encode(message: MsgFinalizeWithdrawTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.tssMsgId !== "") {
      writer.uint32(58).string(message.tssMsgId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFinalizeWithdrawTransaction {
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
        case 7:
          message.tssMsgId = reader.string();
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
      tssMsgId: isSet(object.tssMsgId) ? String(object.tssMsgId) : "",
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
    message.tssMsgId !== undefined && (obj.tssMsgId = message.tssMsgId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFinalizeWithdrawTransaction>, I>>(
    object: I,
  ): MsgFinalizeWithdrawTransaction {
    const message = createBaseMsgFinalizeWithdrawTransaction();
    message.creator = object.creator ?? "";
    message.txId = object.txId ?? 0;
    message.txHash = object.txHash ?? "";
    message.success = object.success ?? false;
    message.signedKey = object.signedKey ?? "";
    message.errReason = object.errReason ?? "";
    message.tssMsgId = object.tssMsgId ?? "";
    return message;
  },
};

function createBaseMsgFinalizeWithdrawTransactionResponse(): MsgFinalizeWithdrawTransactionResponse {
  return { code: "", msg: "" };
}

export const MsgFinalizeWithdrawTransactionResponse = {
  encode(message: MsgFinalizeWithdrawTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFinalizeWithdrawTransactionResponse {
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
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgFinalizeWithdrawTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFinalizeWithdrawTransactionResponse>, I>>(
    object: I,
  ): MsgFinalizeWithdrawTransactionResponse {
    const message = createBaseMsgFinalizeWithdrawTransactionResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgConfirmTransaction(): MsgConfirmTransaction {
  return { creator: "", transactionId: "", amount: "", currency: "", confirmed: false, failReason: "", timestamp: 0 };
}

export const MsgConfirmTransaction = {
  encode(message: MsgConfirmTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.transactionId !== "") {
      writer.uint32(18).string(message.transactionId);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.currency !== "") {
      writer.uint32(34).string(message.currency);
    }
    if (message.confirmed === true) {
      writer.uint32(40).bool(message.confirmed);
    }
    if (message.failReason !== "") {
      writer.uint32(50).string(message.failReason);
    }
    if (message.timestamp !== 0) {
      writer.uint32(56).uint64(message.timestamp);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.transactionId = reader.string();
          break;
        case 3:
          message.amount = reader.string();
          break;
        case 4:
          message.currency = reader.string();
          break;
        case 5:
          message.confirmed = reader.bool();
          break;
        case 6:
          message.failReason = reader.string();
          break;
        case 7:
          message.timestamp = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgConfirmTransaction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      transactionId: isSet(object.transactionId) ? String(object.transactionId) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      currency: isSet(object.currency) ? String(object.currency) : "",
      confirmed: isSet(object.confirmed) ? Boolean(object.confirmed) : false,
      failReason: isSet(object.failReason) ? String(object.failReason) : "",
      timestamp: isSet(object.timestamp) ? Number(object.timestamp) : 0,
    };
  },

  toJSON(message: MsgConfirmTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.transactionId !== undefined && (obj.transactionId = message.transactionId);
    message.amount !== undefined && (obj.amount = message.amount);
    message.currency !== undefined && (obj.currency = message.currency);
    message.confirmed !== undefined && (obj.confirmed = message.confirmed);
    message.failReason !== undefined && (obj.failReason = message.failReason);
    message.timestamp !== undefined && (obj.timestamp = Math.round(message.timestamp));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConfirmTransaction>, I>>(object: I): MsgConfirmTransaction {
    const message = createBaseMsgConfirmTransaction();
    message.creator = object.creator ?? "";
    message.transactionId = object.transactionId ?? "";
    message.amount = object.amount ?? "";
    message.currency = object.currency ?? "";
    message.confirmed = object.confirmed ?? false;
    message.failReason = object.failReason ?? "";
    message.timestamp = object.timestamp ?? 0;
    return message;
  },
};

function createBaseMsgConfirmTransactionResponse(): MsgConfirmTransactionResponse {
  return { code: "", msg: "" };
}

export const MsgConfirmTransactionResponse = {
  encode(message: MsgConfirmTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgConfirmTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgConfirmTransactionResponse();
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

  fromJSON(object: any): MsgConfirmTransactionResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgConfirmTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgConfirmTransactionResponse>, I>>(
    object: I,
  ): MsgConfirmTransactionResponse {
    const message = createBaseMsgConfirmTransactionResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgUpdateTransactionStatus(): MsgUpdateTransactionStatus {
  return { creator: "", txId: "", newStatus: "", failReason: "" };
}

export const MsgUpdateTransactionStatus = {
  encode(message: MsgUpdateTransactionStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.txId !== "") {
      writer.uint32(18).string(message.txId);
    }
    if (message.newStatus !== "") {
      writer.uint32(26).string(message.newStatus);
    }
    if (message.failReason !== "") {
      writer.uint32(34).string(message.failReason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTransactionStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTransactionStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.txId = reader.string();
          break;
        case 3:
          message.newStatus = reader.string();
          break;
        case 4:
          message.failReason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTransactionStatus {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      txId: isSet(object.txId) ? String(object.txId) : "",
      newStatus: isSet(object.newStatus) ? String(object.newStatus) : "",
      failReason: isSet(object.failReason) ? String(object.failReason) : "",
    };
  },

  toJSON(message: MsgUpdateTransactionStatus): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txId !== undefined && (obj.txId = message.txId);
    message.newStatus !== undefined && (obj.newStatus = message.newStatus);
    message.failReason !== undefined && (obj.failReason = message.failReason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateTransactionStatus>, I>>(object: I): MsgUpdateTransactionStatus {
    const message = createBaseMsgUpdateTransactionStatus();
    message.creator = object.creator ?? "";
    message.txId = object.txId ?? "";
    message.newStatus = object.newStatus ?? "";
    message.failReason = object.failReason ?? "";
    return message;
  },
};

function createBaseMsgUpdateTransactionStatusResponse(): MsgUpdateTransactionStatusResponse {
  return { code: "", msg: "" };
}

export const MsgUpdateTransactionStatusResponse = {
  encode(message: MsgUpdateTransactionStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTransactionStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTransactionStatusResponse();
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

  fromJSON(object: any): MsgUpdateTransactionStatusResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgUpdateTransactionStatusResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateTransactionStatusResponse>, I>>(
    object: I,
  ): MsgUpdateTransactionStatusResponse {
    const message = createBaseMsgUpdateTransactionStatusResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgUpdateMaxConcurrentLimit(): MsgUpdateMaxConcurrentLimit {
  return { authority: "", maxLimit: 0 };
}

export const MsgUpdateMaxConcurrentLimit = {
  encode(message: MsgUpdateMaxConcurrentLimit, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.maxLimit !== 0) {
      writer.uint32(16).int64(message.maxLimit);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMaxConcurrentLimit {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMaxConcurrentLimit();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.authority = reader.string();
          break;
        case 2:
          message.maxLimit = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateMaxConcurrentLimit {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      maxLimit: isSet(object.maxLimit) ? Number(object.maxLimit) : 0,
    };
  },

  toJSON(message: MsgUpdateMaxConcurrentLimit): unknown {
    const obj: any = {};
    message.authority !== undefined && (obj.authority = message.authority);
    message.maxLimit !== undefined && (obj.maxLimit = Math.round(message.maxLimit));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMaxConcurrentLimit>, I>>(object: I): MsgUpdateMaxConcurrentLimit {
    const message = createBaseMsgUpdateMaxConcurrentLimit();
    message.authority = object.authority ?? "";
    message.maxLimit = object.maxLimit ?? 0;
    return message;
  },
};

function createBaseMsgUpdateMaxConcurrentLimitResponse(): MsgUpdateMaxConcurrentLimitResponse {
  return { code: "", msg: "" };
}

export const MsgUpdateMaxConcurrentLimitResponse = {
  encode(message: MsgUpdateMaxConcurrentLimitResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateMaxConcurrentLimitResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateMaxConcurrentLimitResponse();
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

  fromJSON(object: any): MsgUpdateMaxConcurrentLimitResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgUpdateMaxConcurrentLimitResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateMaxConcurrentLimitResponse>, I>>(
    object: I,
  ): MsgUpdateMaxConcurrentLimitResponse {
    const message = createBaseMsgUpdateMaxConcurrentLimitResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgRequestExternalTransaction(): MsgRequestExternalTransaction {
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
    options: "",
  };
}

export const MsgRequestExternalTransaction = {
  encode(message: MsgRequestExternalTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.options !== "") {
      writer.uint32(82).string(message.options);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestExternalTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestExternalTransaction();
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
          message.options = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestExternalTransaction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      originChain: isSet(object.originChain) ? String(object.originChain) : "",
      originAddress: isSet(object.originAddress) ? String(object.originAddress) : "",
      targetChain: isSet(object.targetChain) ? String(object.targetChain) : "",
      targetAddress: isSet(object.targetAddress) ? String(object.targetAddress) : "",
      originSymbol: isSet(object.originSymbol) ? String(object.originSymbol) : "",
      targetSymbol: isSet(object.targetSymbol) ? String(object.targetSymbol) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      fee: isSet(object.fee) ? String(object.fee) : "",
      options: isSet(object.options) ? String(object.options) : "",
    };
  },

  toJSON(message: MsgRequestExternalTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.originChain !== undefined && (obj.originChain = message.originChain);
    message.originAddress !== undefined && (obj.originAddress = message.originAddress);
    message.targetChain !== undefined && (obj.targetChain = message.targetChain);
    message.targetAddress !== undefined && (obj.targetAddress = message.targetAddress);
    message.originSymbol !== undefined && (obj.originSymbol = message.originSymbol);
    message.targetSymbol !== undefined && (obj.targetSymbol = message.targetSymbol);
    message.amount !== undefined && (obj.amount = message.amount);
    message.fee !== undefined && (obj.fee = message.fee);
    message.options !== undefined && (obj.options = message.options);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestExternalTransaction>, I>>(
    object: I,
  ): MsgRequestExternalTransaction {
    const message = createBaseMsgRequestExternalTransaction();
    message.creator = object.creator ?? "";
    message.originChain = object.originChain ?? "";
    message.originAddress = object.originAddress ?? "";
    message.targetChain = object.targetChain ?? "";
    message.targetAddress = object.targetAddress ?? "";
    message.originSymbol = object.originSymbol ?? "";
    message.targetSymbol = object.targetSymbol ?? "";
    message.amount = object.amount ?? "";
    message.fee = object.fee ?? "";
    message.options = object.options ?? "";
    return message;
  },
};

function createBaseMsgRequestExternalTransactionResponse(): MsgRequestExternalTransactionResponse {
  return { code: "", msg: "" };
}

export const MsgRequestExternalTransactionResponse = {
  encode(message: MsgRequestExternalTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestExternalTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestExternalTransactionResponse();
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

  fromJSON(object: any): MsgRequestExternalTransactionResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgRequestExternalTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestExternalTransactionResponse>, I>>(
    object: I,
  ): MsgRequestExternalTransactionResponse {
    const message = createBaseMsgRequestExternalTransactionResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  RequestTransaction(request: MsgRequestTransaction): Promise<MsgRequestTransactionResponse>;
  FinalizeTransaction(request: MsgFinalizeTransaction): Promise<MsgFinalizeTransactionResponse>;
  RequestProvisionTransaction(request: MsgRequestProvisionTransaction): Promise<MsgRequestProvisionTransactionResponse>;
  CancelTransaction(request: MsgCancelTransaction): Promise<MsgCancelTransactionResponse>;
  SetTxHash(request: MsgSetTxHash): Promise<MsgSetTxHashResponse>;
  SetTxProcess(request: MsgSetTxProcess): Promise<MsgSetTxProcessResponse>;
  FinalizeProvisionTransaction(
    request: MsgFinalizeProvisionTransaction,
  ): Promise<MsgFinalizeProvisionTransactionResponse>;
  RequestDrainTransaction(request: MsgRequestDrainTransaction): Promise<MsgRequestDrainTransactionResponse>;
  FinalizeDrainTransaction(request: MsgFinalizeDrainTransaction): Promise<MsgFinalizeDrainTransactionResponse>;
  RequestHtlcLock(request: MsgRequestHtlcLock): Promise<MsgRequestHtlcLockResponse>;
  HtlcReclaim(request: MsgHtlcReclaim): Promise<MsgHtlcReclaimResponse>;
  UpdateLiquidityProvisionParams(
    request: MsgUpdateLiquidityProvisionParams,
  ): Promise<MsgUpdateLiquidityProvisionParamsResponse>;
  UpdateTransferLimitParams(request: MsgUpdateTransferLimitParams): Promise<MsgUpdateTransferLimitParamsResponse>;
  FinalizeWithdrawTransaction(request: MsgFinalizeWithdrawTransaction): Promise<MsgFinalizeWithdrawTransactionResponse>;
  SetFiatTransactionParams(request: MsgSetFiatTransactionParams): Promise<MsgSetFiatTransactionParamsResponse>;
  ConfirmTransaction(request: MsgConfirmTransaction): Promise<MsgConfirmTransactionResponse>;
  UpdateTransactionStatus(request: MsgUpdateTransactionStatus): Promise<MsgUpdateTransactionStatusResponse>;
  UpdateMaxConcurrentLimit(request: MsgUpdateMaxConcurrentLimit): Promise<MsgUpdateMaxConcurrentLimitResponse>;
  RequestExternalTransaction(request: MsgRequestExternalTransaction): Promise<MsgRequestExternalTransactionResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RequestTransaction = this.RequestTransaction.bind(this);
    this.FinalizeTransaction = this.FinalizeTransaction.bind(this);
    this.RequestProvisionTransaction = this.RequestProvisionTransaction.bind(this);
    this.CancelTransaction = this.CancelTransaction.bind(this);
    this.SetTxHash = this.SetTxHash.bind(this);
    this.SetTxProcess = this.SetTxProcess.bind(this);
    this.FinalizeProvisionTransaction = this.FinalizeProvisionTransaction.bind(this);
    this.RequestDrainTransaction = this.RequestDrainTransaction.bind(this);
    this.FinalizeDrainTransaction = this.FinalizeDrainTransaction.bind(this);
    this.RequestHtlcLock = this.RequestHtlcLock.bind(this);
    this.HtlcReclaim = this.HtlcReclaim.bind(this);
    this.UpdateLiquidityProvisionParams = this.UpdateLiquidityProvisionParams.bind(this);
    this.UpdateTransferLimitParams = this.UpdateTransferLimitParams.bind(this);
    this.FinalizeWithdrawTransaction = this.FinalizeWithdrawTransaction.bind(this);
    this.SetFiatTransactionParams = this.SetFiatTransactionParams.bind(this);
    this.ConfirmTransaction = this.ConfirmTransaction.bind(this);
    this.UpdateTransactionStatus = this.UpdateTransactionStatus.bind(this);
    this.UpdateMaxConcurrentLimit = this.UpdateMaxConcurrentLimit.bind(this);
    this.RequestExternalTransaction = this.RequestExternalTransaction.bind(this);
  }
  RequestTransaction(request: MsgRequestTransaction): Promise<MsgRequestTransactionResponse> {
    const data = MsgRequestTransaction.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.transaction.Msg", "RequestTransaction", data);
    return promise.then((data) => MsgRequestTransactionResponse.decode(new _m0.Reader(data)));
  }

  FinalizeTransaction(request: MsgFinalizeTransaction): Promise<MsgFinalizeTransactionResponse> {
    const data = MsgFinalizeTransaction.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.transaction.Msg", "FinalizeTransaction", data);
    return promise.then((data) => MsgFinalizeTransactionResponse.decode(new _m0.Reader(data)));
  }

  RequestProvisionTransaction(
    request: MsgRequestProvisionTransaction,
  ): Promise<MsgRequestProvisionTransactionResponse> {
    const data = MsgRequestProvisionTransaction.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.transaction.Msg", "RequestProvisionTransaction", data);
    return promise.then((data) => MsgRequestProvisionTransactionResponse.decode(new _m0.Reader(data)));
  }

  CancelTransaction(request: MsgCancelTransaction): Promise<MsgCancelTransactionResponse> {
    const data = MsgCancelTransaction.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.transaction.Msg", "CancelTransaction", data);
    return promise.then((data) => MsgCancelTransactionResponse.decode(new _m0.Reader(data)));
  }

  SetTxHash(request: MsgSetTxHash): Promise<MsgSetTxHashResponse> {
    const data = MsgSetTxHash.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.transaction.Msg", "SetTxHash", data);
    return promise.then((data) => MsgSetTxHashResponse.decode(new _m0.Reader(data)));
  }

  SetTxProcess(request: MsgSetTxProcess): Promise<MsgSetTxProcessResponse> {
    const data = MsgSetTxProcess.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.transaction.Msg", "SetTxProcess", data);
    return promise.then((data) => MsgSetTxProcessResponse.decode(new _m0.Reader(data)));
  }

  FinalizeProvisionTransaction(
    request: MsgFinalizeProvisionTransaction,
  ): Promise<MsgFinalizeProvisionTransactionResponse> {
    const data = MsgFinalizeProvisionTransaction.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.transaction.Msg", "FinalizeProvisionTransaction", data);
    return promise.then((data) => MsgFinalizeProvisionTransactionResponse.decode(new _m0.Reader(data)));
  }

  RequestDrainTransaction(request: MsgRequestDrainTransaction): Promise<MsgRequestDrainTransactionResponse> {
    const data = MsgRequestDrainTransaction.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.transaction.Msg", "RequestDrainTransaction", data);
    return promise.then((data) => MsgRequestDrainTransactionResponse.decode(new _m0.Reader(data)));
  }

  FinalizeDrainTransaction(request: MsgFinalizeDrainTransaction): Promise<MsgFinalizeDrainTransactionResponse> {
    const data = MsgFinalizeDrainTransaction.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.transaction.Msg", "FinalizeDrainTransaction", data);
    return promise.then((data) => MsgFinalizeDrainTransactionResponse.decode(new _m0.Reader(data)));
  }

  RequestHtlcLock(request: MsgRequestHtlcLock): Promise<MsgRequestHtlcLockResponse> {
    const data = MsgRequestHtlcLock.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.transaction.Msg", "RequestHtlcLock", data);
    return promise.then((data) => MsgRequestHtlcLockResponse.decode(new _m0.Reader(data)));
  }

  HtlcReclaim(request: MsgHtlcReclaim): Promise<MsgHtlcReclaimResponse> {
    const data = MsgHtlcReclaim.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.transaction.Msg", "HtlcReclaim", data);
    return promise.then((data) => MsgHtlcReclaimResponse.decode(new _m0.Reader(data)));
  }

  UpdateLiquidityProvisionParams(
    request: MsgUpdateLiquidityProvisionParams,
  ): Promise<MsgUpdateLiquidityProvisionParamsResponse> {
    const data = MsgUpdateLiquidityProvisionParams.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.transaction.Msg", "UpdateLiquidityProvisionParams", data);
    return promise.then((data) => MsgUpdateLiquidityProvisionParamsResponse.decode(new _m0.Reader(data)));
  }

  UpdateTransferLimitParams(request: MsgUpdateTransferLimitParams): Promise<MsgUpdateTransferLimitParamsResponse> {
    const data = MsgUpdateTransferLimitParams.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.transaction.Msg", "UpdateTransferLimitParams", data);
    return promise.then((data) => MsgUpdateTransferLimitParamsResponse.decode(new _m0.Reader(data)));
  }

  FinalizeWithdrawTransaction(
    request: MsgFinalizeWithdrawTransaction,
  ): Promise<MsgFinalizeWithdrawTransactionResponse> {
    const data = MsgFinalizeWithdrawTransaction.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.transaction.Msg", "FinalizeWithdrawTransaction", data);
    return promise.then((data) => MsgFinalizeWithdrawTransactionResponse.decode(new _m0.Reader(data)));
  }

  SetFiatTransactionParams(request: MsgSetFiatTransactionParams): Promise<MsgSetFiatTransactionParamsResponse> {
    const data = MsgSetFiatTransactionParams.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.transaction.Msg", "SetFiatTransactionParams", data);
    return promise.then((data) => MsgSetFiatTransactionParamsResponse.decode(new _m0.Reader(data)));
  }

  ConfirmTransaction(request: MsgConfirmTransaction): Promise<MsgConfirmTransactionResponse> {
    const data = MsgConfirmTransaction.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.transaction.Msg", "ConfirmTransaction", data);
    return promise.then((data) => MsgConfirmTransactionResponse.decode(new _m0.Reader(data)));
  }

  UpdateTransactionStatus(request: MsgUpdateTransactionStatus): Promise<MsgUpdateTransactionStatusResponse> {
    const data = MsgUpdateTransactionStatus.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.transaction.Msg", "UpdateTransactionStatus", data);
    return promise.then((data) => MsgUpdateTransactionStatusResponse.decode(new _m0.Reader(data)));
  }

  UpdateMaxConcurrentLimit(request: MsgUpdateMaxConcurrentLimit): Promise<MsgUpdateMaxConcurrentLimitResponse> {
    const data = MsgUpdateMaxConcurrentLimit.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.transaction.Msg", "UpdateMaxConcurrentLimit", data);
    return promise.then((data) => MsgUpdateMaxConcurrentLimitResponse.decode(new _m0.Reader(data)));
  }

  RequestExternalTransaction(request: MsgRequestExternalTransaction): Promise<MsgRequestExternalTransactionResponse> {
    const data = MsgRequestExternalTransaction.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.transaction.Msg", "RequestExternalTransaction", data);
    return promise.then((data) => MsgRequestExternalTransactionResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
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

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

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
