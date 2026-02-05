/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kimablockchain.swap";

export interface MsgRequestSwapTransaction {
  creator: string;
  /** the origin chain of the swap transaction */
  originChain: string;
  /** the origin address of the swap transaction */
  originAddress: string;
  /** the target chain of the swap transaction */
  targetChain: string;
  /** the target address of the swap transaction */
  targetAddress: string;
  /** the origin symbol of the swap transaction */
  originSymbol: string;
  /** the target symbol of the swap transaction */
  targetSymbol: string;
  /** the amount in of the swap transaction */
  amountIn: string;
  /** the amount out of the swap transaction */
  amountOut: string;
  /** the fee of the swap transaction */
  fee: string;
  /** the dex of the swap transaction */
  dex: string;
  /** the slippage of the swap transaction */
  slippage: string;
  /** the timestamp when the HTLC contract expires and the user can reclaim the funds locked there */
  htlcExpirationTimestamp: string;
  /** the txhash locking the funds in the HTLC */
  htlcCreationHash: string;
  /** the output index of the locked funds in the HTLC creation transaction */
  htlcCreationVout: number;
  /** a version denoting which HTLC script version is being used for the HTLC transaction */
  htlcVersion: string;
  /** for bitcoin transaction this is the public key of the sender */
  senderPubKey: Uint8Array;
  /** the options of the swap transaction */
  options: string;
}

export interface MsgRequestSwapTransactionResponse {
  code: string;
  msg: string;
  txId: number;
}

export interface MsgSetTxToProcess {
  creator: string;
  txId: number;
  timestamp: number;
  msgId: string;
  handleId: number;
  /** swap transaction type */
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

export interface MsgSetTxToProcessResponse {
  code: string;
  msg: string;
}

export interface MsgFinalizeSwapTransaction {
  creator: string;
  txId: number;
  txHash: string;
  success: boolean;
  errReason: string;
  tssMsgId: string;
  /** request_swap, request_swap_refund */
  txType: string;
  /** pull, release, refund */
  payType: string;
}

export interface MsgFinalizeSwapTransactionResponse {
  code: string;
  msg: string;
}

export interface MsgSwapObserveVote {
  creator: string;
  txHash: string;
  chainId: string;
  tokenSymbol: string;
  from: string;
  to: string;
  amount: string;
  payType: string;
  kimaTxId: number;
  tssMsgId: string;
  txType: string;
  succeed: boolean;
  failReason: string;
  reserved: string;
}

export interface MsgSwapObserveVoteResponse {
  code: string;
  msg: string;
}

export interface MsgCleanPendingSwapTransaction {
  creator: string;
}

export interface MsgCleanPendingSwapTransactionResponse {
  code: string;
  msg: string;
}

export interface MsgUpdateSwapTransactionStatus {
  creator: string;
  txId: string;
  status: string;
  reason: string;
}

export interface MsgUpdateSwapTransactionStatusResponse {
  code: string;
  msg: string;
}

function createBaseMsgRequestSwapTransaction(): MsgRequestSwapTransaction {
  return {
    creator: "",
    originChain: "",
    originAddress: "",
    targetChain: "",
    targetAddress: "",
    originSymbol: "",
    targetSymbol: "",
    amountIn: "",
    amountOut: "",
    fee: "",
    dex: "",
    slippage: "",
    htlcExpirationTimestamp: "",
    htlcCreationHash: "",
    htlcCreationVout: 0,
    htlcVersion: "",
    senderPubKey: new Uint8Array(),
    options: "",
  };
}

export const MsgRequestSwapTransaction = {
  encode(message: MsgRequestSwapTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.amountIn !== "") {
      writer.uint32(66).string(message.amountIn);
    }
    if (message.amountOut !== "") {
      writer.uint32(74).string(message.amountOut);
    }
    if (message.fee !== "") {
      writer.uint32(82).string(message.fee);
    }
    if (message.dex !== "") {
      writer.uint32(90).string(message.dex);
    }
    if (message.slippage !== "") {
      writer.uint32(98).string(message.slippage);
    }
    if (message.htlcExpirationTimestamp !== "") {
      writer.uint32(106).string(message.htlcExpirationTimestamp);
    }
    if (message.htlcCreationHash !== "") {
      writer.uint32(114).string(message.htlcCreationHash);
    }
    if (message.htlcCreationVout !== 0) {
      writer.uint32(120).uint32(message.htlcCreationVout);
    }
    if (message.htlcVersion !== "") {
      writer.uint32(130).string(message.htlcVersion);
    }
    if (message.senderPubKey.length !== 0) {
      writer.uint32(138).bytes(message.senderPubKey);
    }
    if (message.options !== "") {
      writer.uint32(146).string(message.options);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestSwapTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestSwapTransaction();
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
          message.amountIn = reader.string();
          break;
        case 9:
          message.amountOut = reader.string();
          break;
        case 10:
          message.fee = reader.string();
          break;
        case 11:
          message.dex = reader.string();
          break;
        case 12:
          message.slippage = reader.string();
          break;
        case 13:
          message.htlcExpirationTimestamp = reader.string();
          break;
        case 14:
          message.htlcCreationHash = reader.string();
          break;
        case 15:
          message.htlcCreationVout = reader.uint32();
          break;
        case 16:
          message.htlcVersion = reader.string();
          break;
        case 17:
          message.senderPubKey = reader.bytes();
          break;
        case 18:
          message.options = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRequestSwapTransaction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      originChain: isSet(object.originChain) ? String(object.originChain) : "",
      originAddress: isSet(object.originAddress) ? String(object.originAddress) : "",
      targetChain: isSet(object.targetChain) ? String(object.targetChain) : "",
      targetAddress: isSet(object.targetAddress) ? String(object.targetAddress) : "",
      originSymbol: isSet(object.originSymbol) ? String(object.originSymbol) : "",
      targetSymbol: isSet(object.targetSymbol) ? String(object.targetSymbol) : "",
      amountIn: isSet(object.amountIn) ? String(object.amountIn) : "",
      amountOut: isSet(object.amountOut) ? String(object.amountOut) : "",
      fee: isSet(object.fee) ? String(object.fee) : "",
      dex: isSet(object.dex) ? String(object.dex) : "",
      slippage: isSet(object.slippage) ? String(object.slippage) : "",
      htlcExpirationTimestamp: isSet(object.htlcExpirationTimestamp) ? String(object.htlcExpirationTimestamp) : "",
      htlcCreationHash: isSet(object.htlcCreationHash) ? String(object.htlcCreationHash) : "",
      htlcCreationVout: isSet(object.htlcCreationVout) ? Number(object.htlcCreationVout) : 0,
      htlcVersion: isSet(object.htlcVersion) ? String(object.htlcVersion) : "",
      senderPubKey: isSet(object.senderPubKey) ? bytesFromBase64(object.senderPubKey) : new Uint8Array(),
      options: isSet(object.options) ? String(object.options) : "",
    };
  },

  toJSON(message: MsgRequestSwapTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.originChain !== undefined && (obj.originChain = message.originChain);
    message.originAddress !== undefined && (obj.originAddress = message.originAddress);
    message.targetChain !== undefined && (obj.targetChain = message.targetChain);
    message.targetAddress !== undefined && (obj.targetAddress = message.targetAddress);
    message.originSymbol !== undefined && (obj.originSymbol = message.originSymbol);
    message.targetSymbol !== undefined && (obj.targetSymbol = message.targetSymbol);
    message.amountIn !== undefined && (obj.amountIn = message.amountIn);
    message.amountOut !== undefined && (obj.amountOut = message.amountOut);
    message.fee !== undefined && (obj.fee = message.fee);
    message.dex !== undefined && (obj.dex = message.dex);
    message.slippage !== undefined && (obj.slippage = message.slippage);
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

  fromPartial<I extends Exact<DeepPartial<MsgRequestSwapTransaction>, I>>(object: I): MsgRequestSwapTransaction {
    const message = createBaseMsgRequestSwapTransaction();
    message.creator = object.creator ?? "";
    message.originChain = object.originChain ?? "";
    message.originAddress = object.originAddress ?? "";
    message.targetChain = object.targetChain ?? "";
    message.targetAddress = object.targetAddress ?? "";
    message.originSymbol = object.originSymbol ?? "";
    message.targetSymbol = object.targetSymbol ?? "";
    message.amountIn = object.amountIn ?? "";
    message.amountOut = object.amountOut ?? "";
    message.fee = object.fee ?? "";
    message.dex = object.dex ?? "";
    message.slippage = object.slippage ?? "";
    message.htlcExpirationTimestamp = object.htlcExpirationTimestamp ?? "";
    message.htlcCreationHash = object.htlcCreationHash ?? "";
    message.htlcCreationVout = object.htlcCreationVout ?? 0;
    message.htlcVersion = object.htlcVersion ?? "";
    message.senderPubKey = object.senderPubKey ?? new Uint8Array();
    message.options = object.options ?? "";
    return message;
  },
};

function createBaseMsgRequestSwapTransactionResponse(): MsgRequestSwapTransactionResponse {
  return { code: "", msg: "", txId: 0 };
}

export const MsgRequestSwapTransactionResponse = {
  encode(message: MsgRequestSwapTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRequestSwapTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRequestSwapTransactionResponse();
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

  fromJSON(object: any): MsgRequestSwapTransactionResponse {
    return {
      code: isSet(object.code) ? String(object.code) : "",
      msg: isSet(object.msg) ? String(object.msg) : "",
      txId: isSet(object.txId) ? Number(object.txId) : 0,
    };
  },

  toJSON(message: MsgRequestSwapTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    message.txId !== undefined && (obj.txId = Math.round(message.txId));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestSwapTransactionResponse>, I>>(
    object: I,
  ): MsgRequestSwapTransactionResponse {
    const message = createBaseMsgRequestSwapTransactionResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    message.txId = object.txId ?? 0;
    return message;
  },
};

function createBaseMsgSetTxToProcess(): MsgSetTxToProcess {
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

export const MsgSetTxToProcess = {
  encode(message: MsgSetTxToProcess, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      writer.uint32(104).uint64(message.expiration);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetTxToProcess {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetTxToProcess();
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
          message.expiration = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSetTxToProcess {
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

  toJSON(message: MsgSetTxToProcess): unknown {
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

  fromPartial<I extends Exact<DeepPartial<MsgSetTxToProcess>, I>>(object: I): MsgSetTxToProcess {
    const message = createBaseMsgSetTxToProcess();
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

function createBaseMsgSetTxToProcessResponse(): MsgSetTxToProcessResponse {
  return { code: "", msg: "" };
}

export const MsgSetTxToProcessResponse = {
  encode(message: MsgSetTxToProcessResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetTxToProcessResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetTxToProcessResponse();
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

  fromJSON(object: any): MsgSetTxToProcessResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgSetTxToProcessResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetTxToProcessResponse>, I>>(object: I): MsgSetTxToProcessResponse {
    const message = createBaseMsgSetTxToProcessResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgFinalizeSwapTransaction(): MsgFinalizeSwapTransaction {
  return { creator: "", txId: 0, txHash: "", success: false, errReason: "", tssMsgId: "", txType: "", payType: "" };
}

export const MsgFinalizeSwapTransaction = {
  encode(message: MsgFinalizeSwapTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    if (message.errReason !== "") {
      writer.uint32(42).string(message.errReason);
    }
    if (message.tssMsgId !== "") {
      writer.uint32(50).string(message.tssMsgId);
    }
    if (message.txType !== "") {
      writer.uint32(58).string(message.txType);
    }
    if (message.payType !== "") {
      writer.uint32(66).string(message.payType);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFinalizeSwapTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFinalizeSwapTransaction();
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
          message.errReason = reader.string();
          break;
        case 6:
          message.tssMsgId = reader.string();
          break;
        case 7:
          message.txType = reader.string();
          break;
        case 8:
          message.payType = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgFinalizeSwapTransaction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      txId: isSet(object.txId) ? Number(object.txId) : 0,
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      success: isSet(object.success) ? Boolean(object.success) : false,
      errReason: isSet(object.errReason) ? String(object.errReason) : "",
      tssMsgId: isSet(object.tssMsgId) ? String(object.tssMsgId) : "",
      txType: isSet(object.txType) ? String(object.txType) : "",
      payType: isSet(object.payType) ? String(object.payType) : "",
    };
  },

  toJSON(message: MsgFinalizeSwapTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txId !== undefined && (obj.txId = Math.round(message.txId));
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.success !== undefined && (obj.success = message.success);
    message.errReason !== undefined && (obj.errReason = message.errReason);
    message.tssMsgId !== undefined && (obj.tssMsgId = message.tssMsgId);
    message.txType !== undefined && (obj.txType = message.txType);
    message.payType !== undefined && (obj.payType = message.payType);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFinalizeSwapTransaction>, I>>(object: I): MsgFinalizeSwapTransaction {
    const message = createBaseMsgFinalizeSwapTransaction();
    message.creator = object.creator ?? "";
    message.txId = object.txId ?? 0;
    message.txHash = object.txHash ?? "";
    message.success = object.success ?? false;
    message.errReason = object.errReason ?? "";
    message.tssMsgId = object.tssMsgId ?? "";
    message.txType = object.txType ?? "";
    message.payType = object.payType ?? "";
    return message;
  },
};

function createBaseMsgFinalizeSwapTransactionResponse(): MsgFinalizeSwapTransactionResponse {
  return { code: "", msg: "" };
}

export const MsgFinalizeSwapTransactionResponse = {
  encode(message: MsgFinalizeSwapTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgFinalizeSwapTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgFinalizeSwapTransactionResponse();
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

  fromJSON(object: any): MsgFinalizeSwapTransactionResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgFinalizeSwapTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFinalizeSwapTransactionResponse>, I>>(
    object: I,
  ): MsgFinalizeSwapTransactionResponse {
    const message = createBaseMsgFinalizeSwapTransactionResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgSwapObserveVote(): MsgSwapObserveVote {
  return {
    creator: "",
    txHash: "",
    chainId: "",
    tokenSymbol: "",
    from: "",
    to: "",
    amount: "",
    payType: "",
    kimaTxId: 0,
    tssMsgId: "",
    txType: "",
    succeed: false,
    failReason: "",
    reserved: "",
  };
}

export const MsgSwapObserveVote = {
  encode(message: MsgSwapObserveVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.txHash !== "") {
      writer.uint32(18).string(message.txHash);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.tokenSymbol !== "") {
      writer.uint32(34).string(message.tokenSymbol);
    }
    if (message.from !== "") {
      writer.uint32(42).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(50).string(message.to);
    }
    if (message.amount !== "") {
      writer.uint32(58).string(message.amount);
    }
    if (message.payType !== "") {
      writer.uint32(66).string(message.payType);
    }
    if (message.kimaTxId !== 0) {
      writer.uint32(72).uint64(message.kimaTxId);
    }
    if (message.tssMsgId !== "") {
      writer.uint32(82).string(message.tssMsgId);
    }
    if (message.txType !== "") {
      writer.uint32(90).string(message.txType);
    }
    if (message.succeed === true) {
      writer.uint32(96).bool(message.succeed);
    }
    if (message.failReason !== "") {
      writer.uint32(106).string(message.failReason);
    }
    if (message.reserved !== "") {
      writer.uint32(114).string(message.reserved);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapObserveVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapObserveVote();
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
          message.chainId = reader.string();
          break;
        case 4:
          message.tokenSymbol = reader.string();
          break;
        case 5:
          message.from = reader.string();
          break;
        case 6:
          message.to = reader.string();
          break;
        case 7:
          message.amount = reader.string();
          break;
        case 8:
          message.payType = reader.string();
          break;
        case 9:
          message.kimaTxId = longToNumber(reader.uint64() as Long);
          break;
        case 10:
          message.tssMsgId = reader.string();
          break;
        case 11:
          message.txType = reader.string();
          break;
        case 12:
          message.succeed = reader.bool();
          break;
        case 13:
          message.failReason = reader.string();
          break;
        case 14:
          message.reserved = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSwapObserveVote {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      tokenSymbol: isSet(object.tokenSymbol) ? String(object.tokenSymbol) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      payType: isSet(object.payType) ? String(object.payType) : "",
      kimaTxId: isSet(object.kimaTxId) ? Number(object.kimaTxId) : 0,
      tssMsgId: isSet(object.tssMsgId) ? String(object.tssMsgId) : "",
      txType: isSet(object.txType) ? String(object.txType) : "",
      succeed: isSet(object.succeed) ? Boolean(object.succeed) : false,
      failReason: isSet(object.failReason) ? String(object.failReason) : "",
      reserved: isSet(object.reserved) ? String(object.reserved) : "",
    };
  },

  toJSON(message: MsgSwapObserveVote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.tokenSymbol !== undefined && (obj.tokenSymbol = message.tokenSymbol);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount);
    message.payType !== undefined && (obj.payType = message.payType);
    message.kimaTxId !== undefined && (obj.kimaTxId = Math.round(message.kimaTxId));
    message.tssMsgId !== undefined && (obj.tssMsgId = message.tssMsgId);
    message.txType !== undefined && (obj.txType = message.txType);
    message.succeed !== undefined && (obj.succeed = message.succeed);
    message.failReason !== undefined && (obj.failReason = message.failReason);
    message.reserved !== undefined && (obj.reserved = message.reserved);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapObserveVote>, I>>(object: I): MsgSwapObserveVote {
    const message = createBaseMsgSwapObserveVote();
    message.creator = object.creator ?? "";
    message.txHash = object.txHash ?? "";
    message.chainId = object.chainId ?? "";
    message.tokenSymbol = object.tokenSymbol ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount ?? "";
    message.payType = object.payType ?? "";
    message.kimaTxId = object.kimaTxId ?? 0;
    message.tssMsgId = object.tssMsgId ?? "";
    message.txType = object.txType ?? "";
    message.succeed = object.succeed ?? false;
    message.failReason = object.failReason ?? "";
    message.reserved = object.reserved ?? "";
    return message;
  },
};

function createBaseMsgSwapObserveVoteResponse(): MsgSwapObserveVoteResponse {
  return { code: "", msg: "" };
}

export const MsgSwapObserveVoteResponse = {
  encode(message: MsgSwapObserveVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSwapObserveVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSwapObserveVoteResponse();
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

  fromJSON(object: any): MsgSwapObserveVoteResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgSwapObserveVoteResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSwapObserveVoteResponse>, I>>(object: I): MsgSwapObserveVoteResponse {
    const message = createBaseMsgSwapObserveVoteResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgCleanPendingSwapTransaction(): MsgCleanPendingSwapTransaction {
  return { creator: "" };
}

export const MsgCleanPendingSwapTransaction = {
  encode(message: MsgCleanPendingSwapTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCleanPendingSwapTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCleanPendingSwapTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCleanPendingSwapTransaction {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgCleanPendingSwapTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCleanPendingSwapTransaction>, I>>(
    object: I,
  ): MsgCleanPendingSwapTransaction {
    const message = createBaseMsgCleanPendingSwapTransaction();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgCleanPendingSwapTransactionResponse(): MsgCleanPendingSwapTransactionResponse {
  return { code: "", msg: "" };
}

export const MsgCleanPendingSwapTransactionResponse = {
  encode(message: MsgCleanPendingSwapTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCleanPendingSwapTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCleanPendingSwapTransactionResponse();
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

  fromJSON(object: any): MsgCleanPendingSwapTransactionResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgCleanPendingSwapTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCleanPendingSwapTransactionResponse>, I>>(
    object: I,
  ): MsgCleanPendingSwapTransactionResponse {
    const message = createBaseMsgCleanPendingSwapTransactionResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgUpdateSwapTransactionStatus(): MsgUpdateSwapTransactionStatus {
  return { creator: "", txId: "", status: "", reason: "" };
}

export const MsgUpdateSwapTransactionStatus = {
  encode(message: MsgUpdateSwapTransactionStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.txId !== "") {
      writer.uint32(18).string(message.txId);
    }
    if (message.status !== "") {
      writer.uint32(26).string(message.status);
    }
    if (message.reason !== "") {
      writer.uint32(34).string(message.reason);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSwapTransactionStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSwapTransactionStatus();
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
          message.status = reader.string();
          break;
        case 4:
          message.reason = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateSwapTransactionStatus {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      txId: isSet(object.txId) ? String(object.txId) : "",
      status: isSet(object.status) ? String(object.status) : "",
      reason: isSet(object.reason) ? String(object.reason) : "",
    };
  },

  toJSON(message: MsgUpdateSwapTransactionStatus): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txId !== undefined && (obj.txId = message.txId);
    message.status !== undefined && (obj.status = message.status);
    message.reason !== undefined && (obj.reason = message.reason);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateSwapTransactionStatus>, I>>(
    object: I,
  ): MsgUpdateSwapTransactionStatus {
    const message = createBaseMsgUpdateSwapTransactionStatus();
    message.creator = object.creator ?? "";
    message.txId = object.txId ?? "";
    message.status = object.status ?? "";
    message.reason = object.reason ?? "";
    return message;
  },
};

function createBaseMsgUpdateSwapTransactionStatusResponse(): MsgUpdateSwapTransactionStatusResponse {
  return { code: "", msg: "" };
}

export const MsgUpdateSwapTransactionStatusResponse = {
  encode(message: MsgUpdateSwapTransactionStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateSwapTransactionStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateSwapTransactionStatusResponse();
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

  fromJSON(object: any): MsgUpdateSwapTransactionStatusResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgUpdateSwapTransactionStatusResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateSwapTransactionStatusResponse>, I>>(
    object: I,
  ): MsgUpdateSwapTransactionStatusResponse {
    const message = createBaseMsgUpdateSwapTransactionStatusResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  RequestSwapTransaction(request: MsgRequestSwapTransaction): Promise<MsgRequestSwapTransactionResponse>;
  SetTxToProcess(request: MsgSetTxToProcess): Promise<MsgSetTxToProcessResponse>;
  FinalizeSwapTransaction(request: MsgFinalizeSwapTransaction): Promise<MsgFinalizeSwapTransactionResponse>;
  SwapObserveVote(request: MsgSwapObserveVote): Promise<MsgSwapObserveVoteResponse>;
  CleanPendingSwapTransaction(request: MsgCleanPendingSwapTransaction): Promise<MsgCleanPendingSwapTransactionResponse>;
  UpdateSwapTransactionStatus(request: MsgUpdateSwapTransactionStatus): Promise<MsgUpdateSwapTransactionStatusResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RequestSwapTransaction = this.RequestSwapTransaction.bind(this);
    this.SetTxToProcess = this.SetTxToProcess.bind(this);
    this.FinalizeSwapTransaction = this.FinalizeSwapTransaction.bind(this);
    this.SwapObserveVote = this.SwapObserveVote.bind(this);
    this.CleanPendingSwapTransaction = this.CleanPendingSwapTransaction.bind(this);
    this.UpdateSwapTransactionStatus = this.UpdateSwapTransactionStatus.bind(this);
  }
  RequestSwapTransaction(request: MsgRequestSwapTransaction): Promise<MsgRequestSwapTransactionResponse> {
    const data = MsgRequestSwapTransaction.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.swap.Msg", "RequestSwapTransaction", data);
    return promise.then((data) => MsgRequestSwapTransactionResponse.decode(new _m0.Reader(data)));
  }

  SetTxToProcess(request: MsgSetTxToProcess): Promise<MsgSetTxToProcessResponse> {
    const data = MsgSetTxToProcess.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.swap.Msg", "SetTxToProcess", data);
    return promise.then((data) => MsgSetTxToProcessResponse.decode(new _m0.Reader(data)));
  }

  FinalizeSwapTransaction(request: MsgFinalizeSwapTransaction): Promise<MsgFinalizeSwapTransactionResponse> {
    const data = MsgFinalizeSwapTransaction.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.swap.Msg", "FinalizeSwapTransaction", data);
    return promise.then((data) => MsgFinalizeSwapTransactionResponse.decode(new _m0.Reader(data)));
  }

  SwapObserveVote(request: MsgSwapObserveVote): Promise<MsgSwapObserveVoteResponse> {
    const data = MsgSwapObserveVote.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.swap.Msg", "SwapObserveVote", data);
    return promise.then((data) => MsgSwapObserveVoteResponse.decode(new _m0.Reader(data)));
  }

  CleanPendingSwapTransaction(
    request: MsgCleanPendingSwapTransaction,
  ): Promise<MsgCleanPendingSwapTransactionResponse> {
    const data = MsgCleanPendingSwapTransaction.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.swap.Msg", "CleanPendingSwapTransaction", data);
    return promise.then((data) => MsgCleanPendingSwapTransactionResponse.decode(new _m0.Reader(data)));
  }

  UpdateSwapTransactionStatus(
    request: MsgUpdateSwapTransactionStatus,
  ): Promise<MsgUpdateSwapTransactionStatusResponse> {
    const data = MsgUpdateSwapTransactionStatus.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.swap.Msg", "UpdateSwapTransactionStatus", data);
    return promise.then((data) => MsgUpdateSwapTransactionStatusResponse.decode(new _m0.Reader(data)));
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
