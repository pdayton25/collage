import React, { useState } from 'react';
import AddressSearch from './components/AddressSearch';
import Header from './components/Header';
import Display from './components/Display';
import "./App.css";


const App = () => {

    const [searchAddress, setSearchAddress] = useState('')
    const [dropdownSelection, setDropdownSelection] = useState('')
    console.log(searchAddress);

    return (
        <div className='body'>
            <Header />
            <AddressSearch
                passSearchAddress= {setSearchAddress}
                passDropdownSelection= {setDropdownSelection}
            />
            <Display />
        </div>
    );
};

export default App;