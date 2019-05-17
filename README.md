# Lightchain web3 demo
This is a NodeJS demo that shows how we can use web3.js with a standalone lightchain node. 

Once lightchain is running in standalone mode, a node account is created for us by lightnode, and has a default account balance of 300k Photons.

The demo performs the following functions:
1. Gets a list of accounts from the node
2. Gets the latest block info
3. Unlocks the standalone account
4. Creates a web3 contract using the ABI and bytecode from the [SimpleStorage contract](https://github.com/embark-framework/embark/blob/master/dapps/templates/demo/contracts/simple_storage.sol).
5. Estimates the gas to deploy the contract
6. Deploys the contract and returns the receipt

## Install
1. Make sure you have Node 7.10.1+.
2. To get started with lightchain, please [install lightchain](https://github.com/lightstreams-network/lightchain#pre-requirements).

## Start a lightchain node
In a terminal, initialise and start a lightchain node
```
lightchain init --standalone --force
lightchain run --rpc --rpcport=8545 --rpcaddr=localhost --rpccorsdomain=*,http://localhost:8000,http://localhost:8080,http://embark --rpcapi=eth,web3,net,debug,personal,shh --ws --wsport=8546 --wsaddr=127.0.0.1 --wsapi=eth,web3,net,shh,debug,pubsub,personal --wsorigins=*,http://localhost:8000,http://localhost:8080,http://embark
```
Obviously the RPC and WS ports, cors/origins, and apis, can be customised as per usual geth. The above command is used for use in an Embark project, hence the values.

## Run the demo
In another terminal, install dependencies, then run the demo
```
yarn install
yarn start
```
OR
```
npm install
npm run start
```

## Expected output
```
=== ACCOUNTS ===
[ '0xc916Cfe5c83dD4FC3c3B0Bf2ec2d4e401782875e' ]

=== LATEST BLOCK INFO ===
{ difficulty: '552562',
  extraData: '0x',
  gasLimit: 100000000,
  gasUsed: 0,
  hash:
   '0x987ec464c55879969630d8218c49187307b198139289e5f368a7fb33a68607f5',
  logsBloom:
   '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  miner: '0x0000000000000000000000000000000000000000',
  mixHash:
   '0x0000000000000000000000000000000000000000000000000000000000000000',
  nonce: '0x0000000000000000',
  number: 3067,
  parentHash:
   '0x6a093a6a85db88c5c3a16964c565a0fa175c1e2ccd5c55070364f26d914fe223',
  receiptsRoot:
   '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
  sha3Uncles:
   '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
  size: 514,
  stateRoot:
   '0x23cc0853d4b40ff0b1f6a9b002a38b2d2c97bf9feed834b79766c8a58d7db706',
  timestamp: 1557990545,
  totalDifficulty: '904643467',
  transactions: [],
  transactionsRoot:
   '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
  uncles: [] }


=== UNLOCK ACCOUNT ===
Account 0xc916Cfe5c83dD4FC3c3B0Bf2ec2d4e401782875e unlocked.


=== ESTIMATE GAS ===
107768


=== DEPLOY CONTRACT ===
{ blockHash:
   '0x5a843672450757a3eb445459d110d5bf7780315919738168c9083d50504f9c96',
  blockNumber: 3068,
  contractAddress: '0xC8882EfBdf54eFaAE2095e472680b22994a9Bb9f',
  cumulativeGasUsed: 107768,
  from: '0xc916cfe5c83dd4fc3c3b0bf2ec2d4e401782875e',
  gasUsed: 107768,
  logsBloom:
   '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
  status: true,
  to: null,
  transactionHash:
   '0x6c670084977e73647a7723fb2cc8ebd0210522e0125e64d52299e2beb774ccee',
  transactionIndex: 0,
  events: {} }
  ```