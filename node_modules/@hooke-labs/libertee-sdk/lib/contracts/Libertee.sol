// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract Libertee {
    Media[] public mediaArray;
    string[] public nameArray;
    mapping(address => OwnerMedia[]) public mediaOwnershipMap;
    mapping(address => Profile) public profileMap;
    mapping(string => Profile) public profileNameMap;
    mapping(string => Media[]) public hashTagMap; // hashTag => Media

    struct Media {
        string ipfsHash;
        string text;
        string[] hashTagArray;
        uint256 uploadDate;
        address owner;
        string userName;
    }

    struct OwnerMedia {
        string ipfsHash;
        string text;
        string[] hashTagArray;
        uint256 uploadDate;
    }

    struct Profile {
        string pfpHash;
        string username;
        string bio;
        string telegram;
        string twitter;
        string phone;
        string email;
        string website;
        string[] hashTagArray;
        address owner;
    }

    // view functions
    function getMediaArrayLength() public view returns (uint256 length) {
        return mediaArray.length;
    }

    function getNameArrayLength() public view returns (uint256 length) {
        return nameArray.length;
    }

    function getOwnerMediaLength(address _target)
        public
        view
        returns (uint256 length)
    {
        return mediaOwnershipMap[_target].length;
    }

    function getHashTagMediaLength(string memory _hashTag)
        public
        view
        returns (uint256 length)
    {
        return hashTagMap[_hashTag].length;
    }

    function getUserHashTagLength(address _user)
        public
        view
        returns (uint256 length)
    {
        return profileMap[_user].hashTagArray.length;
    }

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
        string memory _telegram,
        string memory _twitter,
        string memory _phone,
        string memory _email,
        string memory _website,
        string[] memory _hashTagArray
    ) public returns (bool success) {
        // validate address
        require(
            profileMap[msg.sender].owner ==
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
            _telegram,
            _twitter,
            _phone,
            _email,
            _website,
            _hashTagArray,
            msg.sender
        );

        // add to profileMap
        profileMap[msg.sender] = profile;

        // add to profileNameMap
        profileNameMap[_username] = profile;

        // add to nameArray
        nameArray.push(_username);

        return true;
    }

    function editPfpHash(string memory _pfpHash) public returns (bool success) {
        require(profileMap[msg.sender].owner == msg.sender, "Create Account!");

        Profile storage profile = profileMap[msg.sender];
        profile.pfpHash = _pfpHash;
        return true;
    }

    function editBio(string memory _bio) public returns (bool success) {
        require(profileMap[msg.sender].owner == msg.sender, "Create Account!");

        Profile storage profile = profileMap[msg.sender];
        profile.bio = _bio;
        return true;
    }

    function editTelegram(string memory _telegram)
        public
        returns (bool success)
    {
        require(profileMap[msg.sender].owner == msg.sender, "Create Account!");

        Profile storage profile = profileMap[msg.sender];
        profile.telegram = _telegram;
        return true;
    }

    function editTwitter(string memory _twitter) public returns (bool success) {
        require(profileMap[msg.sender].owner == msg.sender, "Create Account!");

        Profile storage profile = profileMap[msg.sender];
        profile.twitter = _twitter;
        return true;
    }

    function editPhone(string memory _phone) public returns (bool success) {
        require(profileMap[msg.sender].owner == msg.sender, "Create Account!");

        Profile storage profile = profileMap[msg.sender];
        profile.phone = _phone;
        return true;
    }

    function editEmail(string memory _email) public returns (bool success) {
        require(profileMap[msg.sender].owner == msg.sender, "Create Account!");

        Profile storage profile = profileMap[msg.sender];
        profile.email = _email;
        return true;
    }

    function editHashTagArray(string[] memory _hashTagArray)
        public
        returns (bool success)
    {
        require(profileMap[msg.sender].owner == msg.sender, "Create Account!");

        Profile storage profile = profileMap[msg.sender];
        profile.hashTagArray = _hashTagArray;
        return true;
    }

    function postMedia(
        string memory _ipfsHash,
        string memory _text,
        string[] memory _hashTagArray
    ) public returns (bool success) {
        // Get username
        Profile memory profile = profileMap[msg.sender];
        string memory username = profile.username;
        // push to mediaArray
        Media memory media = Media(
            _ipfsHash,
            _text,
            _hashTagArray,
            block.timestamp,
            msg.sender,
            username
        );
        mediaArray.push(media);

        // add to mediaOwnershipMap
        OwnerMedia memory ownerMedia = OwnerMedia(
            _ipfsHash,
            _text,
            _hashTagArray,
            block.timestamp
        );

        mediaOwnershipMap[msg.sender].push(ownerMedia);

        // add hashtag
        for (uint8 i = 0; i < _hashTagArray.length; i++) {
            hashTagMap[_hashTagArray[i]].push(media);
        }
        return true;
    }
}
