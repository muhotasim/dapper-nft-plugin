import contract from './contracts/DapperMonkey.json';
import { ethers, utils } from 'ethers';



export const mint = async (mintAmount) => {
    if(window.ethereum){
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contractAddress = "0xDeployed Contract Address";
        const nftContract = new ethers.Contract(contractAddress, contract, signer);

        let txnHash;

        if(window.ethereum.selectedAddress === "0xOwner Wallet Address".toLowerCase()){
            txnHash = await nftContract.mint(window.ethereum.selectedAddress, mintAmount)
        }else{
            txnHash = await nftContract.mint(window.ethereum.selectedAddress, mintAmount, { 
                gasLimit: "3000000",
                from:window.ethereum.selectedAddress.toString(),
                value:utils.parseEther(( mintAmount * 0.05).toString()) 
            })
        }

        return txnHash
    }
}




