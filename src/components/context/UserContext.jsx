import {createContext, useState, useEffect} from "react";

const UserContext = createContext();


function UserContextProvider({children}) {

  const [user, setUser] = useState({});
  
  function updateUser() {
    setUser({
      name: "Marc Goulding",
      registered: "5/12/2022"
    });
  }
  
  useEffect(updateUser, []);
  
  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}


export {UserContext, UserContextProvider};