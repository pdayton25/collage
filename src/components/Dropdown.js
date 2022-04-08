import React from "react";

const Dropdown = () => {
    return (
        <select className="dropdown search-bar">
            <option className="option">Ethereum</option>
            <option className="option coming-soon">Solana</option>
            <option className="option coming-soon">Near</option>
        </select>
    )
}
export default Dropdown;