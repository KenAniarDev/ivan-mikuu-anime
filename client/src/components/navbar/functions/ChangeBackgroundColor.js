import { useState } from "react";

const ChangeBackgroundColor = () => {
   const [changeBG, setChangeBG] = useState(false);

   const changeNavbarBG = () => {
      window.scrollY >= 64 ? setChangeBG(true) : setChangeBG(false);
   };
   window.addEventListener("scroll", changeNavbarBG);

   return { changeBG };
};

export default ChangeBackgroundColor;
