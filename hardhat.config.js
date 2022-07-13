require("@nomiclabs/hardhat-waffle");
/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.6",
  networks: {
    matic: {
      url: 'https://polygon-mainnet.g.alchemy.com/v2/k5GmVgZgNvklUgL3yRsrSZmIv-67mGkE',
      accounts: ['8ceabef591fc411a7e3c6ac7f2df2bf6fa576345cacebdfbb30e5d7b2d81df0a'],
    }
   }
};
