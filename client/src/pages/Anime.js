import React, { useContext } from "react";
import HeroSection from "../components/heroSection/HeroSection";
import MainContent from "../components/mainContent/MainContent";
import { animeData } from "../helper/Data";
import {
   apiContext,
   cardsContext,
   heroSectionContext,
} from "../hooks/useContext";
import useFetch from "../hooks/useFetch";

const Anime = () => {
   //Global States
   const { searchAnime, filterAnime } = useContext(apiContext);
   const dataType = "ANIME";

   //Api
   const { data, isLoading } = useFetch(searchAnime, dataType, filterAnime);

   return (
      <heroSectionContext.Provider value={{ ...animeData }}>
         <HeroSection />
         <cardsContext.Provider value={{ data, isLoading }}>
            <MainContent />
         </cardsContext.Provider>
      </heroSectionContext.Provider>
   );
};

export default Anime;
