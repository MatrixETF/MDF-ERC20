import {task} from 'hardhat/config';
import {MDF__factory} from "../typechain";

task('deploy-mdf')
    .setAction(async (taskArgs, hre) => {
        const signers = await hre.ethers.getSigners();

        const MDFFactory = (await hre.ethers.getContractFactory(
            "MDF",
            signers[0]
        )) as MDF__factory;
        const mdf = await MDFFactory.deploy("0x06aB43fC163E9Ebc864A788D4CF24f8c3afb88DC", hre.ethers.utils.parseUnits("600000000"));
        await mdf.deployed();
        console.log("mdf deployed to:", mdf.address);
    });

module.exports = {};
