import React, { useState } from 'react';
import AddressSearch from './components/AddressSearch';
import Header from './components/Header';
import "./App.css";
import Metamask from './components/Metamask';


const App = () => {

    const [nftData, setNftData] = useState([]);
    const [address, setAddress] = useState('');

    console.log(nftData);

    return (
        <div className='body'>
            <Metamask />
            <Header />
            <AddressSearch
                passingNftData = {setNftData}
                address = {address}
            />

            <div>
                <p>Test</p>
                
            </div>
        </div>
    );
};

export default App;