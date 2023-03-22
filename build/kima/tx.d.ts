import { Reader, Writer } from "protobufjs/minimal";
export declare const protobufPackage = "KimaFinance.kima.kima";
export interface MsgRequestTransaction {
    creator: string;
    originChain: string;
    originAddress: string;
    targetChain: string;
    targetAddress: string;
    symbol: string;
    amount: string;
    fee: string;
}
export interface MsgRequestTransactionResponse {
    code: string;
    msg: string;
    txId: string;
}
export interface MsgApproveTransaction {
    creator: string;
    txCHash: string;
    txTHash: string;
    success: string;
    signedKey: string;
}
export interface MsgApproveTransactionResponse {
    code: string;
    msg: string;
}
export interface MsgFetchBalance {
    creator: string;
}
export interface MsgFetchBalanceResponse {
    code: string;
    result: string;
}
export interface MsgObservationVote {
    creator: string;
    txHash: string;
    chainId: string;
    from: string;
    to: string;
    amount: string;
    payType: string;
}
export interface MsgObservationVoteResponse {
    code: string;
    msg: string;
}
export interface MsgUpdateBalance {
    creator: string;
    chainId: string;
    balance: string;
    decimal: string;
}
export interface MsgUpdateBalanceResponse {
    code: string;
    msg: string;
}
export interface MsgKeysignVote {
    creator: string;
    txHash: string;
    pubKey: string;
}
export interface MsgKeysignVoteResponse {
    code: string;
    msg: string;
}
export interface MsgUpdateGasFee {
    creator: string;
    chainId: string;
    fee: string;
}
export interface MsgUpdateGasFeeResponse {
    code: string;
    msg: string;
}
export interface MsgProvisionTransaction {
    creator: string;
    fromChain: string;
    fromAddress: string;
    symbol: string;
    tokenAddr: string;
    amount: string;
    options: string;
}
export interface MsgProvisionTransactionResponse {
    code: string;
    msg: string;
}
export interface MsgDrainTransaction {
    creator: string;
    fromChain: string;
    toChain: string;
    toAddress: string;
    nftAddr: string;
    amount: string;
    options: string;
}
export interface MsgDrainTransactionResponse {
    code: string;
    msg: string;
}
export interface MsgCancelTransaction {
    creator: string;
    transactionId: string;
}
export interface MsgCancelTransactionResponse {
    code: string;
    msg: string;
}
export interface MsgAddWhitelisted {
    creator: string;
    address: string;
}
export interface MsgAddWhitelistedResponse {
    code: string;
    msg: string;
}
export interface MsgSetAdmin {
    creator: string;
}
export interface MsgSetAdminResponse {
    code: string;
    msg: string;
}
export interface MsgAddPubkey {
    creator: string;
    pubkey: string;
}
export interface MsgAddPubkeyResponse {
    code: string;
    msg: string;
}
export interface MsgUpdateTssPubkey {
    creator: string;
    tssPubkey: string;
    ecdsa: string;
    ebdsa: string;
    reserved: string;
}
export interface MsgUpdateTssPubkeyResponse {
    code: string;
    msg: string;
}
export interface MsgRemoveWhitelisted {
    creator: string;
    address: string;
}
export interface MsgRemoveWhitelistedResponse {
    code: string;
    msg: string;
}
export interface MsgClearTssInfo {
    creator: string;
}
export interface MsgClearTssInfoResponse {
    code: string;
    msg: string;
}
export interface MsgAddChain {
    creator: string;
    name: string;
    symbol: string;
    tokens: string[];
}
export interface MsgAddChainResponse {
    code: string;
    msg: string;
}
export interface MsgUpdateTssHash {
    creator: string;
    txId: string;
    tssPullHash: string;
}
export interface MsgUpdateTssHashResponse {
    code: string;
    msg: string;
}
export interface MsgUpdateChainStatus {
    creator: string;
    chainSymbol: string;
    disabled: boolean;
}
export interface MsgUpdateChainStatusResponse {
    code: string;
    msg: string;
}
export interface MsgAddToken {
    creator: string;
    chainSymbol: string;
    tokenSymbol: string;
}
export interface MsgAddTokenResponse {
    code: string;
    msg: string;
}
export interface MsgUpdateTssStatus {
    creator: string;
    status: string;
}
export interface MsgUpdateTssStatusResponse {
}
export interface MsgSetTxHash {
    creator: string;
    txId: string;
    txHash: string;
}
export interface MsgSetTxHashResponse {
    code: string;
    msg: string;
}
export declare const MsgRequestTransaction: {
    encode(message: MsgRequestTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRequestTransaction;
    fromJSON(object: any): MsgRequestTransaction;
    toJSON(message: MsgRequestTransaction): unknown;
    fromPartial(object: DeepPartial<MsgRequestTransaction>): MsgRequestTransaction;
};
export declare const MsgRequestTransactionResponse: {
    encode(message: MsgRequestTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRequestTransactionResponse;
    fromJSON(object: any): MsgRequestTransactionResponse;
    toJSON(message: MsgRequestTransactionResponse): unknown;
    fromPartial(object: DeepPartial<MsgRequestTransactionResponse>): MsgRequestTransactionResponse;
};
export declare const MsgApproveTransaction: {
    encode(message: MsgApproveTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgApproveTransaction;
    fromJSON(object: any): MsgApproveTransaction;
    toJSON(message: MsgApproveTransaction): unknown;
    fromPartial(object: DeepPartial<MsgApproveTransaction>): MsgApproveTransaction;
};
export declare const MsgApproveTransactionResponse: {
    encode(message: MsgApproveTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgApproveTransactionResponse;
    fromJSON(object: any): MsgApproveTransactionResponse;
    toJSON(message: MsgApproveTransactionResponse): unknown;
    fromPartial(object: DeepPartial<MsgApproveTransactionResponse>): MsgApproveTransactionResponse;
};
export declare const MsgFetchBalance: {
    encode(message: MsgFetchBalance, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgFetchBalance;
    fromJSON(object: any): MsgFetchBalance;
    toJSON(message: MsgFetchBalance): unknown;
    fromPartial(object: DeepPartial<MsgFetchBalance>): MsgFetchBalance;
};
export declare const MsgFetchBalanceResponse: {
    encode(message: MsgFetchBalanceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgFetchBalanceResponse;
    fromJSON(object: any): MsgFetchBalanceResponse;
    toJSON(message: MsgFetchBalanceResponse): unknown;
    fromPartial(object: DeepPartial<MsgFetchBalanceResponse>): MsgFetchBalanceResponse;
};
export declare const MsgObservationVote: {
    encode(message: MsgObservationVote, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgObservationVote;
    fromJSON(object: any): MsgObservationVote;
    toJSON(message: MsgObservationVote): unknown;
    fromPartial(object: DeepPartial<MsgObservationVote>): MsgObservationVote;
};
export declare const MsgObservationVoteResponse: {
    encode(message: MsgObservationVoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgObservationVoteResponse;
    fromJSON(object: any): MsgObservationVoteResponse;
    toJSON(message: MsgObservationVoteResponse): unknown;
    fromPartial(object: DeepPartial<MsgObservationVoteResponse>): MsgObservationVoteResponse;
};
export declare const MsgUpdateBalance: {
    encode(message: MsgUpdateBalance, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateBalance;
    fromJSON(object: any): MsgUpdateBalance;
    toJSON(message: MsgUpdateBalance): unknown;
    fromPartial(object: DeepPartial<MsgUpdateBalance>): MsgUpdateBalance;
};
export declare const MsgUpdateBalanceResponse: {
    encode(message: MsgUpdateBalanceResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateBalanceResponse;
    fromJSON(object: any): MsgUpdateBalanceResponse;
    toJSON(message: MsgUpdateBalanceResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdateBalanceResponse>): MsgUpdateBalanceResponse;
};
export declare const MsgKeysignVote: {
    encode(message: MsgKeysignVote, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgKeysignVote;
    fromJSON(object: any): MsgKeysignVote;
    toJSON(message: MsgKeysignVote): unknown;
    fromPartial(object: DeepPartial<MsgKeysignVote>): MsgKeysignVote;
};
export declare const MsgKeysignVoteResponse: {
    encode(message: MsgKeysignVoteResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgKeysignVoteResponse;
    fromJSON(object: any): MsgKeysignVoteResponse;
    toJSON(message: MsgKeysignVoteResponse): unknown;
    fromPartial(object: DeepPartial<MsgKeysignVoteResponse>): MsgKeysignVoteResponse;
};
export declare const MsgUpdateGasFee: {
    encode(message: MsgUpdateGasFee, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateGasFee;
    fromJSON(object: any): MsgUpdateGasFee;
    toJSON(message: MsgUpdateGasFee): unknown;
    fromPartial(object: DeepPartial<MsgUpdateGasFee>): MsgUpdateGasFee;
};
export declare const MsgUpdateGasFeeResponse: {
    encode(message: MsgUpdateGasFeeResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateGasFeeResponse;
    fromJSON(object: any): MsgUpdateGasFeeResponse;
    toJSON(message: MsgUpdateGasFeeResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdateGasFeeResponse>): MsgUpdateGasFeeResponse;
};
export declare const MsgProvisionTransaction: {
    encode(message: MsgProvisionTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgProvisionTransaction;
    fromJSON(object: any): MsgProvisionTransaction;
    toJSON(message: MsgProvisionTransaction): unknown;
    fromPartial(object: DeepPartial<MsgProvisionTransaction>): MsgProvisionTransaction;
};
export declare const MsgProvisionTransactionResponse: {
    encode(message: MsgProvisionTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgProvisionTransactionResponse;
    fromJSON(object: any): MsgProvisionTransactionResponse;
    toJSON(message: MsgProvisionTransactionResponse): unknown;
    fromPartial(object: DeepPartial<MsgProvisionTransactionResponse>): MsgProvisionTransactionResponse;
};
export declare const MsgDrainTransaction: {
    encode(message: MsgDrainTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDrainTransaction;
    fromJSON(object: any): MsgDrainTransaction;
    toJSON(message: MsgDrainTransaction): unknown;
    fromPartial(object: DeepPartial<MsgDrainTransaction>): MsgDrainTransaction;
};
export declare const MsgDrainTransactionResponse: {
    encode(message: MsgDrainTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgDrainTransactionResponse;
    fromJSON(object: any): MsgDrainTransactionResponse;
    toJSON(message: MsgDrainTransactionResponse): unknown;
    fromPartial(object: DeepPartial<MsgDrainTransactionResponse>): MsgDrainTransactionResponse;
};
export declare const MsgCancelTransaction: {
    encode(message: MsgCancelTransaction, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCancelTransaction;
    fromJSON(object: any): MsgCancelTransaction;
    toJSON(message: MsgCancelTransaction): unknown;
    fromPartial(object: DeepPartial<MsgCancelTransaction>): MsgCancelTransaction;
};
export declare const MsgCancelTransactionResponse: {
    encode(message: MsgCancelTransactionResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgCancelTransactionResponse;
    fromJSON(object: any): MsgCancelTransactionResponse;
    toJSON(message: MsgCancelTransactionResponse): unknown;
    fromPartial(object: DeepPartial<MsgCancelTransactionResponse>): MsgCancelTransactionResponse;
};
export declare const MsgAddWhitelisted: {
    encode(message: MsgAddWhitelisted, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddWhitelisted;
    fromJSON(object: any): MsgAddWhitelisted;
    toJSON(message: MsgAddWhitelisted): unknown;
    fromPartial(object: DeepPartial<MsgAddWhitelisted>): MsgAddWhitelisted;
};
export declare const MsgAddWhitelistedResponse: {
    encode(message: MsgAddWhitelistedResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddWhitelistedResponse;
    fromJSON(object: any): MsgAddWhitelistedResponse;
    toJSON(message: MsgAddWhitelistedResponse): unknown;
    fromPartial(object: DeepPartial<MsgAddWhitelistedResponse>): MsgAddWhitelistedResponse;
};
export declare const MsgSetAdmin: {
    encode(message: MsgSetAdmin, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetAdmin;
    fromJSON(object: any): MsgSetAdmin;
    toJSON(message: MsgSetAdmin): unknown;
    fromPartial(object: DeepPartial<MsgSetAdmin>): MsgSetAdmin;
};
export declare const MsgSetAdminResponse: {
    encode(message: MsgSetAdminResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetAdminResponse;
    fromJSON(object: any): MsgSetAdminResponse;
    toJSON(message: MsgSetAdminResponse): unknown;
    fromPartial(object: DeepPartial<MsgSetAdminResponse>): MsgSetAdminResponse;
};
export declare const MsgAddPubkey: {
    encode(message: MsgAddPubkey, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddPubkey;
    fromJSON(object: any): MsgAddPubkey;
    toJSON(message: MsgAddPubkey): unknown;
    fromPartial(object: DeepPartial<MsgAddPubkey>): MsgAddPubkey;
};
export declare const MsgAddPubkeyResponse: {
    encode(message: MsgAddPubkeyResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddPubkeyResponse;
    fromJSON(object: any): MsgAddPubkeyResponse;
    toJSON(message: MsgAddPubkeyResponse): unknown;
    fromPartial(object: DeepPartial<MsgAddPubkeyResponse>): MsgAddPubkeyResponse;
};
export declare const MsgUpdateTssPubkey: {
    encode(message: MsgUpdateTssPubkey, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTssPubkey;
    fromJSON(object: any): MsgUpdateTssPubkey;
    toJSON(message: MsgUpdateTssPubkey): unknown;
    fromPartial(object: DeepPartial<MsgUpdateTssPubkey>): MsgUpdateTssPubkey;
};
export declare const MsgUpdateTssPubkeyResponse: {
    encode(message: MsgUpdateTssPubkeyResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTssPubkeyResponse;
    fromJSON(object: any): MsgUpdateTssPubkeyResponse;
    toJSON(message: MsgUpdateTssPubkeyResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdateTssPubkeyResponse>): MsgUpdateTssPubkeyResponse;
};
export declare const MsgRemoveWhitelisted: {
    encode(message: MsgRemoveWhitelisted, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRemoveWhitelisted;
    fromJSON(object: any): MsgRemoveWhitelisted;
    toJSON(message: MsgRemoveWhitelisted): unknown;
    fromPartial(object: DeepPartial<MsgRemoveWhitelisted>): MsgRemoveWhitelisted;
};
export declare const MsgRemoveWhitelistedResponse: {
    encode(message: MsgRemoveWhitelistedResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgRemoveWhitelistedResponse;
    fromJSON(object: any): MsgRemoveWhitelistedResponse;
    toJSON(message: MsgRemoveWhitelistedResponse): unknown;
    fromPartial(object: DeepPartial<MsgRemoveWhitelistedResponse>): MsgRemoveWhitelistedResponse;
};
export declare const MsgClearTssInfo: {
    encode(message: MsgClearTssInfo, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgClearTssInfo;
    fromJSON(object: any): MsgClearTssInfo;
    toJSON(message: MsgClearTssInfo): unknown;
    fromPartial(object: DeepPartial<MsgClearTssInfo>): MsgClearTssInfo;
};
export declare const MsgClearTssInfoResponse: {
    encode(message: MsgClearTssInfoResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgClearTssInfoResponse;
    fromJSON(object: any): MsgClearTssInfoResponse;
    toJSON(message: MsgClearTssInfoResponse): unknown;
    fromPartial(object: DeepPartial<MsgClearTssInfoResponse>): MsgClearTssInfoResponse;
};
export declare const MsgAddChain: {
    encode(message: MsgAddChain, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddChain;
    fromJSON(object: any): MsgAddChain;
    toJSON(message: MsgAddChain): unknown;
    fromPartial(object: DeepPartial<MsgAddChain>): MsgAddChain;
};
export declare const MsgAddChainResponse: {
    encode(message: MsgAddChainResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddChainResponse;
    fromJSON(object: any): MsgAddChainResponse;
    toJSON(message: MsgAddChainResponse): unknown;
    fromPartial(object: DeepPartial<MsgAddChainResponse>): MsgAddChainResponse;
};
export declare const MsgUpdateTssHash: {
    encode(message: MsgUpdateTssHash, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTssHash;
    fromJSON(object: any): MsgUpdateTssHash;
    toJSON(message: MsgUpdateTssHash): unknown;
    fromPartial(object: DeepPartial<MsgUpdateTssHash>): MsgUpdateTssHash;
};
export declare const MsgUpdateTssHashResponse: {
    encode(message: MsgUpdateTssHashResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTssHashResponse;
    fromJSON(object: any): MsgUpdateTssHashResponse;
    toJSON(message: MsgUpdateTssHashResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdateTssHashResponse>): MsgUpdateTssHashResponse;
};
export declare const MsgUpdateChainStatus: {
    encode(message: MsgUpdateChainStatus, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateChainStatus;
    fromJSON(object: any): MsgUpdateChainStatus;
    toJSON(message: MsgUpdateChainStatus): unknown;
    fromPartial(object: DeepPartial<MsgUpdateChainStatus>): MsgUpdateChainStatus;
};
export declare const MsgUpdateChainStatusResponse: {
    encode(message: MsgUpdateChainStatusResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateChainStatusResponse;
    fromJSON(object: any): MsgUpdateChainStatusResponse;
    toJSON(message: MsgUpdateChainStatusResponse): unknown;
    fromPartial(object: DeepPartial<MsgUpdateChainStatusResponse>): MsgUpdateChainStatusResponse;
};
export declare const MsgAddToken: {
    encode(message: MsgAddToken, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddToken;
    fromJSON(object: any): MsgAddToken;
    toJSON(message: MsgAddToken): unknown;
    fromPartial(object: DeepPartial<MsgAddToken>): MsgAddToken;
};
export declare const MsgAddTokenResponse: {
    encode(message: MsgAddTokenResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgAddTokenResponse;
    fromJSON(object: any): MsgAddTokenResponse;
    toJSON(message: MsgAddTokenResponse): unknown;
    fromPartial(object: DeepPartial<MsgAddTokenResponse>): MsgAddTokenResponse;
};
export declare const MsgUpdateTssStatus: {
    encode(message: MsgUpdateTssStatus, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTssStatus;
    fromJSON(object: any): MsgUpdateTssStatus;
    toJSON(message: MsgUpdateTssStatus): unknown;
    fromPartial(object: DeepPartial<MsgUpdateTssStatus>): MsgUpdateTssStatus;
};
export declare const MsgUpdateTssStatusResponse: {
    encode(_: MsgUpdateTssStatusResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgUpdateTssStatusResponse;
    fromJSON(_: any): MsgUpdateTssStatusResponse;
    toJSON(_: MsgUpdateTssStatusResponse): unknown;
    fromPartial(_: DeepPartial<MsgUpdateTssStatusResponse>): MsgUpdateTssStatusResponse;
};
export declare const MsgSetTxHash: {
    encode(message: MsgSetTxHash, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetTxHash;
    fromJSON(object: any): MsgSetTxHash;
    toJSON(message: MsgSetTxHash): unknown;
    fromPartial(object: DeepPartial<MsgSetTxHash>): MsgSetTxHash;
};
export declare const MsgSetTxHashResponse: {
    encode(message: MsgSetTxHashResponse, writer?: Writer): Writer;
    decode(input: Reader | Uint8Array, length?: number): MsgSetTxHashResponse;
    fromJSON(object: any): MsgSetTxHashResponse;
    toJSON(message: MsgSetTxHashResponse): unknown;
    fromPartial(object: DeepPartial<MsgSetTxHashResponse>): MsgSetTxHashResponse;
};
/** Msg defines the Msg service. */
export interface Msg {
    RequestTransaction(request: MsgRequestTransaction): Promise<MsgRequestTransactionResponse>;
    ApproveTransaction(request: MsgApproveTransaction): Promise<MsgApproveTransactionResponse>;
    FetchBalance(request: MsgFetchBalance): Promise<MsgFetchBalanceResponse>;
    ObservationVote(request: MsgObservationVote): Promise<MsgObservationVoteResponse>;
    UpdateBalance(request: MsgUpdateBalance): Promise<MsgUpdateBalanceResponse>;
    KeysignVote(request: MsgKeysignVote): Promise<MsgKeysignVoteResponse>;
    UpdateGasFee(request: MsgUpdateGasFee): Promise<MsgUpdateGasFeeResponse>;
    ProvisionTransaction(request: MsgProvisionTransaction): Promise<MsgProvisionTransactionResponse>;
    DrainTransaction(request: MsgDrainTransaction): Promise<MsgDrainTransactionResponse>;
    CancelTransaction(request: MsgCancelTransaction): Promise<MsgCancelTransactionResponse>;
    AddWhitelisted(request: MsgAddWhitelisted): Promise<MsgAddWhitelistedResponse>;
    SetAdmin(request: MsgSetAdmin): Promise<MsgSetAdminResponse>;
    AddPubkey(request: MsgAddPubkey): Promise<MsgAddPubkeyResponse>;
    UpdateTssPubkey(request: MsgUpdateTssPubkey): Promise<MsgUpdateTssPubkeyResponse>;
    RemoveWhitelisted(request: MsgRemoveWhitelisted): Promise<MsgRemoveWhitelistedResponse>;
    ClearTssInfo(request: MsgClearTssInfo): Promise<MsgClearTssInfoResponse>;
    AddChain(request: MsgAddChain): Promise<MsgAddChainResponse>;
    UpdateTssHash(request: MsgUpdateTssHash): Promise<MsgUpdateTssHashResponse>;
    UpdateChainStatus(request: MsgUpdateChainStatus): Promise<MsgUpdateChainStatusResponse>;
    AddToken(request: MsgAddToken): Promise<MsgAddTokenResponse>;
    UpdateTssStatus(request: MsgUpdateTssStatus): Promise<MsgUpdateTssStatusResponse>;
    /** this line is used by starport scaffolding # proto/tx/rpc */
    SetTxHash(request: MsgSetTxHash): Promise<MsgSetTxHashResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    RequestTransaction(request: MsgRequestTransaction): Promise<MsgRequestTransactionResponse>;
    ApproveTransaction(request: MsgApproveTransaction): Promise<MsgApproveTransactionResponse>;
    FetchBalance(request: MsgFetchBalance): Promise<MsgFetchBalanceResponse>;
    ObservationVote(request: MsgObservationVote): Promise<MsgObservationVoteResponse>;
    UpdateBalance(request: MsgUpdateBalance): Promise<MsgUpdateBalanceResponse>;
    KeysignVote(request: MsgKeysignVote): Promise<MsgKeysignVoteResponse>;
    UpdateGasFee(request: MsgUpdateGasFee): Promise<MsgUpdateGasFeeResponse>;
    ProvisionTransaction(request: MsgProvisionTransaction): Promise<MsgProvisionTransactionResponse>;
    DrainTransaction(request: MsgDrainTransaction): Promise<MsgDrainTransactionResponse>;
    CancelTransaction(request: MsgCancelTransaction): Promise<MsgCancelTransactionResponse>;
    AddWhitelisted(request: MsgAddWhitelisted): Promise<MsgAddWhitelistedResponse>;
    SetAdmin(request: MsgSetAdmin): Promise<MsgSetAdminResponse>;
    AddPubkey(request: MsgAddPubkey): Promise<MsgAddPubkeyResponse>;
    UpdateTssPubkey(request: MsgUpdateTssPubkey): Promise<MsgUpdateTssPubkeyResponse>;
    RemoveWhitelisted(request: MsgRemoveWhitelisted): Promise<MsgRemoveWhitelistedResponse>;
    ClearTssInfo(request: MsgClearTssInfo): Promise<MsgClearTssInfoResponse>;
    AddChain(request: MsgAddChain): Promise<MsgAddChainResponse>;
    UpdateTssHash(request: MsgUpdateTssHash): Promise<MsgUpdateTssHashResponse>;
    UpdateChainStatus(request: MsgUpdateChainStatus): Promise<MsgUpdateChainStatusResponse>;
    AddToken(request: MsgAddToken): Promise<MsgAddTokenResponse>;
    UpdateTssStatus(request: MsgUpdateTssStatus): Promise<MsgUpdateTssStatusResponse>;
    SetTxHash(request: MsgSetTxHash): Promise<MsgSetTxHashResponse>;
}
interface Rpc {
    request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}
type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin ? T : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : T extends {} ? {
    [K in keyof T]?: DeepPartial<T[K]>;
} : Partial<T>;
export {};
