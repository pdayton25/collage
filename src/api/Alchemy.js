import axios from 'axios';

const apiKey = 'VSKddYPa4heE_9WA0GDN2-c3e3-N_m0g';
const baseURL = `https://eth-mainnet.g.alchemy.com/v2/${apiKey}/getNFTs/`;
//Link up search with address
const searchAddr = '0xfAE46f94Ee7B2Acb497CEcAFf6Cff17F621c693D';


//Take response, map through NFTs retry Alchemy for title & image url

var config = {
    method: 'get',
    url: `${baseURL}?owner=${searchAddr}`
};

axios(config)
    .then(response => console.log(JSON.stringify(response.data, null,2)))
    .catch(error => console.log(error));

