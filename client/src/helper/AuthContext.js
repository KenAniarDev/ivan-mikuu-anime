import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import Temp from "../assets/images/temp.png";

const AuthContext = createContext({});

const AuthContextProvider = (props) => {
   const [isLogIn, setIsLogIn] = useState();
   const [userDisplayName, setUserDisplayName] = useState("ゲスト");
   const [userID, setUserID] = useState("");
   const [userUserName, setUserUserName] = useState("");
   const [userPassword, setUserPassword] = useState("");
   const [userProfilePhoto, setUserProfilePhoto] = useState(Temp);

   const getLoggeIn = async () => {
      const response = await axios.get("http://localhost:5000/auth/loggeIn", {
         withCredentials: true,
      });
      const data = response.data;
      setIsLogIn(data[0]);
      setUserDisplayName(data[1] ? data[1].displayName : "Guest");
      setUserID(data[1] ? data[1]._id : "");
      setUserUserName(data[1] ? data[1].username : "");
      setUserPassword(data[1] ? data[1].passwordHash : "");
      setUserProfilePhoto(
         data[1]
            ? `http://localhost:5000/images/${data[1].profilePicture}`
            : Temp
      );
   };

   useEffect(() => {
      getLoggeIn();
   }, []);

   return (
      <AuthContext.Provider
         value={{
            isLogIn,
            getLoggeIn,
            userDisplayName,
            userID,
            userUserName,
            userPassword,
            userProfilePhoto,
            setUserProfilePhoto,
            setUserDisplayName,
         }}
      >
         {props.children}
      </AuthContext.Provider>
   );
};

export default AuthContext;
export { AuthContextProvider };
