import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import useDimensions from "react-use-dimensions";
import logo from "../../assets/images/logo.svg";
import mobileBG from "../../assets/images/MobileBG.jpg";
import userProfile from "../../assets/images/temp.png";
import AuthContext from "../../helper/AuthContext";
import toggle from "../../helper/toggle";
import animated from "../../hooks/animated";
import { modalContext } from "../../hooks/useContext";
import useMediaQuery from "../../hooks/useMediaQuery";
import ChangeTheme from "./changeTheme/ChangeTheme";
import ChangeBackgroundColor from "./functions/ChangeBackgroundColor";
import ItemHandler from "./functions/ItemHandler";
import LogoutHandler from "./functions/LogoutHandler";
import MenuButton from "./menuButton/MenuButton";
import {
   Header,
   Logo,
   MobileBackgroundImage,
   MobileDisplayName,
   MobileLogout,
   MobileUserPhoto,
   Nav,
   WebNav,
} from "./Navbar.styled";
import NavbarList from "./navbarList/NavbarList";
import SearchBar from "./searchbar/SearchBar";
import UserProfile from "./userprofile/UserProfile";

const Navbar = () => {
   const { setOpenLogin } = useContext(modalContext);
   const { userDisplayName, isLogIn } = useContext(AuthContext);

   //Navigate
   let navigate = useNavigate();

   //Set Navbar height to use for animation
   const [ref, height] = useDimensions();
   //Check width
   const phoneBP = useMediaQuery("(max-width: 769px)");

   const { animateNavbar, animateItem } = animated(height.height);
   //Change navbar backgroundcolor on scroll
   const { changeBG } = ChangeBackgroundColor();

   const [isOpen, setIsOpen] = useState(false);

   const { setTabHandler, selectedTab } = ItemHandler(setIsOpen);

   return (
      <Header changeBG={changeBG}>
         <Logo src={logo} alt="Logo" onClick={() => navigate("/")} />
         {phoneBP === true ? (
            <Nav
               initial={false}
               animate={isOpen ? "open" : "closed"}
               custom={height.height}
               ref={ref}
               variants={animateNavbar}
            >
               <MobileBackgroundImage background={mobileBG} />

               <MobileUserPhoto
                  src={userProfile}
                  alt="User Profile"
                  variants={animateItem}
               />
               <ChangeTheme />

               <MobileDisplayName variants={animateItem}>
                  {userDisplayName}
               </MobileDisplayName>

               <NavbarList
                  setIsOpen={setIsOpen}
                  selectedTab={selectedTab}
                  setTabHandler={setTabHandler}
               />
               <MobileLogout
                  variants={animateItem}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={
                     isLogIn === true
                        ? LogoutHandler
                        : () => toggle(setOpenLogin)
                  }
               >
                  {isLogIn === true ? "Logout" : "Login"}
               </MobileLogout>
            </Nav>
         ) : (
            <WebNav>
               <NavbarList
                  selectedTab={selectedTab}
                  setTabHandler={setTabHandler}
               />
            </WebNav>
         )}
         <SearchBar />
         <UserProfile setTabHandler={setTabHandler} />
         <MenuButton isOpen={isOpen} toggle={() => toggle(setIsOpen)} />
      </Header>
   );
};

export default Navbar;
