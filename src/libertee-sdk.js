const { ethers } = require("ethers");
const { contractData } = require("./contract");
const pinataSDK = require('@pinata/sdk');
const fs = require("fs");

/*
@dev Upload to ipfs
*/
const uploadPinata = async(filePath, name, PINATA_KEY, PINATA_SECRET) => {
    const pinata = pinataSDK(PINATA_KEY, PINATA_SECRET);
    const readableStreamForFile = fs.createReadStream(filePath);
    const options = {
        pinataMetaData: {
            name: name
        },
        pinataOptions: {
            cidVersion: 0
        }
    };
    const result = await pinata.pinFileToIPFS(readableStreamForFile, options);
    const hash = result.IpfsHash;
    return hash;
}

/*
@dev Call Functions
*/
const getMediaArrayLength = async() =>{
    const mediaArrayLength = await contract.getMediaArrayLength();
    return parseInt(mediaArrayLength);
}

const getNameArrayLength = async() =>{
    const nameArrayLength = await contract.getNameArrayLength();
    return parseInt(nameArrayLength);
}

const getOwnerMediaLength = async(address) =>{
    const ownerMediaLength = await contract.getOwnerMediaLength(address);
    return parseInt(ownerMediaLength);
}

const getHashTagMediaLength = async(hashTag) => {
    const hashTagMediaLength = await contract.getHashTagMediaLength(hashTag);
    return parseInt(hashTagMediaLength);
}

const getMediaArray = async(index) => {
    const media = await contract.mediaArray(index);
    return media
}

const getNameArray = async(index) => {
    const name = await contract.nameArray(index);
    return name
}

const getMediaOwnershipMap = async(address, index) => {
    const ownerMedia = contract.mediaOwnershipMap(address, index);
    return ownerMedia;
}

const getProfileMap = async(address) => {
    const profile = contract.profileMap(address);
    return profile;
}

const getProfileNameMap = async(name) => {
    const profile = contract.profileNameMap(name);
    return profile;
}

const getHashTagMap = async(hashTag, index) => {
    const media = contract.hashTagMap(hashTag, index);
    return media
}

/*
@dev Transaction Functions
*/

const createAccount = async(
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
    const tx = await contract.createAccount(
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

const editPfpHash = async(pfpHash) => {
    const tx = await contract.editPfpHash(pfpHash);
    const txHash = await tx.hash;
    await tx.wait();
    return txHash;
}

const editBio = async(bio) => {
    const tx = await contract.editBio(bio);
    const txHash = await tx.hash;
    await tx.wait();
    return txHash;
}

const editTelegram = async(telegram) => {
    const tx = await contract.editTelegram(telegram);
    const txHash = await tx.hash;
    await tx.wait();
    return txHash;
}

const editTwitter = async(twitter) => {
    const tx = await contract.editTwitter(twitter);
    const txHash = await tx.hash;
    await tx.wait();
    return txHash;
}

const editEmail = async(email) => {
    const tx = await contract.editEmail(email);
    const txHash = await tx.hash;
    await tx.wait();
    return txHash;
}

const editHashTagArray = async(hashTagArray) => {
    const tx = await contract.editHashTagArray(hashTagArray);
    const txHash = await tx.hash;
    await tx.wait();
    return txHash;
}

const postMedia = async(
    ipfsHash,
    text,
    hashTag
) => {
    const tx = await contract.postMedia(
        ipfsHash,
        text,
        hashTag
    );
    const txHash = await tx.hash;
    await tx.wait();
    return txHash;
}

module.exports = { uploadPinata, getMediaArrayLength, getNameArrayLength, getOwnerMediaLength, getHashTagMediaLength, getMediaArray, getNameArray, getMediaOwnershipMap, getProfileMap, getProfileNameMap, getHashTagMap, createAccount, editPfpHash, editBio, editTelegram, editTwitter, editEmail, editHashTagArray, postMedia }