require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle food stone return sister protect good end army giant'; 
let testAccounts = [
"0x8d3ab1e25a86aec0aa76b6e7afc4022b51ddd143f4657b2a2ed73a3c3b7ad7ab",
"0xf517e230b57db1e0874909aa768d6116500c363a229e11cb3ffe313f9ffd675e",
"0x227d80434ea7766e9f27b123ff00b973cd95998061bd0c989b6f1d4ff3833993",
"0x0529231162bb56153753425a8ec2c5c672ed6021579d68e4768530f9fc320101",
"0xae7798fbcb9f5566ee8c9a6d7815fb0435786d64b94429a44c5e5bf490921954",
"0x26cf0543786e01833c70a24c7d1a749a344b9dc315540c4d64924d51cad6ed75",
"0xaa4c0a84c155471959006a764f3fa03e875af398e669747537f0d5bca60084a1",
"0x18443c56f7a6a5048f9125711bb205ccff3e77e263ada4119f2ee40fc8d16d15",
"0xfde9a540750bf87f3141879f5a4d9272a8a2fc9a8e9fe6a3451f08f82fbde44d",
"0x3dd7311f8b8b3ec65ad4736bd4c0babb39c93886039d1a391cdc16dcb4a63950"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
