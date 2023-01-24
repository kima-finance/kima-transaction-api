"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgSetTxHashResponse = exports.MsgSetTxHash = exports.MsgUpdateTssStatusResponse = exports.MsgUpdateTssStatus = exports.MsgAddTokenResponse = exports.MsgAddToken = exports.MsgUpdateChainStatusResponse = exports.MsgUpdateChainStatus = exports.MsgUpdateTssHashResponse = exports.MsgUpdateTssHash = exports.MsgAddChainResponse = exports.MsgAddChain = exports.MsgClearTssInfoResponse = exports.MsgClearTssInfo = exports.MsgRemoveWhitelistedResponse = exports.MsgRemoveWhitelisted = exports.MsgUpdateTssPubkeyResponse = exports.MsgUpdateTssPubkey = exports.MsgAddPubkeyResponse = exports.MsgAddPubkey = exports.MsgSetAdminResponse = exports.MsgSetAdmin = exports.MsgAddWhitelistedResponse = exports.MsgAddWhitelisted = exports.MsgCancelTransactionResponse = exports.MsgCancelTransaction = exports.MsgDrainTransactionResponse = exports.MsgDrainTransaction = exports.MsgProvisionTransactionResponse = exports.MsgProvisionTransaction = exports.MsgUpdateGasFeeResponse = exports.MsgUpdateGasFee = exports.MsgKeysignVoteResponse = exports.MsgKeysignVote = exports.MsgUpdateBalanceResponse = exports.MsgUpdateBalance = exports.MsgObservationVoteResponse = exports.MsgObservationVote = exports.MsgFetchBalanceResponse = exports.MsgFetchBalance = exports.MsgApproveTransactionResponse = exports.MsgApproveTransaction = exports.MsgRequestTransactionResponse = exports.MsgRequestTransaction = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
exports.protobufPackage = "KimaFinance.kima.kima";
const baseMsgRequestTransaction = {
    creator: "",
    originChain: "",
    originAddress: "",
    targetChain: "",
    targetAddress: "",
    symbol: "",
    amount: "",
    fee: "",
};
exports.MsgRequestTransaction = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRequestTransaction };
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
    fromJSON(object) {
        const message = { ...baseMsgRequestTransaction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.originChain !== undefined && object.originChain !== null) {
            message.originChain = String(object.originChain);
        }
        else {
            message.originChain = "";
        }
        if (object.originAddress !== undefined && object.originAddress !== null) {
            message.originAddress = String(object.originAddress);
        }
        else {
            message.originAddress = "";
        }
        if (object.targetChain !== undefined && object.targetChain !== null) {
            message.targetChain = String(object.targetChain);
        }
        else {
            message.targetChain = "";
        }
        if (object.targetAddress !== undefined && object.targetAddress !== null) {
            message.targetAddress = String(object.targetAddress);
        }
        else {
            message.targetAddress = "";
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = String(object.symbol);
        }
        else {
            message.symbol = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = "";
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = String(object.fee);
        }
        else {
            message.fee = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.originChain !== undefined &&
            (obj.originChain = message.originChain);
        message.originAddress !== undefined &&
            (obj.originAddress = message.originAddress);
        message.targetChain !== undefined &&
            (obj.targetChain = message.targetChain);
        message.targetAddress !== undefined &&
            (obj.targetAddress = message.targetAddress);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.amount !== undefined && (obj.amount = message.amount);
        message.fee !== undefined && (obj.fee = message.fee);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRequestTransaction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.originChain !== undefined && object.originChain !== null) {
            message.originChain = object.originChain;
        }
        else {
            message.originChain = "";
        }
        if (object.originAddress !== undefined && object.originAddress !== null) {
            message.originAddress = object.originAddress;
        }
        else {
            message.originAddress = "";
        }
        if (object.targetChain !== undefined && object.targetChain !== null) {
            message.targetChain = object.targetChain;
        }
        else {
            message.targetChain = "";
        }
        if (object.targetAddress !== undefined && object.targetAddress !== null) {
            message.targetAddress = object.targetAddress;
        }
        else {
            message.targetAddress = "";
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        else {
            message.symbol = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = "";
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = object.fee;
        }
        else {
            message.fee = "";
        }
        return message;
    },
};
const baseMsgRequestTransactionResponse = {
    code: "",
    msg: "",
    txId: "",
};
exports.MsgRequestTransactionResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== "") {
            writer.uint32(18).string(message.msg);
        }
        if (message.txId !== "") {
            writer.uint32(26).string(message.txId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRequestTransactionResponse,
        };
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
                    message.txId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgRequestTransactionResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        if (object.txId !== undefined && object.txId !== null) {
            message.txId = String(object.txId);
        }
        else {
            message.txId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.msg !== undefined && (obj.msg = message.msg);
        message.txId !== undefined && (obj.txId = message.txId);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgRequestTransactionResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        if (object.txId !== undefined && object.txId !== null) {
            message.txId = object.txId;
        }
        else {
            message.txId = "";
        }
        return message;
    },
};
const baseMsgApproveTransaction = {
    creator: "",
    txCHash: "",
    txTHash: "",
    success: "",
    signedKey: "",
};
exports.MsgApproveTransaction = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.txCHash !== "") {
            writer.uint32(18).string(message.txCHash);
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgApproveTransaction };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.txCHash = reader.string();
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
    fromJSON(object) {
        const message = { ...baseMsgApproveTransaction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.txCHash !== undefined && object.txCHash !== null) {
            message.txCHash = String(object.txCHash);
        }
        else {
            message.txCHash = "";
        }
        if (object.txTHash !== undefined && object.txTHash !== null) {
            message.txTHash = String(object.txTHash);
        }
        else {
            message.txTHash = "";
        }
        if (object.success !== undefined && object.success !== null) {
            message.success = String(object.success);
        }
        else {
            message.success = "";
        }
        if (object.signedKey !== undefined && object.signedKey !== null) {
            message.signedKey = String(object.signedKey);
        }
        else {
            message.signedKey = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.txCHash !== undefined && (obj.txCHash = message.txCHash);
        message.txTHash !== undefined && (obj.txTHash = message.txTHash);
        message.success !== undefined && (obj.success = message.success);
        message.signedKey !== undefined && (obj.signedKey = message.signedKey);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgApproveTransaction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.txCHash !== undefined && object.txCHash !== null) {
            message.txCHash = object.txCHash;
        }
        else {
            message.txCHash = "";
        }
        if (object.txTHash !== undefined && object.txTHash !== null) {
            message.txTHash = object.txTHash;
        }
        else {
            message.txTHash = "";
        }
        if (object.success !== undefined && object.success !== null) {
            message.success = object.success;
        }
        else {
            message.success = "";
        }
        if (object.signedKey !== undefined && object.signedKey !== null) {
            message.signedKey = object.signedKey;
        }
        else {
            message.signedKey = "";
        }
        return message;
    },
};
const baseMsgApproveTransactionResponse = { code: "", msg: "" };
exports.MsgApproveTransactionResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== "") {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgApproveTransactionResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgApproveTransactionResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgApproveTransactionResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        return message;
    },
};
const baseMsgFetchBalance = { creator: "" };
exports.MsgFetchBalance = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgFetchBalance };
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
    fromJSON(object) {
        const message = { ...baseMsgFetchBalance };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgFetchBalance };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
const baseMsgFetchBalanceResponse = { code: "", result: "" };
exports.MsgFetchBalanceResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.result !== "") {
            writer.uint32(18).string(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgFetchBalanceResponse,
        };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.code = reader.string();
                    break;
                case 2:
                    message.result = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = {
            ...baseMsgFetchBalanceResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = "";
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = String(object.result);
        }
        else {
            message.result = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.result !== undefined && (obj.result = message.result);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgFetchBalanceResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = "";
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        else {
            message.result = "";
        }
        return message;
    },
};
const baseMsgObservationVote = {
    creator: "",
    txHash: "",
    chainId: "",
    from: "",
    to: "",
    amount: "",
    payType: "",
};
exports.MsgObservationVote = {
    encode(message, writer = minimal_1.Writer.create()) {
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
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgObservationVote };
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgObservationVote };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.txHash !== undefined && object.txHash !== null) {
            message.txHash = String(object.txHash);
        }
        else {
            message.txHash = "";
        }
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = String(object.chainId);
        }
        else {
            message.chainId = "";
        }
        if (object.from !== undefined && object.from !== null) {
            message.from = String(object.from);
        }
        else {
            message.from = "";
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = String(object.to);
        }
        else {
            message.to = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = "";
        }
        if (object.payType !== undefined && object.payType !== null) {
            message.payType = String(object.payType);
        }
        else {
            message.payType = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.txHash !== undefined && (obj.txHash = message.txHash);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.from !== undefined && (obj.from = message.from);
        message.to !== undefined && (obj.to = message.to);
        message.amount !== undefined && (obj.amount = message.amount);
        message.payType !== undefined && (obj.payType = message.payType);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgObservationVote };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.txHash !== undefined && object.txHash !== null) {
            message.txHash = object.txHash;
        }
        else {
            message.txHash = "";
        }
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = object.chainId;
        }
        else {
            message.chainId = "";
        }
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        else {
            message.from = "";
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = object.to;
        }
        else {
            message.to = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = "";
        }
        if (object.payType !== undefined && object.payType !== null) {
            message.payType = object.payType;
        }
        else {
            message.payType = "";
        }
        return message;
    },
};
const baseMsgObservationVoteResponse = { code: "", msg: "" };
exports.MsgObservationVoteResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== "") {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgObservationVoteResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgObservationVoteResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgObservationVoteResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        return message;
    },
};
const baseMsgUpdateBalance = {
    creator: "",
    chainId: "",
    balance: "",
    decimal: "",
};
exports.MsgUpdateBalance = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateBalance };
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
    fromJSON(object) {
        const message = { ...baseMsgUpdateBalance };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = String(object.chainId);
        }
        else {
            message.chainId = "";
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = String(object.balance);
        }
        else {
            message.balance = "";
        }
        if (object.decimal !== undefined && object.decimal !== null) {
            message.decimal = String(object.decimal);
        }
        else {
            message.decimal = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.balance !== undefined && (obj.balance = message.balance);
        message.decimal !== undefined && (obj.decimal = message.decimal);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateBalance };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = object.chainId;
        }
        else {
            message.chainId = "";
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        else {
            message.balance = "";
        }
        if (object.decimal !== undefined && object.decimal !== null) {
            message.decimal = object.decimal;
        }
        else {
            message.decimal = "";
        }
        return message;
    },
};
const baseMsgUpdateBalanceResponse = { code: "", msg: "" };
exports.MsgUpdateBalanceResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== "") {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateBalanceResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgUpdateBalanceResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgUpdateBalanceResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        return message;
    },
};
const baseMsgKeysignVote = { creator: "", txHash: "", pubKey: "" };
exports.MsgKeysignVote = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgKeysignVote };
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
    fromJSON(object) {
        const message = { ...baseMsgKeysignVote };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.txHash !== undefined && object.txHash !== null) {
            message.txHash = String(object.txHash);
        }
        else {
            message.txHash = "";
        }
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = String(object.pubKey);
        }
        else {
            message.pubKey = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.txHash !== undefined && (obj.txHash = message.txHash);
        message.pubKey !== undefined && (obj.pubKey = message.pubKey);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgKeysignVote };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.txHash !== undefined && object.txHash !== null) {
            message.txHash = object.txHash;
        }
        else {
            message.txHash = "";
        }
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = object.pubKey;
        }
        else {
            message.pubKey = "";
        }
        return message;
    },
};
const baseMsgKeysignVoteResponse = { code: "", msg: "" };
exports.MsgKeysignVoteResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== "") {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgKeysignVoteResponse };
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
    fromJSON(object) {
        const message = { ...baseMsgKeysignVoteResponse };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgKeysignVoteResponse };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        return message;
    },
};
const baseMsgUpdateGasFee = { creator: "", chainId: "", fee: "" };
exports.MsgUpdateGasFee = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateGasFee };
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
    fromJSON(object) {
        const message = { ...baseMsgUpdateGasFee };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = String(object.chainId);
        }
        else {
            message.chainId = "";
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = String(object.fee);
        }
        else {
            message.fee = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.chainId !== undefined && (obj.chainId = message.chainId);
        message.fee !== undefined && (obj.fee = message.fee);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateGasFee };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = object.chainId;
        }
        else {
            message.chainId = "";
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = object.fee;
        }
        else {
            message.fee = "";
        }
        return message;
    },
};
const baseMsgUpdateGasFeeResponse = { code: "", msg: "" };
exports.MsgUpdateGasFeeResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== "") {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateGasFeeResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgUpdateGasFeeResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgUpdateGasFeeResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        return message;
    },
};
const baseMsgProvisionTransaction = {
    creator: "",
    fromChain: "",
    fromAddress: "",
    symbol: "",
    tokenAddr: "",
    amount: "",
    options: "",
};
exports.MsgProvisionTransaction = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgProvisionTransaction,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgProvisionTransaction,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.fromChain !== undefined && object.fromChain !== null) {
            message.fromChain = String(object.fromChain);
        }
        else {
            message.fromChain = "";
        }
        if (object.fromAddress !== undefined && object.fromAddress !== null) {
            message.fromAddress = String(object.fromAddress);
        }
        else {
            message.fromAddress = "";
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = String(object.symbol);
        }
        else {
            message.symbol = "";
        }
        if (object.tokenAddr !== undefined && object.tokenAddr !== null) {
            message.tokenAddr = String(object.tokenAddr);
        }
        else {
            message.tokenAddr = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = "";
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = String(object.options);
        }
        else {
            message.options = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.fromChain !== undefined && (obj.fromChain = message.fromChain);
        message.fromAddress !== undefined &&
            (obj.fromAddress = message.fromAddress);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.tokenAddr !== undefined && (obj.tokenAddr = message.tokenAddr);
        message.amount !== undefined && (obj.amount = message.amount);
        message.options !== undefined && (obj.options = message.options);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgProvisionTransaction,
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.fromChain !== undefined && object.fromChain !== null) {
            message.fromChain = object.fromChain;
        }
        else {
            message.fromChain = "";
        }
        if (object.fromAddress !== undefined && object.fromAddress !== null) {
            message.fromAddress = object.fromAddress;
        }
        else {
            message.fromAddress = "";
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        else {
            message.symbol = "";
        }
        if (object.tokenAddr !== undefined && object.tokenAddr !== null) {
            message.tokenAddr = object.tokenAddr;
        }
        else {
            message.tokenAddr = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = "";
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = object.options;
        }
        else {
            message.options = "";
        }
        return message;
    },
};
const baseMsgProvisionTransactionResponse = { code: "", msg: "" };
exports.MsgProvisionTransactionResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== "") {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgProvisionTransactionResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgProvisionTransactionResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgProvisionTransactionResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        return message;
    },
};
const baseMsgDrainTransaction = {
    creator: "",
    fromChain: "",
    toChain: "",
    toAddress: "",
    nftAddr: "",
    amount: "",
    options: "",
};
exports.MsgDrainTransaction = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgDrainTransaction };
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
    fromJSON(object) {
        const message = { ...baseMsgDrainTransaction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.fromChain !== undefined && object.fromChain !== null) {
            message.fromChain = String(object.fromChain);
        }
        else {
            message.fromChain = "";
        }
        if (object.toChain !== undefined && object.toChain !== null) {
            message.toChain = String(object.toChain);
        }
        else {
            message.toChain = "";
        }
        if (object.toAddress !== undefined && object.toAddress !== null) {
            message.toAddress = String(object.toAddress);
        }
        else {
            message.toAddress = "";
        }
        if (object.nftAddr !== undefined && object.nftAddr !== null) {
            message.nftAddr = String(object.nftAddr);
        }
        else {
            message.nftAddr = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = "";
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = String(object.options);
        }
        else {
            message.options = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.fromChain !== undefined && (obj.fromChain = message.fromChain);
        message.toChain !== undefined && (obj.toChain = message.toChain);
        message.toAddress !== undefined && (obj.toAddress = message.toAddress);
        message.nftAddr !== undefined && (obj.nftAddr = message.nftAddr);
        message.amount !== undefined && (obj.amount = message.amount);
        message.options !== undefined && (obj.options = message.options);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgDrainTransaction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.fromChain !== undefined && object.fromChain !== null) {
            message.fromChain = object.fromChain;
        }
        else {
            message.fromChain = "";
        }
        if (object.toChain !== undefined && object.toChain !== null) {
            message.toChain = object.toChain;
        }
        else {
            message.toChain = "";
        }
        if (object.toAddress !== undefined && object.toAddress !== null) {
            message.toAddress = object.toAddress;
        }
        else {
            message.toAddress = "";
        }
        if (object.nftAddr !== undefined && object.nftAddr !== null) {
            message.nftAddr = object.nftAddr;
        }
        else {
            message.nftAddr = "";
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = "";
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = object.options;
        }
        else {
            message.options = "";
        }
        return message;
    },
};
const baseMsgDrainTransactionResponse = { code: "", msg: "" };
exports.MsgDrainTransactionResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== "") {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDrainTransactionResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgDrainTransactionResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgDrainTransactionResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        return message;
    },
};
const baseMsgCancelTransaction = { creator: "", transactionId: "" };
exports.MsgCancelTransaction = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.transactionId !== "") {
            writer.uint32(18).string(message.transactionId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgCancelTransaction };
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
    fromJSON(object) {
        const message = { ...baseMsgCancelTransaction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.transactionId !== undefined && object.transactionId !== null) {
            message.transactionId = String(object.transactionId);
        }
        else {
            message.transactionId = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.transactionId !== undefined &&
            (obj.transactionId = message.transactionId);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgCancelTransaction };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.transactionId !== undefined && object.transactionId !== null) {
            message.transactionId = object.transactionId;
        }
        else {
            message.transactionId = "";
        }
        return message;
    },
};
const baseMsgCancelTransactionResponse = { code: "", msg: "" };
exports.MsgCancelTransactionResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== "") {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCancelTransactionResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgCancelTransactionResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgCancelTransactionResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        return message;
    },
};
const baseMsgAddWhitelisted = { creator: "", address: "" };
exports.MsgAddWhitelisted = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddWhitelisted };
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
    fromJSON(object) {
        const message = { ...baseMsgAddWhitelisted };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAddWhitelisted };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseMsgAddWhitelistedResponse = { code: "", msg: "" };
exports.MsgAddWhitelistedResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== "") {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgAddWhitelistedResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgAddWhitelistedResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgAddWhitelistedResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        return message;
    },
};
const baseMsgSetAdmin = { creator: "" };
exports.MsgSetAdmin = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSetAdmin };
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
    fromJSON(object) {
        const message = { ...baseMsgSetAdmin };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSetAdmin };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
const baseMsgSetAdminResponse = { code: "", msg: "" };
exports.MsgSetAdminResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== "") {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSetAdminResponse };
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
    fromJSON(object) {
        const message = { ...baseMsgSetAdminResponse };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSetAdminResponse };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        return message;
    },
};
const baseMsgAddPubkey = { creator: "", pubkey: "" };
exports.MsgAddPubkey = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.pubkey !== "") {
            writer.uint32(18).string(message.pubkey);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddPubkey };
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
    fromJSON(object) {
        const message = { ...baseMsgAddPubkey };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.pubkey !== undefined && object.pubkey !== null) {
            message.pubkey = String(object.pubkey);
        }
        else {
            message.pubkey = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.pubkey !== undefined && (obj.pubkey = message.pubkey);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAddPubkey };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.pubkey !== undefined && object.pubkey !== null) {
            message.pubkey = object.pubkey;
        }
        else {
            message.pubkey = "";
        }
        return message;
    },
};
const baseMsgAddPubkeyResponse = { code: "", msg: "" };
exports.MsgAddPubkeyResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== "") {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddPubkeyResponse };
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
    fromJSON(object) {
        const message = { ...baseMsgAddPubkeyResponse };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAddPubkeyResponse };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        return message;
    },
};
const baseMsgUpdateTssPubkey = {
    creator: "",
    tssPubkey: "",
    ecdsa: "",
    ebdsa: "",
    reserved: "",
};
exports.MsgUpdateTssPubkey = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.tssPubkey !== "") {
            writer.uint32(18).string(message.tssPubkey);
        }
        if (message.ecdsa !== "") {
            writer.uint32(26).string(message.ecdsa);
        }
        if (message.ebdsa !== "") {
            writer.uint32(34).string(message.ebdsa);
        }
        if (message.reserved !== "") {
            writer.uint32(42).string(message.reserved);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateTssPubkey };
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
                    message.ebdsa = reader.string();
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
    fromJSON(object) {
        const message = { ...baseMsgUpdateTssPubkey };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.tssPubkey !== undefined && object.tssPubkey !== null) {
            message.tssPubkey = String(object.tssPubkey);
        }
        else {
            message.tssPubkey = "";
        }
        if (object.ecdsa !== undefined && object.ecdsa !== null) {
            message.ecdsa = String(object.ecdsa);
        }
        else {
            message.ecdsa = "";
        }
        if (object.ebdsa !== undefined && object.ebdsa !== null) {
            message.ebdsa = String(object.ebdsa);
        }
        else {
            message.ebdsa = "";
        }
        if (object.reserved !== undefined && object.reserved !== null) {
            message.reserved = String(object.reserved);
        }
        else {
            message.reserved = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.tssPubkey !== undefined && (obj.tssPubkey = message.tssPubkey);
        message.ecdsa !== undefined && (obj.ecdsa = message.ecdsa);
        message.ebdsa !== undefined && (obj.ebdsa = message.ebdsa);
        message.reserved !== undefined && (obj.reserved = message.reserved);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateTssPubkey };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.tssPubkey !== undefined && object.tssPubkey !== null) {
            message.tssPubkey = object.tssPubkey;
        }
        else {
            message.tssPubkey = "";
        }
        if (object.ecdsa !== undefined && object.ecdsa !== null) {
            message.ecdsa = object.ecdsa;
        }
        else {
            message.ecdsa = "";
        }
        if (object.ebdsa !== undefined && object.ebdsa !== null) {
            message.ebdsa = object.ebdsa;
        }
        else {
            message.ebdsa = "";
        }
        if (object.reserved !== undefined && object.reserved !== null) {
            message.reserved = object.reserved;
        }
        else {
            message.reserved = "";
        }
        return message;
    },
};
const baseMsgUpdateTssPubkeyResponse = { code: "", msg: "" };
exports.MsgUpdateTssPubkeyResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== "") {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateTssPubkeyResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgUpdateTssPubkeyResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgUpdateTssPubkeyResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        return message;
    },
};
const baseMsgRemoveWhitelisted = { creator: "", address: "" };
exports.MsgRemoveWhitelisted = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.address !== "") {
            writer.uint32(18).string(message.address);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgRemoveWhitelisted };
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
    fromJSON(object) {
        const message = { ...baseMsgRemoveWhitelisted };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.address !== undefined && (obj.address = message.address);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgRemoveWhitelisted };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        return message;
    },
};
const baseMsgRemoveWhitelistedResponse = { code: "", msg: "" };
exports.MsgRemoveWhitelistedResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== "") {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRemoveWhitelistedResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgRemoveWhitelistedResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgRemoveWhitelistedResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        return message;
    },
};
const baseMsgClearTssInfo = { creator: "" };
exports.MsgClearTssInfo = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgClearTssInfo };
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
    fromJSON(object) {
        const message = { ...baseMsgClearTssInfo };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgClearTssInfo };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    },
};
const baseMsgClearTssInfoResponse = { code: "", msg: "" };
exports.MsgClearTssInfoResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== "") {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgClearTssInfoResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgClearTssInfoResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgClearTssInfoResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        return message;
    },
};
const baseMsgAddChain = {
    creator: "",
    name: "",
    symbol: "",
    tokens: "",
};
exports.MsgAddChain = {
    encode(message, writer = minimal_1.Writer.create()) {
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
            writer.uint32(34).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddChain };
        message.tokens = [];
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
    fromJSON(object) {
        const message = { ...baseMsgAddChain };
        message.tokens = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = String(object.symbol);
        }
        else {
            message.symbol = "";
        }
        if (object.tokens !== undefined && object.tokens !== null) {
            for (const e of object.tokens) {
                message.tokens.push(String(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        if (message.tokens) {
            obj.tokens = message.tokens.map((e) => e);
        }
        else {
            obj.tokens = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAddChain };
        message.tokens = [];
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        else {
            message.symbol = "";
        }
        if (object.tokens !== undefined && object.tokens !== null) {
            for (const e of object.tokens) {
                message.tokens.push(e);
            }
        }
        return message;
    },
};
const baseMsgAddChainResponse = { code: "", msg: "" };
exports.MsgAddChainResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== "") {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddChainResponse };
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
    fromJSON(object) {
        const message = { ...baseMsgAddChainResponse };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAddChainResponse };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        return message;
    },
};
const baseMsgUpdateTssHash = { creator: "", txId: "", tssPullHash: "" };
exports.MsgUpdateTssHash = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.txId !== "") {
            writer.uint32(18).string(message.txId);
        }
        if (message.tssPullHash !== "") {
            writer.uint32(26).string(message.tssPullHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateTssHash };
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
                    message.tssPullHash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgUpdateTssHash };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.txId !== undefined && object.txId !== null) {
            message.txId = String(object.txId);
        }
        else {
            message.txId = "";
        }
        if (object.tssPullHash !== undefined && object.tssPullHash !== null) {
            message.tssPullHash = String(object.tssPullHash);
        }
        else {
            message.tssPullHash = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.txId !== undefined && (obj.txId = message.txId);
        message.tssPullHash !== undefined &&
            (obj.tssPullHash = message.tssPullHash);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateTssHash };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.txId !== undefined && object.txId !== null) {
            message.txId = object.txId;
        }
        else {
            message.txId = "";
        }
        if (object.tssPullHash !== undefined && object.tssPullHash !== null) {
            message.tssPullHash = object.tssPullHash;
        }
        else {
            message.tssPullHash = "";
        }
        return message;
    },
};
const baseMsgUpdateTssHashResponse = { code: "", msg: "" };
exports.MsgUpdateTssHashResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== "") {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateTssHashResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgUpdateTssHashResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgUpdateTssHashResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        return message;
    },
};
const baseMsgUpdateChainStatus = {
    creator: "",
    chainSymbol: "",
    disabled: false,
};
exports.MsgUpdateChainStatus = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateChainStatus };
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
    fromJSON(object) {
        const message = { ...baseMsgUpdateChainStatus };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.chainSymbol !== undefined && object.chainSymbol !== null) {
            message.chainSymbol = String(object.chainSymbol);
        }
        else {
            message.chainSymbol = "";
        }
        if (object.disabled !== undefined && object.disabled !== null) {
            message.disabled = Boolean(object.disabled);
        }
        else {
            message.disabled = false;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.chainSymbol !== undefined &&
            (obj.chainSymbol = message.chainSymbol);
        message.disabled !== undefined && (obj.disabled = message.disabled);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateChainStatus };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.chainSymbol !== undefined && object.chainSymbol !== null) {
            message.chainSymbol = object.chainSymbol;
        }
        else {
            message.chainSymbol = "";
        }
        if (object.disabled !== undefined && object.disabled !== null) {
            message.disabled = object.disabled;
        }
        else {
            message.disabled = false;
        }
        return message;
    },
};
const baseMsgUpdateChainStatusResponse = { code: "", msg: "" };
exports.MsgUpdateChainStatusResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== "") {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateChainStatusResponse,
        };
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
    fromJSON(object) {
        const message = {
            ...baseMsgUpdateChainStatusResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgUpdateChainStatusResponse,
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        return message;
    },
};
const baseMsgAddToken = {
    creator: "",
    chainSymbol: "",
    tokenSymbol: "",
};
exports.MsgAddToken = {
    encode(message, writer = minimal_1.Writer.create()) {
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
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddToken };
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
    fromJSON(object) {
        const message = { ...baseMsgAddToken };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.chainSymbol !== undefined && object.chainSymbol !== null) {
            message.chainSymbol = String(object.chainSymbol);
        }
        else {
            message.chainSymbol = "";
        }
        if (object.tokenSymbol !== undefined && object.tokenSymbol !== null) {
            message.tokenSymbol = String(object.tokenSymbol);
        }
        else {
            message.tokenSymbol = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.chainSymbol !== undefined &&
            (obj.chainSymbol = message.chainSymbol);
        message.tokenSymbol !== undefined &&
            (obj.tokenSymbol = message.tokenSymbol);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAddToken };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.chainSymbol !== undefined && object.chainSymbol !== null) {
            message.chainSymbol = object.chainSymbol;
        }
        else {
            message.chainSymbol = "";
        }
        if (object.tokenSymbol !== undefined && object.tokenSymbol !== null) {
            message.tokenSymbol = object.tokenSymbol;
        }
        else {
            message.tokenSymbol = "";
        }
        return message;
    },
};
const baseMsgAddTokenResponse = { code: "", msg: "" };
exports.MsgAddTokenResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== "") {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgAddTokenResponse };
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
    fromJSON(object) {
        const message = { ...baseMsgAddTokenResponse };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgAddTokenResponse };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        return message;
    },
};
const baseMsgUpdateTssStatus = { creator: "", status: "" };
exports.MsgUpdateTssStatus = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.status !== "") {
            writer.uint32(18).string(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgUpdateTssStatus };
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
    fromJSON(object) {
        const message = { ...baseMsgUpdateTssStatus };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = String(object.status);
        }
        else {
            message.status = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.status !== undefined && (obj.status = message.status);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgUpdateTssStatus };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = object.status;
        }
        else {
            message.status = "";
        }
        return message;
    },
};
const baseMsgUpdateTssStatusResponse = {};
exports.MsgUpdateTssStatusResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateTssStatusResponse,
        };
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
    fromJSON(_) {
        const message = {
            ...baseMsgUpdateTssStatusResponse,
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateTssStatusResponse,
        };
        return message;
    },
};
const baseMsgSetTxHash = { creator: "", txId: "", txHash: "" };
exports.MsgSetTxHash = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.txId !== "") {
            writer.uint32(18).string(message.txId);
        }
        if (message.txHash !== "") {
            writer.uint32(26).string(message.txHash);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSetTxHash };
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
                    message.txHash = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseMsgSetTxHash };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.txId !== undefined && object.txId !== null) {
            message.txId = String(object.txId);
        }
        else {
            message.txId = "";
        }
        if (object.txHash !== undefined && object.txHash !== null) {
            message.txHash = String(object.txHash);
        }
        else {
            message.txHash = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.txId !== undefined && (obj.txId = message.txId);
        message.txHash !== undefined && (obj.txHash = message.txHash);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSetTxHash };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.txId !== undefined && object.txId !== null) {
            message.txId = object.txId;
        }
        else {
            message.txId = "";
        }
        if (object.txHash !== undefined && object.txHash !== null) {
            message.txHash = object.txHash;
        }
        else {
            message.txHash = "";
        }
        return message;
    },
};
const baseMsgSetTxHashResponse = { code: "", msg: "" };
exports.MsgSetTxHashResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== "") {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== "") {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseMsgSetTxHashResponse };
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
    fromJSON(object) {
        const message = { ...baseMsgSetTxHashResponse };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.code !== undefined && (obj.code = message.code);
        message.msg !== undefined && (obj.msg = message.msg);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgSetTxHashResponse };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = "";
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = "";
        }
        return message;
    },
};
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
    }
    RequestTransaction(request) {
        const data = exports.MsgRequestTransaction.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "RequestTransaction", data);
        return promise.then((data) => exports.MsgRequestTransactionResponse.decode(new minimal_1.Reader(data)));
    }
    ApproveTransaction(request) {
        const data = exports.MsgApproveTransaction.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "ApproveTransaction", data);
        return promise.then((data) => exports.MsgApproveTransactionResponse.decode(new minimal_1.Reader(data)));
    }
    FetchBalance(request) {
        const data = exports.MsgFetchBalance.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "FetchBalance", data);
        return promise.then((data) => exports.MsgFetchBalanceResponse.decode(new minimal_1.Reader(data)));
    }
    ObservationVote(request) {
        const data = exports.MsgObservationVote.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "ObservationVote", data);
        return promise.then((data) => exports.MsgObservationVoteResponse.decode(new minimal_1.Reader(data)));
    }
    UpdateBalance(request) {
        const data = exports.MsgUpdateBalance.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "UpdateBalance", data);
        return promise.then((data) => exports.MsgUpdateBalanceResponse.decode(new minimal_1.Reader(data)));
    }
    KeysignVote(request) {
        const data = exports.MsgKeysignVote.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "KeysignVote", data);
        return promise.then((data) => exports.MsgKeysignVoteResponse.decode(new minimal_1.Reader(data)));
    }
    UpdateGasFee(request) {
        const data = exports.MsgUpdateGasFee.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "UpdateGasFee", data);
        return promise.then((data) => exports.MsgUpdateGasFeeResponse.decode(new minimal_1.Reader(data)));
    }
    ProvisionTransaction(request) {
        const data = exports.MsgProvisionTransaction.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "ProvisionTransaction", data);
        return promise.then((data) => exports.MsgProvisionTransactionResponse.decode(new minimal_1.Reader(data)));
    }
    DrainTransaction(request) {
        const data = exports.MsgDrainTransaction.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "DrainTransaction", data);
        return promise.then((data) => exports.MsgDrainTransactionResponse.decode(new minimal_1.Reader(data)));
    }
    CancelTransaction(request) {
        const data = exports.MsgCancelTransaction.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "CancelTransaction", data);
        return promise.then((data) => exports.MsgCancelTransactionResponse.decode(new minimal_1.Reader(data)));
    }
    AddWhitelisted(request) {
        const data = exports.MsgAddWhitelisted.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "AddWhitelisted", data);
        return promise.then((data) => exports.MsgAddWhitelistedResponse.decode(new minimal_1.Reader(data)));
    }
    SetAdmin(request) {
        const data = exports.MsgSetAdmin.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "SetAdmin", data);
        return promise.then((data) => exports.MsgSetAdminResponse.decode(new minimal_1.Reader(data)));
    }
    AddPubkey(request) {
        const data = exports.MsgAddPubkey.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "AddPubkey", data);
        return promise.then((data) => exports.MsgAddPubkeyResponse.decode(new minimal_1.Reader(data)));
    }
    UpdateTssPubkey(request) {
        const data = exports.MsgUpdateTssPubkey.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "UpdateTssPubkey", data);
        return promise.then((data) => exports.MsgUpdateTssPubkeyResponse.decode(new minimal_1.Reader(data)));
    }
    RemoveWhitelisted(request) {
        const data = exports.MsgRemoveWhitelisted.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "RemoveWhitelisted", data);
        return promise.then((data) => exports.MsgRemoveWhitelistedResponse.decode(new minimal_1.Reader(data)));
    }
    ClearTssInfo(request) {
        const data = exports.MsgClearTssInfo.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "ClearTssInfo", data);
        return promise.then((data) => exports.MsgClearTssInfoResponse.decode(new minimal_1.Reader(data)));
    }
    AddChain(request) {
        const data = exports.MsgAddChain.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "AddChain", data);
        return promise.then((data) => exports.MsgAddChainResponse.decode(new minimal_1.Reader(data)));
    }
    UpdateTssHash(request) {
        const data = exports.MsgUpdateTssHash.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "UpdateTssHash", data);
        return promise.then((data) => exports.MsgUpdateTssHashResponse.decode(new minimal_1.Reader(data)));
    }
    UpdateChainStatus(request) {
        const data = exports.MsgUpdateChainStatus.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "UpdateChainStatus", data);
        return promise.then((data) => exports.MsgUpdateChainStatusResponse.decode(new minimal_1.Reader(data)));
    }
    AddToken(request) {
        const data = exports.MsgAddToken.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "AddToken", data);
        return promise.then((data) => exports.MsgAddTokenResponse.decode(new minimal_1.Reader(data)));
    }
    UpdateTssStatus(request) {
        const data = exports.MsgUpdateTssStatus.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "UpdateTssStatus", data);
        return promise.then((data) => exports.MsgUpdateTssStatusResponse.decode(new minimal_1.Reader(data)));
    }
    SetTxHash(request) {
        const data = exports.MsgSetTxHash.encode(request).finish();
        const promise = this.rpc.request("KimaFinance.kima.kima.Msg", "SetTxHash", data);
        return promise.then((data) => exports.MsgSetTxHashResponse.decode(new minimal_1.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
