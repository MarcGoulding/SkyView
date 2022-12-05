import { useEffect, useState } from 'react';
import './CryptoGrid.css';
import axios from 'axios';
import Crypto from "./Crypto";


function CryptoGrid() {

  const [cryptos, setCryptos] = useState([]);

  const apiURL = import.meta.env.VITE_API_URL;

  function fetchCryptoData() {
    axios.get(`${apiURL}/api/v3/ticker/price`).then
    (
     (data) => {
      setCryptos(data.data);
     }
    ).catch
    (
      () => {
        console.error("API request failed.");
      }
    );
  }

  useEffect(
    fetchCryptoData,
    []
  );

  if (!cryptos) return <span>Loading...</span>;

  return (
    <div className="app-container">
      <h1>Cryptocurrency list:</h1>
      <div className="crypto-container">
        {
          cryptos.map(({symbol, price}, id) => {
            return <Crypto key={id} asset={symbol} price={price} />
          })
        }
      </div>
    </div>
  );
}

export default CryptoGrid;


