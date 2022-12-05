import axios from "axios";
import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./login.css";


function Login() {

  const navigation = useNavigate();
  
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  
  function updateEmail(e) {
    setUser({
      ...user,
      email: e.target.value
    });
  }

  function updatePassword(e) {
    setUser({
      ...user,
      password: e.target.value
    });
  }

  function submitForm(e) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    axios.post(`https://reqres.in/api/login`, user)
    .then(data => {
      setLoading(false);
      localStorage.setItem("userToken", data.data.token);
      navigation('/');
    }).catch(e => {
      setLoading(false);
      setError(e);
      console.error("invalid login");
    });
  }

  // Check first if user is already logged in:
  if (localStorage.getItem("userToken")) return <Navigate to="/" />;
  
  return (<>
    <div className="login-container">
      <form onSubmit={submitForm}>
        <div className="field">
          <label htmlFor="email">email</label>
          <input required type="email" name="email" onChange={updateEmail} />
        </div>
        <div className="field">
          <label htmlFor="password">password</label>
          <input required type="password" name="password" onChange={updatePassword} />
        </div>
        <div className="submit">
          <input
            type="submit"
            value={loading? "loading..." : "Log in"}/>
        </div>
      </form>
      {
      error && <span className="error">Invalid login</span>
      }
    </div>
    <span><Link to="/">Return home</Link></span>
  </>);
}

export default Login;