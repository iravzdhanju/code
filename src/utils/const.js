import { LCDClient } from "@terra-money/terra.js";

export const COLLECTION_2D = 1;
export const COLLECTION_3D = 2;

export const DENOM = {
    UST: "uusd",
    LUNA: "uluna",
};

export const DEFAULTS = {
    CURRENCY: "LUNA",
    WHITELIST_STATUS: null,
    WHITELIST: "1",
    QUANTITY: 1,
    PRICE: 200,
    LOADER_TIMEOUT: 800,
    RESERVATIONS_REFRESH_RATE: 1000 * 15,
    LUNA_REFRESH_RATE: 1000 * 30,
    RANDOMEARTH_LINK: "https://randomearth.io/collections/terra1934kn7p03ns94htl75zpzsg0n4yvw8yf2746ep",
    STAGES_LEVEL_MAP: {
        STAFF: ["0"],
        STAGES: ["1", "2", "3", "4"],
    },
};

export const CONTRACT = {
    DOMAIN_FCD: "https://finder.terra.money/columbus-5/tx/",
    MINT_ROUTE: "/store?query_msg=%7B%22tokens%22:%7B%22owner%22:%22terra1m2vmq9tdp8de0he706s8l3vuc28dxrc024rdcn%22,%22limit%22:30,%20%22offset%22:20}}",
    NFT_CUBE_ADDRESS: "terra1k5pa7htlznr7hskhr9dx8qlk65emhktrgmuknd",
    NFT_ADDRESS_2D: "terra1trn7mhgc9e2wfkm5mhr65p3eu7a2lc526uwny2",
    NFT_ADDRESS_3D: "terra18d5cqlsqgxp8w7ysn48l4r8a5328592wfwjtyz",
    MINTER_ADDRESS: "terra10qst5jvyexqczh0jn5w9acjlnkczk4lnqsnwzc",
    FUSER_ADDRESS: "terra17qtp3f3xzwruul7tlxys6p2zz3gdsse33cn7gn",
};

export const MAINNET = {
    name: "mainnet",
    chainID: "columbus-5",
    URL: "https://lcd.terra.dev",
    FCD: "https://fcd.terra.dev",
    TRANSACTION_URL: "https://finder.terra.money/columbus-5/tx/",
};

export const TESTNET = {
    URL: "https://bombay-lcd.terra.dev",
    chainID: "bombay-12",
    FCD: "https://bombay-fcd.terra.dev",
    TRANSACTION_URL: "https://finder.terra.money/testnet/tx/",
};

export const NET = MAINNET;
export const lcdClient = new LCDClient(MAINNET);

export const walletConnectChainIds = {
    0: TESTNET,
    1: MAINNET,
};