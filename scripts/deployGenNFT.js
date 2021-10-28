// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');
  // We get the contract to deploy
  // const PINKLOACK = await hre.ethers.getContractFactory("PoolFactory");
  // const PinkLock = await PINKLOACK.deploy();
  // await PinkLock.deployed();
  // console.log("Contract deployed to:", PinkLock.address);
  // const POOLFACTORY = await hre.ethers.getContractFactory(
  //   "BunnyPunkRewardsFSN"
  // );
  // const PoolFactory = await POOLFACTORY.deploy(
  //   "https://gateway.pinata.cloud/ipfs/Qmdah2v131ibe2JYb1WfkT1PEbuyqMKgYrYvS2kzw1dXxn/Solana_Data_",
  //   "https://gateway.pinata.cloud/ipfs/QmQqA1bmQ8QyRzLEK5F5L8ZyahYrdUoS7SwpLYR3gTgpnt"
  // );
  // await PoolFactory.deployed();
  // console.log("Contract deployed to:", PoolFactory.address);
  const POOLFACTORY = await hre.ethers.getContractFactory("BunnyNFTBridgeFSN");
  const PoolFactory = await POOLFACTORY.deploy(
    "0x50386083a6B9b2ed5ec2465e3d863Be3D974ffB3",
    "0x723d87b252e91FB98A91295ABF65ed579EF31Ae3",
    "0xC2a5ea1d4406EC5fdd5eDFE0E13F59124C7e9803"
  );
  await PoolFactory.deployed();
  console.log("Contract deployed to:", PoolFactory.address);

  // const POOLFACTORY = await hre.ethers.getContractFactory("BunnyNFTBridge");
  // const PoolFactory = await POOLFACTORY.deploy(
  //   "0xC7c135124AFEddfdC7868bEa9A7Df728D2B6CAC0",
  //   "0x243db25c15F4f17924ca67B5A8f460dc78bcfA67",
  //   "0xC2a5ea1d4406EC5fdd5eDFE0E13F59124C7e9803"
  // );
  await PoolFactory.deployed();
  console.log("Contract deployed to:", PoolFactory.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
