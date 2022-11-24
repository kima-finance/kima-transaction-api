# Kima Transaction API

A wrapper around Kima's API, enabling sending and monitoring transactions

## Install

```bash
npm install --save @kimafinance/kima-transaction-api
yarn add @kimafinance/kima-transaction-api
```


## Usage

```ts
import { submitKimaTransaction } from '@kimafinance/kima-transaction-backend'

const txResult = await submitKimaTransaction({
    originAddress: "0x1234123412341234123412341234123412341234",
    originChain: "Ethereum",
    targetAddress: "0x1234123412341234123412341234123412341234",
    targetChain: "Polygon",
    amount: 100,
    fee: 0.3
})

```


## Available Functions

`submitKimaTransaction` : Submit a transaction to transfer liquidity from one change to another.

    - `originAddress (string)`: sending address
    - `originChain (string)`: sending chain
    - `targetAddress (string)`: receiving address
    - `targetChain (string)`: receiving chain
    - `amount (number)`: amount of token to transfer
    - `fee (number)`: amount of token that kima consumes to pay gas fee for pulling & releasing token transactions

## Environment Variables

`KIMA_BACKEND_MNEMONIC` : Seed phrase of developer wallet. This wallet must have KIMA token to submit a transaction to kima chain.
