
export enum SupportedNetworks {
    ETHEREUM = "ETH",
    POLYGON = "POL",
    AVALANCHE = "AVX",
    SOLANA = "SOL",
    BSC = "BSC",
    ARBITRIUM = "ARB",
    OPTIMISM = "OPT",
    POLYGON_ZKEVM = "ZKE",
    BITCOIN = "BTC",
    BERA = "BERA",
    CFX = "CFX",
    TRON = "TRX",
    FIAT = "FIAT",
    CREDITCARD = "CC",
    BASE = "BASE",
    WORLDCHAIN="WLD"
}

export enum CurrencyOptions {
    USDT = "USDT",
    USDC = "USDC",
    USDK = "USDK",
    EURC = "EURC",
    EURK = "EURK",
    EUR = "EUR",
    USD = "USD",
}

export interface Permit2SubmitOptions {
    r: string;
    s: string;
    v: number; // 27 | 28
    deadline: number; // unix timestamp (seconds)
}

export interface SubmitOptionsPayload {
    signature?: string;
    feeId?: string;
    chargeFeeAtTarget?: boolean;
    transactionIdSeed?: string;
    transactionIdSignature?: string;
    permit2?: Permit2SubmitOptions;
    [key: string]: unknown;
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

export interface RequestTransferTxProps {
    originChain: SupportedNetworks;
    originAddress: string;
    targetChain: SupportedNetworks;
    targetAddress: string;
    originSymbol: CurrencyOptions;
    targetSymbol: CurrencyOptions;
    amount: string; // number in whole units i.e. "12.34"
    fee: string; // number in whole units i.e "0.061234"
    htlcCreationHash?: string;
    htlcCreationVout?: number;
    htlcExpirationTimestamp?: string;
    htlcVersion?: string;
    senderPubKey?: Uint8Array;
    // JSON-serialized SubmitOptionsPayload
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
    htlcExpirationTimestamp?: string;
    htlcCreationHash?: string;
    htlcCreationVout?: number;
    htlcVersion?: string;
    senderPubKey?: Uint8Array;
    // JSON-serialized SubmitOptionsPayload
    options: string;
}

export interface RequestExternalTxProps {
    originChain: SupportedNetworks;
    originAddress: string;
    targetChain: SupportedNetworks;
    targetAddress: string;
    originSymbol: CurrencyOptions;
    targetSymbol: CurrencyOptions;
    amount: string;
    fee: string;
    // JSON-serialized SubmitOptionsPayload
    options: string;
}

export interface HtlcLockingTransaction {
    id: string;
    senderAddress: string;
    senderPubkey: string;
    htlcTimestamp: string;
    amount: string;
    txHash: string;
    status: string;
    errReason: string;
    creator: string;
    htlcAddress: string;
    pull_status: string;
}

export interface HtlcLockingTransactionResponse {
    htlcLockingTransaction: HtlcLockingTransaction[];
    pagination?: {
        next_key?: string | null;
        total?: string;
    };
}

export interface QueryHtlcLockingTransactionParams {
    baseUrl: string;
    limit?: number;
    offset?: number;
    paginationKey?: string;
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
