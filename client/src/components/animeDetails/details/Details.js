import { AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import monthConverter from "../../../helper/monthConverter";
import { animeDetailsContext } from "../../../hooks/useContext";
import {
   Description,
   Information,
   InformationWrapper,
   Title,
} from "./Details.styled";

const Details = () => {
   const {
      title,
      type,
      episodes,
      status,
      duration,
      genres,
      season,
      startDate,
      endDate,
      synonyms,
      chapters,
      volumes,
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
                  {title.romaji !== null ? title.romaji : "None"}
               </Description>
            </Information>

            {type === "MANGA" && synonyms !== null && (
               <Information>
                  <Title>Alternative Title:</Title>
                  <Description>
                     {synonyms !== null || synonyms.length > 1
                        ? synonyms.reduce(
                             (text, value, i, array) =>
                                text + (i < array.length && " , ") + value
                          )
                        : "Not Avaiblable"}
                  </Description>
               </Information>
            )}

            <Information>
               <Title>Type:</Title>
               <Description>{type}</Description>
            </Information>

            {type === "ANIME" && (
               <Information>
                  <Title>Episodes:</Title>
                  <Description>
                     {episodes !== null ? episodes : "Not Available"}
                  </Description>
               </Information>
            )}

            {type === "MANGA" && (
               <Information>
                  <Title>Chapters:</Title>
                  <Description>
                     {chapters !== null ? chapters : "Not Available"}
                  </Description>
               </Information>
            )}

            {type === "MANGA" && volumes !== null && (
               <Information>
                  <Title>Volumes:</Title>
                  <Description>{volumes}</Description>
               </Information>
            )}

            <Information>
               <Title>Status:</Title>
               <Description>{status}</Description>
            </Information>

            {type === "ANIME" && (
               <Information>
                  <Title>Aired:</Title>
                  <Description>{`
               ${
                  startDate.month !== null
                     ? monthConverter(startDate.month)
                     : ""
               } 
               ${startDate.day !== null ? startDate.day : ""} 
               ${startDate.year !== null ? startDate.year : ""} - 
               ${endDate.month !== null ? monthConverter(endDate.month) : ""} 
               ${endDate.day !== null ? endDate.day : ""} 
               ${endDate.year !== null ? endDate.year : ""}`}</Description>
               </Information>
            )}

            {type === "MANGA" && (
               <Information>
                  <Title>Released Data:</Title>
                  <Description>
                     {`${
                        startDate.month !== null
                           ? monthConverter(startDate.month)
                           : ""
                     } 
               ${startDate.day !== null ? startDate.day : ""} 
               ${startDate.year !== null ? startDate.year : ""}`}
                  </Description>
               </Information>
            )}

            {type === "ANIME" && (
               <Information>
                  <Title>Season:</Title>
                  <Description>{season}</Description>
               </Information>
            )}

            {type === "ANIME" && (
               <Information>
                  <Title>Duration:</Title>
                  <Description>
                     {duration !== null
                        ? `${duration} mins per episode`
                        : "Not Avaiblable"}
                  </Description>
               </Information>
            )}

            <Information>
               <Title>Genre:</Title>
               <Description>
                  {genres !== null || genres !== undefined || genres.length > 1
                     ? genres.join(" | ")
                     : "Genres Not Available"}
               </Description>
            </Information>
         </InformationWrapper>
      </AnimatePresence>
   );
};

export default Details;
