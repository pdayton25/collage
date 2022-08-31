import React, { useState } from "react";

const Dropdown = (props) => {

    const [selected, setSelected] = useState('ethereum');
    props.passDropdownSelection(selected);

    return (
        <select className="dropdown search-bar" onChange={(e) => {setSelected(e.target.value)}} >
            <option  className="option" value="ethereum" >Ethereum</option>
            <option className="option" value="polygon">Polygon</option>
            <option className="option coming-soon" value="solana" disabled='disabled'>Solana (Coming Soon)</option>
            <option className="option coming-soon" value="near" disabled='disabled'>NEAR (Coming Soon)</option>
        </select>
    )
}
export default Dropdown;