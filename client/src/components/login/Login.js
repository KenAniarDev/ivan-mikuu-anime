import axios from "axios";
import { AnimatePresence } from "framer-motion";
import React, { useContext, useState } from "react";
import logo from "../../assets/images/logo.svg";
import AuthContext from "../../helper/AuthContext";
import changeFormHandler from "../../helper/changeFormHandler";
import toggle from "../../helper/toggle";
import { modalContext } from "../../hooks/useContext";
import ChangeForm from "../changeForm/ChangeForm";
import CloseButton from "../closebutton/CloseButton";
import {
   LoginBackDrop,
   LoginForm,
   LoginLogo,
   LoginModalBackgroundImage,
   LoginModalContent,
   LoginTitleWrapper,
   PageDescription,
   PageTitle,
} from "./Login.styled";
import LoginButton from "./loginButton/LoginButton";
import LoginInputs from "./loginInputs/LoginInputs";

const Login = () => {
   const {
      openLogin,
      setOpenRegister,
      setOpenLogin,
      username,
      setUsername,
      password,
      setPassword,
   } = useContext(modalContext);
   const { getLoggeIn } = useContext(AuthContext);

   const [checkError, setCheckError] = useState();

   const clearData = () => {
      setCheckError("");
      setUsername("");
      setPassword("");
   };

   const loginHandler = async (e) => {
      e.preventDefault();
      try {
         const loginData = {
            username,
            password,
            openLogin,
            checkError,
         };
         await axios.post("http://localhost:5000/auth/login", loginData, {
            withCredentials: true,
         });

         const response = await axios.post(
            "http://localhost:5000/auth/login",
            loginData,
            {
               withCredentials: true,
            }
         );

         setCheckError(response.data);
         getLoggeIn();
         setOpenLogin(response.data);
      } catch (error) {
         console.error(error);
      }
   };

   const closeHandler = () => {
      toggle(setOpenLogin);
      clearData();
   };

   const toRegisterHandler = () => {
      clearData();
      changeFormHandler(setOpenLogin, setOpenRegister);
   };

   return (
      <AnimatePresence>
         {openLogin && (
            <LoginBackDrop
               key="modal"
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
            >
               <LoginModalContent>
                  <CloseButton onClick={closeHandler} />
                  <LoginLogo src={logo} alt="Logo" />
                  <LoginModalBackgroundImage></LoginModalBackgroundImage>
                  <LoginForm onSubmit={loginHandler}>
                     <LoginTitleWrapper>
                        <PageTitle>Login.</PageTitle>
                        <PageDescription>
                           Login in with your data that you entered during your
                           registration.
                        </PageDescription>
                     </LoginTitleWrapper>
                     <LoginInputs
                        setUsername={setUsername}
                        setPassword={setPassword}
                        username={username}
                        password={password}
                        checkError={checkError}
                     />
                     <LoginButton />
                     <ChangeForm
                        details={"Don’t have an account?"}
                        text={"Sign up"}
                        onClick={toRegisterHandler}
                     />
                  </LoginForm>
               </LoginModalContent>
            </LoginBackDrop>
         )}
      </AnimatePresence>
   );
};

export default Login;
