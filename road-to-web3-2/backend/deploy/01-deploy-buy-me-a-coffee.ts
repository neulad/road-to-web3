import { DeployFunction } from 'hardhat-deploy/dist/types';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deploy } = hre.deployments;
  const { deployer } = await hre.getNamedAccounts();

  await deploy('BuyMeACoffee', {
    from: deployer,
    log: true,
  });
};

export default func;
func.tags = ['all', 'buy-me-a-coffee'];
