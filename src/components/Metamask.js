import React,{useState} from "react";
import './Metamask.css';



const Metamask = () => {

    const [errorMessage, setErrorMessage] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [connButtonText, setConnButtonText] = useState('Connect Wallet');

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
            <button className="enableEthereumButton" onClick={connectWalletHandler}>
                <img  id='metamask-logo' src={require('../images/Metamask-icon.png')} alt='metamask' />
                {connButtonText}
            </button>
            {errorMessage}
        </div>
    )
}
export default Metamask;
