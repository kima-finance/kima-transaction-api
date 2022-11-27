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
    gas: "200000",
};
const types = [
    ["/KimaFinance.kima.kima.MsgRequestTransaction", tx_1.MsgRequestTransaction],
];
exports.registry = new proto_signing_1.Registry(types);
const TxClient = async (wallet) => {
    const client = await stargate_1.SigningStargateClient.connectWithSigner("http://" + process.env.KIMA_BACKEND_NODE_PROVIDER, wallet, { registry: exports.registry });
    const { address } = (await wallet.getAccounts())[0];
    return {
        signAndBroadcast: (msgs, { fee, memo } = { fee: defaultFee, memo: "" }) => client.signAndBroadcast(address, msgs, fee, memo),
        msgRequestTransaction: (data) => ({
            typeUrl: "/KimaFinance.kima.kima.MsgRequestTransaction",
            value: tx_1.MsgRequestTransaction.fromPartial(data),
        }),
    };
};
exports.TxClient = TxClient;
