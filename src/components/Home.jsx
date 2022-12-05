import { Link } from "react-router-dom";

function Home() {
  return (
    <>
    <h1>Welcome to CRIPTO</h1>
    <p><Link to="/cryptos">Review Cryptocurrencies</Link></p>
    <Link to="/about">Who are we?</Link>
    
    </>
  );
}

export default Home;