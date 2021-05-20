const Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');
const MContract = require('./build/contracts/Market.json');
const address = '0xb65de4d613575074098832Cde8E27537B982Ad02';
const privateKey = 'your mnemonic here';
const infuraUrl = ''; 
const provider = new Provider(privateKey, 
  'https://rinkeby.infura.io/v3/8952eb9e68664ae9854073b73f5cd02e',
  ); 
const web3 = new Web3(provider);

//This Funtion is used to Configure the Market Contract with Media Contract's Address.

const init1 = async () => {
  console.log("Configuring the Market Contract...")

  const networkId = await web3.eth.net.getId();
  const myContract = new web3.eth.Contract(
    MContract.abi,
    address
  );

const addr= "0xD4f6Cb0C1Fe07407b7098ac7Fe4265f3B2AE61f2"
 await myContract.methods.configure('0xf94238Faa08B82fe6689d605842Fea383FfcFd1A').send({ from: addr });
 console.log('Contract is Configured...')

}

init1();
