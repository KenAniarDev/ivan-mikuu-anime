import React from "react";
import {
   ChangeFormButton,
   ChangeFormInformation,
   Container,
} from "./ChangeForm.styled";

const ChangeForm = ({ details, text, onClick }) => {
   return (
      <Container>
         <ChangeFormInformation>{details}</ChangeFormInformation>
         <ChangeFormButton type="button" onClick={onClick}>
            {text}
         </ChangeFormButton>
      </Container>
   );
};

export default ChangeForm;
