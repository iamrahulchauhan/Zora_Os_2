const Web3 = require('web3');
const Provider = require('@truffle/hdwallet-provider');
const MyContract = require('./build/contracts/Media.json');
const address = '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A';
const privateKey = 'your Mnemonic here';
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

 




//write functions from Media Contract 


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

const MintwithSig = async () => {


  console.log("Minting Tokens...")

 
  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );
 const addr= "0xD4f6Cb0C1Fe07407b7098ac7Fe4265f3B2AE61f2"
 
  //console.log(await myContract.methods.mint().call());
  //console.log(`Minting NFT: ${await myContract.methods.mint(param1,share).call()}`);
  const receipt = await myContract.methods.mintWithSig(param12,[['6000000000000000000'],['10000000000000000000'],['84000000000000000000']]
  ,[['no of seconds'],['uint8 v'],['bytes32 r'],['bytes32 s']]).send({ from: addr });
  console.log('Waiting for Transaction Hash...')
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


const Burn = async () => {
  console.log("burning the token...")

  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );

 const addr= "0xD4f6Cb0C1Fe07407b7098ac7Fe4265f3B2AE61f2"
 const token_id = '0' ;
 //tokenId = '0' only minted token
 
 console.log('Waiting for Transaction Hash...')
  //1800000000000000000==1.8*10**18   1.8 eth
  const receipt = await myContract.methods.burn(token_id).send({ from: addr });
  console.log(`Transaction Hash: ${receipt.transactionHash}`);
}


const RevokeApproval = async () => {
  console.log("burning the token...")

  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );

 const addr= "0xD4f6Cb0C1Fe07407b7098ac7Fe4265f3B2AE61f2"
 const token_id = '0' ;
 //tokenId = '0' only minted token
 console.log('Waiting for Transaction Hash...')
  //1800000000000000000==1.8*10**18   1.8 eth
  const receipt = await myContract.methods.revokeApproval(token_id).send({ from: addr });
  console.log(`Transaction Hash: ${receipt.transactionHash}`);
}


const UpdateTokenURI = async () => {
  console.log("burning the token...")

  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );

 const addr= "0xD4f6Cb0C1Fe07407b7098ac7Fe4265f3B2AE61f2"
 const token_id = '0' ;
 //tokenId = '0' only minted token
 console.log('Waiting for Transaction Hash...')
  //1800000000000000000==1.8*10**18   1.8 eth
  const receipt = await myContract.methods.updateTokenURI(token_id,'ipfs://QmeJd2BSSqPupd9rSc6FAq9ocg5X4FCqycjTMpLaMqc3qe').send({ from: addr });
  console.log(`Transaction Hash: ${receipt.transactionHash}`);
}


const UpdateTokenMetadataURI = async () => {
  console.log("burning the token...")

  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );

 const addr= "0xD4f6Cb0C1Fe07407b7098ac7Fe4265f3B2AE61f2"
 const token_id = '0' ;
 //tokenId = '0' only minted token
 console.log('Waiting for Transaction Hash...')
  //1800000000000000000==1.8*10**18   1.8 eth
  const receipt = await myContract.methods.updateTokenMetadataURI(token_id,'ipfs://QmQBxiLvJwVfhvmKAwKftz1Ua5gns8E4zZeSgQuTbhecg2').send({ from: addr });
  console.log(`Transaction Hash: ${receipt.transactionHash}`);
}


const Permit = async () => {
  console.log("burning the token...")

  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );

 const addr= "0xD4f6Cb0C1Fe07407b7098ac7Fe4265f3B2AE61f2"
 const token_id = '0' ;
 const spender = '0xF81A19C17dd2258A763db55BA6Ca3e03e955aFA8'
 const signature='eip721signature here'
 //tokenId = '0' only minted token
 console.log('Waiting for Transaction Hash...')
  //1800000000000000000==1.8*10**18   1.8 eth
  const receipt = await myContract.methods.permit(spender,token_id,signature).send({ from: addr });
  console.log(`Transaction Hash: ${receipt.transactionHash}`);
}


const SetApprovalForAll = async () => {
  console.log("burning the token...")

  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );

 const addr= "0xD4f6Cb0C1Fe07407b7098ac7Fe4265f3B2AE61f2"
 // const token_id = '0' ;
 const to = '0xF81A19C17dd2258A763db55BA6Ca3e03e955aFA8'
 const approved='1'
 //approved takes bool value
 //tokenId = '0' only minted token
 console.log('Waiting for Transaction Hash...')
  //1800000000000000000==1.8*10**18   1.8 eth
  const receipt = await myContract.methods.setApprovalForAll(to,approved).send({ from: addr });
  console.log(`Transaction Hash: ${receipt.transactionHash}`);
}


const TransferFrom = async () => {
  console.log("burning the token...")

  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );
  //transferFrom(address from, address to, uint256 tokenId)
 const addr= "0xD4f6Cb0C1Fe07407b7098ac7Fe4265f3B2AE61f2"
 const token_id = '0' ;

 const to = '0xF81A19C17dd2258A763db55BA6Ca3e03e955aFA8'
 console.log('Waiting for Transaction Hash...')
  //1800000000000000000==1.8*10**18   1.8 eth
  const receipt = await myContract.methods.transferFrom(addr,to,token_id).send({ from: addr });
  console.log(`Transaction Hash: ${receipt.transactionHash}`);
}


const SafeTransferfrom = async () => {
  console.log("burning the token...")

  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );

 //transferFrom(address from, address to, uint256 tokenId)
 const addr= "0xD4f6Cb0C1Fe07407b7098ac7Fe4265f3B2AE61f2"
 const token_id = '0' ;

 const to = '0xF81A19C17dd2258A763db55BA6Ca3e03e955aFA8'
 console.log('Waiting for Transaction Hash...')
  //1800000000000000000==1.8*10**18   1.8 eth
  const receipt = await myContract.methods.safeTransferFrom(addr,to,token_id).send({ from: addr });
  console.log(`Transaction Hash: ${receipt.transactionHash}`);
}


const Approve = async () => {
  console.log("Calling Approve...")

  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );
 
 const addr= "0xD4f6Cb0C1Fe07407b7098ac7Fe4265f3B2AE61f2"
 const token_id = '0' ;
 const to = '0xF81A19C17dd2258A763db55BA6Ca3e03e955aFA8'

 const receipt = await myContract.methods.approve(to,token_id).send({ from: addr });
 console.log('Waiting for Transaction Hash...')
  //
  
  console.log(`Transaction Hash: ${receipt.transactionHash}`);
}


//read functions from Media...... 

const TokenURI = async () => {
  console.log("Loading Token Uri...")

  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );

  const token_id = '0' ;
  const tokenUri = await myContract.methods.tokenURI(token_id).call();
  console.log(`TokenURI : ${tokenUri}`);
}


const TokenmetadataURI = async () => {
  console.log("Loading Metadata Uri...")

  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );

  const token_id = '0' ;
  const tokenMetadataUri = await myContract.methods.tokenMetadataURI(token_id).call();
  console.log(`TokenMetadataURI : ${tokenMetadataUri}`);
}


const MarketContract = async () => {
  console.log("Fetching Market Contract Address...")

  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );

  
  const Media = await myContract.methods.marketContract().call()
  console.log(`Market Contract Address : ${Media}`);
}



const Mint_With_Sig_TypeHash = async () => {
  console.log("Fetching Details...")

  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );

  const Typehash = await myContract.methods.MINT_WITH_SIG_TYPEHASH().call()
  console.log(`Mint With Sig TypeHash : ${Typehash}`);
}


const Permit_TypeHash = async () => {
  console.log("Fetching Details...")

  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );

  const Typehash = await myContract.methods.PERMIT_TYPEHASH().call()
  console.log(`Mint With Sig TypeHash : ${Typehash}`);
}


const GetApproved = async () => {
  console.log("Fetching Details...")

  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );
  const tokenid='0'
  const Typehash = await myContract.methods.getApproved(tokenid).call()
  console.log(`Address : ${Typehash}`);
}


const IsApprovedForAll = async () => {
  console.log("Fetching Details...")

  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );
  const owner= "0xD4f6Cb0C1Fe07407b7098ac7Fe4265f3B2AE61f2"
  const operator = '0xF81A19C17dd2258A763db55BA6Ca3e03e955aFA8'
  const Typehash = await myContract.methods.isApprovedForAll(owner, operator).call()
  console.log(`Bool: ${Typehash}`);
}


const BalanceOf = async () => {
  console.log("Fetching Details...")

  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );
  const Address= "0xD4f6Cb0C1Fe07407b7098ac7Fe4265f3B2AE61f2"
  const Bal = await myContract.methods.balanceOf(Address).call()
  console.log(`Balance: ${Bal}`);
}


const OwnerOF = async () => {
  console.log("Fetching Details...")

  const myContract = new web3.eth.Contract(
    MyContract.abi,
    '0xf94238Faa08B82fe6689d605842Fea383FfcFd1A'
  );
  const tokenId ='0'
  const owner = await myContract.methods.ownerOf(tokenId).call()
  console.log(`Owner Address: ${owner}`);
}




//Write Functions....!

//_minting();
// setask(); 
//remask();
//setbid();
//acceptbid();
//rembid();
//burn();
//RevokeApproval();
//UpdateTokenURI();
//UpdateTokenMetadataURI();
//Permit();
//SetApprovalForAll();
//TransferFrom();
//SafeTransferfrom();
//Approve();
//MintwithSig();


//read fucntions

//TokenURI();
//TokenmetadataURI();
//MarketContract();
//Mint_With_Sig_TypeHash();
//Permit_TypeHash();
//GetApproved();
//IsApprovedForAll();
//IsApprovedForAll();
//BalanceOf();
//OwnerOF();
