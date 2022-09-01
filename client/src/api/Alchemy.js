import React, { useEffect, useState } from 'react';
import './Alchemy.css';
import {Network, Alchemy} from 'alchemy-sdk';
import Skeleton from '../components/Skeleton';
import Masonry from 'react-masonry-css'
import Gallery from '../components/Gallery';

const { REACT_APP_API_KEY } = process.env;

const AlchemyAPI = ({searchAddress, passNftData}) => {
  
  const [nftData, setNftData] = useState([]);
  const [walletData, setWalletData] = useState([]);
  const [isBusy, setIsBusy] = useState(true);
  console.log(walletData);

  //masonry grid breakpoints
  const breakpoints = {
    default: 3,
    1100: 2,
    750: 1,
  }

  //API REQUEST
  useEffect(() => {
      setIsBusy(true);
      const settings = {
        apiKey: REACT_APP_API_KEY, 
        network: Network.ETH_MAINNET,
        
      };
      const alchemy = new Alchemy(settings);

      alchemy.nft.getNftsForOwner(searchAddress).then(res => {
        setNftData(res.ownedNfts);
        setTimeout(() => {
          setIsBusy(false);
        },5000)
        
      });


  }, [searchAddress]);

  //Process NFT Data
  useEffect(() => {
    const filteredNfts = nftData.filter(hasUrl)
    
    function hasUrl(data) {
      let url = data.rawMetadata.image || data.rawMetadata.image_url
      if ( url !== undefined) {
        return data;
      }
    }
    
    //creates wallet address structure
    const walletAddressData = {
      address: searchAddress,
      name: searchAddress,
      bio: null,
      profileImgUrl: null,
      count: filteredNfts.length,
      nfts: filteredNfts,
    };
    setWalletData(walletAddressData);

  }, [nftData, searchAddress]);







  //SPLIT OUT INTO OWN COMPONENT

  //finds unique contract addresses
  //refactor to work from walletData
  useEffect(() => {
    const uniqueContracts = [];
    if(!isBusy) {
      walletData.nfts.map(({contract}) => {
        if(!uniqueContracts.includes(contract.address)) {
          return uniqueContracts.push(contract.address);
        } else { return null } 
      });
    } else {
      return;
    }
  },[walletData, isBusy])


function renderChoice(isBusy, walletData) {
  if(isBusy || !walletData) {
    return (
      <Skeleton />
    )
  } else {
    return (
        <Gallery  walletData={walletData}/>
    )
  }
}

  return (
    <div className='cards'>
      <div className='wallet-address'>{searchAddress}</div>
        {renderChoice(isBusy, walletData)}
      </div>
  )
};

export default AlchemyAPI;