require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/J7_jGHvBIWilfT877LMf9KNC_i89nR4R',
      accounts: ['4e219cc9171a420da56c57de52e19dfd42768dc67a4cf8b997b5269f47471664'],
    },
  },
};