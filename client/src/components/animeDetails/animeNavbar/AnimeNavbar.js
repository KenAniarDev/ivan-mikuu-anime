import React from "react";
import { BackgroundActive, Item, List, Navbar } from "./AnimeNavbar.styled";

const AnimeNavbar = ({ selectedIndex, setSelectedIndex, initialTabs }) => {
   const itemHandler = (index) => {
      setSelectedIndex(index);
   };

   return (
      <Navbar>
         <List>
            <Item
               whileHover={{ scale: 1.15 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => itemHandler(initialTabs[0])}
            >
               Details
               {selectedIndex === initialTabs[0] ? (
                  <BackgroundActive layoutId="underline" />
               ) : null}
            </Item>
            <Item
               whileHover={{ scale: 1.15 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => itemHandler(initialTabs[1])}
            >
               Sypnosis
               {selectedIndex === initialTabs[1] ? (
                  <BackgroundActive layoutId="underline" />
               ) : null}
            </Item>
            <Item
               whileHover={{ scale: 1.15 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => itemHandler(initialTabs[2])}
            >
               Recommendation
               {selectedIndex === initialTabs[2] ? (
                  <BackgroundActive layoutId="underline" />
               ) : null}
            </Item>
         </List>
      </Navbar>
   );
};

export default AnimeNavbar;
