import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Alchemy.css';

const {
  REACT_APP_API_KEY
} = process.env;

const Alchemy = ({searchAddress}) => {

  const [nftData, setNftData] = useState([]);
  console.log(nftData);

  //API REQUEST
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
      .catch(error => console.log(error));
  }, [searchAddress]);

  //HANDLES IMAGE URLS
  const parseImgUrl = ({metadata, title, id}) => {
    let url = metadata.image || metadata.image_url;
    if (url.includes('ipfs')) {
      let modifiedUrl = url.replace('ipfs://', 'https://ipfs.io/ipfs/');
      return (
        <img src={modifiedUrl} alt={`${id.tokenMetadata.tokenType} : ${title}`} className="image"/>
      );
    }
    return <img src={url} alt={`${id.tokenMetadata.tokenType} : ${title}`} className="image"/>;
  };

  return (
    <div className='cards'>
        {
          nftData.map((data) => (
            <div className='card-content' key={data.id.tokenId}>
              <div className='nft card'>{data.title}</div>
              {parseImgUrl(data)}
            </div>
          ))
        }
      </div>
  )
};

export default Alchemy;


/* Test Addresses
0x4716d4596621dfaf15c6f91c8d5f378b3e49b605
0x3f3095e5Fd52143F47fD4A89210b79127f62D07C

  Various image metadata labels:
    -image
    -image_url
 */
