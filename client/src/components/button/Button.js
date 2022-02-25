import React from "react";
import { ButtonContainer } from "./Button.styled";

const Button = ({ text, onClick, size, backgroundcolor, type, width }) => {
   return (
      <ButtonContainer
         type={type}
         width={width}
         backgroundcolor={backgroundcolor}
         size={size}
         whileHover={{ scale: 1.15 }}
         whileTap={{ scale: 0.95 }}
         onClick={onClick}
      >
         {text}
      </ButtonContainer>
   );
};

export default Button;
