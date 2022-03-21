//https://eth-ropsten.alchemyapi.io/v2/Hc5m5vvC1RBb9nVhz2uCvKtPGJ9WH6HU

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten:{
      url: 'https://eth-ropsten.alchemyapi.io/v2/Hc5m5vvC1RBb9nVhz2uCvKtPGJ9WH6HU',
      accounts: ['0d3cd4472038dd40f4d6b93cd079c93f4cf6790992a876cbb853320335a0d04e']
    }
  }
};
