import { ponder } from "@/generated";

// Handle OrderFilled from primary CTF Exchange
ponder.on("CTFExchange:OrderFilled", async ({ event, context }) => {
  await _saveFill(event, context);
});

// Handle OrderFilled from NegRisk CTF Exchange
ponder.on("NegRiskExchange:OrderFilled", async ({ event, context }) => {
  await _saveFill(event, context);
});

async function _saveFill(event: any, context: any) {
  const {
    maker,
    taker,
    makerAssetId,
    takerAssetId,
    makerAmountFilled,
    takerAmountFilled,
  } = event.args;

  const id = `${event.transaction.hash}-${event.log.logIndex}`;

  await context.db.OrderFill.upsert({
    id,
    create: {
      txHash:            event.transaction.hash.toLowerCase(),
      logIndex:          event.log.logIndex,
      blockTimestamp:    Number(event.block.timestamp),
      maker:             maker.toLowerCase(),
      taker:             taker.toLowerCase(),
      makerAssetId:      makerAssetId.toString(),
      takerAssetId:      takerAssetId.toString(),
      makerAmountFilled: makerAmountFilled.toString(),
      takerAmountFilled: takerAmountFilled.toString(),
    },
    update: {},  // idempotent — don't overwrite if already exists
  });
}
