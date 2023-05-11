import {HardhatUserConfig} from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv"

dotenv.config()

const config: HardhatUserConfig = {
    solidity: "0.8.18",
    etherscan: {
        apiKey: process.env.APIKEY_ARB
    },
    networks: {
        hardhat: {},
        bscmainnet: {
            url: "https://bsc-dataseed.binance.org/",
            chainId: 56,
            accounts: {
                mnemonic: process.env.MNEMONIC
            }
        },
        arbitrum: {
            url: "https://arb1.arbitrum.io/rpc",
            chainId: 42161,
            accounts: {
                mnemonic: process.env.MNEMONIC
            }
        },
        testnet: {
            url: "https://data-seed-prebsc-1-s3.binance.org:8545",
            chainId: 97,
            accounts: {
                mnemonic: process.env.MNEMONIC
            }
        }
    }
};

export default config;
