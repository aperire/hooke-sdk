// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

contract Hooke {
    Media[] public mediaArray;
    mapping(string => bool) public nameMap;
    mapping(address => string) public addressToName;    //address => username
    mapping(string => Profile) public profileNameMap;   //username => profile
    mapping(string => Media[]) public hashTagMap;       // hashTag => Media

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
        uint[] mediaIndexArray;
    }

    // view functions

    // helper functions
    function unsafe_inc(uint x) private pure returns (uint) {
        unchecked { return x + 1; }
    }

    // get length of mediaArray
    function getMediaArrayLength() public view returns (uint256 length) {
        return mediaArray.length;
    }

    // get length of mediaIndexArray from address
    function getOwnedMediaLength(address _user)
        public
        view
        returns (uint256 length)
    {
        return profileNameMap[addressToName[_user]].mediaIndexArray.length;
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
        return nameMap[_username];
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
        require(nameMap[_username]!=true, "Username Exists!");

        // create profile struct
        Profile memory profile;
        profile.pfpHash=_pfpHash;
        profile.username=_username;
        profile.bio=_bio;
        profile.hashTagArray=_hashTagArray;
        profile.owner=msg.sender;


        // add to addressToName
        addressToName[msg.sender] = _username;

        // add to profileNameMap
        profileNameMap[_username] = profile;

        // add to nameArray
        nameMap[_username]=true;

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
        
        // add to mediaIndexArray
        profileNameMap[addressToName[msg.sender]].mediaIndexArray.push(mediaArray.length);

        // add hashtag
        for (uint256 i = 0; i < _hashTagArray.length; i=unsafe_inc(i)) {
            hashTagMap[_hashTagArray[i]].push(media);
        }
        return true;
    }
}