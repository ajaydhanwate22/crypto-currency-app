// components/Home/Home.js
import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { CoinContext } from '../../Context/CoinContext';

export default function Home() {
  const [AlCoins, currency] = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);

  useEffect(() => {
    setDisplayCoin(AlCoins);
  }, [AlCoins]);

  return (
    <div className="home">
      <div className="hero">
        <h1>Largest <br /> Crypto Marketplace</h1>
        <p>Welcome to the world’s largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
        <form>
          <input type="text" placeholder="Search crypto..." />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p className="text-center">24H Change</p>
          <p className="text-right">Market Cap</p>
        </div>
        {displayCoin.slice(0, 10).map((item, index) => (
          <div className="table-layout" key={index}>
            <p>{item.market_cap_rank}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
