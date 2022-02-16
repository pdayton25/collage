import React, { useState } from "react";

const AddressSearch = () => {
    
    const [searchAddr, setSearchAddr] = useState('');

    console.log(searchAddr);
    return (
        <div className="search-container">
            <input
                type="text"
                value= {searchAddr}
                onChange= {(e) => setSearchAddr(e.target.value)}
            />
        </div>
    )
};

export default AddressSearch;