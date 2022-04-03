import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: token => {},
  logout: () => {}
});

const calculateRemainingTime = expirationTime => {
  const currentTime = new Date().getTime();
  const adjustedExpirationTime = new Date(expirationTime).getTime();

  const remainingTime = adjustedExpirationTime - currentTime;

  return remainingTime;
};

export const AuthContextProvider = props => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = token ? true : false;

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    localStorage.removeItem("userName");
  };

  const loginHandler = (token, expirationTime, userID, userName) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("userID", userID);
    localStorage.setItem("userName", userName);

    const remainingTime = calculateRemainingTime(expirationTime);

    setTimeout(logoutHandler, remainingTime);
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
