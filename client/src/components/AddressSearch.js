import React, { useState } from "react";
import AlchemyAPI from '../api/Alchemy';
import Dropdown from "./Dropdown";
import "./AddressSearch.css";

const wallets = [
    "0x4716d4596621dfaf15c6f91c8d5f378b3e49b605", "0x3f3095e5Fd52143F47fD4A89210b79127f62D07C", "0xA7Bf75908314A1020352C36d8B029d34721a83fd", "0xa1AC1D6731bE5bB94BB8319D63E3b2908ac550Eb", "0x3eD165F81394A2c7032Cb2Ba9ab7B376e5EF4180","0xf5C86499385a1E594523bEBaE3E0bbCf64bA8936", "0x0E8E616083529980e13F66d3Bb3e859E2451d160", "0x16a16F056dBa6Eb85A989B9d6B6E99Bf3BA480FD", "0x4aB16A42C6d06AED8bF46911267c40aFc37e2270", "bossbeauty.eth", "0xB3aA9923489Bc2BFEc323Bf05346AcD4afbc92A0", "3448.eth", 'deepak.eth', 'moonsafari.eth', 'davidhasselhoff.eth', 'kinch.eth','0x837236587C1E4F8073b1f40893FAe81f17595aAE'
]

const AddressSearch = ({passingNftData}) => {
    /* States & Passing Props */
    const [searchAddress, setSearchAddr] = useState('');
    const [searchAddressFinal, setSearchAddrFinal] = useState('');
    const [dropdownSelection, setDropdownSelection] = useState('');
    const [nftData, setNftData] = useState('');
    
    /**** ROUTE API CALLS BASED ON DROPDOWN SELECTION */

    const onSubmit = (e) => {
        e.preventDefault();
        setSearchAddrFinal(searchAddress);
    };

    const randomAddress = (e) => {
        e.preventDefault();
        let randomAddress = wallets[Math.floor(Math.random()*wallets.length)]
        setSearchAddrFinal(randomAddress)
        setSearchAddr(randomAddress)
    }

    return (
        <div className="search-container">
            <div className="search-wrapper">
                <form onSubmit={onSubmit} className="form">
                    <Dropdown 
                        passDropdownSelection={setDropdownSelection}
                    />
                    <input
                        type="text"
                        className="address-field search-bar"
                        placeholder="enter wallet address (ENS supported)"
                        value={searchAddress}
                        onChange= {(e) => setSearchAddr(e.target.value)}
                    />
                    <button className="submit-btn search-bar">Get NFTs!</button>
                </form>
                <div className="random-address-wrapper">
                    <div className="random-wallet-text">Dont have a wallet address? Click here:</div>
                    <button
                        onClick= {randomAddress}
                        className="random-address"
                    >Random wallet</button>
                </div>
            </div>
            <div className="nft-cards">
                { searchAddressFinal.length > 0 && (
                    <AlchemyAPI 
                        searchAddress={searchAddressFinal}
                        passNftData = {setNftData}
                    />
                )}
            </div>
        </div>
    )
};

export default AddressSearch;