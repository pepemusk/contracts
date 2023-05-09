import {ethers} from "hardhat";

async function main(): Promise<void> {
    const peMuskToken = await ethers.getContractFactory("PEMUSK");
    await peMuskToken.deploy().then(token => {
        console.log(token.address)
    });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
