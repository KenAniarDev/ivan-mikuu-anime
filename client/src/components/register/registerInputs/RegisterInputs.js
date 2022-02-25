import React, { useContext } from "react";
import { userContext } from "../../../hooks/useContext";
import {
   AccountErrorMessage,
   InputsContainer,
   RegisterInputsContainer,
   RegisterLabel,
   RegisterTextbox,
} from "./RegisterInputs.styled";

const RegisterInputs = () => {
   const {
      setDisplayName,
      setUsername,
      setPassword,
      displayName,
      username,
      password,
      checkError,
   } = useContext(userContext);

   return (
      <RegisterInputsContainer>
         <InputsContainer>
            <RegisterLabel htmlFor="displayName">Display Name</RegisterLabel>
            <RegisterTextbox
               type="text"
               id="displayName"
               placeholder="Enter your display name"
               onChange={(e) => setDisplayName(e.target.value)}
               value={displayName}
               required
            />
            {checkError !== "" && (
               <AccountErrorMessage>{checkError}</AccountErrorMessage>
            )}
         </InputsContainer>

         <InputsContainer>
            <RegisterLabel htmlFor="username">Username</RegisterLabel>
            <RegisterTextbox
               type="text"
               name="username"
               placeholder="Enter your username"
               onChange={(e) => setUsername(e.target.value)}
               value={username}
               required
            />
            {checkError !== "" && (
               <AccountErrorMessage>{checkError}</AccountErrorMessage>
            )}
         </InputsContainer>

         <InputsContainer>
            <RegisterLabel htmlFor="password">Password</RegisterLabel>
            <RegisterTextbox
               type="password"
               id="password"
               placeholder="Enter your password"
               onChange={(e) => setPassword(e.target.value)}
               value={password}
               required
            />
            {checkError !== "" && (
               <AccountErrorMessage>{checkError}</AccountErrorMessage>
            )}
         </InputsContainer>
      </RegisterInputsContainer>
   );
};

export default RegisterInputs;
