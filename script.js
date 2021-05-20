const Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');
const MyContract = require('./build/contracts/Media.json');
const address = '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A';
const privateKey = 'your mnemonic here';
const infuraUrl = ''; 
const provider = new Provider(privateKey, 
  'https://rinkeby.infura.io/v3/8952eb9e68664ae9854073b73f5cd02e',
  ); 
const web3 = new Web3(provider);


const param12 = [
  "ipfs://QmeJd2BSSqPupd9rSc6FAq9ocg5X4FCqycjTMpLaMqc3qe",
  "ipfs://QmQBxiLvJwVfhvmKAwKftz1Ua5gns8E4zZeSgQuTbhecg2",
  "0x6c00000000000000000000000000000000000000000000000000000000000000",
  "0x6c00000000000000000000000000000000000000000000000000000000000000"]

 




//Easy way (Web3 + @truffle/hdwallet-provider)

const _minting = async () => {


  console.log("Minting Tokens...")

 
  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );
 const addr= "0xD4f6Cb0C1Fe07407b7098ac7Fe4265f3B2AE61f2"
 console.log('Waiting for Transaction Hash...')
  //console.log(await myContract.methods.mint().call());
  //console.log(`Minting NFT: ${await myContract.methods.mint(param1,share).call()}`);
  const receipt = await myContract.methods.mint(param12,[['6000000000000000000'],['10000000000000000000'],['84000000000000000000']]).send({ from: addr });
  console.log(`Transaction hash: ${receipt.transactionHash}`);
  //console.log(`New data value: ${await myContract.methods.data().call()}`);
}

const setask = async () => {
  console.log("Calling Set Ask...")

  
  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );
 const addr= "0xD4f6Cb0C1Fe07407b7098ac7Fe4265f3B2AE61f2"

 const token_id = '0' ;
  
 //tokenId = '0' only minted token
 //ask (tuple){amount , currency}
 
 console.log('Waiting for Transaction Hash...')
 
 //1500000000000000000==1.5*10**18   1.5 eth
 
  const receipt = await myContract.methods.setAsk(token_id,['1500000000000000000','0xF81A19C17dd2258A763db55BA6Ca3e03e955aFA8']).send({ from: addr });
  console.log(`Transaction hash: ${receipt.transactionHash}`);
}


const remask = async () => {
  console.log("Calling Remove Ask...")

  const networkId = await web3.eth.net.getId();
  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );
 const addr= "0xD4f6Cb0C1Fe07407b7098ac7Fe4265f3B2AE61f2"

 const token_id = '0' ;
  

 //tokenId = '0' only minted token
 //ask (tuple){amount , currency}
 console.log('Waiting for Transaction Hash...')
  
  //1500000000000000000==1.5*10**18   1.5 eth
  const receipt = await myContract.methods.removeAsk(token_id).send({ from: addr });
  console.log(`Transaction hash: ${receipt.transactionHash}`);
}

const setbid = async () => {
  console.log("Calling Set Bid...")

  
  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );
 const addr= "0xF81A19C17dd2258A763db55BA6Ca3e03e955aFA8"

 const token_id = '0' ;
  

 //tokenId = '0' only minted token
 //ask (tuple){amount , currency}
 console.log('Waiting for Transaction Hash...')
  
  //1800000000000000000==1.8*10**18   1.8 eth
  const receipt = await myContract.methods.setBid(token_id,['1500000000000000000','0xF81A19C17dd2258A763db55BA6Ca3e03e955aFA8',
  '0xF81A19C17dd2258A763db55BA6Ca3e03e955aFA8','0xF81A19C17dd2258A763db55BA6Ca3e03e955aFA8', ['4000000000000000000']]).send({ from: addr });
  console.log(`Transaction Hash: ${receipt.transactionHash}`);
}



const acceptbid = async () => {
  console.log("Calling Accept Bid...")

  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );

 const addr= "0xD4f6Cb0C1Fe07407b7098ac7Fe4265f3B2AE61f2"
 const token_id = '0' ;
 //tokenId = '0' only minted token
 
 console.log('Waiting for Transaction Hash...')
  //1800000000000000000==1.8*10**18   1.8 eth
  const receipt = await myContract.methods.acceptBid(token_id,['1500000000000000000','0xF81A19C17dd2258A763db55BA6Ca3e03e955aFA8',
  '0xF81A19C17dd2258A763db55BA6Ca3e03e955aFA8','0xF81A19C17dd2258A763db55BA6Ca3e03e955aFA8', ['4000000000000000000']]).send({ from: addr });
  console.log(`Transaction Hash: ${receipt.transactionHash}`);
}


const rembid = async () => {
  console.log("Calling Remove Bid...")

  
  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );
 const addr= "0xF81A19C17dd2258A763db55BA6Ca3e03e955aFA8"

 const token_id = '0' ;
  

 //tokenId = '0' only minted token
 //ask (tuple){amount , currency}
 console.log('Waiting for Transaction Hash...')
  
  //1800000000000000000==1.8*10**18   1.8 eth
  const receipt = await myContract.methods.removeBid(token_id).send({ from: addr });
  console.log(`Transaction Hash: ${receipt.transactionHash}`);
}  




_minting();
// setask(); 
//remask();
//setbid();
//acceptbid();
//rembid();
