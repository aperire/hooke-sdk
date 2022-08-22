# Libertee Protocol

Libertee is an open-source protocol to provide
uncensorable contents to the internet.

(Currently deployed on [Ethereum Goerli Testnet]("https://goerli.etherscan.io/address/0x0b9c85d928dbb153c6c5897ec03d333e7e948a8b"))

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

#### Reading Posts

```
const readMedia = async () => {
    // Get length of mediaArray
    const mediaArrayLength = await libertee.getMediaArrayLength();

    // Loop
    for (i=0; i<mediaArrayLength; i++) {
        const media = libertee.getMediaArray(i).then(console.log);
    }
}
```

#### Reading Account Names

#### Reading Profile

#### Reading Post by Account

#### Reading Post by Hashtag

### Writing/Transacting

#### Creating Account

#### Creating Posts

#### Editing Account
