"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TxClient = exports.registry = void 0;
const stargate_1 = require("@cosmjs/stargate");
const dotenv_1 = __importDefault(require("dotenv"));
const proto_signing_1 = require("@cosmjs/proto-signing");
const tx_1 = require("./tx");
dotenv_1.default.config();
const defaultFee = {
    amount: [],
    gas: '200000'
};
const types = [
    [
        '/DiversifiTechnologies.diversifi.diversifi.MsgRequestTransaction',
        tx_1.MsgRequestTransaction
    ],
    [
        '/DiversifiTechnologies.diversifi.diversifi.MsgApproveTransaction',
        tx_1.MsgApproveTransaction
    ],
    [
        '/DiversifiTechnologies.diversifi.diversifi.MsgFetchBalance',
        tx_1.MsgFetchBalance
    ]
];
exports.registry = new proto_signing_1.Registry(types);
const TxClient = async (wallet) => {
    const client = await stargate_1.SigningStargateClient.connectWithSigner('https://' + process.env.KIMA_BACKEND_DIVERSIFI_NODE_PROVIDER1, wallet, { registry: exports.registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: '' }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgRequestTransaction: (data) => ({
            typeUrl: '/DiversifiTechnologies.diversifi.diversifi.MsgRequestTransaction',
            value: tx_1.MsgRequestTransaction.fromPartial(data)
        }),
        msgApproveTransaction: (data) => ({
            typeUrl: '/DiversifiTechnologies.diversifi.diversifi.MsgApproveTransaction',
            value: tx_1.MsgApproveTransaction.fromPartial(data)
        }),
        msgFetchBalance: (data) => ({
            typeUrl: '/DiversifiTechnologies.diversifi.diversifi.MsgFetchBalance',
            value: tx_1.MsgFetchBalance.fromPartial(data)
        })
    };
};
exports.TxClient = TxClient;
