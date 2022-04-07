import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Alchemy.css';
import fallback from '../images/fallback.png';

const { REACT_APP_API_KEY } = process.env;

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

/*   
    const handleOnError = (e) => {
      e.target.src = {fallback}
    }
*/

    if (url.includes('ipfs')) {
      let modifiedUrl = url.replace('ipfs://', 'https://ipfs.io/ipfs/');
      return (
          <img 
            src={modifiedUrl} 
            onError={event => {
              event.target.src= fallback
              event.onerror=null
            }} 
            alt={`${id.tokenMetadata.tokenType} : ${title}`}
            className="image"/>
      );
    }
    return <img src={url} 
              onError={event => {
              event.target.src= fallback
              event.onerror=null
              }} 
              alt={`${id.tokenMetadata.tokenType} : ${title}`} 
              className="image"
            />;
  };

  //turns hexadecimal into decimal for opensea url
  const parseTokenId = ({id}) => {
    return parseInt(id.tokenId,16);
  }

  return (
    <div className='cards'>
      <div className='wallet-address'>{searchAddress}</div>
        {
          nftData.map((data) => (
            <div className='card-content' key={data.id.tokenId}>
              <div className='nft card'>{data.title}</div>
              <a className="opensea-link" href={`https://opensea.io/assets/${data.contract.address}/${parseTokenId(data)}`} target="_blank" rel="noreferrer">View on OpenSea</a>
              {parseImgUrl(data)}
            </div>
          ))
        }
      </div>
  )
};

export default Alchemy;

/*
  Various image metadata labels:
    -image
    -image_url
 */
