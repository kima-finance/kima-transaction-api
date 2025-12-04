# Release Log

## v1.5.5

### Overview

- New: Bank transfers (FIAT rails) fully supported and unified with Credit Card handling.
- New: On-chain Swap flow (end-to-end) via new submit endpoint.
- Stricter FIAT contract: FIAT flows now require a transactionIdSeed (UUIDv4) and a derived transactionIdSignature.
- Naming change: fee/options naming aligned to camelCase (payment_method → paymentMethod).
- Stability fixes across Solana RPC usage and payload validation.
- Internals: large feature-based refactor (no route renames, but code layout changed).

### Added

- Swap module: high-level submitKimaSwapTransaction(...) + helpers aligned with backend contract.

### Changed

- Minor cleanups & version bumps.

Breaking

- None specific beyond the shared 1.5.x submit/fees expectations.

### Upgrade checklist

- npm i @kimafinance/kima-transaction-api@^1.5.5
- Use the swap helper for the new /submit/swap flow.
- Ensure you still pass feeId from the fee estimator for any submit.

## 1.4.x

### Overview

- Credit cards introduced as an origin network (on-ramp).
- Mandatory message signing of transaction details (light-mode approvals).
- Fee estimator required before submit; returns a feeId to forward to /submit.

### Changed

- Wrapped 1.4 submit contract: feeId forwarding and signed approval.

### Breaking

- Aligns with 1.4 backend requirements (fee+signature).

### Upgrade checklist

- npm i @kimafinance/kima-transaction-api@^1.4.0
- Use the fee estimator first; include feeId + signature in submit.
