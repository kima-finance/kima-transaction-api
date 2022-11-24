import { SigningStargateClient, StdFee } from '@cosmjs/stargate'
import dotenv from 'dotenv'
import { Registry, OfflineSigner, EncodeObject } from '@cosmjs/proto-signing'
import {
  MsgRequestTransaction,
  MsgApproveTransaction,
  MsgFetchBalance
} from './tx'

dotenv.config()

const defaultFee = {
  amount: [],
  gas: '200000'
}

interface SignAndBroadcastOptions {
  fee: StdFee
  memo?: string
}

const types = [
  [
    '/DiversifiTechnologies.diversifi.diversifi.MsgRequestTransaction',
    MsgRequestTransaction
  ],
  [
    '/DiversifiTechnologies.diversifi.diversifi.MsgApproveTransaction',
    MsgApproveTransaction
  ],
  [
    '/DiversifiTechnologies.diversifi.diversifi.MsgFetchBalance',
    MsgFetchBalance
  ]
]

export const registry = new Registry(<any>types)

export const TxClient = async (wallet: OfflineSigner) => {
  const client = await SigningStargateClient.connectWithSigner(
    'https://' + process.env.KIMA_BACKEND_DIVERSIFI_NODE_PROVIDER1,
    wallet,
    { registry }
  )
  const { address } = (await wallet.getAccounts())[0]

  return {
    signAndBroadcast: (
      msgs: EncodeObject[],
      { fee, memo }: SignAndBroadcastOptions = { fee: defaultFee, memo: '' }
    ) => client.signAndBroadcast(address, msgs, fee, memo),
    msgRequestTransaction: (data: MsgRequestTransaction): EncodeObject => ({
      typeUrl:
        '/DiversifiTechnologies.diversifi.diversifi.MsgRequestTransaction',
      value: MsgRequestTransaction.fromPartial(data)
    }),
    msgApproveTransaction: (data: MsgApproveTransaction): EncodeObject => ({
      typeUrl:
        '/DiversifiTechnologies.diversifi.diversifi.MsgApproveTransaction',
      value: MsgApproveTransaction.fromPartial(data)
    }),
    msgFetchBalance: (data: MsgFetchBalance): EncodeObject => ({
      typeUrl: '/DiversifiTechnologies.diversifi.diversifi.MsgFetchBalance',
      value: MsgFetchBalance.fromPartial(data)
    })
  }
}
