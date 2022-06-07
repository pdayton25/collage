import React, { useState } from 'react';
import AddressSearch from './components/AddressSearch';
import Header from './components/Header';
import "./App.css";


const App = () => {

    const [nftData, setNftData] = useState([]);
    console.log(nftData);

    return (
        <div className='body'>
            <Header />
            <AddressSearch
                passingNftData = {setNftData}
            />
        </div>
    );
};

export default App;