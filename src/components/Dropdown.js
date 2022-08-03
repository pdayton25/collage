import React, { useState } from "react";

const Dropdown = (props) => {

    const [selected, setSelected] = useState('ethereum');
    props.passDropdownSelection(selected);

    return (
        <select className="dropdown search-bar" onChange={(e) => {setSelected(e.target.value)}} >
            <option  className="option" value="ethereum" >Ethereum</option>
            <option className="option coming-soon" value="solana">Solana</option>
            <option className="option coming-soon" value="polygon">Polygon (Coming Soon)</option>
            <option className="option coming-soon" value="near">NEAR (Coming Soon)</option>
        </select>
    )
}
export default Dropdown;