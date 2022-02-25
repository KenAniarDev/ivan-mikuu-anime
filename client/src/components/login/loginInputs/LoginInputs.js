import React from "react";
import {
   AccountErrorMessage,
   InputsContainer,
   LoginInputsContainer,
   LoginLabel,
   LoginTextbox,
} from "./LoginInputs.styled";

const LoginInputs = ({
   setPassword,
   setUsername,
   username,
   password,
   checkError,
}) => {
   return (
      <LoginInputsContainer>
         <InputsContainer>
            <LoginLabel htmlFor="username">Username</LoginLabel>
            <LoginTextbox
               type="text"
               name="username"
               placeholder="Enter your username"
               onChange={(e) => setUsername(e.target.value)}
               value={username || ""}
               required
            />
            {checkError !== "" && (
               <AccountErrorMessage>{checkError}</AccountErrorMessage>
            )}
         </InputsContainer>

         <InputsContainer>
            <LoginLabel htmlFor="password">Password</LoginLabel>
            <LoginTextbox
               type="password"
               id="password"
               placeholder="Enter your password"
               onChange={(e) => setPassword(e.target.value)}
               value={password || ""}
               required
            />
            {checkError !== "" && (
               <AccountErrorMessage>{checkError}</AccountErrorMessage>
            )}
         </InputsContainer>
      </LoginInputsContainer>
   );
};

export default LoginInputs;
