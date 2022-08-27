# Hooke SDK

![alt text](https://raw.githubusercontent.com/aperire/hooke-sdk/main/lib/img/hooke-banner.png)

Hooke is an open-source protocol to provide
uncensorable contents to the internet.

More info on https://hooke.org

(Currently deployed on [Ethereum Goerli Testnet]("https://goerli.etherscan.io/address/0xFC26e4e8a005aC3e1F3f0Df2522a873B6d6fa496"))

Contract Address: 0xFC26e4e8a005aC3e1F3f0Df2522a873B6d6fa496

Simulate on [Remix](https://remix.ethereum.org)

## Installation

`npm install hooke-sdk`

## Hooke JS SDK

This is the Hooke SDK to transact and build decentralized frontend
for [Hooke Protocol](https://hooke.org).

### Initialize Instance

```
const { Hooke, getSigner } = require('@hooke-sdk');

// Environmental Variables
const PINATA_KEY = process.env.PINATA_KEY;
const PINATA_SECRET = process.env.PINATA_SECRET;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const GOERLI_PROVIDER = process.env.GOERLI_PROVIDER;

// Initialize Instance
const signer = getSigner(PRIVATE_KEY, GOERLI_PROVIDER);
const hooke = new Hooke(signer);
```

### Upload file to IPFS (via Pinata)

Upload files to IPFS with a simple script.

```
// Upload to Pinata
let filePath = "./img/example.png";
let name = "example img";

const ipfsHash = hooke.uploadPinata(filePath, name, PINATA_KEY, PINATA_SECRET).then(console.log);
```

## Reading

Reading data from Hooke contract allows multiple developers to create frontend to maintain decentralization of Hooke Protocol and protect from censorship.

### Reading All Posts

```
const readMediaArray = async () => {
    // Get length of mediaArray
    const mediaArrayLength = await libertee.getMediaArrayLength();

    // Loop
    for (i=0; i<mediaArrayLength; i++) {
        const media = hooke.getMediaArray(i).then(console.log);
    }
}
```

### Reading All Account Names

```
const readAccountArray = async () => {
    // Get length of nameArray
    const nameArrayLength = await hooke.getNameArrayLength();

    // Loop
    for (i=0; i<nameArrayLength; i++) {
        const account = hooke.getNameArray(i).then(console.log);
    }
}
```

### Validating Name Existance

```
const name = "Yujin";
const nameExists = hooke.checkNameExists(name).then(console.log); // bool
```

### Reading Profile from Address

```
// Use target address
const address = "0xd3A44Ce3d4eb86c966C972cBBE99473f3Cc73A96";

const profile = hooke.getProfileMap(address).then(console.log);
```

### Reading Profile from Name

```
// Use target name
const name = "Yujin"

const profile = hooke.getProfileNameMap(name).then(console.log);
```

## Writing/Transacting

Do you have a content in mind which should not be censored? Upload new contents with Libertee to show the whole world without getting censored.

### Creating Account

```
// Obtain IPFS hash from hooke.uploadPinata

const pfpHash = "QmccEdPvxSpJ7L4yyNjapHy7idAE7xvuULX2zdprnanpCz";
const userName = "Yujin";
const bio = "Hello!";
const telegram = "@example";
const twitter = "twitter.com/example";
const phone = "+1 234 5678";
const email = "example@gmail.com";
const website = "yujin.com";
const hashTagArray = ["yujin", "ive", "kpop"];

// Send Transaction
const txHash = hooke.createAccount(
    pfpHash,
    nickName,
    bio,
    hashTagArray
).then(console.log);
```

### Creating Posts

```
// Obtain IPFS hash from hooke.uploadPinata

const ipfsHash = "QmccEdPvxSpJ7L4yyNjapHy7idAE7xvuULX2zdprnanpCz";
const text = "Hello this is Yujin!";
const hashTag = ["Yujin", "Kpop"];

// Send Transaction
const txHash = hooke.postMedia(ipfsHash, text, hashTag).then(console.log);
```
