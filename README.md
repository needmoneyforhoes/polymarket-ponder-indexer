# Polymarket Ponder Indexer

A [Ponder](https://ponder.sh)-based on-chain event indexer (TypeScript/Node) that indexes Polymarket CTF exchange events. Companion to `polymarket-shadow-tracker`.

## Contents

- `ponder.config.ts`, `ponder.schema.ts`, `src/index.ts` — Ponder app
- `abis/CTFExchange.ts` — contract ABI
- Run `npm install` then `npm run dev` (requires Node).

---
*Split out from a single monorepo on 2026-06-06 as part of a repository reorganization. Data files, logs, and secrets (`.arbVenv`/`.env`) are git-ignored — the bot/tools load the private key from `.arbVenv` at runtime, never hardcoded.*
