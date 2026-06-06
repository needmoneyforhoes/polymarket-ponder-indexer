import { createConfig } from "@ponder/core";
import { http } from "viem";
import { CTFExchangeAbi } from "./abis/CTFExchange";

const startBlock = Number(process.env.PONDER_START_BLOCK ?? 0);

export default createConfig({
  networks: {
    polygon: {
      chainId: 137,
      transport: http(process.env.POLYGON_RPC_URL),
    },
  },
  contracts: {
    // Primary CTF Exchange
    CTFExchange: {
      network: "polygon",
      abi: CTFExchangeAbi,
      address: "0x4bFb41d5B3570DeFd03C39a9A4D8dE6Bd8B8982E",
      startBlock,
    },
    // NegRisk CTF Exchange
    NegRiskExchange: {
      network: "polygon",
      abi: CTFExchangeAbi,
      address: "0xC5d563A36AE78145C45a50134d48A1215220f80a",
      startBlock,
    },
  },
});
