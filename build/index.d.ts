export declare enum SupportNetworks {
    Ethereum = "ETH",
    Polygon = "POL",
    Avalanche = "AVX",
    Solana = "SOL"
}
export declare enum CurrencyOptions {
    USDK = "USDK",
    USDT = "USDT",
    USDC = "USDC"
}
interface Props {
    originChain: SupportNetworks;
    originAddress: string;
    targetChain: SupportNetworks;
    targetAddress: string;
    symbol: CurrencyOptions;
    amount: number;
    fee: number;
}
export declare function submitKimaTransaction({ originChain, originAddress, targetChain, targetAddress, symbol, amount, fee, }: Props): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
export {};
