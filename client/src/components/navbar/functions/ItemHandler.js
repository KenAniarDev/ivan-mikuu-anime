import { useState } from 'react';
import toggle from "../../../helper/toggle";
import useMediaQuery from "../../../hooks/useMediaQuery";

const ItemHandler = (setIsOpen) => {
   const phoneBP = useMediaQuery("(max-width: 769px)");

   //states
   const [selectedTab, setSelectedTab] = useState(1);

   const setTabHandler = (tab) => {
      setSelectedTab(tab);
      if (phoneBP) toggle(setIsOpen);
   };

   return { setTabHandler, selectedTab };
};

export default ItemHandler;
