import React, { useEffect, useState } from "react";
import theblockchainapi from 'theblockchainapi';

const { API_KEY_ID, API_SECRET_KEY } = process.env

const Solana = ({searchAddress}) => {
    let defaultClient = theblockchainapi.ApiClient.instance;

    let APIKeyID = defaultClient.authentications[API_KEY_ID];
    APIKeyID.apiKey = API_KEY_ID;

    let APISecretKey = defaultClient.authentications[API_SECRET_KEY];
    APISecretKey.apiKey = API_SECRET_KEY;

    let apiInstance = new theblockchainapi.SolanaWalletApi();
    let network = 'mainnet-beta'; // String network ID (devnet, mainnet-beta)
    let publicKey = searchAddress; // String | The public key for account you want to get NFTs

    const result = apiInstance.solanaGetNFTsBelongingToWallet(network, publicKey).then((data) => {
    console.log('Successful API Call');
    return data;
    }, (error) => {
    console.error(error);
    return error;
    });
    
    console.log("NFTs: ", result);

}
export default Solana;