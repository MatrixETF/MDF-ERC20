import "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-ethers";
require('dotenv').config();
require('./task/deploy-mdf');

const config = {
    defaultNetwork: 'hardhat',
    networks: {
        mainnet: {
            url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
            accounts: [
                process.env.MAINNET_PRIVATE_KEY || ''
            ].filter((item) => item !== '')
        },
        kovan: {
            url: `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
            accounts: [
                process.env.KOVAN_PRIVATE_KEY || '',
                process.env.KOVAN_PRIVATE_KEY1 || '',
            ].filter((item) => item !== '')
        },
        rinkeby: {
            url: `https://rinkeby.infura.io/v3/${process.env.INFURA_API_KEY}`,
            blockGasLimit: 12000000,
            gas: 21000000,
            gasPrice: 2000000000,
            accounts: [
                process.env.RINKEBY_PRIVATE_KEY || '',
                process.env.RINKEBY_PRIVATE_KEY1 || ''
            ].filter((item) => item !== '')
        },
        frame: {
            url: 'http://localhost:1248'
        }
    },
    solidity: {
        version: '0.8.0',
        optimizer: {
            // Factory goes above contract size limit
            enabled: true,
            runs: 200
        }
    },
    etherscan: {apiKey: process.env.ETHERSCAN_API_KEY}
}
module.exports = config;
