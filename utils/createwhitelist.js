const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
function createWhitelist() {
    //function ro process addresses for leaf nodes //
    const padBuffer = (addr) => {
        return Buffer.from(addr.substr(2).padStart(32 * 2, 0), 'hex');
    };
    // console.log("This is Merkletree for whitelist");
    let whitelistAddresses = [
        "0x2c8d2e50ee03f98a2f4ccfbe1a61552b79bdf6fa",
        "0x45500800dc3235e1c4aeaedacebb9bf1c223803d",
        "0x2ae0213b4e387f5573e9e89bfc9112afed87e681",
        "0x5cac4a6ff0c0c90053f0204e8caf1b707bc307e6",
        "0x6cc0d7791db228b66c190462ea19fca92aa1f25f",
        "0x515335b2b1391e9b33753577f15f27e9baefa8b5",
        "0xc8090295229545e1377adc0e15c9e48b9e449f76",
        "0xe65ee900a08fa2290d991609c6a35f2a52c4b8c7",
        "0x074051a0f3bd144df4e8e71ec5b75c9c8fdd95cb",
        "0x302882ea764225633c74838d702bb591774955a3",
        "0xe516e67cf0469ad8980f369c44c593f7cc1dbcea",
        "0x27629b5d175e899a19ed6b3a96016377d5ee4768",
        "0x31734D01CdDD2C7Cc6df0b891E9f9a41032460F6",
        "0x2b54F8bB2c12989998d9716234414017705BEbAF",
        "0xe65ee900a08fa2290d991609c6a35f2a52c4b8c7",
        "0x4FE4e90cA5F382e277DC8F4CE641A986f0daEB7d",
        "0xd74640B93D1EDeeaD5E7dE07bF0425c8e696a40E",
        "0x9eCa84C45de0c52498c4F439a0cc061e68bA5A1a",
        "0x7137931f8e93928E835EC0946A8B78a8a8887900",
        "0x7a40497782F2AD3aB9e9C08E67d5A95641110D52",
        "0xB04E6891e584F2884Ad2ee90b6545ba44F843c4A",
        "0xA6E8E71C4A20825377Ba359dc6E5aE3F66443e27",
        "0x4ACed12b42055fE65D920fbe1824F78B59648c43",
        "0x27629B5d175E899a19eD6B3a96016377d5eE4768",
        "0x8F08EE5e3E44bdC28127e050FCB13F5E4671433d",
        "0x36c59fD7b96e19D159b372BE897a9951f8e24D6c",
        "0xb5fd9d86826697ddA47A5045725406b3B1758c40",
        "0x95Bd75D85C9E9F205d3d6edf3496F8b6864090ab",
        "0x4DF83971f6f1bFD8D33a2E79584bDFDe75F4DF60",
    ];
    const leaves = whitelistAddresses.map(addr => padBuffer(addr));
    const merkletree = new MerkleTree(leaves, keccak256, { sortPairs: true });
    // console.log("merkletree", merkletree.toString());
    const rootHash = merkletree.getHexRoot();
    console.log("root hash", rootHash);
    return rootHash;
}
exports.createWhitelist = createWhitelist;
