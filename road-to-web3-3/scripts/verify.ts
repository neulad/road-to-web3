import * as hre from 'hardhat';
import { ethers, network } from 'hardhat';

async function main() {
  const chainBattlesAddress = (await ethers.getContract('ChainBattles'))
    .address;

  await hre.run('verify:verify', {
    address: chainBattlesAddress,
  });
}

main()
  .then(() => {
    console.log('Successfully verified!');
    process.exit(0);
  })
  .catch(err => {
    console.error(err.message);
    process.exit(1);
  });
