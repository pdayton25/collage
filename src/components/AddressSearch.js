import React, { useState } from "react";
import Alchemy from '../api/Alchemy';
import Dropdown from "./Dropdown";

const wallets = [
    "0x4716d4596621dfaf15c6f91c8d5f378b3e49b605","0x3f3095e5Fd52143F47fD4A89210b79127f62D07C","0xCa133474Fc6239FdFEb1f4bd5B3F75fAf3182e08", "0xA7Bf75908314A1020352C36d8B029d34721a83fd", "0xa1AC1D6731bE5bB94BB8319D63E3b2908ac550Eb", "0x3eD165F81394A2c7032Cb2Ba9ab7B376e5EF4180","0xf5C86499385a1E594523bEBaE3E0bbCf64bA8936", "0x0E8E616083529980e13F66d3Bb3e859E2451d160"
]
console.log(wallets.length)

const AddressSearch = () => {
    
    const [searchAddress, setSearchAddr] = useState('');
    const [searchAddressFinal, setSearchAddrFinal] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        setSearchAddrFinal(searchAddress);
    };

    console.log(searchAddress);
    console.log(searchAddressFinal);

const randomAddress = (e) => {
    let randomAddress = wallets[Math.floor(Math.random()*wallets.length)]
    setSearchAddrFinal(randomAddress)
    setSearchAddr(randomAddress)
}

    return (
        <div className="search-container">
            <form onSubmit={onSubmit}>
                <Dropdown />
                <input
                    type="text"
                    value={searchAddress}
                    onChange= {(e) => setSearchAddr(e.target.value)}
                />
                <button>Get NFTs!</button>
            </form>
            <button
                onClick = {randomAddress}
            >Random Wallet</button>
            { searchAddressFinal.length > 0 && (
                <Alchemy 
                    searchAddress={searchAddressFinal}
                />
            )}
            
        </div>
    )
};

export default AddressSearch;