import React, { useContext } from "react";
import HeroSection from "../components/heroSection/HeroSection";
import MainContent from "../components/mainContent/MainContent";
import { comicsData } from "../helper/Data";
import {
   apiContext,
   cardsContext,
   heroSectionContext,
} from "../hooks/useContext";
import useFetch from "../hooks/useFetch";

const Comics = () => {
   //Global States
   const { searchAnime, filterAnime } = useContext(apiContext);
   const dataType = "MANGA";

   //Api
   const { data, isLoading } = useFetch(searchAnime, dataType, filterAnime);

   return (
      <heroSectionContext.Provider value={{ ...comicsData }}>
         <HeroSection {...comicsData} />
         <cardsContext.Provider value={{ data, isLoading }}>
            <MainContent />
         </cardsContext.Provider>
      </heroSectionContext.Provider>
   );
};

export default Comics;
