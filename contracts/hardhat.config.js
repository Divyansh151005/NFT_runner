require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/*
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {
  solidity: "0.8.4",

  networks: {
    mumbai: {
      url: "http://127.0.0.1:7545",     //ganache cli url (dont change), change if using hardhat 
      accounts: ["0x64f44a1144a01df904cb9239cbf9a190cdc69ceab9924d7061a1fcde035a8874"],  //temoparay metamask account private key
    },
  },
};
