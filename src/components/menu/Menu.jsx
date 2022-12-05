import { NavLink } from "react-router-dom";
import "./Menu.css";

function Menu() {
  return (

    <nav className="navbar">
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/cryptos">Assets</NavLink></li>
      </ul>
    </nav>
  );
}


export default Menu;