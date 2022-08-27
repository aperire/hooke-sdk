const { ethers } = require("ethers");
const { contractData } = require("./contract");
const pinataSDK = require('@pinata/sdk');
const fs = require("fs");

const getSigner = (PRIVATE_KEY, GOERLI_PROVIDER) => {
    const provider = ethers.getDefaultProvider(GOERLI_PROVIDER);
    const signer = new ethers.Wallet(PRIVATE_KEY, provider);
    return signer;
}

class Hooke {
    /*
    @dev Initialize Contract
    */
    constructor(signer) {
        this.contract = new ethers.Contract(
            contractData.address,
            contractData.abi,
            signer
        );
    }
    /*
    @dev Upload to ipfs
    */
    uploadPinata = async(imagePath, fileName, PINATA_KEY, PINATA_SECRET) => {
        const pinata = pinataSDK(PINATA_KEY, PINATA_SECRET);
        const options = {
            pinataMetaData: {
                name: fileName
            },
            pinataOptions: {
                cidVersion: 0
            }
        };
        const image = fs.createReadStream(imagePath)
        const result = await pinata.pinFileToIPFS(image, options);
        const ipfsHash = result.IpfsHash;
        return ipfsHash;
    }

    /*
    @dev Call Methods
    */
   // mediaArray
    getMediaArrayLength = async() =>{
        const mediaArrayLength = await this.contract.getMediaArrayLength();
        return parseInt(mediaArrayLength);
    }

    getMediaArray = async(index) => {
        const media = await this.contract.mediaArray(index);
        return media
    }
    // nameArray
    getNameArrayLength = async() =>{
        const nameArrayLength = await this.contract.getNameArrayLength();
        return parseInt(nameArrayLength);
    }

    getNameArray = async(index) => {
        const name = await this.contract.nameArray(index);
        return name;
    }
    //mediaOwnershipMap
    getOwnerMediaLength = async(address) =>{
        const ownerMediaLength = await this.contract.getOwnerMediaLength(address);
        return parseInt(ownerMediaLength);
    }

    getOwnerMedia = async(address, index) => {
        const media = await this.contract.mediaOwnershipMap(address, index);
        return media;
    }
    
    // hashTagMap
    getHashTagMediaLength = async(hashTag) => {
        const hashTagMediaLength = await this.contract.getHashTagMediaLength(hashTag);
        return hashTagMediaLength;
    }

    getHashTagMedia = async(hashTag, index) => {
        const hashTagMedia = await this.contract.hashTagMap(hashTag, index);
    }

    // profileMap hashtag
    getAddressHashTagLength = async(address) => {
        const addressHashTagLength = await this.contract.getAddressHashTagLength(address);
        return addressHashTagLength;
    }

    getAddressHashTag = async(address, index) => {
        const addressHashTag = await this.contract.getAddressHashTag(address, index);
        return addressHashTag;
    }

    // profileNameMap hashtag
    getNameHashTagLength = async(address) => {
        const nameHashTagLength = await this.contract.getNameHashTagLength(address);
        return nameHashTagLength;
    }

    getNameHashTag = async(address, index) => {
        const nameHashTag = await this.contract.getNameHashTag(address, index);
        return nameHashTag;
    }

    // profileMap
    getProfileMap = async(address) => {
        const profileMap = await this.contract.profileMap(address);
        return profileMap;
    }

    // profileNameMap
    getProfileNameMap = async(name) => {
        const profileNameMap = await this.contract.profileNameMap(name);
        return profileNameMap;
    }
    // nameArray
    checkNameExists = async(name) => {
        const nameExists = await this.contract.nameExists(name);
        return nameExists;
    }

    /*
    @dev Transaction Methods
    */
    createAccount = async(
        pfpHash,
        nickName,
        bio,
        hashTagArray
    ) => {
        const tx = await this.contract.createAccount(
            pfpHash,
            nickName,
            bio,
            hashTagArray
        );
        const txHash = await tx.hash;
        await tx.wait();
        return txHash;
    }

    postMedia = async(
        ipfsHash,
        text,
        hashTag
    ) => {
        const tx = await this.contract.postMedia(
            ipfsHash,
            text,
            hashTag
        );
        const txHash = await tx.hash;
        await tx.wait();
        return txHash;
    }
}

module.exports = { getSigner, Hooke };