import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import 'hardhat-deploy';
import 'dotenv/config';

const config: HardhatUserConfig = {
  defaultNetwork: 'hardhat',
  solidity: '0.8.16',
  networks: {
    localhost: {
      url: 'http://127.0.0.1:8545/',
      chainId: 31337,
    },
    goerli: {
      url: process.env.GOERLI_RPC_URL,
      accounts: [process.env.PRIVATE_KEY as string],
      chainId: 5,
    },
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
  },

  gasReporter: {
    enabled: false,
  },
  etherscan: {
    apiKey: 'R8YHXS88DX9QNB67SFQAU1M1PRVAHUFDV9',
  },
};

export default config;
