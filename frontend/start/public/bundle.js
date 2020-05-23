var contractABI = [];
var contractAddress = '0x1dd215691400ff9F56839F774A299463A8251538';
var web3 = new Web3('http://localhost:9545');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress)

console.log(simpleSmartContract);

web3.eth.getAccounts().then(console.log);

