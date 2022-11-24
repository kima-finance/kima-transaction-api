interface Props {
    originChain: string;
    originAddress: string;
    targetChain: string;
    targetAddress: string;
    amount: number;
    fee: number;
}
export declare function submitKimaTransaction({ originChain, originAddress, targetChain, targetAddress, amount, fee, }: Props): Promise<import("@cosmjs/stargate").DeliverTxResponse>;
export {};
