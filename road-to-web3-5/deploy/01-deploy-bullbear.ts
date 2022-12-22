import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/dist/types';
import { ethers } from 'hardhat';
import { VRFCoordinatorV2Mock } from '../typechain-types';

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deploy, log } = hre.deployments;
  const { deployer } = await hre.getNamedAccounts();
  const mockV3AggregatorAddress = (await ethers.getContract('MockV3Aggregator'))
    .address;
  const vrfCoordinator = await ethers.getContract<VRFCoordinatorV2Mock>(
    'VRFCoordinatorV2Mock'
  );

  const txRec = await vrfCoordinator.createSubscription();
  const txRes = await txRec.wait();
  const subId = txRes.events![0].args?.subId;

  await deploy('Bull&Bear', {
    from: deployer,
    log: true,
    args: [
      10,
      mockV3AggregatorAddress,
      vrfCoordinator.address,
      '0x79d3d8832d904592c0bf9818b621522c988bb8b0c05cdc3b15aea1b6e8db0c15',
      subId,
      3,
      25_000_00,
    ],
  });
};

export default func;
func.tags = ['all', 'bullbear'];
