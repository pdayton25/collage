import React, { useEffect, useState } from "react";
import theblockchainapi from 'theblockchainapi';

const { API_KEY_ID, API_SECRET_KEY } = process.env

const Solana = ({searchAddress}) => {
    let defaultClient = theblockchainapi.ApiClient.instance;

// Get a free API Key Pair here: https://dashboard.blockchainapi.com/api-keys

    let APIKeyID = defaultClient.authentications[API_KEY_ID];
    APIKeyID.apiKey = API_KEY_ID;

    let APISecretKey = defaultClient.authentications[API_SECRET_KEY];
    APISecretKey.apiKey = API_SECRET_KEY;

    let apiInstance = new theblockchainapi.SolanaWalletApi();
    let network = 'mainnet-beta'; // String | The network ID (devnet, mainnet-beta)
    let publicKey = searchAddress; // String | The public key of the account whose list of owned NFTs you want to get

    const result = apiInstance.solanaGetNFTsBelongingToWallet(network, publicKey).then((data) => {
    console.log('API called successfully.');
    return data;
    }, (error) => {
    console.error(error);
    return error;
    });

    console.log("NFTs: ", result);
}
export default Solana;