export type ContractAddress = `0x${string}`;

export interface ForgeDeploy {
  receipts: { contractAddress: ContractAddress }[];
  transactions: { contractName: string; contractAddress: ContractAddress }[];
}

/**
 * Return the address of a given contract from a Forge deploy.
 * @param contractName Name of the contract to get the address for.
 * @param forgeDeploy The Forge deployment, typically located in `broadcast/<contract-name>.sol/<chain-id>/run-latest.json
 * @returns The address of the contract.
 */
export function addressFor(
  contractName: string,
  forgeDeploy: ForgeDeploy
): ContractAddress | undefined {
  const contractAddress = forgeDeploy.transactions.find(
    (tx) => tx.contractName === contractName
  )?.contractAddress;

  return contractAddress;
}
