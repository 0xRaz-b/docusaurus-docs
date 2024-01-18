import * as dotenv from 'dotenv';

// Plugins
import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-chai-matchers';
import '@nomicfoundation/hardhat-toolbox';
import '@nomicfoundation/hardhat-foundry';
import '@nomiclabs/hardhat-etherscan';
import '@primitivefi/hardhat-dodoc';
import 'hardhat-contract-sizer';
import '@typechain/hardhat';
import 'hardhat-tracer';
import 'hardhat-deploy';
import 'tapioca-sdk';
import 'typechain';
import fs from 'fs';

// Utils
import SDK from 'tapioca-sdk';
import { HttpNetworkConfig } from 'hardhat/types';
import { TAPIOCA_PROJECTS_NAME } from '@tapioca-sdk/api/config';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace NodeJS {
        interface ProcessEnv {
            ALCHEMY_API_KEY: string;
            ENV: string;
        }
    }
}

const networkName =
    process.argv[process.argv.findIndex((c) => c === '--network') + 1]; // Get the network name from the command line

if (networkName === undefined) {
    throw new Error(
        '[-] env vars not loaded, please specify a network with --network <network> and create its file in .env/<network>.env',
    );
}
const path = `.env/${networkName}.env`;
if (fs.existsSync(path)) {
    dotenv.config({ path });
} else {
    throw new Error(
        '[-] env vars not loaded, please specify a network with --network <network> and create its file in .env/<network>.env',
    );
}

type TNetwork = ReturnType<
    typeof SDK.API.utils.getSupportedChains
>[number]['name'];
const supportedChains = SDK.API.utils.getSupportedChains().reduce(
    (sdkChains, chain) => ({
        ...sdkChains,
        [chain.name]: <HttpNetworkConfig>{
            accounts:
                process.env.PRIVATE_KEY !== undefined
                    ? [process.env.PRIVATE_KEY]
                    : [],
            live: true,
            url: chain.rpc.replace('<api_key>', process.env.ALCHEMY_API_KEY),
            gasMultiplier: chain.tags[0] === 'testnet' ? 2 : 1,
            chainId: Number(chain.chainId),
            tags: [...chain.tags],
        },
    }),
    {} as { [key in TNetwork]: HttpNetworkConfig },
);

const config: HardhatUserConfig & { dodoc: any } = {
    solidity: {
        compilers: [
            {
                version: '0.4.24',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 100,
                    },
                },
            },
            {
                version: '0.8.22',
                settings: {
                    evmVersion: 'paris', // Latest before Shanghai
                    optimizer: {
                        enabled: true,
                        runs: 9999,
                    },
                },
            },
        ],
    },
    paths: {
        artifacts: './gen/artifacts',
        cache: './gen/cache',
    },
    namedAccounts: {
        deployer: 0,
    },
    defaultNetwork: 'hardhat',
    networks: {
        hardhat: {
            allowUnlimitedContractSize: true,
            accounts: {
                count: 5,
            },
        },
        ...supportedChains,
    },
    SDK: { project: TAPIOCA_PROJECTS_NAME.TapToken },
    etherscan: {
        apiKey: {
            goerli: process.env.BLOCKSCAN_KEY ?? '',
            arbitrumGoerli: process.env.ARBITRUM_GOERLI_KEY ?? '',
            avalancheFujiTestnet: process.env.AVALANCHE_FUJI_KEY ?? '',
            bscTestnet: process.env.BSC_KEY ?? '',
            polygonMumbai: process.env.POLYGON_MUMBAI ?? '',
            ftmTestnet: process.env.FTM_TESTNET ?? '',
        },
        customChains: [],
    },
    mocha: {
        timeout: 4000000,
    },
    dodoc: {
        runOnCompile: false,
        freshOutput: false,
        outputDir: 'gen/docs',
    },
    typechain: {
        outDir: 'typechain',
        target: 'ethers-v5',
    },
};

export default config;
