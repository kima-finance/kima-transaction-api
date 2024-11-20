import _m0 from "../../config/probuff.config";
import { MsgCancelTransaction, MsgCancelTransactionResponse } from "./cancel";
import { MsgRequestDrainTransaction, MsgRequestDrainTransactionResponse } from "./drain";
import { MsgFinalizeDrainTransaction, MsgFinalizeDrainTransactionResponse } from "./drain-finalize";
import { MsgFinalizeTransaction, MsgFinalizeTransactionResponse } from "./finalize";
import { MsgRequestHtlcLock, MsgRequestHtlcLockResponse } from "./htlc-lock";
import { MsgHtlcReclaim, MsgHtlcReclaimResponse } from "./htlc-reclaim";
import { MsgUpdateLiquidityProvisionParams, MsgUpdateLiquidityProvisionParamsResponse } from "./liquidity-provision";
import { MsgRequestProvisionTransaction, MsgRequestProvisionTransactionResponse } from "./provision";
import { MsgFinalizeProvisionTransaction, MsgFinalizeProvisionTransactionResponse } from "./provision-finalize";
import { MsgRequestTransaction } from "./request";
import { MsgRequestTransactionResponse } from "./response";
import { MsgSetTxHash, MsgSetTxHashResponse } from "./set-hash";
import { MsgSetTxProcess, MsgSetTxProcessResponse } from "./set-process";
import { MsgUpdateTransferLimitParams, MsgUpdateTransferLimitParamsResponse } from "./transfer-limit";
import { MsgFinalizeWithdrawTransaction, MsgFinalizeWithdrawTransactionResponse } from "./withdraw";

/** Msg defines the Msg service. */
export interface Msg {
  RequestTransaction(
    request: MsgRequestTransaction
  ): Promise<MsgRequestTransactionResponse>;
  FinalizeTransaction(
    request: MsgFinalizeTransaction
  ): Promise<MsgFinalizeTransactionResponse>;
  RequestProvisionTransaction(
    request: MsgRequestProvisionTransaction
  ): Promise<MsgRequestProvisionTransactionResponse>;
  CancelTransaction(
    request: MsgCancelTransaction
  ): Promise<MsgCancelTransactionResponse>;
  SetTxHash(request: MsgSetTxHash): Promise<MsgSetTxHashResponse>;
  SetTxProcess(request: MsgSetTxProcess): Promise<MsgSetTxProcessResponse>;
  FinalizeProvisionTransaction(
    request: MsgFinalizeProvisionTransaction
  ): Promise<MsgFinalizeProvisionTransactionResponse>;
  RequestDrainTransaction(
    request: MsgRequestDrainTransaction
  ): Promise<MsgRequestDrainTransactionResponse>;
  FinalizeDrainTransaction(
    request: MsgFinalizeDrainTransaction
  ): Promise<MsgFinalizeDrainTransactionResponse>;
  RequestHtlcLock(
    request: MsgRequestHtlcLock
  ): Promise<MsgRequestHtlcLockResponse>;
  HtlcReclaim(request: MsgHtlcReclaim): Promise<MsgHtlcReclaimResponse>;
  UpdateLiquidityProvisionParams(
    request: MsgUpdateLiquidityProvisionParams
  ): Promise<MsgUpdateLiquidityProvisionParamsResponse>;
  UpdateTransferLimitParams(
    request: MsgUpdateTransferLimitParams
  ): Promise<MsgUpdateTransferLimitParamsResponse>;
  FinalizeWithdrawTransaction(
    request: MsgFinalizeWithdrawTransaction
  ): Promise<MsgFinalizeWithdrawTransactionResponse>;
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RequestTransaction = this.RequestTransaction.bind(this);
    this.FinalizeTransaction = this.FinalizeTransaction.bind(this);
    this.RequestProvisionTransaction =
      this.RequestProvisionTransaction.bind(this);
    this.CancelTransaction = this.CancelTransaction.bind(this);
    this.SetTxHash = this.SetTxHash.bind(this);
    this.SetTxProcess = this.SetTxProcess.bind(this);
    this.FinalizeProvisionTransaction =
      this.FinalizeProvisionTransaction.bind(this);
    this.RequestDrainTransaction = this.RequestDrainTransaction.bind(this);
    this.FinalizeDrainTransaction = this.FinalizeDrainTransaction.bind(this);
    this.RequestHtlcLock = this.RequestHtlcLock.bind(this);
    this.HtlcReclaim = this.HtlcReclaim.bind(this);
    this.UpdateLiquidityProvisionParams =
      this.UpdateLiquidityProvisionParams.bind(this);
    this.UpdateTransferLimitParams = this.UpdateTransferLimitParams.bind(this);
    this.FinalizeWithdrawTransaction =
      this.FinalizeWithdrawTransaction.bind(this);
  }
  RequestTransaction(
    request: MsgRequestTransaction
  ): Promise<MsgRequestTransactionResponse> {
    const data = MsgRequestTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "RequestTransaction",
      data
    );
    return promise.then((data) =>
      MsgRequestTransactionResponse.decode(new _m0.Reader(data))
    );
  }

  FinalizeTransaction(
    request: MsgFinalizeTransaction
  ): Promise<MsgFinalizeTransactionResponse> {
    const data = MsgFinalizeTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "FinalizeTransaction",
      data
    );
    return promise.then((data) =>
      MsgFinalizeTransactionResponse.decode(new _m0.Reader(data))
    );
  }

  RequestProvisionTransaction(
    request: MsgRequestProvisionTransaction
  ): Promise<MsgRequestProvisionTransactionResponse> {
    const data = MsgRequestProvisionTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "RequestProvisionTransaction",
      data
    );
    return promise.then((data) =>
      MsgRequestProvisionTransactionResponse.decode(new _m0.Reader(data))
    );
  }

  CancelTransaction(
    request: MsgCancelTransaction
  ): Promise<MsgCancelTransactionResponse> {
    const data = MsgCancelTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "CancelTransaction",
      data
    );
    return promise.then((data) =>
      MsgCancelTransactionResponse.decode(new _m0.Reader(data))
    );
  }

  SetTxHash(request: MsgSetTxHash): Promise<MsgSetTxHashResponse> {
    const data = MsgSetTxHash.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "SetTxHash",
      data
    );
    return promise.then((data) =>
      MsgSetTxHashResponse.decode(new _m0.Reader(data))
    );
  }

  SetTxProcess(request: MsgSetTxProcess): Promise<MsgSetTxProcessResponse> {
    const data = MsgSetTxProcess.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "SetTxProcess",
      data
    );
    return promise.then((data) =>
      MsgSetTxProcessResponse.decode(new _m0.Reader(data))
    );
  }

  FinalizeProvisionTransaction(
    request: MsgFinalizeProvisionTransaction
  ): Promise<MsgFinalizeProvisionTransactionResponse> {
    const data = MsgFinalizeProvisionTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "FinalizeProvisionTransaction",
      data
    );
    return promise.then((data) =>
      MsgFinalizeProvisionTransactionResponse.decode(new _m0.Reader(data))
    );
  }

  RequestDrainTransaction(
    request: MsgRequestDrainTransaction
  ): Promise<MsgRequestDrainTransactionResponse> {
    const data = MsgRequestDrainTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "RequestDrainTransaction",
      data
    );
    return promise.then((data) =>
      MsgRequestDrainTransactionResponse.decode(new _m0.Reader(data))
    );
  }

  FinalizeDrainTransaction(
    request: MsgFinalizeDrainTransaction
  ): Promise<MsgFinalizeDrainTransactionResponse> {
    const data = MsgFinalizeDrainTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "FinalizeDrainTransaction",
      data
    );
    return promise.then((data) =>
      MsgFinalizeDrainTransactionResponse.decode(new _m0.Reader(data))
    );
  }

  RequestHtlcLock(
    request: MsgRequestHtlcLock
  ): Promise<MsgRequestHtlcLockResponse> {
    const data = MsgRequestHtlcLock.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "RequestHtlcLock",
      data
    );
    return promise.then((data) =>
      MsgRequestHtlcLockResponse.decode(new _m0.Reader(data))
    );
  }

  HtlcReclaim(request: MsgHtlcReclaim): Promise<MsgHtlcReclaimResponse> {
    const data = MsgHtlcReclaim.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "HtlcReclaim",
      data
    );
    return promise.then((data) =>
      MsgHtlcReclaimResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateLiquidityProvisionParams(
    request: MsgUpdateLiquidityProvisionParams
  ): Promise<MsgUpdateLiquidityProvisionParamsResponse> {
    const data = MsgUpdateLiquidityProvisionParams.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "UpdateLiquidityProvisionParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateLiquidityProvisionParamsResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateTransferLimitParams(
    request: MsgUpdateTransferLimitParams
  ): Promise<MsgUpdateTransferLimitParamsResponse> {
    const data = MsgUpdateTransferLimitParams.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "UpdateTransferLimitParams",
      data
    );
    return promise.then((data) =>
      MsgUpdateTransferLimitParamsResponse.decode(new _m0.Reader(data))
    );
  }

  FinalizeWithdrawTransaction(
    request: MsgFinalizeWithdrawTransaction
  ): Promise<MsgFinalizeWithdrawTransactionResponse> {
    const data = MsgFinalizeWithdrawTransaction.encode(request).finish();
    const promise = this.rpc.request(
      "kimablockchain.transaction.Msg",
      "FinalizeWithdrawTransaction",
      data
    );
    return promise.then((data) =>
      MsgFinalizeWithdrawTransactionResponse.decode(new _m0.Reader(data))
    );
  }
}
