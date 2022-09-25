// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract Hooke {
    Media[] public mediaArray;
    string[] public nameArray;
    mapping(address => Media[]) public mediaOwnershipMap;
    mapping(address => string) public addressToName;
    mapping(string => Profile) public profileNameMap;
    mapping(string => Media[]) public hashTagMap; // hashTag => Media

    struct Media {
        string postHash;
        string text;
        uint256 uploadDate;
        address owner;
        string userName;
        string pfpHash;
    }

    struct Profile {
        string pfpHash;
        string username;
        string bio;
        string[] hashTagArray;
        address owner;
    }

    // view functions

    // get length of mediaArray
    function getMediaArrayLength() public view returns (uint256 length) {
        return mediaArray.length;
    }

    // get length of nameArray
    function getNameArrayLength() public view returns (uint256 length) {
        return nameArray.length;
    }

    // get length of mediaOwnershipMap[address]
    function getOwnerMediaLength(address _user)
        public
        view
        returns (uint256 length)
    {
        return mediaOwnershipMap[_user].length;
    }

    // get length of hashTagMap[hashTag]
    function getHashTagMediaLength(string memory _hashTag)
        public
        view
        returns (uint256 length)
    {
        return hashTagMap[_hashTag].length;
    }

    // get number of tags of an account
    function getAddressHashTagLength(address _user)
        public
        view
        returns (uint256 length)
    {
        return profileNameMap[addressToName[_user]].hashTagArray.length;
    }

    function getAddressHashTag(address _user, uint256 _index)
        public
        view
        returns (string memory hashTag)
    {
        return profileNameMap[addressToName[_user]].hashTagArray[_index];
    }

    // get length of profileNameMap[name].hashTagArray
    function getNameHashTagLength(string memory _name)
        public
        view
        returns (uint256 length)
    {
        return profileNameMap[_name].hashTagArray.length;
    }

    function getNameHashTag(string memory _name, uint256 _index)
        public
        view
        returns (string memory hashTag)
    {
        return profileNameMap[_name].hashTagArray[_index];
    }

    // loop and check if username exists
    function nameExists(string memory _username)
        public
        view
        returns (bool exists)
    {
        for (uint256 i = 0; i < nameArray.length; i++) {
            if (keccak256(bytes(nameArray[i])) == keccak256(bytes(_username))) {
                return true;
            }
        }
        return false;
    }

    function createAccount(
        string memory _pfpHash,
        string memory _username,
        string memory _bio,
        string[] memory _hashTagArray
    ) public returns (bool success) {
        // validate address
        require(
            profileNameMap[addressToName[msg.sender]].owner ==
                0x0000000000000000000000000000000000000000,
            "Account Exists!"
        );

        // validate username
        for (uint256 i = 0; i < nameArray.length; i++) {
            if (keccak256(bytes(nameArray[i])) == keccak256(bytes(_username))) {
                return false;
            }
        }

        // create profile struct
        Profile memory profile = Profile(
            _pfpHash,
            _username,
            _bio,
            _hashTagArray,
            msg.sender
        );

        // add to addressToName
        addressToName[msg.sender] = _username;

        // add to profileNameMap
        profileNameMap[_username] = profile;

        // add to nameArray
        nameArray.push(_username);

        return true;
    }

    function editPfpHash(string memory _pfpHash) public returns (bool success) {
        require(profileNameMap[addressToName[msg.sender]].owner == msg.sender, "Create Account!");

        Profile storage profile = profileNameMap[addressToName[msg.sender]];
        profile.pfpHash = _pfpHash;
        return true;
    }

    function editBio(string memory _bio) public returns (bool success) {
        require(profileNameMap[addressToName[msg.sender]].owner == msg.sender, "Create Account!");

        Profile storage profile = profileNameMap[addressToName[msg.sender]];
        profile.bio = _bio;
        return true;
    }

    function editHashTagArray(string[] memory _hashTagArray)
        public
        returns (bool success)
    {
        require(profileNameMap[addressToName[msg.sender]].owner == msg.sender, "Create Account!");

        Profile storage profile = profileNameMap[addressToName[msg.sender]];
        profile.hashTagArray = _hashTagArray;
        return true;
    }

    function postMedia(
        string memory _postHash,
        string memory _text,
        string[] memory _hashTagArray
    ) public returns (bool success) {
        // Get username
        Profile memory profile = profileNameMap[addressToName[msg.sender]];
        string memory username = addressToName[msg.sender];
        string memory pfpHash = profile.pfpHash;
        // push to mediaArray
        Media memory media = Media(
            _postHash,
            _text,
            block.timestamp,
            msg.sender,
            username,
            pfpHash
        );
        mediaArray.push(media);

        // add to mediaOwnershipMap
        mediaOwnershipMap[msg.sender].push(media);

        // add hashtag
        for (uint8 i = 0; i < _hashTagArray.length; i++) {
            hashTagMap[_hashTagArray[i]].push(media);
        }
        return true;
    }
}