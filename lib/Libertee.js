const { ethers } = require("ethers");
const { contractData } = require("./contract");
const pinataSDK = require('@pinata/sdk');
const fs = require("fs");

const getSigner = (PRIVATE_KEY, GOERLI_PROVIDER) => {
    const provider = ethers.getDefaultProvider(GOERLI_PROVIDER);
    const signer = new ethers.Wallet(PRIVATE_KEY, provider);
    return signer;
}

class Libertee {
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
    uploadPinata = async(image, fileName, PINATA_KEY, PINATA_SECRET) => {
        const pinata = pinataSDK(PINATA_KEY, PINATA_SECRET);
        const options = {
            pinataMetaData: {
                name: fileName
            },
            pinataOptions: {
                cidVersion: 0
            }
        };
        const result = await pinata.pinFileToIPFS(image, options);
        const ipfsHash = result.IpfsHash;
        return ipfsHash;
    }

    /*
    @dev Call Methods
    */
    getUserHashTagLength = async(address) => {
        const userHashTagLength = await this.contract.getUserHashTagLength(address);
        return userHashTagLength;
    }
    checkNameExists = async(name) => {
        const nameExists = await this.contract.nameExists(name);
        return nameExists;
    }

    getMediaArrayLength = async() =>{
        const mediaArrayLength = await this.contract.getMediaArrayLength();
        return parseInt(mediaArrayLength);
    }

    getNameArrayLength = async() =>{
        const nameArrayLength = await this.contract.getNameArrayLength();
        return parseInt(nameArrayLength);
    }
    
    getOwnerMediaLength = async(address) =>{
        const ownerMediaLength = await this.contract.getOwnerMediaLength(address);
        return parseInt(ownerMediaLength);
    }
    
    getHashTagMediaLength = async(hashTag) => {
        const hashTagMediaLength = await this.contract.getHashTagMediaLength(hashTag);
        return parseInt(hashTagMediaLength);
    }
    
    getMediaArray = async(index) => {
        const media = await this.contract.mediaArray(index);
        return media
    }
    
    getNameArray = async(index) => {
        const name = await this.contract.nameArray(index);
        return name
    }
    
    getMediaOwnershipMap = async(address, index) => {
        const ownerMedia = this.contract.mediaOwnershipMap(address, index);
        return ownerMedia;
    }
    
    getProfileMap = async(address) => {
        const profile = this.contract.profileMap(address);
        return profile;
    }
    
    getProfileNameMap = async(name) => {
        const profile = this.contract.profileNameMap(name);
        return profile;
    }
    
    getHashTagMap = async(hashTag, index) => {
        const media = this.contract.hashTagMap(hashTag, index);
        return media
    }
    
    /*
    @dev Transaction Methods
    */

    createAccount = async(
        pfpHash,
        nickName,
        bio,
        telegram,
        twitter,
        phone,
        email,
        website,
        hashTagArray
    ) => {
        const tx = await this.contract.createAccount(
            pfpHash,
            nickName,
            bio,
            telegram,
            twitter,
            phone,
            email,
            website,
            hashTagArray
        );
        const txHash = await tx.hash;
        await tx.wait();
        return txHash;
    }

    editPfpHash = async(pfpHash) => {
        const tx = await this.contract.editPfpHash(pfpHash);
        const txHash = await tx.hash;
        await tx.wait();
        return txHash;
    }

    editBio = async(bio) => {
        const tx = await this.contract.editBio(bio);
        const txHash = await tx.hash;
        await tx.wait();
        return txHash;
    }

    editTelegram = async(telegram) => {
        const tx = await this.contract.editTelegram(telegram);
        const txHash = await tx.hash;
        await tx.wait();
        return txHash;
    }

    editTwitter = async(twitter) => {
        const tx = await this.contract.editTwitter(twitter);
        const txHash = await tx.hash;
        await tx.wait();
        return txHash;
    }

    editEmail = async(email) => {
        const tx = await this.contract.editEmail(email);
        const txHash = await tx.hash;
        await tx.wait();
        return txHash;
    }

    editHashTagArray = async(hashTagArray) => {
        const tx = await this.contract.editHashTagArray(hashTagArray);
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

module.exports = { getSigner, Libertee };