import React, { useEffect, useState } from 'react';
import axios from 'axios';

const {
  REACT_APP_API_KEY
} = process.env;

const Alchemy = ({searchAddress}) => {

  const [nftData, setNftData] = useState([]);
  console.log(nftData);

  useEffect(() => {
    const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${REACT_APP_API_KEY}/getNFTs/`;
    const searchAddr = searchAddress; //replace with

    var config = {
      method: 'get',
      url: `${baseURL}?owner=${searchAddr}`
    };

    axios(config)
      .then(response => {
        setNftData(response.data.ownedNfts)
      })
      //console.log(JSON.stringify(response.data, null,2)))
      .catch(error => console.log(error));
  }, [searchAddress]);


  const nftDisplay = (nftData) => {
    return (
      <div className='card'>
        {
          nftData.map(({title, metadata}) => (
            <div className='card-content'>
              <div className='nft card'>{title}</div>
              <img src={`${metadata.image_url}`} alt={title}/>
            </div>
          ))
        }
      </div>
    )
  };


  return (
    <div>{nftDisplay}</div>
  )
};

export default Alchemy;