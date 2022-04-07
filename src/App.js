import React from 'react';
import AddressSearch from './components/AddressSearch';
import Header from './components/Header';
import "./App.css";


const App = () => {

    return (
        <div className='body'>
            <Header />
            <AddressSearch />
        </div>
    );
};

export default App;