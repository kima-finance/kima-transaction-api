"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.submitKimaTransaction = exports.CurrencyOptions = exports.SupportNetworks = void 0;
const proto_signing_1 = require("@cosmjs/proto-signing");
const common_1 = require("./kima/common");
var SupportNetworks;
(function (SupportNetworks) {
    SupportNetworks["Ethereum"] = "ETH";
    SupportNetworks["Polygon"] = "POL";
    SupportNetworks["Avalanche"] = "AVX";
    SupportNetworks["Solana"] = "SOL";
})(SupportNetworks = exports.SupportNetworks || (exports.SupportNetworks = {}));
var CurrencyOptions;
(function (CurrencyOptions) {
    CurrencyOptions["USDK"] = "USDK";
    CurrencyOptions["USDT"] = "USDT";
    CurrencyOptions["USDC"] = "USDC";
})(CurrencyOptions = exports.CurrencyOptions || (exports.CurrencyOptions = {}));
async function submitKimaTransaction({ originChain, originAddress, targetChain, targetAddress, symbol, amount, fee, }) {
    const wallet = await proto_signing_1.DirectSecp256k1HdWallet.fromMnemonic(process.env.KIMA_BACKEND_MNEMONIC, { prefix: "kima" });
    const client = await (0, common_1.TxClient)(wallet);
    const [firstAccount] = await wallet.getAccounts();
    const params = {
        creator: firstAccount.address,
        originChain,
        originAddress,
        targetChain,
        targetAddress,
        symbol,
        amount: amount.toString(),
        fee: fee.toString(),
    };
    let msg = await client.msgRequestTransaction(params);
    const result = await client.signAndBroadcast([msg]);
    let txId = "1";
    for (const event of result.events) {
        if (event.type === "transaction_requested") {
            for (const attr of event.attributes) {
                if (attr.key === "txId") {
                    txId = attr.value;
                }
            }
        }
    }
    msg = await client.msgSetTxHash({
        creator: firstAccount.address,
        txId,
        txHash: result.transactionHash,
    });
    const temp = await client.signAndBroadcast([msg]);
    console.log(temp);
    return result;
}
exports.submitKimaTransaction = submitKimaTransaction;
