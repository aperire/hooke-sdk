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