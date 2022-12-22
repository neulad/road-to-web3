// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol';
import '@chainlink/contracts/src/v0.8/AutomationCompatible.sol';
import '@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol';
import '@chainlink/contracts/src/v0.8/interfaces/VRFCoordinatorV2Interface.sol';
import '@chainlink/contracts/src/v0.8/VRFConsumerBaseV2.sol';
import '@openzeppelin/contracts/utils/Counters.sol';

error BullBear__UpkeepNotNeeded();

contract BullBear is
    ERC721,
    ERC721Enumerable,
    ERC721URIStorage,
    AutomationCompatible,
    VRFConsumerBaseV2
{
    using Counters for Counters.Counter;
    struct RequestStatus {
        bool fulfilled;
        address sender;
    }

    mapping(uint256 => RequestStatus) private s_requests;

    AggregatorV3Interface private immutable i_priceFeed;
    VRFCoordinatorV2Interface private immutable i_vrfCoordinator;

    bytes32 private immutable i_keyHash;
    uint64 private immutable i_subId;
    uint16 private immutable i_minimumRequestConfirmations;
    uint32 private immutable i_callbackGasLimit;

    uint256 private s_lastTimestamp;
    int256 private s_lastRate;
    bool private s_bull;
    uint256 private immutable i_period;
    Counters.Counter private _tokenIdCounter;
    string[] private s_bullUris = [
        'https://ipfs.io/ipfs/QmRXyfi3oNZCubDxiVFre3kLZ8XeGt6pQsnAQRZ7akhSNs?filename=gamer_bull.json',
        'https://ipfs.io/ipfs/QmRJVFeMrtYS2CUVUM2cHJpBV5aX2xurpnsfZxLTTQbiD3?filename=party_bull.json',
        'https://ipfs.io/ipfs/QmdcURmN1kEEtKgnbkVJJ8hrmsSWHpZvLkRgsKKoiWvW9g?filename=simple_bull.json'
    ];
    string[] private s_bearUris = [
        'https://ipfs.io/ipfs/Qmdx9Hx7FCDZGExyjLR6vYcnutUR8KhBZBnZfAPHiUommN?filename=beanie_bear.json',
        'https://ipfs.io/ipfs/QmTVLyTSuiKGUEmb88BgXG3qNC8YgpHZiFbjHrXKH3QHEu?filename=coolio_bear.json',
        'https://ipfs.io/ipfs/QmbKhBXVWmwrYsTPFYfroR2N7NAekAMxHUVg2CWks7i9qj?filename=simple_bear.json'
    ];

    constructor(
        uint256 period,
        address priceFeedAddress,
        address vrfCoordinatorAddress,
        bytes32 keyHash,
        uint64 subId,
        uint16 minimumRequestConfirmations,
        uint32 callbackGasLimit
    ) ERC721('BullBear', 'BBR') VRFConsumerBaseV2(vrfCoordinatorAddress) {
        s_lastTimestamp = block.number;
        i_period = period;

        i_priceFeed = AggregatorV3Interface(priceFeedAddress);

        i_vrfCoordinator = VRFCoordinatorV2Interface(vrfCoordinatorAddress);
        i_keyHash = keyHash;
        i_subId = subId;
        i_minimumRequestConfirmations = minimumRequestConfirmations;
        i_callbackGasLimit = callbackGasLimit;
    }

    function safeMint(address to, uint256 id) private {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, s_bull ? s_bullUris[id] : s_bearUris[id]);
    }

    // The following functions are overrides required by Solidity.

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId,
        uint256 batchSize
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(
        uint256 tokenId
    ) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721Enumerable) returns (bool) {
        return super.supportsInterface(interfaceId);
    }

    function checkUpkeep(
        bytes calldata /*checkData*/
    ) external view returns (bool upkeepNeeded, bytes memory /*performData*/) {
        upkeepNeeded = block.number - i_period >= s_lastTimestamp;
    }

    function performUpkeep(bytes calldata /*performData*/) external {
        if (block.number - i_period < s_lastTimestamp) {
            revert BullBear__UpkeepNotNeeded();
        }

        s_lastTimestamp = block.number;
        (, int256 currentRate, , , ) = i_priceFeed.latestRoundData();

        s_bull = false;
        if (currentRate > s_lastRate) s_bull = true;
        s_lastRate = currentRate;
    }

    function requestRandomWords() external returns (uint256) {
        uint256 requestId = i_vrfCoordinator.requestRandomWords(
            i_keyHash,
            i_subId,
            i_minimumRequestConfirmations,
            i_callbackGasLimit,
            1
        );

        s_requests[requestId] = RequestStatus(false, msg.sender);
        return requestId;
    }

    function fulfillRandomWords(
        uint256 requestId,
        uint256[] memory randomWords
    ) internal override {
        address sender = s_requests[requestId].sender;
        delete s_requests[requestId];

        safeMint(sender, randomWords[0] % 2);
    }
}
