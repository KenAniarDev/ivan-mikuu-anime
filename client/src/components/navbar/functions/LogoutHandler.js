import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import temp from "../../../assets/images/temp.png";
import AuthContext from "../../../helper/AuthContext";
import { apiContext, modalContext } from "../../../hooks/useContext";

const LogoutHandler = (firstParam, secondParam) => {
   const { setPassword } = useContext(modalContext);
   const { setDataType, setFilterAnime } = useContext(apiContext);

   const { getLoggeIn, setUserProfilePhoto, setUserDisplayName } =
      useContext(AuthContext);

   let navigate = useNavigate();

   const logout = async () => {
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

   return logout;
};

export default LogoutHandler;
