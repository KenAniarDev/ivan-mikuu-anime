import axios from "axios";
import { AnimatePresence } from "framer-motion";
import React, { useContext, useState } from "react";
import logo from "../../assets/images/logo.svg";
import AuthContext from "../../helper/AuthContext";
import changeFormHandler from "../../helper/changeFormHandler";
import toggle from "../../helper/toggle";
import { modalContext, userContext } from "../../hooks/useContext";
import ChangeForm from "../changeForm/ChangeForm";
import CloseButton from "../closebutton/CloseButton";
import {
   PageDescription,
   PageTitle,
   RegisterBackDrop,
   RegisterForm,
   RegisterLogo,
   RegisterModalBackgroundImage,
   RegisterModalContent,
   RegisterTitleWrapper,
} from "./Register.styled";
import RegisterButton from "./registerButton/RegisterButton";
import RegisterInputs from "./registerInputs/RegisterInputs";

const Register = () => {
   const { openRegister, setOpenRegister, setOpenLogin } =
      useContext(modalContext);
   const { getLoggeIn } = useContext(AuthContext);

   const defaultImages = [
      "temp.png",
      "1.jpg",
      "2.jpg",
      "3.jpg",
      "4.jpg",
      "5.jpg",
      "6.jpg",
      "7.jpg",
      "8.jpg",
      "9.jpg",
      "10.jpg",
      "11.jpg",
      "12.jpg",
      "13.jpg",
      "14.jpg",
      "15.jpg",
   ];

   const randomImage = defaultImages[Math.floor(Math.random() * 16 + 1)];

   const [displayName, setDisplayName] = useState("");
   const [username, setUsername] = useState("");
   const [password, setPassword] = useState("");
   const [profilePicture, setProfilePicture] = useState(randomImage);
   const [checkError, setCheckError] = useState("");

   const clearData = () => {
      setDisplayName("");
      setCheckError("");
      setUsername("");
      setPassword("");
   };

   const registerHandler = async (e) => {
      e.preventDefault();
      setProfilePicture(randomImage);
      try {
         const registerData = {
            displayName,
            username,
            password,
            profilePicture,
         };
         await axios.post("http://localhost:5000/auth/", registerData);
         getLoggeIn();

         changeFormHandler(setOpenRegister, setOpenLogin);
         clearData();
      } catch (error) {
         console.error(error);
      }
   };

   const closeHandler = () => {
      toggle(setOpenRegister);
      clearData();
   };

   const toLoginHandler = () => {
      clearData();
      changeFormHandler(setOpenRegister, setOpenLogin);
   };

   return (
      <AnimatePresence>
         {openRegister && (
            <RegisterBackDrop
               key="modal"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
            >
               <RegisterModalContent>
                  <CloseButton onClick={closeHandler} />
                  <RegisterLogo src={logo} alt="Logo" />
                  <RegisterModalBackgroundImage></RegisterModalBackgroundImage>
                  <RegisterForm onSubmit={registerHandler}>
                     <RegisterTitleWrapper>
                        <PageTitle>Register.</PageTitle>
                        <PageDescription>
                           Give us some of your information to create your
                           account.
                        </PageDescription>
                     </RegisterTitleWrapper>
                     <userContext.Provider
                        value={{
                           setDisplayName,
                           setUsername,
                           setPassword,
                           displayName,
                           username,
                           password,
                           setOpenRegister,
                           setOpenLogin,
                           checkError,
                           setCheckError,
                        }}
                     >
                        <RegisterInputs />
                        <RegisterButton />
                     </userContext.Provider>
                     <ChangeForm
                        details={"Already have an account?"}
                        text={"Log in"}
                        onClick={toLoginHandler}
                     />
                  </RegisterForm>
               </RegisterModalContent>
            </RegisterBackDrop>
         )}
      </AnimatePresence>
   );
};

export default Register;
