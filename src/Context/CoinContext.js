import { createElement, useEffect, useState } from "react";

export const CoinContext =createElement();

const CoinContextProvider=(props)=>{

    const [AllCoin,setAllCoin]=useState([])
    const [currency,setcurrency]=useState({
        name:"usd",
        symbol:"$"
    })

    const fetchAllCoins= async ()=>{
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              'x-cg-demo-api-key': 'CG-JqKHyN2ccYAmf9sWs9nc5x8v	'
            }
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response => response.json())
            .then(response => setAllCoin(response))
            .catch(err => console.error(err));
    }

    useEffect(()=>{
        fetchAllCoins();
    },[currency])

    const cotextValue={
            AllCoin,currency,setcurrency
    }
    return (
        <CoinContext.Provider value={cotextValue}>
            {props.children}
         </CoinContext.Provider>
    )
}

export default CoinContextProvider;
