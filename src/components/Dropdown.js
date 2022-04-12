import React from "react";

const Dropdown = () => {
    return (
        <select className="dropdown search-bar">
            <option className="option">Ethereum</option>
            <option className="option coming-soon">Polygon (Coming Soon)</option>
            <option className="option coming-soon">Solana (Coming Soon)</option>
            <option className="option coming-soon">NEAR (Coming Soon)</option>
        </select>
    )
}
export default Dropdown;