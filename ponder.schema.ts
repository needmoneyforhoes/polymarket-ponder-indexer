import { createSchema } from "@ponder/core";

export default createSchema((p) => ({
  // Table name "OrderFill" → Ponder exposes as "orderFill" / "orderFills" in GraphQL
  // Fields match exactly what ponder_poll_channel queries in v5_9_5.py:
  //   id txHash logIndex blockTimestamp maker taker
  //   makerAssetId takerAssetId makerAmountFilled takerAmountFilled
  OrderFill: p.createTable({
    id:                 p.string(),       // "{txHash}-{logIndex}"
    txHash:             p.string(),
    logIndex:           p.int(),
    blockTimestamp:     p.int(),          // unix seconds
    maker:              p.string(),       // lowercase address
    taker:              p.string(),       // lowercase address
    makerAssetId:       p.string(),       // uint256 as string (too large for JS int)
    takerAssetId:       p.string(),
    makerAmountFilled:  p.string(),
    takerAmountFilled:  p.string(),
  }),
}));
