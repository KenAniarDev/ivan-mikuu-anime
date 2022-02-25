import React from "react";
import Button from "../../button/Button";
import { Container } from "./RegisterButton.styled";

const RegisterButton = () => {
   return (
      <Container>
         <Button text="Register" width="100%" size="1.8rem" type="submit" />
      </Container>
   );
};

export default RegisterButton;
