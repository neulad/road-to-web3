import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/dist/types';
import { ethers } from 'hardhat';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deploy, log } = hre.deployments;
  const { deployer } = await hre.getNamedAccounts();

  await deploy('MockV3Aggregator', {
    from: deployer,
    log: true,
    args: [8, 1687460000000n],
  });
  await deploy('VRFCoordinatorV2Mock', {
    from: deployer,
    log: true,
    args: [ethers.utils.parseEther('0.1'), 1e9],
  });
};

export default func;
func.tags = ['all', 'mocks'];
