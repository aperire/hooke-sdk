const { uploadPinata, getMediaArrayLength, getNameArrayLength, getOwnerMediaLength, getHashTagMediaLength, getMediaArray, getNameArray, getMediaOwnershipMap, getProfileMap, getProfileNameMap, getHashTagMap, createAccount, editPfpHash, editBio, editTelegram, editTwitter, editEmail, editHashTagArray, postMedia } = require("../libertee-sdk.js");
/*
type:
    - third party
function:
    - uploadPinata: Upload file to IPFS
args:
    - filePath: Path of file to upload (string)
    - name: Name of file to be stored as (string)
    - PINATA_KEY: Pinata API Key (string)
    - PINATA_SECRET: Pinata Secret Key (string)
returns:
    - hash: IPFS Hash (string)
*/

const filePath = "./example.png";
const name = "Example";
const PINATA_KEY = process.env.PINATA_KEY;
const PINATA_SECRET = process.env.PINATA_SECRET;

const ipfsHash = uploadPinata(filePath, name, PINATA_KEY, PINATA_SECRET).then(console.log);

/*
type:
    - length utility
function:
    - getMediaArrayLength: Get length of mediaArray
returns:
    - mediaArrayLength: Length of mediaArray (Integer)
*/
const mediaArrayLength = getMediaArrayLength();
console.log(mediaArrayLength);

/*
type:
    - length utility
function:
    - getNameArrayLength: Get length of nameArray
returns:
    - nameArrayLength: Length of nameArray (Integer)
*/
const nameArrayLength = getNameArrayLength();
console.log(nameArrayLength);

/*
type:
    - length utility
function:
    - getOwnerMediaLength: Get length of OwnerMedia[] from mediaOwnershipMap
returns:
    - ownerMediaLength: Length of OwnerMedia[] (Integer)
*/
const ownerMediaLength = getOwnerMediaLength();
console.log(ownerMediaLength);

/*
type:
    - length utility
function:
    - getHashTagMediaLength: Get length of Media[] from hashTagMap
returns:
    - hashTagMediaLength: Length of Media[] (Integer)
*/
const hashTagMediaLength = getHashTagMediaLength();
console.log(hashTagMediaLength);

/*
type:
    - fetch data
function:
    - getMediaArray: Get mediaArray
args:
    - index (integer)
returns:
    - media: Media at some index of mediaArray (map)
*/
const media = getMediaArray(0);
console.log(media);





// const PRIVATE_KEY = "0x35237c73ff1c92cf93b70e2696a110ee5da9c276243f207a7dc01b90046484e1";
// const rinkebyProvider = ethers.getDefaultProvider("https://rinkeby.infura.io/v3/481a8d82aeb541b8925973d836c49375");
// const signer = new ethers.Wallet(PRIVATE_KEY, rinkebyProvider);
// const contract = new ethers.Contract(
//     contractData.address, contractData.abi, signer
// );

// const PINATA_KEY = "be1e67a95cc77caa2d57";
// const PINATA_SECRET = "486b3ac380e4ccd1a117da3e0c47dbbbaf87c40f10430bb8a67e01805870f31e";
// const filePath = "img/test.png"