const contractData = {
    "address": "0x2a0bf040a8c09148D3617B957468E9eA2951F159",
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_pfpHash",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_nickName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_bio",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_telegram",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_twitter",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_phone",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_email",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_website",
                    "type": "string"
                },
                {
                    "internalType": "string[]",
                    "name": "_hashTagArray",
                    "type": "string[]"
                }
            ],
            "name": "createAccount",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_bio",
                    "type": "string"
                }
            ],
            "name": "editBio",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_email",
                    "type": "string"
                }
            ],
            "name": "editEmail",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string[]",
                    "name": "_hashTagArray",
                    "type": "string[]"
                }
            ],
            "name": "editHashTagArray",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_pfpHash",
                    "type": "string"
                }
            ],
            "name": "editPfpHash",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_phone",
                    "type": "string"
                }
            ],
            "name": "editPhone",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_telegram",
                    "type": "string"
                }
            ],
            "name": "editTelegram",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_twitter",
                    "type": "string"
                }
            ],
            "name": "editTwitter",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_ipfsHash",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_text",
                    "type": "string"
                },
                {
                    "internalType": "string[]",
                    "name": "_hashTag",
                    "type": "string[]"
                }
            ],
            "name": "postMedia",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "success",
                    "type": "bool"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_hashTag",
                    "type": "string"
                }
            ],
            "name": "getHashTagMediaLength",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "length",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getMediaArrayLength",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "length",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "getNameArrayLength",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "length",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_target",
                    "type": "address"
                }
            ],
            "name": "getOwnerMediaLength",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "length",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_user",
                    "type": "address"
                }
            ],
            "name": "getUserHashTagLength",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "length",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "hashTagMap",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "ipfsHash",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "text",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "uploadDate",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "mediaArray",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "ipfsHash",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "text",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "uploadDate",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                },
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "mediaOwnershipMap",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "ipfsHash",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "text",
                    "type": "string"
                },
                {
                    "internalType": "uint256",
                    "name": "uploadDate",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "nameArray",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_nickName",
                    "type": "string"
                }
            ],
            "name": "nameExists",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "exists",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "name": "profileMap",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "pfpHash",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "nickName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "bio",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "telegram",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "twitter",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "phone",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "email",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "website",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "",
                    "type": "string"
                }
            ],
            "name": "profileNameMap",
            "outputs": [
                {
                    "internalType": "string",
                    "name": "pfpHash",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "nickName",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "bio",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "telegram",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "twitter",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "phone",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "email",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "website",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
}

module.exports = {contractData};