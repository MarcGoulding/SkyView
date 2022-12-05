import { Link } from "react-router-dom";
import "./Crypto.css";

function Crypto({asset, price}) {
  return (
    <div className="crypto">
      <h2>{asset}</h2>
      <div className="info">
        <p><span className="label">Price:</span>${parseFloat(price).toFixed(4)}</p>
        <Link to={`/cryptos/${asset}`}>more</Link>
      </div>
    </div>
  );
}

export default Crypto;