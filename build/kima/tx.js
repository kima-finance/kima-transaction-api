"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgCancelTransactionResponse = exports.MsgCancelTransaction = exports.MsgDrainTransactionResponse = exports.MsgDrainTransaction = exports.MsgProvisionTransactionResponse = exports.MsgProvisionTransaction = exports.MsgUpdateGasFeeResponse = exports.MsgUpdateGasFee = exports.MsgKeysignVoteResponse = exports.MsgKeysignVote = exports.MsgUpdateBalanceResponse = exports.MsgUpdateBalance = exports.MsgObservationVoteResponse = exports.MsgObservationVote = exports.MsgFetchBalanceResponse = exports.MsgFetchBalance = exports.MsgApproveTransactionResponse = exports.MsgApproveTransaction = exports.MsgRequestTransactionResponse = exports.MsgRequestTransaction = exports.protobufPackage = void 0;
/* eslint-disable */
const minimal_1 = require("protobufjs/minimal");
exports.protobufPackage = 'DiversifiTechnologies.diversifi.diversifi';
const baseMsgRequestTransaction = {
    creator: '',
    originChain: '',
    originAddress: '',
    targetChain: '',
    targetAddress: '',
    amount: '',
    fee: ''
};
exports.MsgRequestTransaction = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.originChain !== '') {
            writer.uint32(18).string(message.originChain);
        }
        if (message.originAddress !== '') {
            writer.uint32(26).string(message.originAddress);
        }
        if (message.targetChain !== '') {
            writer.uint32(34).string(message.targetChain);
        }
        if (message.targetAddress !== '') {
            writer.uint32(42).string(message.targetAddress);
        }
        if (message.amount !== '') {
            writer.uint32(50).string(message.amount);
        }
        if (message.fee !== '') {
            writer.uint32(58).string(message.fee);
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
                    message.amount = reader.string();
                    break;
                case 7:
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
            message.creator = '';
        }
        if (object.originChain !== undefined && object.originChain !== null) {
            message.originChain = String(object.originChain);
        }
        else {
            message.originChain = '';
        }
        if (object.originAddress !== undefined && object.originAddress !== null) {
            message.originAddress = String(object.originAddress);
        }
        else {
            message.originAddress = '';
        }
        if (object.targetChain !== undefined && object.targetChain !== null) {
            message.targetChain = String(object.targetChain);
        }
        else {
            message.targetChain = '';
        }
        if (object.targetAddress !== undefined && object.targetAddress !== null) {
            message.targetAddress = String(object.targetAddress);
        }
        else {
            message.targetAddress = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = '';
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = String(object.fee);
        }
        else {
            message.fee = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.originChain !== undefined && (obj.originChain = message.originChain);
        message.originAddress !== undefined &&
            (obj.originAddress = message.originAddress);
        message.targetChain !== undefined && (obj.targetChain = message.targetChain);
        message.targetAddress !== undefined &&
            (obj.targetAddress = message.targetAddress);
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
            message.creator = '';
        }
        if (object.originChain !== undefined && object.originChain !== null) {
            message.originChain = object.originChain;
        }
        else {
            message.originChain = '';
        }
        if (object.originAddress !== undefined && object.originAddress !== null) {
            message.originAddress = object.originAddress;
        }
        else {
            message.originAddress = '';
        }
        if (object.targetChain !== undefined && object.targetChain !== null) {
            message.targetChain = object.targetChain;
        }
        else {
            message.targetChain = '';
        }
        if (object.targetAddress !== undefined && object.targetAddress !== null) {
            message.targetAddress = object.targetAddress;
        }
        else {
            message.targetAddress = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = '';
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = object.fee;
        }
        else {
            message.fee = '';
        }
        return message;
    }
};
const baseMsgRequestTransactionResponse = { code: '', msg: '' };
exports.MsgRequestTransactionResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== '') {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== '') {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgRequestTransactionResponse
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
            ...baseMsgRequestTransactionResponse
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = '';
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = '';
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
            ...baseMsgRequestTransactionResponse
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = '';
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = '';
        }
        return message;
    }
};
const baseMsgApproveTransaction = {
    creator: '',
    txHash: '',
    success: '',
    signedKey: ''
};
exports.MsgApproveTransaction = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.txHash !== '') {
            writer.uint32(18).string(message.txHash);
        }
        if (message.success !== '') {
            writer.uint32(26).string(message.success);
        }
        if (message.signedKey !== '') {
            writer.uint32(34).string(message.signedKey);
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
                    message.txHash = reader.string();
                    break;
                case 3:
                    message.success = reader.string();
                    break;
                case 4:
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
            message.creator = '';
        }
        if (object.txHash !== undefined && object.txHash !== null) {
            message.txHash = String(object.txHash);
        }
        else {
            message.txHash = '';
        }
        if (object.success !== undefined && object.success !== null) {
            message.success = String(object.success);
        }
        else {
            message.success = '';
        }
        if (object.signedKey !== undefined && object.signedKey !== null) {
            message.signedKey = String(object.signedKey);
        }
        else {
            message.signedKey = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.txHash !== undefined && (obj.txHash = message.txHash);
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
            message.creator = '';
        }
        if (object.txHash !== undefined && object.txHash !== null) {
            message.txHash = object.txHash;
        }
        else {
            message.txHash = '';
        }
        if (object.success !== undefined && object.success !== null) {
            message.success = object.success;
        }
        else {
            message.success = '';
        }
        if (object.signedKey !== undefined && object.signedKey !== null) {
            message.signedKey = object.signedKey;
        }
        else {
            message.signedKey = '';
        }
        return message;
    }
};
const baseMsgApproveTransactionResponse = { code: '', msg: '' };
exports.MsgApproveTransactionResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== '') {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== '') {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgApproveTransactionResponse
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
            ...baseMsgApproveTransactionResponse
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = '';
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = '';
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
            ...baseMsgApproveTransactionResponse
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = '';
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = '';
        }
        return message;
    }
};
const baseMsgFetchBalance = { creator: '' };
exports.MsgFetchBalance = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
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
            message.creator = '';
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
            message.creator = '';
        }
        return message;
    }
};
const baseMsgFetchBalanceResponse = { code: '', result: '' };
exports.MsgFetchBalanceResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== '') {
            writer.uint32(10).string(message.code);
        }
        if (message.result !== '') {
            writer.uint32(18).string(message.result);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgFetchBalanceResponse
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
            ...baseMsgFetchBalanceResponse
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = '';
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = String(object.result);
        }
        else {
            message.result = '';
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
            ...baseMsgFetchBalanceResponse
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = '';
        }
        if (object.result !== undefined && object.result !== null) {
            message.result = object.result;
        }
        else {
            message.result = '';
        }
        return message;
    }
};
const baseMsgObservationVote = {
    creator: '',
    txHash: '',
    chainId: '',
    from: '',
    to: '',
    amount: ''
};
exports.MsgObservationVote = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.txHash !== '') {
            writer.uint32(18).string(message.txHash);
        }
        if (message.chainId !== '') {
            writer.uint32(26).string(message.chainId);
        }
        if (message.from !== '') {
            writer.uint32(34).string(message.from);
        }
        if (message.to !== '') {
            writer.uint32(42).string(message.to);
        }
        if (message.amount !== '') {
            writer.uint32(50).string(message.amount);
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
            message.creator = '';
        }
        if (object.txHash !== undefined && object.txHash !== null) {
            message.txHash = String(object.txHash);
        }
        else {
            message.txHash = '';
        }
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = String(object.chainId);
        }
        else {
            message.chainId = '';
        }
        if (object.from !== undefined && object.from !== null) {
            message.from = String(object.from);
        }
        else {
            message.from = '';
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = String(object.to);
        }
        else {
            message.to = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = '';
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
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseMsgObservationVote };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.txHash !== undefined && object.txHash !== null) {
            message.txHash = object.txHash;
        }
        else {
            message.txHash = '';
        }
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = object.chainId;
        }
        else {
            message.chainId = '';
        }
        if (object.from !== undefined && object.from !== null) {
            message.from = object.from;
        }
        else {
            message.from = '';
        }
        if (object.to !== undefined && object.to !== null) {
            message.to = object.to;
        }
        else {
            message.to = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = '';
        }
        return message;
    }
};
const baseMsgObservationVoteResponse = { code: '', msg: '' };
exports.MsgObservationVoteResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== '') {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== '') {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgObservationVoteResponse
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
            ...baseMsgObservationVoteResponse
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = '';
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = '';
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
            ...baseMsgObservationVoteResponse
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = '';
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = '';
        }
        return message;
    }
};
const baseMsgUpdateBalance = {
    creator: '',
    chainId: '',
    balance: '',
    decimal: ''
};
exports.MsgUpdateBalance = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.chainId !== '') {
            writer.uint32(18).string(message.chainId);
        }
        if (message.balance !== '') {
            writer.uint32(26).string(message.balance);
        }
        if (message.decimal !== '') {
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
            message.creator = '';
        }
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = String(object.chainId);
        }
        else {
            message.chainId = '';
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = String(object.balance);
        }
        else {
            message.balance = '';
        }
        if (object.decimal !== undefined && object.decimal !== null) {
            message.decimal = String(object.decimal);
        }
        else {
            message.decimal = '';
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
            message.creator = '';
        }
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = object.chainId;
        }
        else {
            message.chainId = '';
        }
        if (object.balance !== undefined && object.balance !== null) {
            message.balance = object.balance;
        }
        else {
            message.balance = '';
        }
        if (object.decimal !== undefined && object.decimal !== null) {
            message.decimal = object.decimal;
        }
        else {
            message.decimal = '';
        }
        return message;
    }
};
const baseMsgUpdateBalanceResponse = { code: '', msg: '' };
exports.MsgUpdateBalanceResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== '') {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== '') {
            writer.uint32(18).string(message.msg);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateBalanceResponse
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
            ...baseMsgUpdateBalanceResponse
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = String(object.code);
        }
        else {
            message.code = '';
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = '';
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
            ...baseMsgUpdateBalanceResponse
        };
        if (object.code !== undefined && object.code !== null) {
            message.code = object.code;
        }
        else {
            message.code = '';
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = '';
        }
        return message;
    }
};
const baseMsgKeysignVote = { creator: '', txHash: '', pubKey: '' };
exports.MsgKeysignVote = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.txHash !== '') {
            writer.uint32(18).string(message.txHash);
        }
        if (message.pubKey !== '') {
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
            message.creator = '';
        }
        if (object.txHash !== undefined && object.txHash !== null) {
            message.txHash = String(object.txHash);
        }
        else {
            message.txHash = '';
        }
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = String(object.pubKey);
        }
        else {
            message.pubKey = '';
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
            message.creator = '';
        }
        if (object.txHash !== undefined && object.txHash !== null) {
            message.txHash = object.txHash;
        }
        else {
            message.txHash = '';
        }
        if (object.pubKey !== undefined && object.pubKey !== null) {
            message.pubKey = object.pubKey;
        }
        else {
            message.pubKey = '';
        }
        return message;
    }
};
const baseMsgKeysignVoteResponse = { code: '', msg: '' };
exports.MsgKeysignVoteResponse = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.code !== '') {
            writer.uint32(10).string(message.code);
        }
        if (message.msg !== '') {
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
            message.code = '';
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = String(object.msg);
        }
        else {
            message.msg = '';
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
            message.code = '';
        }
        if (object.msg !== undefined && object.msg !== null) {
            message.msg = object.msg;
        }
        else {
            message.msg = '';
        }
        return message;
    }
};
const baseMsgUpdateGasFee = { creator: '', chainId: '', fee: '' };
exports.MsgUpdateGasFee = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.chainId !== '') {
            writer.uint32(18).string(message.chainId);
        }
        if (message.fee !== '') {
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
            message.creator = '';
        }
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = String(object.chainId);
        }
        else {
            message.chainId = '';
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = String(object.fee);
        }
        else {
            message.fee = '';
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
            message.creator = '';
        }
        if (object.chainId !== undefined && object.chainId !== null) {
            message.chainId = object.chainId;
        }
        else {
            message.chainId = '';
        }
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = object.fee;
        }
        else {
            message.fee = '';
        }
        return message;
    }
};
const baseMsgUpdateGasFeeResponse = {};
exports.MsgUpdateGasFeeResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgUpdateGasFeeResponse
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
            ...baseMsgUpdateGasFeeResponse
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgUpdateGasFeeResponse
        };
        return message;
    }
};
const baseMsgProvisionTransaction = {
    creator: '',
    fromChain: '',
    fromAddress: '',
    symbol: '',
    tokenAddr: '',
    amount: '',
    options: ''
};
exports.MsgProvisionTransaction = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.fromChain !== '') {
            writer.uint32(18).string(message.fromChain);
        }
        if (message.fromAddress !== '') {
            writer.uint32(26).string(message.fromAddress);
        }
        if (message.symbol !== '') {
            writer.uint32(34).string(message.symbol);
        }
        if (message.tokenAddr !== '') {
            writer.uint32(42).string(message.tokenAddr);
        }
        if (message.amount !== '') {
            writer.uint32(50).string(message.amount);
        }
        if (message.options !== '') {
            writer.uint32(58).string(message.options);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgProvisionTransaction
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
            ...baseMsgProvisionTransaction
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = '';
        }
        if (object.fromChain !== undefined && object.fromChain !== null) {
            message.fromChain = String(object.fromChain);
        }
        else {
            message.fromChain = '';
        }
        if (object.fromAddress !== undefined && object.fromAddress !== null) {
            message.fromAddress = String(object.fromAddress);
        }
        else {
            message.fromAddress = '';
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = String(object.symbol);
        }
        else {
            message.symbol = '';
        }
        if (object.tokenAddr !== undefined && object.tokenAddr !== null) {
            message.tokenAddr = String(object.tokenAddr);
        }
        else {
            message.tokenAddr = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = '';
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = String(object.options);
        }
        else {
            message.options = '';
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.fromChain !== undefined && (obj.fromChain = message.fromChain);
        message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.tokenAddr !== undefined && (obj.tokenAddr = message.tokenAddr);
        message.amount !== undefined && (obj.amount = message.amount);
        message.options !== undefined && (obj.options = message.options);
        return obj;
    },
    fromPartial(object) {
        const message = {
            ...baseMsgProvisionTransaction
        };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = '';
        }
        if (object.fromChain !== undefined && object.fromChain !== null) {
            message.fromChain = object.fromChain;
        }
        else {
            message.fromChain = '';
        }
        if (object.fromAddress !== undefined && object.fromAddress !== null) {
            message.fromAddress = object.fromAddress;
        }
        else {
            message.fromAddress = '';
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        else {
            message.symbol = '';
        }
        if (object.tokenAddr !== undefined && object.tokenAddr !== null) {
            message.tokenAddr = object.tokenAddr;
        }
        else {
            message.tokenAddr = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = '';
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = object.options;
        }
        else {
            message.options = '';
        }
        return message;
    }
};
const baseMsgProvisionTransactionResponse = {};
exports.MsgProvisionTransactionResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgProvisionTransactionResponse
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
            ...baseMsgProvisionTransactionResponse
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgProvisionTransactionResponse
        };
        return message;
    }
};
const baseMsgDrainTransaction = {
    creator: '',
    fromChain: '',
    toChain: '',
    toAddress: '',
    nftAddr: '',
    amount: '',
    options: ''
};
exports.MsgDrainTransaction = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.fromChain !== '') {
            writer.uint32(18).string(message.fromChain);
        }
        if (message.toChain !== '') {
            writer.uint32(26).string(message.toChain);
        }
        if (message.toAddress !== '') {
            writer.uint32(34).string(message.toAddress);
        }
        if (message.nftAddr !== '') {
            writer.uint32(42).string(message.nftAddr);
        }
        if (message.amount !== '') {
            writer.uint32(50).string(message.amount);
        }
        if (message.options !== '') {
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
            message.creator = '';
        }
        if (object.fromChain !== undefined && object.fromChain !== null) {
            message.fromChain = String(object.fromChain);
        }
        else {
            message.fromChain = '';
        }
        if (object.toChain !== undefined && object.toChain !== null) {
            message.toChain = String(object.toChain);
        }
        else {
            message.toChain = '';
        }
        if (object.toAddress !== undefined && object.toAddress !== null) {
            message.toAddress = String(object.toAddress);
        }
        else {
            message.toAddress = '';
        }
        if (object.nftAddr !== undefined && object.nftAddr !== null) {
            message.nftAddr = String(object.nftAddr);
        }
        else {
            message.nftAddr = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = String(object.amount);
        }
        else {
            message.amount = '';
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = String(object.options);
        }
        else {
            message.options = '';
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
            message.creator = '';
        }
        if (object.fromChain !== undefined && object.fromChain !== null) {
            message.fromChain = object.fromChain;
        }
        else {
            message.fromChain = '';
        }
        if (object.toChain !== undefined && object.toChain !== null) {
            message.toChain = object.toChain;
        }
        else {
            message.toChain = '';
        }
        if (object.toAddress !== undefined && object.toAddress !== null) {
            message.toAddress = object.toAddress;
        }
        else {
            message.toAddress = '';
        }
        if (object.nftAddr !== undefined && object.nftAddr !== null) {
            message.nftAddr = object.nftAddr;
        }
        else {
            message.nftAddr = '';
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = object.amount;
        }
        else {
            message.amount = '';
        }
        if (object.options !== undefined && object.options !== null) {
            message.options = object.options;
        }
        else {
            message.options = '';
        }
        return message;
    }
};
const baseMsgDrainTransactionResponse = {};
exports.MsgDrainTransactionResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgDrainTransactionResponse
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
            ...baseMsgDrainTransactionResponse
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgDrainTransactionResponse
        };
        return message;
    }
};
const baseMsgCancelTransaction = { creator: '', transactionId: '' };
exports.MsgCancelTransaction = {
    encode(message, writer = minimal_1.Writer.create()) {
        if (message.creator !== '') {
            writer.uint32(10).string(message.creator);
        }
        if (message.transactionId !== '') {
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
            message.creator = '';
        }
        if (object.transactionId !== undefined && object.transactionId !== null) {
            message.transactionId = String(object.transactionId);
        }
        else {
            message.transactionId = '';
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
            message.creator = '';
        }
        if (object.transactionId !== undefined && object.transactionId !== null) {
            message.transactionId = object.transactionId;
        }
        else {
            message.transactionId = '';
        }
        return message;
    }
};
const baseMsgCancelTransactionResponse = {};
exports.MsgCancelTransactionResponse = {
    encode(_, writer = minimal_1.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof Uint8Array ? new minimal_1.Reader(input) : input;
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = {
            ...baseMsgCancelTransactionResponse
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
            ...baseMsgCancelTransactionResponse
        };
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = {
            ...baseMsgCancelTransactionResponse
        };
        return message;
    }
};
class MsgClientImpl {
    rpc;
    constructor(rpc) {
        this.rpc = rpc;
    }
    RequestTransaction(request) {
        const data = exports.MsgRequestTransaction.encode(request).finish();
        const promise = this.rpc.request('DiversifiTechnologies.diversifi.diversifi.Msg', 'RequestTransaction', data);
        return promise.then((data) => exports.MsgRequestTransactionResponse.decode(new minimal_1.Reader(data)));
    }
    ApproveTransaction(request) {
        const data = exports.MsgApproveTransaction.encode(request).finish();
        const promise = this.rpc.request('DiversifiTechnologies.diversifi.diversifi.Msg', 'ApproveTransaction', data);
        return promise.then((data) => exports.MsgApproveTransactionResponse.decode(new minimal_1.Reader(data)));
    }
    FetchBalance(request) {
        const data = exports.MsgFetchBalance.encode(request).finish();
        const promise = this.rpc.request('DiversifiTechnologies.diversifi.diversifi.Msg', 'FetchBalance', data);
        return promise.then((data) => exports.MsgFetchBalanceResponse.decode(new minimal_1.Reader(data)));
    }
    ObservationVote(request) {
        const data = exports.MsgObservationVote.encode(request).finish();
        const promise = this.rpc.request('DiversifiTechnologies.diversifi.diversifi.Msg', 'ObservationVote', data);
        return promise.then((data) => exports.MsgObservationVoteResponse.decode(new minimal_1.Reader(data)));
    }
    UpdateBalance(request) {
        const data = exports.MsgUpdateBalance.encode(request).finish();
        const promise = this.rpc.request('DiversifiTechnologies.diversifi.diversifi.Msg', 'UpdateBalance', data);
        return promise.then((data) => exports.MsgUpdateBalanceResponse.decode(new minimal_1.Reader(data)));
    }
    KeysignVote(request) {
        const data = exports.MsgKeysignVote.encode(request).finish();
        const promise = this.rpc.request('DiversifiTechnologies.diversifi.diversifi.Msg', 'KeysignVote', data);
        return promise.then((data) => exports.MsgKeysignVoteResponse.decode(new minimal_1.Reader(data)));
    }
    UpdateGasFee(request) {
        const data = exports.MsgUpdateGasFee.encode(request).finish();
        const promise = this.rpc.request('DiversifiTechnologies.diversifi.diversifi.Msg', 'UpdateGasFee', data);
        return promise.then((data) => exports.MsgUpdateGasFeeResponse.decode(new minimal_1.Reader(data)));
    }
    ProvisionTransaction(request) {
        const data = exports.MsgProvisionTransaction.encode(request).finish();
        const promise = this.rpc.request('DiversifiTechnologies.diversifi.diversifi.Msg', 'ProvisionTransaction', data);
        return promise.then((data) => exports.MsgProvisionTransactionResponse.decode(new minimal_1.Reader(data)));
    }
    DrainTransaction(request) {
        const data = exports.MsgDrainTransaction.encode(request).finish();
        const promise = this.rpc.request('DiversifiTechnologies.diversifi.diversifi.Msg', 'DrainTransaction', data);
        return promise.then((data) => exports.MsgDrainTransactionResponse.decode(new minimal_1.Reader(data)));
    }
    CancelTransaction(request) {
        const data = exports.MsgCancelTransaction.encode(request).finish();
        const promise = this.rpc.request('DiversifiTechnologies.diversifi.diversifi.Msg', 'CancelTransaction', data);
        return promise.then((data) => exports.MsgCancelTransactionResponse.decode(new minimal_1.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
