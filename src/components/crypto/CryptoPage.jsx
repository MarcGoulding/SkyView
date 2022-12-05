import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CryptoPage() {

  const params = useParams();

  const [data, setData] = useState();
  
  const apiURL = import.meta.env.VITE_API_URL;
  
  useEffect(() => {
    const url = `${apiURL}/api/v3/klines`;
    axios.get(url, { params: { symbol: params.asset, interval: '1d' } })
    .then( (data) => {
      setData(data.data);
    }).catch((e) => {
      console.error(e);
      console.error(`Invalid API request: ${url}`);
    }
    );
  }, []);
  
  if (!data) return <p>Loading...</p>;

  return (
    <>
    <h1>{params.asset} Breakdown</h1>
    <p><span className="label">Price: </span>{data[data.length-1][4]}</p>
    </>
  );
}

export default CryptoPage;
