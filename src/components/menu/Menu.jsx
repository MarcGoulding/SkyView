import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Menu.css";

function Menu() {

  const navigation = useNavigate();
  
  function logout(e) {
    localStorage.removeItem("userToken");
    navigation("/");
  }
  
  return (
    <nav className="navbar">
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/cryptos">Assets</NavLink></li>
        <li><NavLink to="/profile">Profile</NavLink></li>
        {
          localStorage.getItem("userToken")?
          (<li><a onClick={logout}>log out</a></li>)
          :(<li><NavLink to="/login">log in</NavLink></li>)
        }
      </ul>
    </nav>
  );
}


export default Menu;