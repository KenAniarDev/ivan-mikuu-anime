import React from "react";
import { Button, Icon } from "./CloseButton.styled";

const CloseButton = ({ onClick }) => {
   return (
      <Button
         whileHover={{ scale: 1.15 }}
         whileTap={{ scale: 0.95 }}
         onClick={onClick}
      >
         <Icon />
      </Button>
   );
};

export default CloseButton;
