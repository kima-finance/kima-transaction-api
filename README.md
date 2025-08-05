# Kima Transaction API

[![Build & Deploy](https://github.com/kima-finance/kima-transaction-api/actions/workflows/dev_auto_publish_npm.yml/badge.svg)](https://github.com/kima-finance/kima-transaction-api/actions/workflows/dev_auto_publish_npm.yml)
[![npm version](https://img.shields.io/npm/v/%40kimafinance/kima-transaction-api)](https://www.npmjs.com/package/@kimafinance/kima-transaction-api/)
[![Download NPM](https://img.shields.io/npm/dm/%40kimafinance/kima-transaction-api.svg?style=flat)](https://www.npmjs.com/package/@kimafinance/kima-transaction-api/)

A wrapper around Kima's API, enabling sending and monitoring transactions. This is for beta version

## Install

```bash
npm install --save @kimafinance/kima-transaction-api
yarn add @kimafinance/kima-transaction-api
```

## Usage

```ts
import {
  submitKimaTransaction,
  SupportNetworks,
  CurrencyOptions,
} from "@kimafinance/kima-transaction-api";

const txResult = await submitKimaTransaction({
  originAddress: "0x1234123412341234123412341234123412341234",
  originChain: "ETH",
  originSymbol: "USDK",
  targetAddress: "0x1234123412341234123412341234123412341234",
  targetChain: "POL",
  targetSymbol: "USDK",
  amount: "100",
  fee: "0.3",
  htlcCreationHash: "", // required to send empty strings for now
  htlcCreationVout: "",
  htlcExpirationTimestamp: "",
  htlcVersion: "",
  senderPubKey: "",
  options: {
    signature: "", // required: generated signature from the approval message
    feeId: "", // required: id returned from calculated fee in fcs
    chargeFeeAtTarget: false // required: wether to deduct fees from origin or target
    transactionIdSeed: "", // optional: used in fiat on ramp payments
    transactionIdSignature: "", // optional: used to validate transaction idempotency
  }
});
```

## Available Functions

`submitKimaTransaction` : Submit a transaction to transfer liquidity from one change to another.

    - `originAddress`: sending address
    - `originChain`: sending chain
    - `originSymbol`: sending token symbol
    - `targetAddress`: receiving address
    - `targetChain`: receiving chain
    - `targetSymbol`: receiving token symbol
    - `amount`: amount of token to transfer
    - `fee`: amount of token that kima consumes to pay gas fee for pulling & releasing token transactions

## Environment Variables

`KIMA_BACKEND_MNEMONIC` : Seed phrase of developer wallet. This wallet must have KIMA token to submit a transaction to kima chain.
`KIMA_BACKEND_NODE_PROVIDER` : Node provider for kima chain
