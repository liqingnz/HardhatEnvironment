import "dotenv/config";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@typechain/hardhat";
import "@nomicfoundation/hardhat-ethers";
import "@nomicfoundation/hardhat-chai-matchers";

const config: HardhatUserConfig = {
    solidity: {
        version: "0.8.19",
        settings: {
            optimizer: {
                enabled: true,
                runs: 1000,
            },
        },
    },
    networks: {
        hardhat: {},
        mumbai: {
            url: "https://polygon-mumbai.g.alchemy.com/v2/BSCzQY85ap-o5po_HdIQuUHQbnFQLNXS",
            accounts: [process.env.PRIVATE_KEY!],
        },
        polygon: {
            url: "https://polygon-mainnet.g.alchemy.com/v2/h96rDJZ9p0LJKDT5bQsAbm7iaj30JTQ6",
            accounts: [process.env.PRIVATE_KEY!],
        },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_KEY,
    },
};

export default config;
