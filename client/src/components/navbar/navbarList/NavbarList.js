import React, { useContext } from "react";
import AuthContext from "../../../helper/AuthContext";
import animated from "../../../hooks/animated";
import { apiContext } from "../../../hooks/useContext";
import {
   ActiveMobile,
   NavItem,
   NavItemMobile,
   NavLinks,
   NavList,
} from "./NavbarList.styled";

const NavbarList = ({ setTabHandler, selectedTab }) => {
   const { setDataType, setSearchAnime, setFilterAnime, setFilterTitle } =
      useContext(apiContext);

   const { isLogIn } = useContext(AuthContext);

   const { animateList, animateItem } = animated();

   const changeTypeHandler = (num, type, title) => {
      setDataType(type);
      setTabHandler(num);
      setSearchAnime(null);
      setFilterAnime({
         sort: "TRENDING_DESC",
         season: undefined,
         status: undefined,
         format: undefined,
      });
      setFilterTitle(title);
   };

   const profileHander = (num, title) => {
      setTabHandler(num);
      setFilterTitle(title);
      setDataType("ANIME");
   };

   return (
      <NavList variants={animateList}>
         {isLogIn === true && (
            <NavItemMobile
               variants={animateItem}
               whileHover={{ scale: 1.15 }}
               whileTap={{ scale: 0.95 }}
               onClick={() => profileHander(0, "Favorites")}
            >
               <NavLinks activeclassname="active" to="profile">
                  Profile
               </NavLinks>
               {selectedTab === 0 ? (
                  <ActiveMobile layoutId="navActive" />
               ) : null}
            </NavItemMobile>
         )}
         <NavItem
            variants={animateItem}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => changeTypeHandler(1, "ANIME", "Top Trending Anime")}
         >
            <NavLinks activeclassname="active" to="/">
               Anime
            </NavLinks>
            {selectedTab === 1 ? <ActiveMobile layoutId="navActive" /> : null}
         </NavItem>
         <NavItem
            variants={animateItem}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => changeTypeHandler(2, "MANGA", "Top Trending Comics")}
         >
            <NavLinks activeclassname="active" to="comics">
               Comics
            </NavLinks>
            {selectedTab === 2 ? <ActiveMobile layoutId="navActive" /> : null}
         </NavItem>
      </NavList>
   );
};

export default NavbarList;
