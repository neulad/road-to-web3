// SPDX-License-Identifier: MIT
pragma solidity 0.8.4; //Do not change the solidity version as it negativly impacts submission grading

import "hardhat/console.sol";
import "./ExampleExternalContract.sol";

contract Staker {
    event Stake(address indexed sender, uint256 amount);
    event Received(address, uint);
    event Execute(address indexed sender, uint256 amount);

    ExampleExternalContract public exampleExternalContract;
    mapping(address => uint256) public balances;
    mapping(address => uint256) public depositTimestamps;
    // Rate
    uint256 public constant rewardRatePerBlock = 1;
    uint256 public withdrawalDeadlineBlock = block.number + 12;
    uint256 public claimDeadlineBlock = block.number + 24;
    uint256 public currentBlock = 0;

    modifier withdrawalDeadlineReached(bool requireReached) {
        uint256 timeRemaining = withdrawalTimeLeft();
        if (requireReached) {
            require(timeRemaining == 0, "Withdrawal period is not reached yet");
        } else {
            require(timeRemaining > 0, "Withdrawal period has been reached");
        }
        _;
    }

    modifier claimDeadlineReached(bool requireReached) {
        uint256 timeRemaining = claimPeriodLeft();
        if (requireReached) {
            require(timeRemaining == 0, "Claim deadline is not reached yet");
        } else {
            require(timeRemaining > 0, "Claim deadline has been reached");
        }
        _;
    }

    modifier notCompleted() {
        bool completed = exampleExternalContract.completed();
        require(!completed, "Stake already completed!");
        _;
    }

    constructor(address exampleExternalContractAddress) {
        exampleExternalContract = ExampleExternalContract(
            exampleExternalContractAddress
        );
    }

    function withdrawalTimeLeft() public view returns (uint256) {
        if (block.number >= withdrawalDeadlineBlock) {
            return (0);
        } else {
            return (withdrawalDeadlineBlock - block.number);
        }
    }

    function stake()
        public
        payable
        withdrawalDeadlineReached(false)
        claimDeadlineReached(false)
    {
        balances[msg.sender] = balances[msg.sender] + msg.value;
        depositTimestamps[msg.sender] = block.number;
        emit Stake(msg.sender, msg.value);
    }

    function withdraw()
        public
        withdrawalDeadlineReached(true)
        claimDeadlineReached(false)
        notCompleted
    {
        require(balances[msg.sender] > 0, "You have no balance to withdraw!");
        uint256 individualBalance = balances[msg.sender];
        uint256 indBalanceRewards = (((100 + rewardRatePerBlock) **
            (block.number - depositTimestamps[msg.sender])) *
            individualBalance) /
            (100 ** (block.number - depositTimestamps[msg.sender]));

        balances[msg.sender] = 0;

        // Transfer all ETH via call! (not transfer) cc: https://solidity-by-example.org/sending-ether
        (bool sent, ) = msg.sender.call{value: indBalanceRewards}("");
        require(sent, "RIP; withdrawal failed :( ");
    }

    function execute() public claimDeadlineReached(true) notCompleted {
        exampleExternalContract.complete{value: address(this).balance}();
    }

    function claimPeriodLeft() public view returns (uint256) {
        if (block.number >= claimDeadlineBlock) {
            return (0);
        } else {
            return (claimDeadlineBlock - block.number);
        }
    }

    // Collect funds in a payable `stake()` function and track individual `balances` with a mapping:
    // ( Make sure to add a `Stake(address,uint256)` event and emit it for the frontend <List/> display )

    // After some `deadline` allow anyone to call an `execute()` function
    // If the deadline has passed and the threshold is met, it should call `exampleExternalContract.complete{value: address(this).balance}()`

    // If the `threshold` was not met, allow everyone to call a `withdraw()` function to withdraw their balance

    // Add a `timeLeft()` view function that returns the time left before the deadline for the frontend

    // Add the `receive()` special function that receives eth and calls stake()
}
