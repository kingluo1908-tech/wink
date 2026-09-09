export type ChartPoint = {
  date: string;
  marketPrice: number;
  floorPrice: number;
  reserve: number;
};

export type BurnAddressRow = {
  id: string;
  rank: number;
  address: string;
  burnedAmount: string;
  burnWeight: string;
};

export const protocolData = {
  marketPrice: 0.001084,
  marketPriceChange24h: 8.42,
  floorPrice: 0.000327,
  marketFloorRatio: 3.31,
  blinkReserve: 12580432,
  reserveUsdValue: 1248320,
  reserveIncrease24h: 182450,
  reserveIncrease7d: 1284320,
  burnedSupply: 386520000,
  circulatingSupply: 613480000,
  burnRatio: 38.65,
  burnParticipants: 1248,
  rewardPool: 182450,
  pendingRewards: 12580,
  claimedRewards: 48320,
  myBurnedAmount: 8500000,
  myBurnWeight: 3.82,
  marketChartData: [
    { date: "D-6", marketPrice: 0.00088, floorPrice: 0.000255, reserve: 11296112 },
    { date: "D-5", marketPrice: 0.00091, floorPrice: 0.000263, reserve: 11472844 },
    { date: "D-4", marketPrice: 0.00097, floorPrice: 0.000275, reserve: 11764209 },
    { date: "D-3", marketPrice: 0.00102, floorPrice: 0.000291, reserve: 12015440 },
    { date: "D-2", marketPrice: 0.00099, floorPrice: 0.000305, reserve: 12223590 },
    { date: "D-1", marketPrice: 0.00105, floorPrice: 0.000316, reserve: 12441718 },
    { date: "Now", marketPrice: 0.001084, floorPrice: 0.000327, reserve: 12580432 }
  ] satisfies ChartPoint[],
  reserveChartData: [
    { date: "W-6", marketPrice: 0.00071, floorPrice: 0.00018, reserve: 8860000 },
    { date: "W-5", marketPrice: 0.00076, floorPrice: 0.0002, reserve: 9425000 },
    { date: "W-4", marketPrice: 0.0008, floorPrice: 0.000218, reserve: 10112000 },
    { date: "W-3", marketPrice: 0.00086, floorPrice: 0.000239, reserve: 10848000 },
    { date: "W-2", marketPrice: 0.00093, floorPrice: 0.000264, reserve: 11588000 },
    { date: "W-1", marketPrice: 0.00102, floorPrice: 0.000301, reserve: 12296000 },
    { date: "Now", marketPrice: 0.001084, floorPrice: 0.000327, reserve: 12580432 }
  ] satisfies ChartPoint[],
  topBurnAddresses: [
    { id: "burn-address-1", rank: 1, address: "0x84...7A21", burnedAmount: "28,600,000 WINK", burnWeight: "6.12%" },
    { id: "burn-address-2", rank: 2, address: "0x51...9B0E", burnedAmount: "23,100,000 WINK", burnWeight: "4.94%" },
    { id: "burn-address-3", rank: 3, address: "0xA9...12C0", burnedAmount: "19,450,000 WINK", burnWeight: "4.16%" },
    { id: "burn-address-4", rank: 4, address: "0x77...D4A8", burnedAmount: "16,820,000 WINK", burnWeight: "3.60%" },
    { id: "burn-address-5", rank: 5, address: "0x32...98DF", burnedAmount: "14,800,000 WINK", burnWeight: "3.17%" },
    { id: "burn-address-6", rank: 6, address: "0x18...A4F2", burnedAmount: "12,560,000 WINK", burnWeight: "2.69%" },
    { id: "burn-address-7", rank: 7, address: "0xB2...6E19", burnedAmount: "10,200,000 WINK", burnWeight: "2.18%" },
    { id: "burn-address-8", rank: 8, address: "0x09...C821", burnedAmount: "8,940,000 WINK", burnWeight: "1.91%" },
    { id: "burn-address-9", rank: 9, address: "0xF1...42B7", burnedAmount: "7,680,000 WINK", burnWeight: "1.64%" },
    { id: "burn-address-10", rank: 10, address: "0x6C...D910", burnedAmount: "6,900,000 WINK", burnWeight: "1.48%" }
  ] satisfies BurnAddressRow[]
};
