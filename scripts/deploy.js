const hre = require("hardhat");

//console.log(hre);
async function main() {
    const currentTimestampInSeconds = Math.round(Date.now() / 1000);
    const ONE_YEAR_IN_SECONDS = 365 * 24 * 60 * 60; // Correct year calculation
    const unlockedTime = currentTimestampInSeconds + ONE_YEAR_IN_SECONDS;

    // Access ethers via Hardhat
    const lockedAmount = hre.ethers.utils.parseEther("1"); // Convert 1 ether to wei
    //console.log(currentTimestampInSeconds);
    //console.log(ONE_YEAR_IN_SECONDS);
    //console.log(unlockedTime);
    console.log(lockedAmount); // Display amount in wei
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
