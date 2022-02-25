import React from "react";
import Button from "../../button/Button";
import { Container } from "./LoginButton.styled";

const LoginButton = () => {
   return (
      <Container>
         <Button type="submit" text="Login" width="100%" size="1.8rem" />
      </Container>
   );
};

export default LoginButton;
