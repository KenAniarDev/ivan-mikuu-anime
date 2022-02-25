import React from "react";
import { BackgroundActive, Items } from "./FilterOptions.styled";

const FilterOptions = ({ options, onClick, index, selectedIndex }) => {
   return (
      <>
         <Items
            onClick={onClick}
            selectedindex={selectedIndex}
            index={index}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
         >
            {options}
            {selectedIndex === index && (
               <BackgroundActive layoutId="filterBG" />
            )}
         </Items>
      </>
   );
};

export default FilterOptions;
