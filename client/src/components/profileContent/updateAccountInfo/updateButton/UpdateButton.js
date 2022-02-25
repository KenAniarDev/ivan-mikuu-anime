import React from "react";
import Button from "../../../button/Button";
import { Container } from "./UpdateButton.styled";

const UpdateButton = ({ setIsVisible }) => {
   return (
      <Container>
         <Button text="Save" type="Submit" size="1.8rem" />
         <Button
            backgroundcolor="#ff4848"
            text="Cancel"
            type="Submit"
            size="1.8rem"
            tpye="button"
         />
      </Container>
   );
};

export default UpdateButton;
