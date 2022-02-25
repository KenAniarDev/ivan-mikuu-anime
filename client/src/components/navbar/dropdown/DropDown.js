import axios from "axios";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import temp from "../../../assets/images/temp.png";
import AuthContext from "../../../helper/AuthContext";
import toggle from "../../../helper/toggle";
import { apiContext, modalContext } from "../../../hooks/useContext";
import ChangeTheme from "../changeTheme/ChangeTheme";
import {
   Description,
   DisplayName,
   DropdownButton,
   DropdownContent,
   DropdownLink,
} from "./DropDown.styled";

const DropDown = ({ hide, setTabHandler }) => {
   const { setOpenLogin, setPassword } = useContext(modalContext);
   const { setFilterTitle, setDataType, setFilterAnime } =
      useContext(apiContext);

   const {
      isLogIn,
      userDisplayName,
      getLoggeIn,
      setUserProfilePhoto,
      setUserDisplayName,
   } = useContext(AuthContext);

   let navigate = useNavigate();

   const profileHandler = () => {
      setFilterTitle("Favorites");

      setTabHandler(0);
   };

   const logoutHandler = async () => {
      await axios.get("http://localhost:5000/auth/logout", {
         withCredentials: true,
      });
      await getLoggeIn();
      setDataType("ANIME");
      setFilterAnime({
         sort: "TRENDING_DESC",
         season: undefined,
         status: undefined,
         format: undefined,
      });
      navigate("/");
      setPassword("");
      setUserProfilePhoto(temp);
      setUserDisplayName("Guest");
   };

   return (
      <>
         <AnimatePresence>
            {hide && (
               <DropdownContent
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
               >
                  <ChangeTheme />
                  <Description>Display Name</Description>
                  <DisplayName>{userDisplayName}</DisplayName>
                  {isLogIn === true ? (
                     <DropdownLink to="profile" onClick={profileHandler}>
                        Profile
                     </DropdownLink>
                  ) : (
                     ""
                  )}
                  <DropdownButton
                     onClick={
                        isLogIn === true
                           ? logoutHandler
                           : () => toggle(setOpenLogin)
                     }
                  >
                     {isLogIn === true ? "Logout" : "Login"}
                  </DropdownButton>
               </DropdownContent>
            )}
         </AnimatePresence>
      </>
   );
};

export default DropDown;
