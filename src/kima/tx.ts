/* eslint-disable */
import { Reader, Writer } from 'protobufjs/minimal'

export const protobufPackage = 'DiversifiTechnologies.diversifi.diversifi'

export interface MsgRequestTransaction {
  creator: string
  originChain: string
  originAddress: string
  targetChain: string
  targetAddress: string
  amount: string
  fee: string
}

export interface MsgRequestTransactionResponse {
  code: string
  msg: string
}

export interface MsgApproveTransaction {
  creator: string
  txHash: string
  success: string
  signedKey: string
}

export interface MsgApproveTransactionResponse {
  code: string
  msg: string
}

export interface MsgFetchBalance {
  creator: string
}

export interface MsgFetchBalanceResponse {
  code: string
  result: string
}

export interface MsgObservationVote {
  creator: string
  txHash: string
  chainId: string
  from: string
  to: string
  amount: string
}

export interface MsgObservationVoteResponse {
  code: string
  msg: string
}

export interface MsgUpdateBalance {
  creator: string
  chainId: string
  balance: string
  decimal: string
}

export interface MsgUpdateBalanceResponse {
  code: string
  msg: string
}

export interface MsgKeysignVote {
  creator: string
  txHash: string
  pubKey: string
}

export interface MsgKeysignVoteResponse {
  code: string
  msg: string
}

export interface MsgUpdateGasFee {
  creator: string
  chainId: string
  fee: string
}

export interface MsgUpdateGasFeeResponse {}

export interface MsgProvisionTransaction {
  creator: string
  fromChain: string
  fromAddress: string
  symbol: string
  tokenAddr: string
  amount: string
  options: string
}

export interface MsgProvisionTransactionResponse {}

export interface MsgDrainTransaction {
  creator: string
  fromChain: string
  toChain: string
  toAddress: string
  nftAddr: string
  amount: string
  options: string
}

export interface MsgDrainTransactionResponse {}

export interface MsgCancelTransaction {
  creator: string
  transactionId: string
}

export interface MsgCancelTransactionResponse {}

const baseMsgRequestTransaction: object = {
  creator: '',
  originChain: '',
  originAddress: '',
  targetChain: '',
  targetAddress: '',
  amount: '',
  fee: ''
}

export const MsgRequestTransaction = {
  encode(
    message: MsgRequestTransaction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.originChain !== '') {
      writer.uint32(18).string(message.originChain)
    }
    if (message.originAddress !== '') {
      writer.uint32(26).string(message.originAddress)
    }
    if (message.targetChain !== '') {
      writer.uint32(34).string(message.targetChain)
    }
    if (message.targetAddress !== '') {
      writer.uint32(42).string(message.targetAddress)
    }
    if (message.amount !== '') {
      writer.uint32(50).string(message.amount)
    }
    if (message.fee !== '') {
      writer.uint32(58).string(message.fee)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRequestTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRequestTransaction } as MsgRequestTransaction
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.originChain = reader.string()
          break
        case 3:
          message.originAddress = reader.string()
          break
        case 4:
          message.targetChain = reader.string()
          break
        case 5:
          message.targetAddress = reader.string()
          break
        case 6:
          message.amount = reader.string()
          break
        case 7:
          message.fee = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgRequestTransaction {
    const message = { ...baseMsgRequestTransaction } as MsgRequestTransaction
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.originChain !== undefined && object.originChain !== null) {
      message.originChain = String(object.originChain)
    } else {
      message.originChain = ''
    }
    if (object.originAddress !== undefined && object.originAddress !== null) {
      message.originAddress = String(object.originAddress)
    } else {
      message.originAddress = ''
    }
    if (object.targetChain !== undefined && object.targetChain !== null) {
      message.targetChain = String(object.targetChain)
    } else {
      message.targetChain = ''
    }
    if (object.targetAddress !== undefined && object.targetAddress !== null) {
      message.targetAddress = String(object.targetAddress)
    } else {
      message.targetAddress = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = String(object.fee)
    } else {
      message.fee = ''
    }
    return message
  },

  toJSON(message: MsgRequestTransaction): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.originChain !== undefined && (obj.originChain = message.originChain)
    message.originAddress !== undefined &&
      (obj.originAddress = message.originAddress)
    message.targetChain !== undefined && (obj.targetChain = message.targetChain)
    message.targetAddress !== undefined &&
      (obj.targetAddress = message.targetAddress)
    message.amount !== undefined && (obj.amount = message.amount)
    message.fee !== undefined && (obj.fee = message.fee)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgRequestTransaction>
  ): MsgRequestTransaction {
    const message = { ...baseMsgRequestTransaction } as MsgRequestTransaction
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.originChain !== undefined && object.originChain !== null) {
      message.originChain = object.originChain
    } else {
      message.originChain = ''
    }
    if (object.originAddress !== undefined && object.originAddress !== null) {
      message.originAddress = object.originAddress
    } else {
      message.originAddress = ''
    }
    if (object.targetChain !== undefined && object.targetChain !== null) {
      message.targetChain = object.targetChain
    } else {
      message.targetChain = ''
    }
    if (object.targetAddress !== undefined && object.targetAddress !== null) {
      message.targetAddress = object.targetAddress
    } else {
      message.targetAddress = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee
    } else {
      message.fee = ''
    }
    return message
  }
}

const baseMsgRequestTransactionResponse: object = { code: '', msg: '' }

export const MsgRequestTransactionResponse = {
  encode(
    message: MsgRequestTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== '') {
      writer.uint32(10).string(message.code)
    }
    if (message.msg !== '') {
      writer.uint32(18).string(message.msg)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRequestTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgRequestTransactionResponse
    } as MsgRequestTransactionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string()
          break
        case 2:
          message.msg = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgRequestTransactionResponse {
    const message = {
      ...baseMsgRequestTransactionResponse
    } as MsgRequestTransactionResponse
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code)
    } else {
      message.code = ''
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg)
    } else {
      message.msg = ''
    }
    return message
  },

  toJSON(message: MsgRequestTransactionResponse): unknown {
    const obj: any = {}
    message.code !== undefined && (obj.code = message.code)
    message.msg !== undefined && (obj.msg = message.msg)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgRequestTransactionResponse>
  ): MsgRequestTransactionResponse {
    const message = {
      ...baseMsgRequestTransactionResponse
    } as MsgRequestTransactionResponse
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code
    } else {
      message.code = ''
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg
    } else {
      message.msg = ''
    }
    return message
  }
}

const baseMsgApproveTransaction: object = {
  creator: '',
  txHash: '',
  success: '',
  signedKey: ''
}

export const MsgApproveTransaction = {
  encode(
    message: MsgApproveTransaction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.txHash !== '') {
      writer.uint32(18).string(message.txHash)
    }
    if (message.success !== '') {
      writer.uint32(26).string(message.success)
    }
    if (message.signedKey !== '') {
      writer.uint32(34).string(message.signedKey)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgApproveTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgApproveTransaction } as MsgApproveTransaction
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.txHash = reader.string()
          break
        case 3:
          message.success = reader.string()
          break
        case 4:
          message.signedKey = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgApproveTransaction {
    const message = { ...baseMsgApproveTransaction } as MsgApproveTransaction
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.txHash !== undefined && object.txHash !== null) {
      message.txHash = String(object.txHash)
    } else {
      message.txHash = ''
    }
    if (object.success !== undefined && object.success !== null) {
      message.success = String(object.success)
    } else {
      message.success = ''
    }
    if (object.signedKey !== undefined && object.signedKey !== null) {
      message.signedKey = String(object.signedKey)
    } else {
      message.signedKey = ''
    }
    return message
  },

  toJSON(message: MsgApproveTransaction): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.txHash !== undefined && (obj.txHash = message.txHash)
    message.success !== undefined && (obj.success = message.success)
    message.signedKey !== undefined && (obj.signedKey = message.signedKey)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgApproveTransaction>
  ): MsgApproveTransaction {
    const message = { ...baseMsgApproveTransaction } as MsgApproveTransaction
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.txHash !== undefined && object.txHash !== null) {
      message.txHash = object.txHash
    } else {
      message.txHash = ''
    }
    if (object.success !== undefined && object.success !== null) {
      message.success = object.success
    } else {
      message.success = ''
    }
    if (object.signedKey !== undefined && object.signedKey !== null) {
      message.signedKey = object.signedKey
    } else {
      message.signedKey = ''
    }
    return message
  }
}

const baseMsgApproveTransactionResponse: object = { code: '', msg: '' }

export const MsgApproveTransactionResponse = {
  encode(
    message: MsgApproveTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== '') {
      writer.uint32(10).string(message.code)
    }
    if (message.msg !== '') {
      writer.uint32(18).string(message.msg)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgApproveTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgApproveTransactionResponse
    } as MsgApproveTransactionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string()
          break
        case 2:
          message.msg = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgApproveTransactionResponse {
    const message = {
      ...baseMsgApproveTransactionResponse
    } as MsgApproveTransactionResponse
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code)
    } else {
      message.code = ''
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg)
    } else {
      message.msg = ''
    }
    return message
  },

  toJSON(message: MsgApproveTransactionResponse): unknown {
    const obj: any = {}
    message.code !== undefined && (obj.code = message.code)
    message.msg !== undefined && (obj.msg = message.msg)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgApproveTransactionResponse>
  ): MsgApproveTransactionResponse {
    const message = {
      ...baseMsgApproveTransactionResponse
    } as MsgApproveTransactionResponse
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code
    } else {
      message.code = ''
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg
    } else {
      message.msg = ''
    }
    return message
  }
}

const baseMsgFetchBalance: object = { creator: '' }

export const MsgFetchBalance = {
  encode(message: MsgFetchBalance, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgFetchBalance {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgFetchBalance } as MsgFetchBalance
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgFetchBalance {
    const message = { ...baseMsgFetchBalance } as MsgFetchBalance
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    return message
  },

  toJSON(message: MsgFetchBalance): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    return obj
  },

  fromPartial(object: DeepPartial<MsgFetchBalance>): MsgFetchBalance {
    const message = { ...baseMsgFetchBalance } as MsgFetchBalance
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    return message
  }
}

const baseMsgFetchBalanceResponse: object = { code: '', result: '' }

export const MsgFetchBalanceResponse = {
  encode(
    message: MsgFetchBalanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== '') {
      writer.uint32(10).string(message.code)
    }
    if (message.result !== '') {
      writer.uint32(18).string(message.result)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgFetchBalanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgFetchBalanceResponse
    } as MsgFetchBalanceResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string()
          break
        case 2:
          message.result = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgFetchBalanceResponse {
    const message = {
      ...baseMsgFetchBalanceResponse
    } as MsgFetchBalanceResponse
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code)
    } else {
      message.code = ''
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = String(object.result)
    } else {
      message.result = ''
    }
    return message
  },

  toJSON(message: MsgFetchBalanceResponse): unknown {
    const obj: any = {}
    message.code !== undefined && (obj.code = message.code)
    message.result !== undefined && (obj.result = message.result)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgFetchBalanceResponse>
  ): MsgFetchBalanceResponse {
    const message = {
      ...baseMsgFetchBalanceResponse
    } as MsgFetchBalanceResponse
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code
    } else {
      message.code = ''
    }
    if (object.result !== undefined && object.result !== null) {
      message.result = object.result
    } else {
      message.result = ''
    }
    return message
  }
}

const baseMsgObservationVote: object = {
  creator: '',
  txHash: '',
  chainId: '',
  from: '',
  to: '',
  amount: ''
}

export const MsgObservationVote = {
  encode(
    message: MsgObservationVote,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.txHash !== '') {
      writer.uint32(18).string(message.txHash)
    }
    if (message.chainId !== '') {
      writer.uint32(26).string(message.chainId)
    }
    if (message.from !== '') {
      writer.uint32(34).string(message.from)
    }
    if (message.to !== '') {
      writer.uint32(42).string(message.to)
    }
    if (message.amount !== '') {
      writer.uint32(50).string(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgObservationVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgObservationVote } as MsgObservationVote
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.txHash = reader.string()
          break
        case 3:
          message.chainId = reader.string()
          break
        case 4:
          message.from = reader.string()
          break
        case 5:
          message.to = reader.string()
          break
        case 6:
          message.amount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgObservationVote {
    const message = { ...baseMsgObservationVote } as MsgObservationVote
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.txHash !== undefined && object.txHash !== null) {
      message.txHash = String(object.txHash)
    } else {
      message.txHash = ''
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId)
    } else {
      message.chainId = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from)
    } else {
      message.from = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to)
    } else {
      message.to = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    return message
  },

  toJSON(message: MsgObservationVote): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.txHash !== undefined && (obj.txHash = message.txHash)
    message.chainId !== undefined && (obj.chainId = message.chainId)
    message.from !== undefined && (obj.from = message.from)
    message.to !== undefined && (obj.to = message.to)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgObservationVote>): MsgObservationVote {
    const message = { ...baseMsgObservationVote } as MsgObservationVote
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.txHash !== undefined && object.txHash !== null) {
      message.txHash = object.txHash
    } else {
      message.txHash = ''
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId
    } else {
      message.chainId = ''
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from
    } else {
      message.from = ''
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to
    } else {
      message.to = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    return message
  }
}

const baseMsgObservationVoteResponse: object = { code: '', msg: '' }

export const MsgObservationVoteResponse = {
  encode(
    message: MsgObservationVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== '') {
      writer.uint32(10).string(message.code)
    }
    if (message.msg !== '') {
      writer.uint32(18).string(message.msg)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgObservationVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgObservationVoteResponse
    } as MsgObservationVoteResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string()
          break
        case 2:
          message.msg = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgObservationVoteResponse {
    const message = {
      ...baseMsgObservationVoteResponse
    } as MsgObservationVoteResponse
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code)
    } else {
      message.code = ''
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg)
    } else {
      message.msg = ''
    }
    return message
  },

  toJSON(message: MsgObservationVoteResponse): unknown {
    const obj: any = {}
    message.code !== undefined && (obj.code = message.code)
    message.msg !== undefined && (obj.msg = message.msg)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgObservationVoteResponse>
  ): MsgObservationVoteResponse {
    const message = {
      ...baseMsgObservationVoteResponse
    } as MsgObservationVoteResponse
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code
    } else {
      message.code = ''
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg
    } else {
      message.msg = ''
    }
    return message
  }
}

const baseMsgUpdateBalance: object = {
  creator: '',
  chainId: '',
  balance: '',
  decimal: ''
}

export const MsgUpdateBalance = {
  encode(message: MsgUpdateBalance, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.chainId !== '') {
      writer.uint32(18).string(message.chainId)
    }
    if (message.balance !== '') {
      writer.uint32(26).string(message.balance)
    }
    if (message.decimal !== '') {
      writer.uint32(34).string(message.decimal)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateBalance {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateBalance } as MsgUpdateBalance
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.chainId = reader.string()
          break
        case 3:
          message.balance = reader.string()
          break
        case 4:
          message.decimal = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateBalance {
    const message = { ...baseMsgUpdateBalance } as MsgUpdateBalance
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId)
    } else {
      message.chainId = ''
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = String(object.balance)
    } else {
      message.balance = ''
    }
    if (object.decimal !== undefined && object.decimal !== null) {
      message.decimal = String(object.decimal)
    } else {
      message.decimal = ''
    }
    return message
  },

  toJSON(message: MsgUpdateBalance): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.chainId !== undefined && (obj.chainId = message.chainId)
    message.balance !== undefined && (obj.balance = message.balance)
    message.decimal !== undefined && (obj.decimal = message.decimal)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateBalance>): MsgUpdateBalance {
    const message = { ...baseMsgUpdateBalance } as MsgUpdateBalance
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId
    } else {
      message.chainId = ''
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance
    } else {
      message.balance = ''
    }
    if (object.decimal !== undefined && object.decimal !== null) {
      message.decimal = object.decimal
    } else {
      message.decimal = ''
    }
    return message
  }
}

const baseMsgUpdateBalanceResponse: object = { code: '', msg: '' }

export const MsgUpdateBalanceResponse = {
  encode(
    message: MsgUpdateBalanceResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== '') {
      writer.uint32(10).string(message.code)
    }
    if (message.msg !== '') {
      writer.uint32(18).string(message.msg)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgUpdateBalanceResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgUpdateBalanceResponse
    } as MsgUpdateBalanceResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string()
          break
        case 2:
          message.msg = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateBalanceResponse {
    const message = {
      ...baseMsgUpdateBalanceResponse
    } as MsgUpdateBalanceResponse
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code)
    } else {
      message.code = ''
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg)
    } else {
      message.msg = ''
    }
    return message
  },

  toJSON(message: MsgUpdateBalanceResponse): unknown {
    const obj: any = {}
    message.code !== undefined && (obj.code = message.code)
    message.msg !== undefined && (obj.msg = message.msg)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgUpdateBalanceResponse>
  ): MsgUpdateBalanceResponse {
    const message = {
      ...baseMsgUpdateBalanceResponse
    } as MsgUpdateBalanceResponse
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code
    } else {
      message.code = ''
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg
    } else {
      message.msg = ''
    }
    return message
  }
}

const baseMsgKeysignVote: object = { creator: '', txHash: '', pubKey: '' }

export const MsgKeysignVote = {
  encode(message: MsgKeysignVote, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.txHash !== '') {
      writer.uint32(18).string(message.txHash)
    }
    if (message.pubKey !== '') {
      writer.uint32(26).string(message.pubKey)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgKeysignVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgKeysignVote } as MsgKeysignVote
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.txHash = reader.string()
          break
        case 3:
          message.pubKey = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgKeysignVote {
    const message = { ...baseMsgKeysignVote } as MsgKeysignVote
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.txHash !== undefined && object.txHash !== null) {
      message.txHash = String(object.txHash)
    } else {
      message.txHash = ''
    }
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = String(object.pubKey)
    } else {
      message.pubKey = ''
    }
    return message
  },

  toJSON(message: MsgKeysignVote): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.txHash !== undefined && (obj.txHash = message.txHash)
    message.pubKey !== undefined && (obj.pubKey = message.pubKey)
    return obj
  },

  fromPartial(object: DeepPartial<MsgKeysignVote>): MsgKeysignVote {
    const message = { ...baseMsgKeysignVote } as MsgKeysignVote
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.txHash !== undefined && object.txHash !== null) {
      message.txHash = object.txHash
    } else {
      message.txHash = ''
    }
    if (object.pubKey !== undefined && object.pubKey !== null) {
      message.pubKey = object.pubKey
    } else {
      message.pubKey = ''
    }
    return message
  }
}

const baseMsgKeysignVoteResponse: object = { code: '', msg: '' }

export const MsgKeysignVoteResponse = {
  encode(
    message: MsgKeysignVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.code !== '') {
      writer.uint32(10).string(message.code)
    }
    if (message.msg !== '') {
      writer.uint32(18).string(message.msg)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgKeysignVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgKeysignVoteResponse } as MsgKeysignVoteResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.code = reader.string()
          break
        case 2:
          message.msg = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgKeysignVoteResponse {
    const message = { ...baseMsgKeysignVoteResponse } as MsgKeysignVoteResponse
    if (object.code !== undefined && object.code !== null) {
      message.code = String(object.code)
    } else {
      message.code = ''
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = String(object.msg)
    } else {
      message.msg = ''
    }
    return message
  },

  toJSON(message: MsgKeysignVoteResponse): unknown {
    const obj: any = {}
    message.code !== undefined && (obj.code = message.code)
    message.msg !== undefined && (obj.msg = message.msg)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgKeysignVoteResponse>
  ): MsgKeysignVoteResponse {
    const message = { ...baseMsgKeysignVoteResponse } as MsgKeysignVoteResponse
    if (object.code !== undefined && object.code !== null) {
      message.code = object.code
    } else {
      message.code = ''
    }
    if (object.msg !== undefined && object.msg !== null) {
      message.msg = object.msg
    } else {
      message.msg = ''
    }
    return message
  }
}

const baseMsgUpdateGasFee: object = { creator: '', chainId: '', fee: '' }

export const MsgUpdateGasFee = {
  encode(message: MsgUpdateGasFee, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.chainId !== '') {
      writer.uint32(18).string(message.chainId)
    }
    if (message.fee !== '') {
      writer.uint32(26).string(message.fee)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateGasFee {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateGasFee } as MsgUpdateGasFee
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.chainId = reader.string()
          break
        case 3:
          message.fee = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateGasFee {
    const message = { ...baseMsgUpdateGasFee } as MsgUpdateGasFee
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = String(object.chainId)
    } else {
      message.chainId = ''
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = String(object.fee)
    } else {
      message.fee = ''
    }
    return message
  },

  toJSON(message: MsgUpdateGasFee): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.chainId !== undefined && (obj.chainId = message.chainId)
    message.fee !== undefined && (obj.fee = message.fee)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateGasFee>): MsgUpdateGasFee {
    const message = { ...baseMsgUpdateGasFee } as MsgUpdateGasFee
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.chainId !== undefined && object.chainId !== null) {
      message.chainId = object.chainId
    } else {
      message.chainId = ''
    }
    if (object.fee !== undefined && object.fee !== null) {
      message.fee = object.fee
    } else {
      message.fee = ''
    }
    return message
  }
}

const baseMsgUpdateGasFeeResponse: object = {}

export const MsgUpdateGasFeeResponse = {
  encode(_: MsgUpdateGasFeeResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateGasFeeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgUpdateGasFeeResponse
    } as MsgUpdateGasFeeResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateGasFeeResponse {
    const message = {
      ...baseMsgUpdateGasFeeResponse
    } as MsgUpdateGasFeeResponse
    return message
  },

  toJSON(_: MsgUpdateGasFeeResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<MsgUpdateGasFeeResponse>
  ): MsgUpdateGasFeeResponse {
    const message = {
      ...baseMsgUpdateGasFeeResponse
    } as MsgUpdateGasFeeResponse
    return message
  }
}

const baseMsgProvisionTransaction: object = {
  creator: '',
  fromChain: '',
  fromAddress: '',
  symbol: '',
  tokenAddr: '',
  amount: '',
  options: ''
}

export const MsgProvisionTransaction = {
  encode(
    message: MsgProvisionTransaction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.fromChain !== '') {
      writer.uint32(18).string(message.fromChain)
    }
    if (message.fromAddress !== '') {
      writer.uint32(26).string(message.fromAddress)
    }
    if (message.symbol !== '') {
      writer.uint32(34).string(message.symbol)
    }
    if (message.tokenAddr !== '') {
      writer.uint32(42).string(message.tokenAddr)
    }
    if (message.amount !== '') {
      writer.uint32(50).string(message.amount)
    }
    if (message.options !== '') {
      writer.uint32(58).string(message.options)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgProvisionTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgProvisionTransaction
    } as MsgProvisionTransaction
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.fromChain = reader.string()
          break
        case 3:
          message.fromAddress = reader.string()
          break
        case 4:
          message.symbol = reader.string()
          break
        case 5:
          message.tokenAddr = reader.string()
          break
        case 6:
          message.amount = reader.string()
          break
        case 7:
          message.options = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgProvisionTransaction {
    const message = {
      ...baseMsgProvisionTransaction
    } as MsgProvisionTransaction
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.fromChain !== undefined && object.fromChain !== null) {
      message.fromChain = String(object.fromChain)
    } else {
      message.fromChain = ''
    }
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = String(object.fromAddress)
    } else {
      message.fromAddress = ''
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol)
    } else {
      message.symbol = ''
    }
    if (object.tokenAddr !== undefined && object.tokenAddr !== null) {
      message.tokenAddr = String(object.tokenAddr)
    } else {
      message.tokenAddr = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = String(object.options)
    } else {
      message.options = ''
    }
    return message
  },

  toJSON(message: MsgProvisionTransaction): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.fromChain !== undefined && (obj.fromChain = message.fromChain)
    message.fromAddress !== undefined && (obj.fromAddress = message.fromAddress)
    message.symbol !== undefined && (obj.symbol = message.symbol)
    message.tokenAddr !== undefined && (obj.tokenAddr = message.tokenAddr)
    message.amount !== undefined && (obj.amount = message.amount)
    message.options !== undefined && (obj.options = message.options)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgProvisionTransaction>
  ): MsgProvisionTransaction {
    const message = {
      ...baseMsgProvisionTransaction
    } as MsgProvisionTransaction
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.fromChain !== undefined && object.fromChain !== null) {
      message.fromChain = object.fromChain
    } else {
      message.fromChain = ''
    }
    if (object.fromAddress !== undefined && object.fromAddress !== null) {
      message.fromAddress = object.fromAddress
    } else {
      message.fromAddress = ''
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol
    } else {
      message.symbol = ''
    }
    if (object.tokenAddr !== undefined && object.tokenAddr !== null) {
      message.tokenAddr = object.tokenAddr
    } else {
      message.tokenAddr = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = object.options
    } else {
      message.options = ''
    }
    return message
  }
}

const baseMsgProvisionTransactionResponse: object = {}

export const MsgProvisionTransactionResponse = {
  encode(
    _: MsgProvisionTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgProvisionTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgProvisionTransactionResponse
    } as MsgProvisionTransactionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgProvisionTransactionResponse {
    const message = {
      ...baseMsgProvisionTransactionResponse
    } as MsgProvisionTransactionResponse
    return message
  },

  toJSON(_: MsgProvisionTransactionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<MsgProvisionTransactionResponse>
  ): MsgProvisionTransactionResponse {
    const message = {
      ...baseMsgProvisionTransactionResponse
    } as MsgProvisionTransactionResponse
    return message
  }
}

const baseMsgDrainTransaction: object = {
  creator: '',
  fromChain: '',
  toChain: '',
  toAddress: '',
  nftAddr: '',
  amount: '',
  options: ''
}

export const MsgDrainTransaction = {
  encode(
    message: MsgDrainTransaction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.fromChain !== '') {
      writer.uint32(18).string(message.fromChain)
    }
    if (message.toChain !== '') {
      writer.uint32(26).string(message.toChain)
    }
    if (message.toAddress !== '') {
      writer.uint32(34).string(message.toAddress)
    }
    if (message.nftAddr !== '') {
      writer.uint32(42).string(message.nftAddr)
    }
    if (message.amount !== '') {
      writer.uint32(50).string(message.amount)
    }
    if (message.options !== '') {
      writer.uint32(58).string(message.options)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDrainTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDrainTransaction } as MsgDrainTransaction
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.fromChain = reader.string()
          break
        case 3:
          message.toChain = reader.string()
          break
        case 4:
          message.toAddress = reader.string()
          break
        case 5:
          message.nftAddr = reader.string()
          break
        case 6:
          message.amount = reader.string()
          break
        case 7:
          message.options = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDrainTransaction {
    const message = { ...baseMsgDrainTransaction } as MsgDrainTransaction
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.fromChain !== undefined && object.fromChain !== null) {
      message.fromChain = String(object.fromChain)
    } else {
      message.fromChain = ''
    }
    if (object.toChain !== undefined && object.toChain !== null) {
      message.toChain = String(object.toChain)
    } else {
      message.toChain = ''
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = String(object.toAddress)
    } else {
      message.toAddress = ''
    }
    if (object.nftAddr !== undefined && object.nftAddr !== null) {
      message.nftAddr = String(object.nftAddr)
    } else {
      message.nftAddr = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = String(object.options)
    } else {
      message.options = ''
    }
    return message
  },

  toJSON(message: MsgDrainTransaction): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.fromChain !== undefined && (obj.fromChain = message.fromChain)
    message.toChain !== undefined && (obj.toChain = message.toChain)
    message.toAddress !== undefined && (obj.toAddress = message.toAddress)
    message.nftAddr !== undefined && (obj.nftAddr = message.nftAddr)
    message.amount !== undefined && (obj.amount = message.amount)
    message.options !== undefined && (obj.options = message.options)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDrainTransaction>): MsgDrainTransaction {
    const message = { ...baseMsgDrainTransaction } as MsgDrainTransaction
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.fromChain !== undefined && object.fromChain !== null) {
      message.fromChain = object.fromChain
    } else {
      message.fromChain = ''
    }
    if (object.toChain !== undefined && object.toChain !== null) {
      message.toChain = object.toChain
    } else {
      message.toChain = ''
    }
    if (object.toAddress !== undefined && object.toAddress !== null) {
      message.toAddress = object.toAddress
    } else {
      message.toAddress = ''
    }
    if (object.nftAddr !== undefined && object.nftAddr !== null) {
      message.nftAddr = object.nftAddr
    } else {
      message.nftAddr = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    if (object.options !== undefined && object.options !== null) {
      message.options = object.options
    } else {
      message.options = ''
    }
    return message
  }
}

const baseMsgDrainTransactionResponse: object = {}

export const MsgDrainTransactionResponse = {
  encode(
    _: MsgDrainTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDrainTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgDrainTransactionResponse
    } as MsgDrainTransactionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDrainTransactionResponse {
    const message = {
      ...baseMsgDrainTransactionResponse
    } as MsgDrainTransactionResponse
    return message
  },

  toJSON(_: MsgDrainTransactionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<MsgDrainTransactionResponse>
  ): MsgDrainTransactionResponse {
    const message = {
      ...baseMsgDrainTransactionResponse
    } as MsgDrainTransactionResponse
    return message
  }
}

const baseMsgCancelTransaction: object = { creator: '', transactionId: '' }

export const MsgCancelTransaction = {
  encode(
    message: MsgCancelTransaction,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.transactionId !== '') {
      writer.uint32(18).string(message.transactionId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCancelTransaction {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCancelTransaction } as MsgCancelTransaction
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.transactionId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCancelTransaction {
    const message = { ...baseMsgCancelTransaction } as MsgCancelTransaction
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.transactionId !== undefined && object.transactionId !== null) {
      message.transactionId = String(object.transactionId)
    } else {
      message.transactionId = ''
    }
    return message
  },

  toJSON(message: MsgCancelTransaction): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.transactionId !== undefined &&
      (obj.transactionId = message.transactionId)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCancelTransaction>): MsgCancelTransaction {
    const message = { ...baseMsgCancelTransaction } as MsgCancelTransaction
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.transactionId !== undefined && object.transactionId !== null) {
      message.transactionId = object.transactionId
    } else {
      message.transactionId = ''
    }
    return message
  }
}

const baseMsgCancelTransactionResponse: object = {}

export const MsgCancelTransactionResponse = {
  encode(
    _: MsgCancelTransactionResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCancelTransactionResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgCancelTransactionResponse
    } as MsgCancelTransactionResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgCancelTransactionResponse {
    const message = {
      ...baseMsgCancelTransactionResponse
    } as MsgCancelTransactionResponse
    return message
  },

  toJSON(_: MsgCancelTransactionResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<MsgCancelTransactionResponse>
  ): MsgCancelTransactionResponse {
    const message = {
      ...baseMsgCancelTransactionResponse
    } as MsgCancelTransactionResponse
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  RequestTransaction(
    request: MsgRequestTransaction
  ): Promise<MsgRequestTransactionResponse>
  ApproveTransaction(
    request: MsgApproveTransaction
  ): Promise<MsgApproveTransactionResponse>
  FetchBalance(request: MsgFetchBalance): Promise<MsgFetchBalanceResponse>
  ObservationVote(
    request: MsgObservationVote
  ): Promise<MsgObservationVoteResponse>
  UpdateBalance(request: MsgUpdateBalance): Promise<MsgUpdateBalanceResponse>
  KeysignVote(request: MsgKeysignVote): Promise<MsgKeysignVoteResponse>
  UpdateGasFee(request: MsgUpdateGasFee): Promise<MsgUpdateGasFeeResponse>
  ProvisionTransaction(
    request: MsgProvisionTransaction
  ): Promise<MsgProvisionTransactionResponse>
  DrainTransaction(
    request: MsgDrainTransaction
  ): Promise<MsgDrainTransactionResponse>
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CancelTransaction(
    request: MsgCancelTransaction
  ): Promise<MsgCancelTransactionResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  RequestTransaction(
    request: MsgRequestTransaction
  ): Promise<MsgRequestTransactionResponse> {
    const data = MsgRequestTransaction.encode(request).finish()
    const promise = this.rpc.request(
      'DiversifiTechnologies.diversifi.diversifi.Msg',
      'RequestTransaction',
      data
    )
    return promise.then((data) =>
      MsgRequestTransactionResponse.decode(new Reader(data))
    )
  }

  ApproveTransaction(
    request: MsgApproveTransaction
  ): Promise<MsgApproveTransactionResponse> {
    const data = MsgApproveTransaction.encode(request).finish()
    const promise = this.rpc.request(
      'DiversifiTechnologies.diversifi.diversifi.Msg',
      'ApproveTransaction',
      data
    )
    return promise.then((data) =>
      MsgApproveTransactionResponse.decode(new Reader(data))
    )
  }

  FetchBalance(request: MsgFetchBalance): Promise<MsgFetchBalanceResponse> {
    const data = MsgFetchBalance.encode(request).finish()
    const promise = this.rpc.request(
      'DiversifiTechnologies.diversifi.diversifi.Msg',
      'FetchBalance',
      data
    )
    return promise.then((data) =>
      MsgFetchBalanceResponse.decode(new Reader(data))
    )
  }

  ObservationVote(
    request: MsgObservationVote
  ): Promise<MsgObservationVoteResponse> {
    const data = MsgObservationVote.encode(request).finish()
    const promise = this.rpc.request(
      'DiversifiTechnologies.diversifi.diversifi.Msg',
      'ObservationVote',
      data
    )
    return promise.then((data) =>
      MsgObservationVoteResponse.decode(new Reader(data))
    )
  }

  UpdateBalance(request: MsgUpdateBalance): Promise<MsgUpdateBalanceResponse> {
    const data = MsgUpdateBalance.encode(request).finish()
    const promise = this.rpc.request(
      'DiversifiTechnologies.diversifi.diversifi.Msg',
      'UpdateBalance',
      data
    )
    return promise.then((data) =>
      MsgUpdateBalanceResponse.decode(new Reader(data))
    )
  }

  KeysignVote(request: MsgKeysignVote): Promise<MsgKeysignVoteResponse> {
    const data = MsgKeysignVote.encode(request).finish()
    const promise = this.rpc.request(
      'DiversifiTechnologies.diversifi.diversifi.Msg',
      'KeysignVote',
      data
    )
    return promise.then((data) =>
      MsgKeysignVoteResponse.decode(new Reader(data))
    )
  }

  UpdateGasFee(request: MsgUpdateGasFee): Promise<MsgUpdateGasFeeResponse> {
    const data = MsgUpdateGasFee.encode(request).finish()
    const promise = this.rpc.request(
      'DiversifiTechnologies.diversifi.diversifi.Msg',
      'UpdateGasFee',
      data
    )
    return promise.then((data) =>
      MsgUpdateGasFeeResponse.decode(new Reader(data))
    )
  }

  ProvisionTransaction(
    request: MsgProvisionTransaction
  ): Promise<MsgProvisionTransactionResponse> {
    const data = MsgProvisionTransaction.encode(request).finish()
    const promise = this.rpc.request(
      'DiversifiTechnologies.diversifi.diversifi.Msg',
      'ProvisionTransaction',
      data
    )
    return promise.then((data) =>
      MsgProvisionTransactionResponse.decode(new Reader(data))
    )
  }

  DrainTransaction(
    request: MsgDrainTransaction
  ): Promise<MsgDrainTransactionResponse> {
    const data = MsgDrainTransaction.encode(request).finish()
    const promise = this.rpc.request(
      'DiversifiTechnologies.diversifi.diversifi.Msg',
      'DrainTransaction',
      data
    )
    return promise.then((data) =>
      MsgDrainTransactionResponse.decode(new Reader(data))
    )
  }

  CancelTransaction(
    request: MsgCancelTransaction
  ): Promise<MsgCancelTransactionResponse> {
    const data = MsgCancelTransaction.encode(request).finish()
    const promise = this.rpc.request(
      'DiversifiTechnologies.diversifi.diversifi.Msg',
      'CancelTransaction',
      data
    )
    return promise.then((data) =>
      MsgCancelTransactionResponse.decode(new Reader(data))
    )
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>
}

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>
