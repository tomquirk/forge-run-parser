# forge-run-parser

Extract contract addresses from Forge deployment.

## Why do I need this?

No need to hard code contract addresses in your dApp source code. Instead, use npm packages for contracts as single source of truth for the contract addresses.

Save dev time and reduce chance of using outdated contract addresses!

## Usage

> This example uses the [@jbx-protocol/juice-721-delegate](https://github.com/jbx-protocol/juice-721-delegate) package as an example. juice-721-delegate is a set of contracts deployed on Goerli and Ethereum mainnet using Forge.

1. Import your Forge deployment
   ```ts
   import Juice721DelegateDeployment from "@jbx-protocol/juice-721-delegate/broadcast/Deploy.s.sol/5/run-latest.json";
   ```
1. Extract the address of a contract.

   ```ts
   import Juice721DelegateDeployment from "@jbx-protocol/juice-721-delegate/broadcast/Deploy.s.sol/5/run-latest.json";
   import { addressFor, ForgeDeploy } from "forge-run-parser";

   // Extract the address for contract named `JBTiered721DelegateStore` 
   const JBTiered721DelegateStoreAddress = addressFor(
       "JBTiered721DelegateStore",
       Juice721DelegateDeployment as ForgeDeploy
   );
   ```
