// const SIMPLE_STORAGE_ABI = [{"constant":true,"inputs":[],"name":"storedData","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x2a1afcd9"},{"constant":false,"inputs":[{"name":"x","type":"uint256"}],"name":"set","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function","signature":"0x60fe47b1"},{"constant":true,"inputs":[],"name":"get","outputs":[{"name":"retVal","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function","signature":"0x6d4ce63c"},{"inputs":[{"name":"initialValue","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"}];
// const SIMPLE_STORAGE_CODE = "0x60806040526004361060525763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632a1afcd98114605757806360fe47b114607b5780636d4ce63c1460a3575b600080fd5b348015606257600080fd5b50606960b5565b60408051918252519081900360200190f35b348015608657600080fd5b5060a160048036036020811015609b57600080fd5b503560bb565b005b34801560ae57600080fd5b50606960c0565b60005481565b600055565b6000549056fea165627a7a72305820f0f0591d202a197356437f28668ae8710c45231f114a6a93ed48996f2866269c0029";
const SIMPLE_STORAGE = {
  "contract_name": {
    "fromIndex": 0,
    "args": [100],
    "className": "SimpleStorage",
    "code": "608060405234801561001057600080fd5b506040516020806101358339810180604052602081101561003057600080fd5b505160005560f2806100436000396000f3fe60806040526004361060525763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632a1afcd98114605757806360fe47b114607b5780636d4ce63c1460a3575b600080fd5b348015606257600080fd5b50606960b5565b60408051918252519081900360200190f35b348015608657600080fd5b5060a160048036036020811015609b57600080fd5b503560bb565b005b34801560ae57600080fd5b50606960c0565b60005481565b600055565b6000549056fea165627a7a72305820f0f0591d202a197356437f28668ae8710c45231f114a6a93ed48996f2866269c0029",
    "runtimeBytecode": "60806040526004361060525763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632a1afcd98114605757806360fe47b114607b5780636d4ce63c1460a3575b600080fd5b348015606257600080fd5b50606960b5565b60408051918252519081900360200190f35b348015608657600080fd5b5060a160048036036020811015609b57600080fd5b503560bb565b005b34801560ae57600080fd5b50606960c0565b60005481565b600055565b6000549056fea165627a7a72305820f0f0591d202a197356437f28668ae8710c45231f114a6a93ed48996f2866269c0029",
    "realRuntimeBytecode": "60806040526004361060525763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632a1afcd98114605757806360fe47b114607b5780636d4ce63c1460a3575b600080fd5b348015606257600080fd5b50606960b5565b60408051918252519081900360200190f35b348015608657600080fd5b5060a160048036036020811015609b57600080fd5b503560bb565b005b34801560ae57600080fd5b50606960c0565b60005481565b600055565b6000549056fea165627a7a72305820",
    "linkReferences": {},
    "swarmHash": "f0f0591d202a197356437f28668ae8710c45231f114a6a93ed48996f2866269c",
    "gasEstimates": {
      "creation": {
        "codeDepositCost": "48400",
        "executionCost": "20172",
        "totalCost": "68572"
      },
      "external": {
        "get()": "428",
        "set(uint256)": "20197",
        "storedData()": "384"
      }
    },
    "functionHashes": {
      "get()": "6d4ce63c",
      "set(uint256)": "60fe47b1",
      "storedData()": "2a1afcd9"
    },
    "abiDefinition": [{ "constant": true, "inputs": [], "name": "storedData", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x2a1afcd9" }, { "constant": false, "inputs": [{ "name": "x", "type": "uint256" }], "name": "set", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x60fe47b1" }, { "constant": true, "inputs": [], "name": "get", "outputs": [{ "name": "retVal", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x6d4ce63c" }, { "inputs": [{ "name": "initialValue", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }],
    "filename": "/Users/emizzle/Code/__Github/embk-fw/embark/dapps/templates/demo/.embark/contracts/simple_storage.sol",
    "originalFilename": "contracts/simple_storage.sol",
    "path": "/Users/emizzle/Code/__Github/embk-fw/embark/dapps/templates/demo/contracts/simple_storage.sol",
    "gas": "auto",
    "type": "file",
    "deploy": true,
    "_gasLimit": 6000000,
    "error": false,
    "deploymentAccount": "0x441896F6847747B8df564cC57AB51A61dA009052",
    "realArgs": [100],
    "address": "0xc5Dd54Fa5FEF87AD08b3e88EA6E7f548DB94AcDc",
    "deployedAddress": "0xc5Dd54Fa5FEF87AD08b3e88EA6E7f548DB94AcDc"
  },
  "address": "0xc5Dd54Fa5FEF87AD08b3e88EA6E7f548DB94AcDc",
  "code": "608060405234801561001057600080fd5b506040516020806101358339810180604052602081101561003057600080fd5b505160005560f2806100436000396000f3fe60806040526004361060525763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632a1afcd98114605757806360fe47b114607b5780636d4ce63c1460a3575b600080fd5b348015606257600080fd5b50606960b5565b60408051918252519081900360200190f35b348015608657600080fd5b5060a160048036036020811015609b57600080fd5b503560bb565b005b34801560ae57600080fd5b50606960c0565b60005481565b600055565b6000549056fea165627a7a72305820f0f0591d202a197356437f28668ae8710c45231f114a6a93ed48996f2866269c0029",
  "runtime_bytecode": "60806040526004361060525763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632a1afcd98114605757806360fe47b114607b5780636d4ce63c1460a3575b600080fd5b348015606257600080fd5b50606960b5565b60408051918252519081900360200190f35b348015608657600080fd5b5060a160048036036020811015609b57600080fd5b503560bb565b005b34801560ae57600080fd5b50606960c0565b60005481565b600055565b6000549056fea165627a7a72305820f0f0591d202a197356437f28668ae8710c45231f114a6a93ed48996f2866269c0029",
  "real_runtime_bytecode": "60806040526004361060525763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632a1afcd98114605757806360fe47b114607b5780636d4ce63c1460a3575b600080fd5b348015606257600080fd5b50606960b5565b60408051918252519081900360200190f35b348015608657600080fd5b5060a160048036036020811015609b57600080fd5b503560bb565b005b34801560ae57600080fd5b50606960c0565b60005481565b600055565b6000549056fea165627a7a72305820",
  "swarm_hash": "f0f0591d202a197356437f28668ae8710c45231f114a6a93ed48996f2866269c",
  "gas_estimates": {
    "creation": {
      "codeDepositCost": "48400",
      "executionCost": "20172",
      "totalCost": "68572"
    },
    "external": {
      "get()": "428",
      "set(uint256)": "20197",
      "storedData()": "384"
    }
  }, 
  "function_hashes": { 
    "get()": "6d4ce63c", 
    "set(uint256)": "60fe47b1", 
    "storedData()": "2a1afcd9" 
  }, 
  "abi": [{ "constant": true, "inputs": [], "name": "storedData", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x2a1afcd9" }, { "constant": false, "inputs": [{ "name": "x", "type": "uint256" }], "name": "set", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function", "signature": "0x60fe47b1" }, { "constant": true, "inputs": [], "name": "get", "outputs": [{ "name": "retVal", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function", "signature": "0x6d4ce63c" }, { "inputs": [{ "name": "initialValue", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }]
};

function estimateGas({ web3, arguments }) {
  return new web3.eth.Contract(SIMPLE_STORAGE.abi)
    .deploy({ data: `0x${SIMPLE_STORAGE.code}`, arguments })
    .estimateGas({ from: web3.eth.defaultAccount });
}

function deploy({ web3, gas, gasPrice, arguments }) {
  return new Promise((resolve, reject) => {
    new web3.eth.Contract(SIMPLE_STORAGE.abi)
      .deploy({ data: `0x${SIMPLE_STORAGE.code}`, arguments })
      .send({
        from: web3.eth.defaultAccount,
        gas: gas || SIMPLE_STORAGE.gas_estimates.creation.totalCost + 1000,
        //gasPrice
      })
      .on('error', reject)
      .once('receipt', resolve)
      .catch(reject)
      .then(() => { });
  });
}

async function unlock({ web3, account, password }) {
  return await web3.eth.personal.unlockAccount(account, password, 1000);
}

async function getBlock({ web3, blockNumber, fetchTxs }) {
  return await web3.eth.getBlock(blockNumber, fetchTxs);
}

module.exports = {
  estimateGas,
  deploy,
  unlock,
  getBlock
}