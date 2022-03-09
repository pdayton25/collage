import React, { useState } from "react";
import Alchemy from '../api/Alchemy';



const AddressSearch = () => {
    
    const [searchAddress, setSearchAddr] = useState('');
    const [searchAddressFinal, setSearchAddrFinal] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        setSearchAddrFinal(searchAddress);
    };

    console.log(searchAddress);
    return (
        <div className="search-container">
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    value={searchAddress}
                    onChange= {(e) => setSearchAddr(e.target.value)}
                />
                <button>submit</button>
            </form>
            { searchAddressFinal.length > 0 && (
                <Alchemy 
                    searchAddress={searchAddressFinal}
                />
            )}
        </div>
    )
};

export default AddressSearch;