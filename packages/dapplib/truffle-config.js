require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index raise noise hub include knee obscure genuine'; 
let testAccounts = [
"0x53148af4c7b7dabbaecd71f951c95c0159f6776bcc74c0e2578aef258c5da44f",
"0x75619614ba129e65c7d184a0105f3a7b324a50f18b3cb24fe4d387a408cffcac",
"0x381677331a2199e71dcd23133afcbd6b5091282202c5ffd26519dec657f9ea53",
"0x30cb8cccfaa42a399ffa16487a978af383e6146bd73f4493008ddabaec9e3bbb",
"0x23f71a59780335f2fc9b1b5cdd970d1794c6fb3d315b26b1c278e3a4b8f40c04",
"0xbbd4934c6c243094f111b3a71c72590ba90b7e3a26fceda3710bad74318b467b",
"0x15a214e3b61a9d2462ec9c47e8e7f5aa36042e2e36178e3ce13326052d0c7aac",
"0xfc37729d70eb30ff45119f388f37e51df1c3e7f6ba09d8d091bf41ec7b4f2cbb",
"0xdd44f86435f2a93fc5a49f24498398ee191e44180d49861056057f045f35dd04",
"0x374dcaa91edb51edb784925f2be21c8c0e94d1ead313405ba8bb14ca0f6ade10"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

