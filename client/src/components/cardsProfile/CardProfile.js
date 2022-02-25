import axios from "axios";
import React, { useContext, useState } from "react";
import { FiHeart, FiPlus } from "react-icons/fi";
import { ThemeProvider } from "styled-components";
// import bgNull from "../../../assets/images/bgNull.jpg";
import toggle from "../../helper/toggle";
import { animeDetailsContext, modalContext } from "../../hooks/useContext";
import Button from "../button/Button";
import {
   ButtonContainer,
   CardBackgroundImage,
   CardDetails,
   CardEpisode,
   CardImage,
   Cards,
   CardTitle,
   Like,
   TopContainer,
} from "../cards/card/Card.styled";

const CardProfile = ({
   dataCoverImage,
   dataEnglish,
   dataRomaji,
   dataEpisodes,
   dataChapters,
   dataVolumes,
   allData,
   dataType,
   dataRecommendation,
   dataID,
   _id,
   refetchData,
}) => {
   //Global States
   const { setOpenAnimeDetails, setAnimeDetails } =
      useContext(animeDetailsContext);

   const { theme } = useContext(modalContext);

   //Handlers
   const viewMoreHandler = () => {
      toggle(setOpenAnimeDetails);
      setAnimeDetails(allData);
   };

   const [isFavorite, setIsFavorite] = useState(true);

   refetchData();
   const favoriteHandler = async () => {
      toggle(setIsFavorite);
      await axios.delete(`http://localhost:5000/favorite/delete/${dataID}`, {
         withCredentials: true,
      });
   };

   return (
      <Cards>
         <TopContainer>
            <CardImage src={dataCoverImage} alt="Poster" />
            <Like
               whileHover={{ scale: 1.15 }}
               whileTap={{ scale: 0.95 }}
               onClick={favoriteHandler}
               isfavorite={isFavorite === true ? "liked" : undefined}
            >
               {isFavorite ? <FiHeart /> : <FiPlus />}
            </Like>
         </TopContainer>
         <CardBackgroundImage backgroundImage={dataCoverImage} />
         <CardDetails>
            <CardTitle>
               {dataEnglish !== null ? dataEnglish : dataRomaji}
            </CardTitle>
            <CardEpisode>
               {dataType === "ANIME"
                  ? dataEpisodes !== null
                     ? `${dataEpisodes} ${
                          dataEpisodes > 1 ? "Episodes" : "Episode"
                       }`
                     : `Episode Not Available`
                  : dataChapters !== null || dataVolumes !== null
                  ? dataChapters !== null
                     ? `${dataChapters} Chapters`
                     : `${dataVolumes} Volumes`
                  : "Chapters Not Available"}
            </CardEpisode>
            <ButtonContainer>
               <ThemeProvider theme={theme}>
                  <Button
                     backgroundcolor={
                        isFavorite
                           ? theme.likeColor.backgroundColor
                           : theme.defaultButton.backgroundColor
                     }
                     onClick={viewMoreHandler}
                     text={"View More"}
                     size={"1.4rem"}
                  />
               </ThemeProvider>
            </ButtonContainer>
         </CardDetails>
      </Cards>
   );
};

export default CardProfile;
