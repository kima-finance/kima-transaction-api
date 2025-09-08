
export enum SupportedNetworks {
    ETHEREUM = "ETH",
    POLYGON = "POL",
    AVALANCHE = "AVX",
    SOLANA = "SOL",
    FUSE = "FUS",
    CELO = "CEL",
    BSC = "BSC",
    ARBITRIUM = "ARB",
    OPTIMISM = "OPT",
    POLYGON_ZKEVM = "ZKE",
}

export enum CurrencyOptions {
    USDT = "USDT",
    USDC = "USDC",
    USDK = "USDK",
}

export interface RequestHtlcReclaimProps {
    senderAddress: string;
    txHash: string;
}

export interface RequestHtlcLockProps {
    fromAddress: string;
    senderPubkey: string;
    amount: string;
    htlcTimeout: string;
    txHash: string;
    htlcAddress: string;
}

export interface RequestTxProps {
    originChain: SupportedNetworks;
    originAddress: string;
    targetChain: SupportedNetworks;
    targetAddress: string;
    originSymbol: CurrencyOptions;
    targetSymbol: CurrencyOptions;
    amount: string; // number in whole units i.e. "12.34"
    fee: string; // number in whole units i.e "0.061234"
    htlcCreationHash: string;
    htlcCreationVout: number;
    htlcExpirationTimestamp: string;
    htlcVersion: string;
    senderPubKey: Uint8Array;
    options: string;
}

export interface RequestSwapTxProps {
    originChain: SupportedNetworks;
    originAddress: string;
    targetChain: SupportedNetworks;
    targetAddress: string;
    originSymbol: CurrencyOptions;
    targetSymbol: CurrencyOptions;
    amountIn: string;
    amountOut: string;
    fee: string;
    dex: string;
    slippage: string;
    options: string;
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}