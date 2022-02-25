import React from "react";
import { MenuBtn, MenuIcon } from "./MenuButton.styled";

const MenuButton = ({ toggle, isOpen }) => {
   return (
      <MenuBtn onClick={toggle}>
         <MenuIcon isHidden={isOpen} />
      </MenuBtn>
   );
};

export default MenuButton;
