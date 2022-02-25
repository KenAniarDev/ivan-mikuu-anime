import React, { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { animeDetailsContext, apiContext } from "../../hooks/useContext";
import AnimeDetails from "../animeDetails/AnimeDetails";
import AnimeDetailsProfile from "../animeDetailsProfile/AnimeDetailsProfile";
import CardsList from "../cards/cardslist/CardsList";
import CardsListProfile from "../cardsProfile/CardsListProfile";
import { Container, Title } from "./MainContent.styled";

const MainContent = () => {
   const [openAnimeDetails, setOpenAnimeDetails] = useState(false);
   const [animeDetails, setAnimeDetails] = useState([]);
   const { filterTitle } = useContext(apiContext);

   const location = useLocation();

   return (
      <animeDetailsContext.Provider
         value={{
            openAnimeDetails,
            setOpenAnimeDetails,
            setAnimeDetails,
            ...animeDetails,
         }}
      >
         <Container>
            <Title>{filterTitle}</Title>
            {location.pathname === "/profile" ? (
               <CardsListProfile />
            ) : (
               <CardsList />
            )}
            {location.pathname === "/profile" ? (
               <AnimeDetailsProfile />
            ) : (
               <AnimeDetails />
            )}
         </Container>
      </animeDetailsContext.Provider>
   );
};

export default MainContent;
