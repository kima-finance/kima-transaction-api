/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "kimablockchain.kima";

export interface MsgRequestTransaction {
  creator: string;
  originChain: string;
  originAddress: string;
  targetChain: string;
  targetAddress: string;
  symbol: string;
  amount: string;
  fee: string;
}

export interface MsgRequestTransactionResponse {
  code: string;
  msg: string;
  txId: number;
}

export interface MsgApproveTransaction {
  creator: string;
  txId: number;
  txTHash: string;
  success: string;
  signedKey: string;
}

export interface MsgApproveTransactionResponse {
  code: string;
  msg: string;
}

export interface MsgObservationVote {
  creator: string;
  txHash: string;
  chainId: string;
  from: string;
  to: string;
  amount: string;
  payType: string;
  kimaTxID: number;
  succeed: string;
}

export interface MsgObservationVoteResponse {
  code: string;
  msg: string;
}

export interface MsgUpdateBalance {
  creator: string;
  chainId: string;
  balance: string;
  decimal: string;
}

export interface MsgUpdateBalanceResponse {
  code: string;
  msg: string;
}

export interface MsgKeysignVote {
  creator: string;
  txHash: string;
  pubKey: string;
}

export interface MsgKeysignVoteResponse {
  code: string;
  msg: string;
}

export interface MsgUpdateGasFee {
  creator: string;
  chainId: string;
  fee: string;
}

export interface MsgUpdateGasFeeResponse {
  code: string;
  msg: string;
}

export interface MsgProvisionTransaction {
  creator: string;
  fromChain: string;
  fromAddress: string;
  symbol: string;
  tokenAddr: string;
  amount: string;
  options: string;
}

export interface MsgProvisionTransactionResponse {
  code: string;
  msg: string;
}

export interface MsgDrainTransaction {
  creator: string;
  fromChain: string;
  toChain: string;
  toAddress: string;
  nftAddr: string;
  amount: string;
  options: string;
}

export interface MsgDrainTransactionResponse {
  code: string;
  msg: string;
}

export interface MsgCancelTransaction {
  creator: string;
  transactionId: string;
}

export interface MsgCancelTransactionResponse {
  code: string;
  msg: string;
}

export interface MsgAddWhitelisted {
  creator: string;
  address: string;
}

export interface MsgAddWhitelistedResponse {
  code: string;
  msg: string;
}

export interface MsgSetAdmin {
  creator: string;
}

export interface MsgSetAdminResponse {
  code: string;
  msg: string;
}

export interface MsgAddPubkey {
  creator: string;
  pubkey: string;
}

export interface MsgAddPubkeyResponse {
  code: string;
  msg: string;
}

export interface MsgUpdatePubkeys {
  creator: string;
  pubkeys: string[];
}

export interface MsgUpdatePubkeysResponse {
  code: string;
  msg: string;
}

export interface MsgUpdateTssPubkey {
  creator: string;
  tssPubkey: string;
  ecdsa: string;
  eddsa: string;
  reserved: string;
}

export interface MsgUpdateTssPubkeyResponse {
  code: string;
  msg: string;
}

export interface MsgRemoveWhitelisted {
  creator: string;
  address: string;
}

export interface MsgRemoveWhitelistedResponse {
  code: string;
  msg: string;
}

export interface MsgClearTssInfo {
  creator: string;
}

export interface MsgClearTssInfoResponse {
  code: string;
  msg: string;
}

export interface MsgAddChain {
  creator: string;
  name: string;
  symbol: string;
  tokens: string[];
}

export interface MsgAddChainResponse {
  code: string;
  msg: string;
}

export interface MsgUpdateTssHash {
  creator: string;
  txId: number;
  tssPullHash: string;
}

export interface MsgUpdateTssHashResponse {
  code: string;
  msg: string;
}

export interface MsgUpdateChainStatus {
  creator: string;
  chainSymbol: string;
  disabled: boolean;
}

export interface MsgUpdateChainStatusResponse {
  code: string;
  msg: string;
}

export interface MsgAddToken {
  creator: string;
  chainSymbol: string;
  tokenSymbol: string;
}

export interface MsgAddTokenResponse {
  code: string;
  msg: string;
}

export interface MsgUpdateTssStatus {
  creator: string;
  status: string;
}

export interface MsgUpdateTssStatusResponse {
  code: string;
  msg: string;
}

export interface MsgSetTxHash {
  creator: string;
  txId: number;
  txHash: string;
}

export interface MsgSetTxHashResponse {
  code: string;
  msg: string;
}

export interface MsgSetTxProcess {
  creator: string;
  txId: number;
  timestamp: string;
  msgId: string;
}

export interface MsgSetTxProcessResponse {
}

export interface MsgFinalizeTransaction {
  creator: string;
  txId: number;
  txHash: string;
  success: string;
  signedKey: string;
}

export interface MsgFinalizeTransactionResponse {
  code: string;
  msg: string;
}

export interface MsgWithdrawPool {
  creator: string;
  chain: string;
  targetAddress: string;
  amount: string;
}

export interface MsgWithdrawPoolResponse {
}

export interface MsgUpdateToken {
  creator: string;
  chain: string;
  address: string;
}

export interface MsgUpdateTokenResponse {
}

export interface MsgUpdatePoolRequest {
  creator: string;
  reqId: number;
  processed: string;
}

export interface MsgUpdatePoolRequestResponse {
}

export interface MsgLeaderIsReady {
  creator: string;
  msgId: string;
  peerId: string;
}

export interface MsgLeaderIsReadyResponse {
}

export interface MsgAddPubkeyEddsa {
  creator: string;
  pubkey: string;
}

export interface MsgAddPubkeyEddsaResponse {
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
    symbol: "",
    amount: "",
    fee: "",
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
    if (message.symbol !== "") {
      writer.uint32(50).string(message.symbol);
    }
    if (message.amount !== "") {
      writer.uint32(58).string(message.amount);
    }
    if (message.fee !== "") {
      writer.uint32(66).string(message.fee);
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
          message.symbol = reader.string();
          break;
        case 7:
          message.amount = reader.string();
          break;
        case 8:
          message.fee = reader.string();
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
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      fee: isSet(object.fee) ? String(object.fee) : "",
    };
  },

  toJSON(message: MsgRequestTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.originChain !== undefined && (obj.originChain = message.originChain);
    message.originAddress !== undefined && (obj.originAddress = message.originAddress);
    message.targetChain !== undefined && (obj.targetChain = message.targetChain);
    message.targetAddress !== undefined && (obj.targetAddress = message.targetAddress);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.amount !== undefined && (obj.amount = message.amount);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRequestTransaction>, I>>(object: I): MsgRequestTransaction {
    const message = createBaseMsgRequestTransaction();
    message.creator = object.creator ?? "";
    message.originChain = object.originChain ?? "";
    message.originAddress = object.originAddress ?? "";
    message.targetChain = object.targetChain ?? "";
    message.targetAddress = object.targetAddress ?? "";
    message.symbol = object.symbol ?? "";
    message.amount = object.amount ?? "";
    message.fee = object.fee ?? "";
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

function createBaseMsgApproveTransaction(): MsgApproveTransaction {
  return { creator: "", txId: 0, txTHash: "", success: "", signedKey: "" };
}

export const MsgApproveTransaction = {
  encode(message: MsgApproveTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.txId !== 0) {
      writer.uint32(16).uint64(message.txId);
    }
    if (message.txTHash !== "") {
      writer.uint32(26).string(message.txTHash);
    }
    if (message.success !== "") {
      writer.uint32(34).string(message.success);
    }
    if (message.signedKey !== "") {
      writer.uint32(42).string(message.signedKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveTransaction();
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
          message.txTHash = reader.string();
          break;
        case 4:
          message.success = reader.string();
          break;
        case 5:
          message.signedKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgApproveTransaction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      txId: isSet(object.txId) ? Number(object.txId) : 0,
      txTHash: isSet(object.txTHash) ? String(object.txTHash) : "",
      success: isSet(object.success) ? String(object.success) : "",
      signedKey: isSet(object.signedKey) ? String(object.signedKey) : "",
    };
  },

  toJSON(message: MsgApproveTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txId !== undefined && (obj.txId = Math.round(message.txId));
    message.txTHash !== undefined && (obj.txTHash = message.txTHash);
    message.success !== undefined && (obj.success = message.success);
    message.signedKey !== undefined && (obj.signedKey = message.signedKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgApproveTransaction>, I>>(object: I): MsgApproveTransaction {
    const message = createBaseMsgApproveTransaction();
    message.creator = object.creator ?? "";
    message.txId = object.txId ?? 0;
    message.txTHash = object.txTHash ?? "";
    message.success = object.success ?? "";
    message.signedKey = object.signedKey ?? "";
    return message;
  },
};

function createBaseMsgApproveTransactionResponse(): MsgApproveTransactionResponse {
  return { code: "", msg: "" };
}

export const MsgApproveTransactionResponse = {
  encode(message: MsgApproveTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgApproveTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgApproveTransactionResponse();
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

  fromJSON(object: any): MsgApproveTransactionResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgApproveTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgApproveTransactionResponse>, I>>(
    object: I,
  ): MsgApproveTransactionResponse {
    const message = createBaseMsgApproveTransactionResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgObservationVote(): MsgObservationVote {
  return { creator: "", txHash: "", chainId: "", from: "", to: "", amount: "", payType: "", kimaTxID: 0, succeed: "" };
}

export const MsgObservationVote = {
  encode(message: MsgObservationVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.txHash !== "") {
      writer.uint32(18).string(message.txHash);
    }
    if (message.chainId !== "") {
      writer.uint32(26).string(message.chainId);
    }
    if (message.from !== "") {
      writer.uint32(34).string(message.from);
    }
    if (message.to !== "") {
      writer.uint32(42).string(message.to);
    }
    if (message.amount !== "") {
      writer.uint32(50).string(message.amount);
    }
    if (message.payType !== "") {
      writer.uint32(58).string(message.payType);
    }
    if (message.kimaTxID !== 0) {
      writer.uint32(64).uint64(message.kimaTxID);
    }
    if (message.succeed !== "") {
      writer.uint32(74).string(message.succeed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgObservationVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgObservationVote();
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
          message.from = reader.string();
          break;
        case 5:
          message.to = reader.string();
          break;
        case 6:
          message.amount = reader.string();
          break;
        case 7:
          message.payType = reader.string();
          break;
        case 8:
          message.kimaTxID = longToNumber(reader.uint64() as Long);
          break;
        case 9:
          message.succeed = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgObservationVote {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      from: isSet(object.from) ? String(object.from) : "",
      to: isSet(object.to) ? String(object.to) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      payType: isSet(object.payType) ? String(object.payType) : "",
      kimaTxID: isSet(object.kimaTxID) ? Number(object.kimaTxID) : 0,
      succeed: isSet(object.succeed) ? String(object.succeed) : "",
    };
  },

  toJSON(message: MsgObservationVote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.from !== undefined && (obj.from = message.from);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined && (obj.amount = message.amount);
    message.payType !== undefined && (obj.payType = message.payType);
    message.kimaTxID !== undefined && (obj.kimaTxID = Math.round(message.kimaTxID));
    message.succeed !== undefined && (obj.succeed = message.succeed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgObservationVote>, I>>(object: I): MsgObservationVote {
    const message = createBaseMsgObservationVote();
    message.creator = object.creator ?? "";
    message.txHash = object.txHash ?? "";
    message.chainId = object.chainId ?? "";
    message.from = object.from ?? "";
    message.to = object.to ?? "";
    message.amount = object.amount ?? "";
    message.payType = object.payType ?? "";
    message.kimaTxID = object.kimaTxID ?? 0;
    message.succeed = object.succeed ?? "";
    return message;
  },
};

function createBaseMsgObservationVoteResponse(): MsgObservationVoteResponse {
  return { code: "", msg: "" };
}

export const MsgObservationVoteResponse = {
  encode(message: MsgObservationVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgObservationVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgObservationVoteResponse();
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

  fromJSON(object: any): MsgObservationVoteResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgObservationVoteResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgObservationVoteResponse>, I>>(object: I): MsgObservationVoteResponse {
    const message = createBaseMsgObservationVoteResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgUpdateBalance(): MsgUpdateBalance {
  return { creator: "", chainId: "", balance: "", decimal: "" };
}

export const MsgUpdateBalance = {
  encode(message: MsgUpdateBalance, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.balance !== "") {
      writer.uint32(26).string(message.balance);
    }
    if (message.decimal !== "") {
      writer.uint32(34).string(message.decimal);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBalance {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBalance();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.balance = reader.string();
          break;
        case 4:
          message.decimal = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateBalance {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      balance: isSet(object.balance) ? String(object.balance) : "",
      decimal: isSet(object.decimal) ? String(object.decimal) : "",
    };
  },

  toJSON(message: MsgUpdateBalance): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.balance !== undefined && (obj.balance = message.balance);
    message.decimal !== undefined && (obj.decimal = message.decimal);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateBalance>, I>>(object: I): MsgUpdateBalance {
    const message = createBaseMsgUpdateBalance();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.balance = object.balance ?? "";
    message.decimal = object.decimal ?? "";
    return message;
  },
};

function createBaseMsgUpdateBalanceResponse(): MsgUpdateBalanceResponse {
  return { code: "", msg: "" };
}

export const MsgUpdateBalanceResponse = {
  encode(message: MsgUpdateBalanceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateBalanceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateBalanceResponse();
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

  fromJSON(object: any): MsgUpdateBalanceResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgUpdateBalanceResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateBalanceResponse>, I>>(object: I): MsgUpdateBalanceResponse {
    const message = createBaseMsgUpdateBalanceResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgKeysignVote(): MsgKeysignVote {
  return { creator: "", txHash: "", pubKey: "" };
}

export const MsgKeysignVote = {
  encode(message: MsgKeysignVote, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.txHash !== "") {
      writer.uint32(18).string(message.txHash);
    }
    if (message.pubKey !== "") {
      writer.uint32(26).string(message.pubKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgKeysignVote {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgKeysignVote();
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
          message.pubKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgKeysignVote {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      txHash: isSet(object.txHash) ? String(object.txHash) : "",
      pubKey: isSet(object.pubKey) ? String(object.pubKey) : "",
    };
  },

  toJSON(message: MsgKeysignVote): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.pubKey !== undefined && (obj.pubKey = message.pubKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgKeysignVote>, I>>(object: I): MsgKeysignVote {
    const message = createBaseMsgKeysignVote();
    message.creator = object.creator ?? "";
    message.txHash = object.txHash ?? "";
    message.pubKey = object.pubKey ?? "";
    return message;
  },
};

function createBaseMsgKeysignVoteResponse(): MsgKeysignVoteResponse {
  return { code: "", msg: "" };
}

export const MsgKeysignVoteResponse = {
  encode(message: MsgKeysignVoteResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgKeysignVoteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgKeysignVoteResponse();
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

  fromJSON(object: any): MsgKeysignVoteResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgKeysignVoteResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgKeysignVoteResponse>, I>>(object: I): MsgKeysignVoteResponse {
    const message = createBaseMsgKeysignVoteResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgUpdateGasFee(): MsgUpdateGasFee {
  return { creator: "", chainId: "", fee: "" };
}

export const MsgUpdateGasFee = {
  encode(message: MsgUpdateGasFee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainId !== "") {
      writer.uint32(18).string(message.chainId);
    }
    if (message.fee !== "") {
      writer.uint32(26).string(message.fee);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGasFee {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGasFee();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainId = reader.string();
          break;
        case 3:
          message.fee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateGasFee {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainId: isSet(object.chainId) ? String(object.chainId) : "",
      fee: isSet(object.fee) ? String(object.fee) : "",
    };
  },

  toJSON(message: MsgUpdateGasFee): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainId !== undefined && (obj.chainId = message.chainId);
    message.fee !== undefined && (obj.fee = message.fee);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateGasFee>, I>>(object: I): MsgUpdateGasFee {
    const message = createBaseMsgUpdateGasFee();
    message.creator = object.creator ?? "";
    message.chainId = object.chainId ?? "";
    message.fee = object.fee ?? "";
    return message;
  },
};

function createBaseMsgUpdateGasFeeResponse(): MsgUpdateGasFeeResponse {
  return { code: "", msg: "" };
}

export const MsgUpdateGasFeeResponse = {
  encode(message: MsgUpdateGasFeeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateGasFeeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateGasFeeResponse();
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

  fromJSON(object: any): MsgUpdateGasFeeResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgUpdateGasFeeResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateGasFeeResponse>, I>>(object: I): MsgUpdateGasFeeResponse {
    const message = createBaseMsgUpdateGasFeeResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgProvisionTransaction(): MsgProvisionTransaction {
  return { creator: "", fromChain: "", fromAddress: "", symbol: "", tokenAddr: "", amount: "", options: "" };
}

export const MsgProvisionTransaction = {
  encode(message: MsgProvisionTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.fromChain !== "") {
      writer.uint32(18).string(message.fromChain);
    }
    if (message.fromAddress !== "") {
      writer.uint32(26).string(message.fromAddress);
    }
    if (message.symbol !== "") {
      writer.uint32(34).string(message.symbol);
    }
    if (message.tokenAddr !== "") {
      writer.uint32(42).string(message.tokenAddr);
    }
    if (message.amount !== "") {
      writer.uint32(50).string(message.amount);
    }
    if (message.options !== "") {
      writer.uint32(58).string(message.options);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProvisionTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProvisionTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.fromChain = reader.string();
          break;
        case 3:
          message.fromAddress = reader.string();
          break;
        case 4:
          message.symbol = reader.string();
          break;
        case 5:
          message.tokenAddr = reader.string();
          break;
        case 6:
          message.amount = reader.string();
          break;
        case 7:
          message.options = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgProvisionTransaction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      fromChain: isSet(object.fromChain) ? String(object.fromChain) : "",
      fromAddress: isSet(object.fromAddress) ? String(object.fromAddress) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      tokenAddr: isSet(object.tokenAddr) ? String(object.tokenAddr) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      options: isSet(object.options) ? String(object.options) : "",
    };
  },

  toJSON(message: MsgProvisionTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.fromChain !== undefined && (obj.fromChain = message.fromChain);
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.tokenAddr !== undefined && (obj.tokenAddr = message.tokenAddr);
    message.amount !== undefined && (obj.amount = message.amount);
    message.options !== undefined && (obj.options = message.options);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgProvisionTransaction>, I>>(object: I): MsgProvisionTransaction {
    const message = createBaseMsgProvisionTransaction();
    message.creator = object.creator ?? "";
    message.fromChain = object.fromChain ?? "";
    message.fromAddress = object.fromAddress ?? "";
    message.symbol = object.symbol ?? "";
    message.tokenAddr = object.tokenAddr ?? "";
    message.amount = object.amount ?? "";
    message.options = object.options ?? "";
    return message;
  },
};

function createBaseMsgProvisionTransactionResponse(): MsgProvisionTransactionResponse {
  return { code: "", msg: "" };
}

export const MsgProvisionTransactionResponse = {
  encode(message: MsgProvisionTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgProvisionTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgProvisionTransactionResponse();
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

  fromJSON(object: any): MsgProvisionTransactionResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgProvisionTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgProvisionTransactionResponse>, I>>(
    object: I,
  ): MsgProvisionTransactionResponse {
    const message = createBaseMsgProvisionTransactionResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgDrainTransaction(): MsgDrainTransaction {
  return { creator: "", fromChain: "", toChain: "", toAddress: "", nftAddr: "", amount: "", options: "" };
}

export const MsgDrainTransaction = {
  encode(message: MsgDrainTransaction, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.fromChain !== "") {
      writer.uint32(18).string(message.fromChain);
    }
    if (message.toChain !== "") {
      writer.uint32(26).string(message.toChain);
    }
    if (message.toAddress !== "") {
      writer.uint32(34).string(message.toAddress);
    }
    if (message.nftAddr !== "") {
      writer.uint32(42).string(message.nftAddr);
    }
    if (message.amount !== "") {
      writer.uint32(50).string(message.amount);
    }
    if (message.options !== "") {
      writer.uint32(58).string(message.options);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrainTransaction {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDrainTransaction();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.fromChain = reader.string();
          break;
        case 3:
          message.toChain = reader.string();
          break;
        case 4:
          message.toAddress = reader.string();
          break;
        case 5:
          message.nftAddr = reader.string();
          break;
        case 6:
          message.amount = reader.string();
          break;
        case 7:
          message.options = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDrainTransaction {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      fromChain: isSet(object.fromChain) ? String(object.fromChain) : "",
      toChain: isSet(object.toChain) ? String(object.toChain) : "",
      toAddress: isSet(object.toAddress) ? String(object.toAddress) : "",
      nftAddr: isSet(object.nftAddr) ? String(object.nftAddr) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      options: isSet(object.options) ? String(object.options) : "",
    };
  },

  toJSON(message: MsgDrainTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.fromChain !== undefined && (obj.fromChain = message.fromChain);
    message.toChain !== undefined && (obj.toChain = message.toChain);
    message.toAddress !== undefined && (obj.toAddress = message.toAddress);
    message.nftAddr !== undefined && (obj.nftAddr = message.nftAddr);
    message.amount !== undefined && (obj.amount = message.amount);
    message.options !== undefined && (obj.options = message.options);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDrainTransaction>, I>>(object: I): MsgDrainTransaction {
    const message = createBaseMsgDrainTransaction();
    message.creator = object.creator ?? "";
    message.fromChain = object.fromChain ?? "";
    message.toChain = object.toChain ?? "";
    message.toAddress = object.toAddress ?? "";
    message.nftAddr = object.nftAddr ?? "";
    message.amount = object.amount ?? "";
    message.options = object.options ?? "";
    return message;
  },
};

function createBaseMsgDrainTransactionResponse(): MsgDrainTransactionResponse {
  return { code: "", msg: "" };
}

export const MsgDrainTransactionResponse = {
  encode(message: MsgDrainTransactionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDrainTransactionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgDrainTransactionResponse();
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

  fromJSON(object: any): MsgDrainTransactionResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgDrainTransactionResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgDrainTransactionResponse>, I>>(object: I): MsgDrainTransactionResponse {
    const message = createBaseMsgDrainTransactionResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
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

function createBaseMsgAddWhitelisted(): MsgAddWhitelisted {
  return { creator: "", address: "" };
}

export const MsgAddWhitelisted = {
  encode(message: MsgAddWhitelisted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddWhitelisted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddWhitelisted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddWhitelisted {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: MsgAddWhitelisted): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddWhitelisted>, I>>(object: I): MsgAddWhitelisted {
    const message = createBaseMsgAddWhitelisted();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgAddWhitelistedResponse(): MsgAddWhitelistedResponse {
  return { code: "", msg: "" };
}

export const MsgAddWhitelistedResponse = {
  encode(message: MsgAddWhitelistedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddWhitelistedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddWhitelistedResponse();
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

  fromJSON(object: any): MsgAddWhitelistedResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgAddWhitelistedResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddWhitelistedResponse>, I>>(object: I): MsgAddWhitelistedResponse {
    const message = createBaseMsgAddWhitelistedResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgSetAdmin(): MsgSetAdmin {
  return { creator: "" };
}

export const MsgSetAdmin = {
  encode(message: MsgSetAdmin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAdmin {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAdmin();
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

  fromJSON(object: any): MsgSetAdmin {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgSetAdmin): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetAdmin>, I>>(object: I): MsgSetAdmin {
    const message = createBaseMsgSetAdmin();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgSetAdminResponse(): MsgSetAdminResponse {
  return { code: "", msg: "" };
}

export const MsgSetAdminResponse = {
  encode(message: MsgSetAdminResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSetAdminResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSetAdminResponse();
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

  fromJSON(object: any): MsgSetAdminResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgSetAdminResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetAdminResponse>, I>>(object: I): MsgSetAdminResponse {
    const message = createBaseMsgSetAdminResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgAddPubkey(): MsgAddPubkey {
  return { creator: "", pubkey: "" };
}

export const MsgAddPubkey = {
  encode(message: MsgAddPubkey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pubkey !== "") {
      writer.uint32(18).string(message.pubkey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddPubkey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPubkey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pubkey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddPubkey {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pubkey: isSet(object.pubkey) ? String(object.pubkey) : "",
    };
  },

  toJSON(message: MsgAddPubkey): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddPubkey>, I>>(object: I): MsgAddPubkey {
    const message = createBaseMsgAddPubkey();
    message.creator = object.creator ?? "";
    message.pubkey = object.pubkey ?? "";
    return message;
  },
};

function createBaseMsgAddPubkeyResponse(): MsgAddPubkeyResponse {
  return { code: "", msg: "" };
}

export const MsgAddPubkeyResponse = {
  encode(message: MsgAddPubkeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddPubkeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPubkeyResponse();
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

  fromJSON(object: any): MsgAddPubkeyResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgAddPubkeyResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddPubkeyResponse>, I>>(object: I): MsgAddPubkeyResponse {
    const message = createBaseMsgAddPubkeyResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgUpdatePubkeys(): MsgUpdatePubkeys {
  return { creator: "", pubkeys: [] };
}

export const MsgUpdatePubkeys = {
  encode(message: MsgUpdatePubkeys, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    for (const v of message.pubkeys) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePubkeys {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePubkeys();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pubkeys.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePubkeys {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pubkeys: Array.isArray(object?.pubkeys) ? object.pubkeys.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: MsgUpdatePubkeys): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.pubkeys) {
      obj.pubkeys = message.pubkeys.map((e) => e);
    } else {
      obj.pubkeys = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdatePubkeys>, I>>(object: I): MsgUpdatePubkeys {
    const message = createBaseMsgUpdatePubkeys();
    message.creator = object.creator ?? "";
    message.pubkeys = object.pubkeys?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgUpdatePubkeysResponse(): MsgUpdatePubkeysResponse {
  return { code: "", msg: "" };
}

export const MsgUpdatePubkeysResponse = {
  encode(message: MsgUpdatePubkeysResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePubkeysResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePubkeysResponse();
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

  fromJSON(object: any): MsgUpdatePubkeysResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgUpdatePubkeysResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdatePubkeysResponse>, I>>(object: I): MsgUpdatePubkeysResponse {
    const message = createBaseMsgUpdatePubkeysResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgUpdateTssPubkey(): MsgUpdateTssPubkey {
  return { creator: "", tssPubkey: "", ecdsa: "", eddsa: "", reserved: "" };
}

export const MsgUpdateTssPubkey = {
  encode(message: MsgUpdateTssPubkey, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.tssPubkey !== "") {
      writer.uint32(18).string(message.tssPubkey);
    }
    if (message.ecdsa !== "") {
      writer.uint32(26).string(message.ecdsa);
    }
    if (message.eddsa !== "") {
      writer.uint32(34).string(message.eddsa);
    }
    if (message.reserved !== "") {
      writer.uint32(42).string(message.reserved);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTssPubkey {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTssPubkey();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.tssPubkey = reader.string();
          break;
        case 3:
          message.ecdsa = reader.string();
          break;
        case 4:
          message.eddsa = reader.string();
          break;
        case 5:
          message.reserved = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTssPubkey {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      tssPubkey: isSet(object.tssPubkey) ? String(object.tssPubkey) : "",
      ecdsa: isSet(object.ecdsa) ? String(object.ecdsa) : "",
      eddsa: isSet(object.eddsa) ? String(object.eddsa) : "",
      reserved: isSet(object.reserved) ? String(object.reserved) : "",
    };
  },

  toJSON(message: MsgUpdateTssPubkey): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.tssPubkey !== undefined && (obj.tssPubkey = message.tssPubkey);
    message.ecdsa !== undefined && (obj.ecdsa = message.ecdsa);
    message.eddsa !== undefined && (obj.eddsa = message.eddsa);
    message.reserved !== undefined && (obj.reserved = message.reserved);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateTssPubkey>, I>>(object: I): MsgUpdateTssPubkey {
    const message = createBaseMsgUpdateTssPubkey();
    message.creator = object.creator ?? "";
    message.tssPubkey = object.tssPubkey ?? "";
    message.ecdsa = object.ecdsa ?? "";
    message.eddsa = object.eddsa ?? "";
    message.reserved = object.reserved ?? "";
    return message;
  },
};

function createBaseMsgUpdateTssPubkeyResponse(): MsgUpdateTssPubkeyResponse {
  return { code: "", msg: "" };
}

export const MsgUpdateTssPubkeyResponse = {
  encode(message: MsgUpdateTssPubkeyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTssPubkeyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTssPubkeyResponse();
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

  fromJSON(object: any): MsgUpdateTssPubkeyResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgUpdateTssPubkeyResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateTssPubkeyResponse>, I>>(object: I): MsgUpdateTssPubkeyResponse {
    const message = createBaseMsgUpdateTssPubkeyResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgRemoveWhitelisted(): MsgRemoveWhitelisted {
  return { creator: "", address: "" };
}

export const MsgRemoveWhitelisted = {
  encode(message: MsgRemoveWhitelisted, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveWhitelisted {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveWhitelisted();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRemoveWhitelisted {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: MsgRemoveWhitelisted): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveWhitelisted>, I>>(object: I): MsgRemoveWhitelisted {
    const message = createBaseMsgRemoveWhitelisted();
    message.creator = object.creator ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgRemoveWhitelistedResponse(): MsgRemoveWhitelistedResponse {
  return { code: "", msg: "" };
}

export const MsgRemoveWhitelistedResponse = {
  encode(message: MsgRemoveWhitelistedResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRemoveWhitelistedResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgRemoveWhitelistedResponse();
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

  fromJSON(object: any): MsgRemoveWhitelistedResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgRemoveWhitelistedResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgRemoveWhitelistedResponse>, I>>(object: I): MsgRemoveWhitelistedResponse {
    const message = createBaseMsgRemoveWhitelistedResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgClearTssInfo(): MsgClearTssInfo {
  return { creator: "" };
}

export const MsgClearTssInfo = {
  encode(message: MsgClearTssInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearTssInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearTssInfo();
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

  fromJSON(object: any): MsgClearTssInfo {
    return { creator: isSet(object.creator) ? String(object.creator) : "" };
  },

  toJSON(message: MsgClearTssInfo): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClearTssInfo>, I>>(object: I): MsgClearTssInfo {
    const message = createBaseMsgClearTssInfo();
    message.creator = object.creator ?? "";
    return message;
  },
};

function createBaseMsgClearTssInfoResponse(): MsgClearTssInfoResponse {
  return { code: "", msg: "" };
}

export const MsgClearTssInfoResponse = {
  encode(message: MsgClearTssInfoResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgClearTssInfoResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgClearTssInfoResponse();
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

  fromJSON(object: any): MsgClearTssInfoResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgClearTssInfoResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgClearTssInfoResponse>, I>>(object: I): MsgClearTssInfoResponse {
    const message = createBaseMsgClearTssInfoResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgAddChain(): MsgAddChain {
  return { creator: "", name: "", symbol: "", tokens: [] };
}

export const MsgAddChain = {
  encode(message: MsgAddChain, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    for (const v of message.tokens) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddChain {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddChain();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.tokens.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddChain {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      tokens: Array.isArray(object?.tokens) ? object.tokens.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: MsgAddChain): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    if (message.tokens) {
      obj.tokens = message.tokens.map((e) => e);
    } else {
      obj.tokens = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddChain>, I>>(object: I): MsgAddChain {
    const message = createBaseMsgAddChain();
    message.creator = object.creator ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.tokens = object.tokens?.map((e) => e) || [];
    return message;
  },
};

function createBaseMsgAddChainResponse(): MsgAddChainResponse {
  return { code: "", msg: "" };
}

export const MsgAddChainResponse = {
  encode(message: MsgAddChainResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddChainResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddChainResponse();
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

  fromJSON(object: any): MsgAddChainResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgAddChainResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddChainResponse>, I>>(object: I): MsgAddChainResponse {
    const message = createBaseMsgAddChainResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgUpdateTssHash(): MsgUpdateTssHash {
  return { creator: "", txId: 0, tssPullHash: "" };
}

export const MsgUpdateTssHash = {
  encode(message: MsgUpdateTssHash, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.txId !== 0) {
      writer.uint32(16).uint64(message.txId);
    }
    if (message.tssPullHash !== "") {
      writer.uint32(26).string(message.tssPullHash);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTssHash {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTssHash();
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
          message.tssPullHash = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTssHash {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      txId: isSet(object.txId) ? Number(object.txId) : 0,
      tssPullHash: isSet(object.tssPullHash) ? String(object.tssPullHash) : "",
    };
  },

  toJSON(message: MsgUpdateTssHash): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txId !== undefined && (obj.txId = Math.round(message.txId));
    message.tssPullHash !== undefined && (obj.tssPullHash = message.tssPullHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateTssHash>, I>>(object: I): MsgUpdateTssHash {
    const message = createBaseMsgUpdateTssHash();
    message.creator = object.creator ?? "";
    message.txId = object.txId ?? 0;
    message.tssPullHash = object.tssPullHash ?? "";
    return message;
  },
};

function createBaseMsgUpdateTssHashResponse(): MsgUpdateTssHashResponse {
  return { code: "", msg: "" };
}

export const MsgUpdateTssHashResponse = {
  encode(message: MsgUpdateTssHashResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTssHashResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTssHashResponse();
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

  fromJSON(object: any): MsgUpdateTssHashResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgUpdateTssHashResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateTssHashResponse>, I>>(object: I): MsgUpdateTssHashResponse {
    const message = createBaseMsgUpdateTssHashResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgUpdateChainStatus(): MsgUpdateChainStatus {
  return { creator: "", chainSymbol: "", disabled: false };
}

export const MsgUpdateChainStatus = {
  encode(message: MsgUpdateChainStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainSymbol !== "") {
      writer.uint32(18).string(message.chainSymbol);
    }
    if (message.disabled === true) {
      writer.uint32(24).bool(message.disabled);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateChainStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateChainStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainSymbol = reader.string();
          break;
        case 3:
          message.disabled = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateChainStatus {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainSymbol: isSet(object.chainSymbol) ? String(object.chainSymbol) : "",
      disabled: isSet(object.disabled) ? Boolean(object.disabled) : false,
    };
  },

  toJSON(message: MsgUpdateChainStatus): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainSymbol !== undefined && (obj.chainSymbol = message.chainSymbol);
    message.disabled !== undefined && (obj.disabled = message.disabled);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateChainStatus>, I>>(object: I): MsgUpdateChainStatus {
    const message = createBaseMsgUpdateChainStatus();
    message.creator = object.creator ?? "";
    message.chainSymbol = object.chainSymbol ?? "";
    message.disabled = object.disabled ?? false;
    return message;
  },
};

function createBaseMsgUpdateChainStatusResponse(): MsgUpdateChainStatusResponse {
  return { code: "", msg: "" };
}

export const MsgUpdateChainStatusResponse = {
  encode(message: MsgUpdateChainStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateChainStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateChainStatusResponse();
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

  fromJSON(object: any): MsgUpdateChainStatusResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgUpdateChainStatusResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateChainStatusResponse>, I>>(object: I): MsgUpdateChainStatusResponse {
    const message = createBaseMsgUpdateChainStatusResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgAddToken(): MsgAddToken {
  return { creator: "", chainSymbol: "", tokenSymbol: "" };
}

export const MsgAddToken = {
  encode(message: MsgAddToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chainSymbol !== "") {
      writer.uint32(18).string(message.chainSymbol);
    }
    if (message.tokenSymbol !== "") {
      writer.uint32(26).string(message.tokenSymbol);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddToken();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.chainSymbol = reader.string();
          break;
        case 3:
          message.tokenSymbol = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chainSymbol: isSet(object.chainSymbol) ? String(object.chainSymbol) : "",
      tokenSymbol: isSet(object.tokenSymbol) ? String(object.tokenSymbol) : "",
    };
  },

  toJSON(message: MsgAddToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chainSymbol !== undefined && (obj.chainSymbol = message.chainSymbol);
    message.tokenSymbol !== undefined && (obj.tokenSymbol = message.tokenSymbol);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddToken>, I>>(object: I): MsgAddToken {
    const message = createBaseMsgAddToken();
    message.creator = object.creator ?? "";
    message.chainSymbol = object.chainSymbol ?? "";
    message.tokenSymbol = object.tokenSymbol ?? "";
    return message;
  },
};

function createBaseMsgAddTokenResponse(): MsgAddTokenResponse {
  return { code: "", msg: "" };
}

export const MsgAddTokenResponse = {
  encode(message: MsgAddTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddTokenResponse();
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

  fromJSON(object: any): MsgAddTokenResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgAddTokenResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddTokenResponse>, I>>(object: I): MsgAddTokenResponse {
    const message = createBaseMsgAddTokenResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgUpdateTssStatus(): MsgUpdateTssStatus {
  return { creator: "", status: "" };
}

export const MsgUpdateTssStatus = {
  encode(message: MsgUpdateTssStatus, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.status !== "") {
      writer.uint32(18).string(message.status);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTssStatus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTssStatus();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.status = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateTssStatus {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      status: isSet(object.status) ? String(object.status) : "",
    };
  },

  toJSON(message: MsgUpdateTssStatus): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.status !== undefined && (obj.status = message.status);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateTssStatus>, I>>(object: I): MsgUpdateTssStatus {
    const message = createBaseMsgUpdateTssStatus();
    message.creator = object.creator ?? "";
    message.status = object.status ?? "";
    return message;
  },
};

function createBaseMsgUpdateTssStatusResponse(): MsgUpdateTssStatusResponse {
  return { code: "", msg: "" };
}

export const MsgUpdateTssStatusResponse = {
  encode(message: MsgUpdateTssStatusResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTssStatusResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTssStatusResponse();
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

  fromJSON(object: any): MsgUpdateTssStatusResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgUpdateTssStatusResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateTssStatusResponse>, I>>(object: I): MsgUpdateTssStatusResponse {
    const message = createBaseMsgUpdateTssStatusResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

function createBaseMsgSetTxHash(): MsgSetTxHash {
  return { creator: "", txId: 0, txHash: "" };
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
    };
  },

  toJSON(message: MsgSetTxHash): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txId !== undefined && (obj.txId = Math.round(message.txId));
    message.txHash !== undefined && (obj.txHash = message.txHash);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetTxHash>, I>>(object: I): MsgSetTxHash {
    const message = createBaseMsgSetTxHash();
    message.creator = object.creator ?? "";
    message.txId = object.txId ?? 0;
    message.txHash = object.txHash ?? "";
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
  return { creator: "", txId: 0, timestamp: "", msgId: "" };
}

export const MsgSetTxProcess = {
  encode(message: MsgSetTxProcess, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.txId !== 0) {
      writer.uint32(16).uint64(message.txId);
    }
    if (message.timestamp !== "") {
      writer.uint32(26).string(message.timestamp);
    }
    if (message.msgId !== "") {
      writer.uint32(34).string(message.msgId);
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
          message.timestamp = reader.string();
          break;
        case 4:
          message.msgId = reader.string();
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
      timestamp: isSet(object.timestamp) ? String(object.timestamp) : "",
      msgId: isSet(object.msgId) ? String(object.msgId) : "",
    };
  },

  toJSON(message: MsgSetTxProcess): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txId !== undefined && (obj.txId = Math.round(message.txId));
    message.timestamp !== undefined && (obj.timestamp = message.timestamp);
    message.msgId !== undefined && (obj.msgId = message.msgId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSetTxProcess>, I>>(object: I): MsgSetTxProcess {
    const message = createBaseMsgSetTxProcess();
    message.creator = object.creator ?? "";
    message.txId = object.txId ?? 0;
    message.timestamp = object.timestamp ?? "";
    message.msgId = object.msgId ?? "";
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

function createBaseMsgFinalizeTransaction(): MsgFinalizeTransaction {
  return { creator: "", txId: 0, txHash: "", success: "", signedKey: "" };
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
    if (message.success !== "") {
      writer.uint32(34).string(message.success);
    }
    if (message.signedKey !== "") {
      writer.uint32(42).string(message.signedKey);
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
          message.success = reader.string();
          break;
        case 5:
          message.signedKey = reader.string();
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
      success: isSet(object.success) ? String(object.success) : "",
      signedKey: isSet(object.signedKey) ? String(object.signedKey) : "",
    };
  },

  toJSON(message: MsgFinalizeTransaction): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.txId !== undefined && (obj.txId = Math.round(message.txId));
    message.txHash !== undefined && (obj.txHash = message.txHash);
    message.success !== undefined && (obj.success = message.success);
    message.signedKey !== undefined && (obj.signedKey = message.signedKey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgFinalizeTransaction>, I>>(object: I): MsgFinalizeTransaction {
    const message = createBaseMsgFinalizeTransaction();
    message.creator = object.creator ?? "";
    message.txId = object.txId ?? 0;
    message.txHash = object.txHash ?? "";
    message.success = object.success ?? "";
    message.signedKey = object.signedKey ?? "";
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

function createBaseMsgWithdrawPool(): MsgWithdrawPool {
  return { creator: "", chain: "", targetAddress: "", amount: "" };
}

export const MsgWithdrawPool = {
  encode(message: MsgWithdrawPool, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.targetAddress !== "") {
      writer.uint32(26).string(message.targetAddress);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawPool {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawPool();
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
          message.targetAddress = reader.string();
          break;
        case 4:
          message.amount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgWithdrawPool {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chain: isSet(object.chain) ? String(object.chain) : "",
      targetAddress: isSet(object.targetAddress) ? String(object.targetAddress) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
    };
  },

  toJSON(message: MsgWithdrawPool): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chain !== undefined && (obj.chain = message.chain);
    message.targetAddress !== undefined && (obj.targetAddress = message.targetAddress);
    message.amount !== undefined && (obj.amount = message.amount);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawPool>, I>>(object: I): MsgWithdrawPool {
    const message = createBaseMsgWithdrawPool();
    message.creator = object.creator ?? "";
    message.chain = object.chain ?? "";
    message.targetAddress = object.targetAddress ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
};

function createBaseMsgWithdrawPoolResponse(): MsgWithdrawPoolResponse {
  return {};
}

export const MsgWithdrawPoolResponse = {
  encode(_: MsgWithdrawPoolResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgWithdrawPoolResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgWithdrawPoolResponse();
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

  fromJSON(_: any): MsgWithdrawPoolResponse {
    return {};
  },

  toJSON(_: MsgWithdrawPoolResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgWithdrawPoolResponse>, I>>(_: I): MsgWithdrawPoolResponse {
    const message = createBaseMsgWithdrawPoolResponse();
    return message;
  },
};

function createBaseMsgUpdateToken(): MsgUpdateToken {
  return { creator: "", chain: "", address: "" };
}

export const MsgUpdateToken = {
  encode(message: MsgUpdateToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.chain !== "") {
      writer.uint32(18).string(message.chain);
    }
    if (message.address !== "") {
      writer.uint32(26).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateToken();
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
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateToken {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      chain: isSet(object.chain) ? String(object.chain) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: MsgUpdateToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.chain !== undefined && (obj.chain = message.chain);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateToken>, I>>(object: I): MsgUpdateToken {
    const message = createBaseMsgUpdateToken();
    message.creator = object.creator ?? "";
    message.chain = object.chain ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgUpdateTokenResponse(): MsgUpdateTokenResponse {
  return {};
}

export const MsgUpdateTokenResponse = {
  encode(_: MsgUpdateTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateTokenResponse();
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

  fromJSON(_: any): MsgUpdateTokenResponse {
    return {};
  },

  toJSON(_: MsgUpdateTokenResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateTokenResponse>, I>>(_: I): MsgUpdateTokenResponse {
    const message = createBaseMsgUpdateTokenResponse();
    return message;
  },
};

function createBaseMsgUpdatePoolRequest(): MsgUpdatePoolRequest {
  return { creator: "", reqId: 0, processed: "" };
}

export const MsgUpdatePoolRequest = {
  encode(message: MsgUpdatePoolRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.reqId !== 0) {
      writer.uint32(16).uint64(message.reqId);
    }
    if (message.processed !== "") {
      writer.uint32(26).string(message.processed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePoolRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePoolRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.reqId = longToNumber(reader.uint64() as Long);
          break;
        case 3:
          message.processed = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdatePoolRequest {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      reqId: isSet(object.reqId) ? Number(object.reqId) : 0,
      processed: isSet(object.processed) ? String(object.processed) : "",
    };
  },

  toJSON(message: MsgUpdatePoolRequest): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.reqId !== undefined && (obj.reqId = Math.round(message.reqId));
    message.processed !== undefined && (obj.processed = message.processed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdatePoolRequest>, I>>(object: I): MsgUpdatePoolRequest {
    const message = createBaseMsgUpdatePoolRequest();
    message.creator = object.creator ?? "";
    message.reqId = object.reqId ?? 0;
    message.processed = object.processed ?? "";
    return message;
  },
};

function createBaseMsgUpdatePoolRequestResponse(): MsgUpdatePoolRequestResponse {
  return {};
}

export const MsgUpdatePoolRequestResponse = {
  encode(_: MsgUpdatePoolRequestResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdatePoolRequestResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdatePoolRequestResponse();
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

  fromJSON(_: any): MsgUpdatePoolRequestResponse {
    return {};
  },

  toJSON(_: MsgUpdatePoolRequestResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdatePoolRequestResponse>, I>>(_: I): MsgUpdatePoolRequestResponse {
    const message = createBaseMsgUpdatePoolRequestResponse();
    return message;
  },
};

function createBaseMsgLeaderIsReady(): MsgLeaderIsReady {
  return { creator: "", msgId: "", peerId: "" };
}

export const MsgLeaderIsReady = {
  encode(message: MsgLeaderIsReady, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.msgId !== "") {
      writer.uint32(18).string(message.msgId);
    }
    if (message.peerId !== "") {
      writer.uint32(26).string(message.peerId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaderIsReady {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaderIsReady();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.msgId = reader.string();
          break;
        case 3:
          message.peerId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLeaderIsReady {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      msgId: isSet(object.msgId) ? String(object.msgId) : "",
      peerId: isSet(object.peerId) ? String(object.peerId) : "",
    };
  },

  toJSON(message: MsgLeaderIsReady): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.msgId !== undefined && (obj.msgId = message.msgId);
    message.peerId !== undefined && (obj.peerId = message.peerId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLeaderIsReady>, I>>(object: I): MsgLeaderIsReady {
    const message = createBaseMsgLeaderIsReady();
    message.creator = object.creator ?? "";
    message.msgId = object.msgId ?? "";
    message.peerId = object.peerId ?? "";
    return message;
  },
};

function createBaseMsgLeaderIsReadyResponse(): MsgLeaderIsReadyResponse {
  return {};
}

export const MsgLeaderIsReadyResponse = {
  encode(_: MsgLeaderIsReadyResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgLeaderIsReadyResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgLeaderIsReadyResponse();
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

  fromJSON(_: any): MsgLeaderIsReadyResponse {
    return {};
  },

  toJSON(_: MsgLeaderIsReadyResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgLeaderIsReadyResponse>, I>>(_: I): MsgLeaderIsReadyResponse {
    const message = createBaseMsgLeaderIsReadyResponse();
    return message;
  },
};

function createBaseMsgAddPubkeyEddsa(): MsgAddPubkeyEddsa {
  return { creator: "", pubkey: "" };
}

export const MsgAddPubkeyEddsa = {
  encode(message: MsgAddPubkeyEddsa, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.pubkey !== "") {
      writer.uint32(18).string(message.pubkey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddPubkeyEddsa {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPubkeyEddsa();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.pubkey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAddPubkeyEddsa {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      pubkey: isSet(object.pubkey) ? String(object.pubkey) : "",
    };
  },

  toJSON(message: MsgAddPubkeyEddsa): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.pubkey !== undefined && (obj.pubkey = message.pubkey);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddPubkeyEddsa>, I>>(object: I): MsgAddPubkeyEddsa {
    const message = createBaseMsgAddPubkeyEddsa();
    message.creator = object.creator ?? "";
    message.pubkey = object.pubkey ?? "";
    return message;
  },
};

function createBaseMsgAddPubkeyEddsaResponse(): MsgAddPubkeyEddsaResponse {
  return { code: "", msg: "" };
}

export const MsgAddPubkeyEddsaResponse = {
  encode(message: MsgAddPubkeyEddsaResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.code !== "") {
      writer.uint32(10).string(message.code);
    }
    if (message.msg !== "") {
      writer.uint32(18).string(message.msg);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgAddPubkeyEddsaResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgAddPubkeyEddsaResponse();
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

  fromJSON(object: any): MsgAddPubkeyEddsaResponse {
    return { code: isSet(object.code) ? String(object.code) : "", msg: isSet(object.msg) ? String(object.msg) : "" };
  },

  toJSON(message: MsgAddPubkeyEddsaResponse): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = message.code);
    message.msg !== undefined && (obj.msg = message.msg);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgAddPubkeyEddsaResponse>, I>>(object: I): MsgAddPubkeyEddsaResponse {
    const message = createBaseMsgAddPubkeyEddsaResponse();
    message.code = object.code ?? "";
    message.msg = object.msg ?? "";
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  RequestTransaction(request: MsgRequestTransaction): Promise<MsgRequestTransactionResponse>;
  ApproveTransaction(request: MsgApproveTransaction): Promise<MsgApproveTransactionResponse>;
  ObservationVote(request: MsgObservationVote): Promise<MsgObservationVoteResponse>;
  UpdateBalance(request: MsgUpdateBalance): Promise<MsgUpdateBalanceResponse>;
  KeysignVote(request: MsgKeysignVote): Promise<MsgKeysignVoteResponse>;
  UpdateGasFee(request: MsgUpdateGasFee): Promise<MsgUpdateGasFeeResponse>;
  ProvisionTransaction(request: MsgProvisionTransaction): Promise<MsgProvisionTransactionResponse>;
  DrainTransaction(request: MsgDrainTransaction): Promise<MsgDrainTransactionResponse>;
  CancelTransaction(request: MsgCancelTransaction): Promise<MsgCancelTransactionResponse>;
  AddWhitelisted(request: MsgAddWhitelisted): Promise<MsgAddWhitelistedResponse>;
  SetAdmin(request: MsgSetAdmin): Promise<MsgSetAdminResponse>;
  AddPubkey(request: MsgAddPubkey): Promise<MsgAddPubkeyResponse>;
  UpdatePubkeys(request: MsgUpdatePubkeys): Promise<MsgUpdatePubkeysResponse>;
  UpdateTssPubkey(request: MsgUpdateTssPubkey): Promise<MsgUpdateTssPubkeyResponse>;
  RemoveWhitelisted(request: MsgRemoveWhitelisted): Promise<MsgRemoveWhitelistedResponse>;
  ClearTssInfo(request: MsgClearTssInfo): Promise<MsgClearTssInfoResponse>;
  AddChain(request: MsgAddChain): Promise<MsgAddChainResponse>;
  UpdateTssHash(request: MsgUpdateTssHash): Promise<MsgUpdateTssHashResponse>;
  UpdateChainStatus(request: MsgUpdateChainStatus): Promise<MsgUpdateChainStatusResponse>;
  AddToken(request: MsgAddToken): Promise<MsgAddTokenResponse>;
  UpdateTssStatus(request: MsgUpdateTssStatus): Promise<MsgUpdateTssStatusResponse>;
  SetTxHash(request: MsgSetTxHash): Promise<MsgSetTxHashResponse>;
  SetTxProcess(request: MsgSetTxProcess): Promise<MsgSetTxProcessResponse>;
  FinalizeTransaction(request: MsgFinalizeTransaction): Promise<MsgFinalizeTransactionResponse>;
  WithdrawPool(request: MsgWithdrawPool): Promise<MsgWithdrawPoolResponse>;
  UpdateToken(request: MsgUpdateToken): Promise<MsgUpdateTokenResponse>;
  UpdatePoolRequest(request: MsgUpdatePoolRequest): Promise<MsgUpdatePoolRequestResponse>;
  LeaderIsReady(request: MsgLeaderIsReady): Promise<MsgLeaderIsReadyResponse>;
  AddPubkeyEddsa(request: MsgAddPubkeyEddsa): Promise<MsgAddPubkeyEddsaResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RequestTransaction = this.RequestTransaction.bind(this);
    this.ApproveTransaction = this.ApproveTransaction.bind(this);
    this.ObservationVote = this.ObservationVote.bind(this);
    this.UpdateBalance = this.UpdateBalance.bind(this);
    this.KeysignVote = this.KeysignVote.bind(this);
    this.UpdateGasFee = this.UpdateGasFee.bind(this);
    this.ProvisionTransaction = this.ProvisionTransaction.bind(this);
    this.DrainTransaction = this.DrainTransaction.bind(this);
    this.CancelTransaction = this.CancelTransaction.bind(this);
    this.AddWhitelisted = this.AddWhitelisted.bind(this);
    this.SetAdmin = this.SetAdmin.bind(this);
    this.AddPubkey = this.AddPubkey.bind(this);
    this.UpdatePubkeys = this.UpdatePubkeys.bind(this);
    this.UpdateTssPubkey = this.UpdateTssPubkey.bind(this);
    this.RemoveWhitelisted = this.RemoveWhitelisted.bind(this);
    this.ClearTssInfo = this.ClearTssInfo.bind(this);
    this.AddChain = this.AddChain.bind(this);
    this.UpdateTssHash = this.UpdateTssHash.bind(this);
    this.UpdateChainStatus = this.UpdateChainStatus.bind(this);
    this.AddToken = this.AddToken.bind(this);
    this.UpdateTssStatus = this.UpdateTssStatus.bind(this);
    this.SetTxHash = this.SetTxHash.bind(this);
    this.SetTxProcess = this.SetTxProcess.bind(this);
    this.FinalizeTransaction = this.FinalizeTransaction.bind(this);
    this.WithdrawPool = this.WithdrawPool.bind(this);
    this.UpdateToken = this.UpdateToken.bind(this);
    this.UpdatePoolRequest = this.UpdatePoolRequest.bind(this);
    this.LeaderIsReady = this.LeaderIsReady.bind(this);
    this.AddPubkeyEddsa = this.AddPubkeyEddsa.bind(this);
  }
  RequestTransaction(request: MsgRequestTransaction): Promise<MsgRequestTransactionResponse> {
    const data = MsgRequestTransaction.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "RequestTransaction", data);
    return promise.then((data) => MsgRequestTransactionResponse.decode(new _m0.Reader(data)));
  }

  ApproveTransaction(request: MsgApproveTransaction): Promise<MsgApproveTransactionResponse> {
    const data = MsgApproveTransaction.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "ApproveTransaction", data);
    return promise.then((data) => MsgApproveTransactionResponse.decode(new _m0.Reader(data)));
  }

  ObservationVote(request: MsgObservationVote): Promise<MsgObservationVoteResponse> {
    const data = MsgObservationVote.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "ObservationVote", data);
    return promise.then((data) => MsgObservationVoteResponse.decode(new _m0.Reader(data)));
  }

  UpdateBalance(request: MsgUpdateBalance): Promise<MsgUpdateBalanceResponse> {
    const data = MsgUpdateBalance.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "UpdateBalance", data);
    return promise.then((data) => MsgUpdateBalanceResponse.decode(new _m0.Reader(data)));
  }

  KeysignVote(request: MsgKeysignVote): Promise<MsgKeysignVoteResponse> {
    const data = MsgKeysignVote.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "KeysignVote", data);
    return promise.then((data) => MsgKeysignVoteResponse.decode(new _m0.Reader(data)));
  }

  UpdateGasFee(request: MsgUpdateGasFee): Promise<MsgUpdateGasFeeResponse> {
    const data = MsgUpdateGasFee.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "UpdateGasFee", data);
    return promise.then((data) => MsgUpdateGasFeeResponse.decode(new _m0.Reader(data)));
  }

  ProvisionTransaction(request: MsgProvisionTransaction): Promise<MsgProvisionTransactionResponse> {
    const data = MsgProvisionTransaction.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "ProvisionTransaction", data);
    return promise.then((data) => MsgProvisionTransactionResponse.decode(new _m0.Reader(data)));
  }

  DrainTransaction(request: MsgDrainTransaction): Promise<MsgDrainTransactionResponse> {
    const data = MsgDrainTransaction.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "DrainTransaction", data);
    return promise.then((data) => MsgDrainTransactionResponse.decode(new _m0.Reader(data)));
  }

  CancelTransaction(request: MsgCancelTransaction): Promise<MsgCancelTransactionResponse> {
    const data = MsgCancelTransaction.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "CancelTransaction", data);
    return promise.then((data) => MsgCancelTransactionResponse.decode(new _m0.Reader(data)));
  }

  AddWhitelisted(request: MsgAddWhitelisted): Promise<MsgAddWhitelistedResponse> {
    const data = MsgAddWhitelisted.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "AddWhitelisted", data);
    return promise.then((data) => MsgAddWhitelistedResponse.decode(new _m0.Reader(data)));
  }

  SetAdmin(request: MsgSetAdmin): Promise<MsgSetAdminResponse> {
    const data = MsgSetAdmin.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "SetAdmin", data);
    return promise.then((data) => MsgSetAdminResponse.decode(new _m0.Reader(data)));
  }

  AddPubkey(request: MsgAddPubkey): Promise<MsgAddPubkeyResponse> {
    const data = MsgAddPubkey.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "AddPubkey", data);
    return promise.then((data) => MsgAddPubkeyResponse.decode(new _m0.Reader(data)));
  }

  UpdatePubkeys(request: MsgUpdatePubkeys): Promise<MsgUpdatePubkeysResponse> {
    const data = MsgUpdatePubkeys.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "UpdatePubkeys", data);
    return promise.then((data) => MsgUpdatePubkeysResponse.decode(new _m0.Reader(data)));
  }

  UpdateTssPubkey(request: MsgUpdateTssPubkey): Promise<MsgUpdateTssPubkeyResponse> {
    const data = MsgUpdateTssPubkey.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "UpdateTssPubkey", data);
    return promise.then((data) => MsgUpdateTssPubkeyResponse.decode(new _m0.Reader(data)));
  }

  RemoveWhitelisted(request: MsgRemoveWhitelisted): Promise<MsgRemoveWhitelistedResponse> {
    const data = MsgRemoveWhitelisted.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "RemoveWhitelisted", data);
    return promise.then((data) => MsgRemoveWhitelistedResponse.decode(new _m0.Reader(data)));
  }

  ClearTssInfo(request: MsgClearTssInfo): Promise<MsgClearTssInfoResponse> {
    const data = MsgClearTssInfo.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "ClearTssInfo", data);
    return promise.then((data) => MsgClearTssInfoResponse.decode(new _m0.Reader(data)));
  }

  AddChain(request: MsgAddChain): Promise<MsgAddChainResponse> {
    const data = MsgAddChain.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "AddChain", data);
    return promise.then((data) => MsgAddChainResponse.decode(new _m0.Reader(data)));
  }

  UpdateTssHash(request: MsgUpdateTssHash): Promise<MsgUpdateTssHashResponse> {
    const data = MsgUpdateTssHash.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "UpdateTssHash", data);
    return promise.then((data) => MsgUpdateTssHashResponse.decode(new _m0.Reader(data)));
  }

  UpdateChainStatus(request: MsgUpdateChainStatus): Promise<MsgUpdateChainStatusResponse> {
    const data = MsgUpdateChainStatus.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "UpdateChainStatus", data);
    return promise.then((data) => MsgUpdateChainStatusResponse.decode(new _m0.Reader(data)));
  }

  AddToken(request: MsgAddToken): Promise<MsgAddTokenResponse> {
    const data = MsgAddToken.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "AddToken", data);
    return promise.then((data) => MsgAddTokenResponse.decode(new _m0.Reader(data)));
  }

  UpdateTssStatus(request: MsgUpdateTssStatus): Promise<MsgUpdateTssStatusResponse> {
    const data = MsgUpdateTssStatus.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "UpdateTssStatus", data);
    return promise.then((data) => MsgUpdateTssStatusResponse.decode(new _m0.Reader(data)));
  }

  SetTxHash(request: MsgSetTxHash): Promise<MsgSetTxHashResponse> {
    const data = MsgSetTxHash.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "SetTxHash", data);
    return promise.then((data) => MsgSetTxHashResponse.decode(new _m0.Reader(data)));
  }

  SetTxProcess(request: MsgSetTxProcess): Promise<MsgSetTxProcessResponse> {
    const data = MsgSetTxProcess.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "SetTxProcess", data);
    return promise.then((data) => MsgSetTxProcessResponse.decode(new _m0.Reader(data)));
  }

  FinalizeTransaction(request: MsgFinalizeTransaction): Promise<MsgFinalizeTransactionResponse> {
    const data = MsgFinalizeTransaction.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "FinalizeTransaction", data);
    return promise.then((data) => MsgFinalizeTransactionResponse.decode(new _m0.Reader(data)));
  }

  WithdrawPool(request: MsgWithdrawPool): Promise<MsgWithdrawPoolResponse> {
    const data = MsgWithdrawPool.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "WithdrawPool", data);
    return promise.then((data) => MsgWithdrawPoolResponse.decode(new _m0.Reader(data)));
  }

  UpdateToken(request: MsgUpdateToken): Promise<MsgUpdateTokenResponse> {
    const data = MsgUpdateToken.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "UpdateToken", data);
    return promise.then((data) => MsgUpdateTokenResponse.decode(new _m0.Reader(data)));
  }

  UpdatePoolRequest(request: MsgUpdatePoolRequest): Promise<MsgUpdatePoolRequestResponse> {
    const data = MsgUpdatePoolRequest.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "UpdatePoolRequest", data);
    return promise.then((data) => MsgUpdatePoolRequestResponse.decode(new _m0.Reader(data)));
  }

  LeaderIsReady(request: MsgLeaderIsReady): Promise<MsgLeaderIsReadyResponse> {
    const data = MsgLeaderIsReady.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "LeaderIsReady", data);
    return promise.then((data) => MsgLeaderIsReadyResponse.decode(new _m0.Reader(data)));
  }

  AddPubkeyEddsa(request: MsgAddPubkeyEddsa): Promise<MsgAddPubkeyEddsaResponse> {
    const data = MsgAddPubkeyEddsa.encode(request).finish();
    const promise = this.rpc.request("kimablockchain.kima.Msg", "AddPubkeyEddsa", data);
    return promise.then((data) => MsgAddPubkeyEddsaResponse.decode(new _m0.Reader(data)));
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
