
import React, { useState, createContext, useEffect } from "react";
import { ethers } from 'ethers';
export const LoginContext = createContext();
export const LoginContextProvider = (props) => {

    const [accountss, setAccounts] = useState(null);

    const web3Handler = async() => {
        console.log(window.ethereum,"1");
        if(window.ethereum){
         await window.ethereum.enable();
        const accountses = await window.ethereum.request({ method: 'eth_requestAccounts'});
           console.log(window.ethereum,"2");
        console.log(window.ethereum,"2");
        localStorage.setItem("userAddress", accountses[0]);
        setAccounts(accountses[0])
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          console.log(window.ethereum,"3");
            const signer = provider.getSigner()
         
        }
        console.log(accountss, 'accounts');
      }
        

   

   



    return (
        <LoginContext.Provider
            value={{
                accountss,
                web3Handler
            }}
        >
            {props.children}
        </LoginContext.Provider>
    );
}