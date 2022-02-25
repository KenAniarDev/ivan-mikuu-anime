import React from "react";
import {
   AccountDescription,
   AccountDetailsContainer,
   //    AccountErrorMessage,
   AccountInput,
   InputsContainer,
   SecondaryTitle,
} from "./UpdateInputs.styled";

const UpdateInputs = ({
   setDisplayName,
   setUsername,
   setPassword,
   displayName,
   username,
   password,
}) => {
   return (
      <AccountDetailsContainer>
         <SecondaryTitle>Account Information</SecondaryTitle>
         <InputsContainer>
            <AccountDescription htmlFor="displayName">
               Display Name
            </AccountDescription>
            <AccountInput
               type="text"
               id="displayName"
               placeholder="Enter your display name"
               onChange={(e) => setDisplayName(e.target.value)}
               value={displayName}
            />
            {/* <AccountErrorMessage>Invalid Username</AccountErrorMessage> */}
         </InputsContainer>

         <InputsContainer>
            <AccountDescription htmlFor="username">Username</AccountDescription>
            <AccountInput
               type="text"
               id="username"
               placeholder="Enter your username"
               onChange={(e) => setUsername(e.target.value)}
               value={username}
            />
            {/* <AccountErrorMessage>Invalid Username</AccountErrorMessage> */}
         </InputsContainer>

         <InputsContainer>
            <AccountDescription htmlFor="password">Password</AccountDescription>
            <AccountInput
               type="password"
               id="password"
               placeholder="Enter your password"
               onChange={(e) => setPassword(e.target.value)}
               value={password}
            />
            {/* <AccountErrorMessage>Invalid Username</AccountErrorMessage> */}
         </InputsContainer>
      </AccountDetailsContainer>
   );
};

export default UpdateInputs;
