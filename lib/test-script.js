const { getSigner, Hooke } = require("./Hooke");

// Fetch env variables
const GOERLI_PROVIDER="https://goerli.infura.io/v3/481a8d82aeb541b8925973d836c49375"
const PRIVATE_KEY='0x35237c73ff1c92cf93b70e2696a110ee5da9c276243f207a7dc01b90046484e1'
const ADDRESS = "0xd3A44Ce3d4eb86c966C972cBBE99473f3Cc73A96"
const signer = getSigner(PRIVATE_KEY, GOERLI_PROVIDER);

const hooke = new Hooke(signer);

hooke.getMediaArrayLength().then(console.log);

hooke.getOwnerMediaLength(ADDRESS).then(console.log);

hooke.getOwnerMedia(ADDRESS, 0).then(console.log);

hooke.getHashTagMedia("hello", 0).then(console.log);

