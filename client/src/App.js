import { useState } from "react";
import { useRoutes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Register from "./components/register/Register";
import GlobalStyle from "./globaStyle";
import { defaultTheme } from "./helper/theme";
import { apiContext, modalContext } from "./hooks/useContext";
import useRoutesHook from "./hooks/useRoutesHook";

function App() {
   //Routes
   const routesHandler = useRoutesHook();
   const MainContent = useRoutes(routesHandler);

   const localData = localStorage.getItem("theme");
   //States
   const [theme, setTheme] = useState(
      localData !== null ? JSON.parse(localData) : defaultTheme
   );
   const [openLogin, setOpenLogin] = useState(false);
   const [openRegister, setOpenRegister] = useState(false);

   const [searchAnime, setSearchAnime] = useState(null);
   const [dataType, setDataType] = useState("ANIME");
   const [filterAnime, setFilterAnime] = useState({ sort: "TRENDING_DESC" });
   const [filterTitle, setFilterTitle] = useState("Top Trending Anime");
   const [isUserLogin, setUserIsLogin] = useState(false);

   const [username, setUsername] = useState();
   const [password, setPassword] = useState();

   return (
      <ThemeProvider theme={theme}>
         <modalContext.Provider
            value={{
               openLogin,
               setOpenLogin,
               openRegister,
               setOpenRegister,
               theme,
               setTheme,
               setUserIsLogin,
               isUserLogin,
               username,
               password,
               setUsername,
               setPassword,
            }}
         >
            <GlobalStyle />
            <apiContext.Provider
               value={{
                  searchAnime,
                  setSearchAnime,
                  dataType,
                  setDataType,
                  setFilterAnime,
                  filterAnime,
                  setFilterTitle,
                  filterTitle,
               }}
            >
               <Navbar />
               {MainContent}
            </apiContext.Provider>
            <Login />
            <Register />
         </modalContext.Provider>
      </ThemeProvider>
   );
}

export default App;
