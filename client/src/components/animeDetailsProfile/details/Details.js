import { AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import monthConverter from "../../../helper/monthConverter";
import { animeDetailsContext } from "../../../hooks/useContext";
import {
   Description,
   Information,
   InformationWrapper,
   Title,
} from "../../animeDetails/details/Details.styled";

const Details = () => {
   const {
      dataRomaji,
      dataType,
      dataEpisodes,
      dataStatus,
      dataDuration,
      dataGenres,
      dataSeason,
      dataStartDate,
      dataEndDate,
      dataSynonyms,
      dataChapters,
      dataVolumes,
   } = useContext(animeDetailsContext);

   return (
      <AnimatePresence exitBeforeEnter>
         <InformationWrapper
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
         >
            <Information>
               <Title>Other Title:</Title>
               <Description>
                  {dataRomaji !== null ? dataRomaji : "None"}
               </Description>
            </Information>

            {dataType === "MANGA" && dataSynonyms !== null && (
               <Information>
                  <Title>Alternative Title:</Title>
                  <Description>
                     {dataSynonyms !== null || dataSynonyms.length > 1
                        ? dataSynonyms.reduce(
                             (text, value, i, array) =>
                                text + (i < array.length && " , ") + value
                          )
                        : "Not Avaiblable"}
                  </Description>
               </Information>
            )}

            <Information>
               <Title>Type:</Title>
               <Description>{dataType}</Description>
            </Information>

            {dataType === "ANIME" && (
               <Information>
                  <Title>Episodes:</Title>
                  <Description>
                     {dataEpisodes !== null ? dataEpisodes : "Not Available"}
                  </Description>
               </Information>
            )}

            {dataType === "MANGA" && (
               <Information>
                  <Title>Chapters:</Title>
                  <Description>
                     {dataChapters !== null ? dataChapters : "Not Available"}
                  </Description>
               </Information>
            )}

            {dataType === "MANGA" && dataVolumes !== null && (
               <Information>
                  <Title>Volumes:</Title>
                  <Description>{dataVolumes}</Description>
               </Information>
            )}

            <Information>
               <Title>Status:</Title>
               <Description>{dataStatus}</Description>
            </Information>

            {dataType === "ANIME" && (
               <Information>
                  <Title>Aired:</Title>
                  <Description>{`
               ${
                  dataStartDate.month !== null
                     ? monthConverter(dataStartDate.month)
                     : ""
               } 
               ${dataStartDate.day !== null ? dataStartDate.day : ""} 
               ${dataStartDate.year !== null ? dataStartDate.year : ""} - 
               ${
                  dataEndDate.month !== null
                     ? monthConverter(dataEndDate.month)
                     : ""
               } 
               ${dataEndDate.day !== null ? dataEndDate.day : ""} 
               ${
                  dataEndDate.year !== null ? dataEndDate.year : ""
               }`}</Description>
               </Information>
            )}

            {dataType === "MANGA" && (
               <Information>
                  <Title>Released Data:</Title>
                  <Description>
                     {`${
                        dataStartDate.month !== null
                           ? monthConverter(dataStartDate.month)
                           : ""
                     } 
               ${dataStartDate.day !== null ? dataStartDate.day : ""} 
               ${dataStartDate.year !== null ? dataStartDate.year : ""}`}
                  </Description>
               </Information>
            )}

            {dataType === "ANIME" && (
               <Information>
                  <Title>Season:</Title>
                  <Description>{dataSeason}</Description>
               </Information>
            )}

            {dataType === "ANIME" && (
               <Information>
                  <Title>Duration:</Title>
                  <Description>
                     {dataDuration !== null
                        ? `${dataDuration} mins per episode`
                        : "Not Avaiblable"}
                  </Description>
               </Information>
            )}

            <Information>
               <Title>Genre:</Title>
               <Description>
                  {dataGenres !== null ||
                  dataGenres !== undefined ||
                  dataGenres.length > 1
                     ? dataGenres.reduce(
                          (text, value, i, array) =>
                             text + (i < array.length && " | ") + value
                       )
                     : "Genres Not Available"}
               </Description>
            </Information>
         </InformationWrapper>
      </AnimatePresence>
   );
};

export default Details;
