require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async () => {
//   const accounts = await ethers.getSigners();

//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */

//  npx hardhat run --network rinkeby scripts/deploy.js

const MAINNET_RPC_URL =
  process.env.MAINNET_RPC_URL ||
  process.env.ALCHEMY_MAINNET_RPC_URL ||
  "https://eth-mainnet.alchemyapi.io/v2/your-api-key";
const RINKEBY_RPC_URL =
  process.env.RINKEBY_RPC_URL ||
  "https://rinkeby.infura.io/v3/24022fda545f41beb59334bdbaf3ef32";
const KOVAN_RPC_URL =
  process.env.KOVAN_RPC_URL ||
  "https://eth-kovan.alchemyapi.io/v2/your-api-key";
const MNEMONIC =
  "night maple green stomach protect theory fee learn play airport token salon";
const ETHERSCAN_API_KEY =
  process.env.ETHERSCAN_API_KEY || "WCVDU52748WW4F7EKDEDB89HKH41BIA4N2";
// optional
const PRIVATE_KEY =
  process.env.PRIVATE_KEY ||
  "33e8389993eea0488d813b34ee8d8d84f74f204c17b95896e9380afc6a514dc7";
module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {},
    local: {
      url: "http://127.0.0.1:8545/",
    },
    rinkeby: {
      url: RINKEBY_RPC_URL,
      accounts: [PRIVATE_KEY],
      // accounts: {
      //   mnemonic: MNEMONIC,
      // },
      saveDeployments: true,
    },
  },
  solidity: "0.8.13",
  namedAccounts: {
    deployer: {
      default: 0, // here this will by default take the first account as deployer
      1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
    },
    feeCollector: {
      default: 1,
    },
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./src/artifacts",
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY,
  },
};
