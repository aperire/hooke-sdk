const { getSigner, Libertee } = require("./Libertee");

// Fetch env variables
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const GOERLI_PROVIDER = process.env.GOERLI_PROVIDER;
const PINATA_KEY = process.env.PINATA_KEY;
const PINATA_SECRET = process.env.PINATA_SECRET;
const ADDRESS = process.env.ADDRESS;

// Get Signer
const signer = getSigner(PRIVATE_KEY, GOERLI_PROVIDER);

// Initialize Libertee Instance
const libertee = new Libertee(signer);

// Create Libertee Account
let filePath = "./img/yujin.jpeg";

const pfpHash = libertee.uploadPinata(filePath, "Yujin", PINATA_KEY, PINATA_SECRET).then(console.log);
const createAccountHash = libertee.createAccount(
    pfpHash,
    "Yujin",
    "This is Yujin",
    "@ericlee0402",
    "",
    "",
    "",
    "lp.finance",
    ["Yujin", "Kpop"]
).then(console.log);

// // Check Libertee Account
const profile = libertee.getProfileMap(ADDRESS).then(console.log);

// Direct upload to Libertee
const ipfsHash = libertee.uploadPinata(filePath, "Yujin", PINATA_KEY, PINATA_SECRET);
const postMediaHash = libertee.postMedia(
    ipfsHash,
    "Yujin is Pretty",
    ["Yujin", "Kpop", "Fan"]
).then(console.log);

// Check Owner Post
const getOwnerPost = async(ADDRESS) => {
    const ownerMediaLength = await libertee.getOwnerMediaLength(
        ADDRESS
    )
    for (i=0; i<ownerMediaLength; i++) {
        const media = libertee.getMediaOwnershipMap(ADDRESS, i).then(console.log);
    }
}

getOwnerPost(ADDRESS);