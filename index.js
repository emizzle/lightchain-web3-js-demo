const Web3 = require("web3");
const { deploy, estimateGas, unlock, getBlock } = require("./web3");
const { inspect } = require("util");


const DEPLOY_ARGS = [123];
const PASSWORD = "WelcomeToSirius";
const DEPLOY_GAS_DEFAULT = 200000;

let web3 = null;
let accounts = [];
let gasEstimate = null;

async function init() {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
  accounts = await getAccounts();
  await getLatestBlock();
  await unlockAccount();
  await estimateDeployGas();
  await deployContract();
}

async function getAccounts() {
  // get accounts and set default
  console.log("=== ACCOUNTS ===");
  try {
    const accounts = await web3.eth.getAccounts();
    console.log(`${inspect(accounts)}\n`);
    web3.eth.defaultAccount = accounts[0];
    return accounts;
  }
  catch (e) {
    console.error(`Error getting accounts: ${e}\n`);
  }
}

async function unlockAccount() {
  console.log("=== UNLOCK ACCOUNT ===");
  try {
    await unlock({ web3, account: accounts[0], password: PASSWORD });
    console.log(`Account ${accounts[0]} unlocked.`);
  } catch (e) {
    console.error(`Error unlocking accounts: ${e}`);
  }
  console.log("\n");
}

async function estimateDeployGas() {
  // run estimate gas
  console.log("=== ESTIMATE GAS ===");
  try {
    gasEstimate = await estimateGas({ web3, arguments: DEPLOY_ARGS });
    console.log(`${gasEstimate}`);
  }
  catch (e) {
    console.error(`Error estimating gas: ${e}`);
  }
  console.log("\n")
}

async function deployContract() {
  // run deploy
  console.log("=== DEPLOY CONTRACT ===");
  try {
    const deployResult = await deploy({ web3, gas: gasEstimate || DEPLOY_GAS_DEFAULT, arguments: DEPLOY_ARGS });
    console.log(`${inspect(deployResult)}`);
  }
  catch (e) {
    console.error(`Error deploying contract: ${e}`);
  }
  console.log("\n");
}

async function getLatestBlock() {
  console.log("=== LATEST BLOCK INFO ===");
  try {
    const blockResult = await await getBlock({ web3, blockNumber: "latest", fetchTxs: true });
    console.log(`${inspect(blockResult)}`);
  }
  catch (e) {
    console.error(`Error getting latest block: ${e}`);
  }
  console.log("\n");
}

init();
