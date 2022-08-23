# Libertee Protocol

![alt text](https://raw.githubusercontent.com/aperire/libertee-sdk/main/lib/img/libertee.png)

Libertee is an open-source protocol to provide
uncensorable contents to the internet.

More info on https://libertee.xyz

(Currently deployed on [Ethereum Goerli Testnet]("https://goerli.etherscan.io/address/0x0b9c85d928dbb153c6c5897ec03d333e7e948a8b"))

Contract Address: 0x0B9c85D928dbb153C6c5897EC03d333E7E948A8b

Simulate on [Remix](https://remix.ethereum.org)

## Installation

`npm install libertee-sdk`

## Libertee JS SDK

This is the Libertee SDK to transact and build decentralized frontend
for [Libertee Protocol]("https://libertee.xyz").

### Initialize

```
const { Libertee, getSigner } = require('libertee-sdk');

// Environmental Variables
const PINATA_KEY = process.env.PINATA_KEY;
const PINATA_SECRET = process.env.PINATA_SECRET;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const GOERLI_PROVIDER = process.env.GOERLI_PROVIDER;

// Initialize Instance
const signer = getSigner(PRIVATE_KEY, GOERLI_PROVIDER);
const libertee = new Libertee(signer);
```

### Upload file to IPFS (Pinata)

Upload files to IPFS with a simple script.

```
// Upload to Pinata
let filePath = "./img/example.png";
let name = "example img";

const ipfsHash = libertee.uploadPinata(filePath, name, PINATA_KEY, PINATA_SECRET).then(console.log);
```

### Reading

Reading data from Libertee contract allows multiple developers to create frontend to maintain decentralization of Libertee Protocol and protect from censorship.

#### Reading All Posts

```
const readMediaArray = async () => {
    // Get length of mediaArray
    const mediaArrayLength = await libertee.getMediaArrayLength();

    // Loop
    for (i=0; i<mediaArrayLength; i++) {
        const media = libertee.getMediaArray(i).then(console.log);
    }
}
```

#### Reading All Account Names

```
const readAccountArray = async () => {
    // Get length of nameArray
    const nameArrayLength = await libertee.getNameArrayLength();

    // Loop
    for (i=0; i<nameArrayLength; i++) {
        const account = libertee.getNameArray(i).then(console.log);
    }
}
```

#### Validating Name Existance

```
const name = "Yujin";
const nameExists = libertee.checkNameExists(name).then(console.log); // bool
```

#### Reading Profile from Address

```
// Use target address
const address = "0xd3A44Ce3d4eb86c966C972cBBE99473f3Cc73A96";

const profile = libertee.getProfileMap(address).then(console.log);
```

#### Reading Profile from Name

```
// Use target name
const name = "Yujin"

const profile = libertee.getProfileNameMap(name).then(console.log);
```

#### Reading Post by Account

```
// Use target address
const address = "0xd3A44Ce3d4eb86c966C972cBBE99473f3Cc73A96";

const readAllMediaByAccount = async(address) => {
    // Get length of array
    const ownerMediaLength = await libertee.getOwnerMediaLength(address);

    // Loop
    for (i=0; i<ownerMediaLength; i++) {
        const media = libertee.getMediaOwnershipMap(address, i).then(console.log);
    }
}
```

#### Reading Post by Name

```
// Use target name
const name = "Yujin"

const readAllMediaByName = async(name) => {
    // Fetch address using name
    const address = await libertee.getProfileNameMap(name).owner;

    // Get length of array
    const ownerMediaLength = await libertee.getOwnerMediaLength(address);

    // Loop
    for (i=0; i<ownerMediaLength; i++) {
        const media = libertee.getMediaOwnershipMap(address, i).then(console.log);
    }
}
```

#### Reading Post by Hashtag

```
const hashTag = "yujin";

const readAllMediaByHashtag = async (hashTag) => {
    // Get length or array
    const mediaArrayLength = await libertee.getHashTagMediaLength(hashTag);

    // Loop
    for (i=0; i<mediaArrayLength; i++) {
        const media = libertee.getHashTagMap(hashTag, i).then(console.log);
    }
}
```

#### Reading Length of User's HashTag

```
const hashTagArrayLength = libertee.getUserHashTagLength(address).then(console.log);
```

### Writing/Transacting

Do you have a content in mind which should not be censored? Upload new contents with Libertee to show the whole world without getting censored.

#### Creating Account

```
// Obtain IPFS hash from libertee.uploadPinata

const pfpHash = "QmccEdPvxSpJ7L4yyNjapHy7idAE7xvuULX2zdprnanpCz";
const nickName = "Yujin";
const bio = "Hello!";
const telegram = "@example";
const twitter = "twitter.com/example";
const phone = "+1 234 5678";
const email = "example@gmail.com";
const website = "yujin.com";
const hashTagArray = ["yujin", "ive", "kpop"];

// Send Transaction
const txHash = libertee.createAccount(
    pfpHash,
    nickName,
    bio,
    telegram,
    twitter,
    phone,
    email,
    website,
    hashTagArray
).then(console.log);
```

#### Creating Posts

```
// Obtain IPFS hash from libertee.uploadPinata

const ipfsHash = "QmccEdPvxSpJ7L4yyNjapHy7idAE7xvuULX2zdprnanpCz";
const text = "Hello this is Yujin!";
const hashTag = ["Yujin", "Kpop"];

// Send Transaction
const txHash = libertee.postMedia(ipfsHash, text, hashTag).then(console.log);
```

#### Editing Account

```
// METHODS
libertee.editPfpHash(pfpHash);
libertee.editBio(bio);
libertee.editTelegram(telegram);
libertee.editTwitter(twitter);
libertee.editEmail(email);
libertee.editHashTagArray(hashTagArray);
```
