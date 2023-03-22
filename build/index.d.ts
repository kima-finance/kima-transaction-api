export declare enum SupportedNetworks {
    ETHEREUM = "ETH",
    POLYGON = "POL",
    AVALANCHE = "AVX",
    SOLANA = "SOL",
    FUSE = "FUS",
    CELO = "CEL",
    BSC = "BSC",
    ARBITRIUM = "ARB",
    OPTIMISM = "OPT",
    POLYGON_ZKEVM = "ZKE"
}
export declare enum CurrencyOptions {
    USDT = "USDT",
    USDC = "USDC",
    USDK = "USDK"
}
interface Props {
    originChain: SupportedNetworks;
    originAddress: string;
    targetChain: SupportedNetworks;
    targetAddress: string;
    symbol: CurrencyOptions;
    amount: number;
    fee: number;
}
export declare function submitKimaTransaction({ originChain, originAddress, targetChain, targetAddress, symbol, amount, fee, }: Props): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
export {};
