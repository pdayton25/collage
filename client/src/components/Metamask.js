import React,{useEffect, useState} from "react";
import './Metamask.css';



const Metamask = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');

    useEffect(() => {
        if (defaultAccount !== null) {
            setIsLoggedIn(true);
        }
        
    },[defaultAccount, isLoggedIn])

    const GetMyNFT = ({isLoggedIn}) => {
        if (isLoggedIn === true) {
            return <button className="showNFTs">Show my NFTs</button>
        } else { return <></> }
    }

    const connectWalletHandler = () => {
        if (window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'})
            .then( result =>{
                console.log(result);
                accountChangedHandler(result[0]);
                let condensedAddr = result[0].split('').slice(0,4).toString().replaceAll(',','') + '...';
                console.log(condensedAddr);
                setConnButtonText(condensedAddr);
            })
        } else {
            setErrorMessage('Install Metamask');
        }
    }
    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount.toString());
    }
    const chainChangedHandler = () => {
        window.location.reload();
    }

    window.ethereum.on('accountsChanged', accountChangedHandler);
    window.ethereum.on('chainChanged', chainChangedHandler);


    return (
        <div className="wallet">
            <GetMyNFT isLoggedIn={isLoggedIn}/>
            <button className="enableEthereumButton" onClick={connectWalletHandler}>
                <img  id='metamask-logo' src={require('../images/Metamask-icon.png')} alt='metamask' />
                {connButtonText}
            </button>
            {errorMessage}
        </div>
    )
}
export default Metamask;
