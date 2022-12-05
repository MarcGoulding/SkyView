import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";


function Profile() {

  const navigation = useNavigate();
  
  const user = useContext(UserContext);
  
  // Check user has logged in
  if (!localStorage.getItem("userToken")) return <Navigate to="/login" />;
  
  return (
    <>
    <h1>{user.name}'s Profile</h1>
    <p><span className="label">Date Registered: </span>{user.registered}</p>
    </>
  );
}

export default Profile;