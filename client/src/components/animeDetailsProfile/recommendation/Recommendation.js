import { AnimatePresence } from "framer-motion";
import React, { useContext } from "react";
import { animeDetailsContext } from "../../../hooks/useContext";
import {
   Container,
   Details,
   Episodes,
   Poster,
   RecommendationWrapper,
   Status,
   Title,
} from "../../animeDetails/recommendation/Recommendation.styled";

const Recommendation = () => {
   const { dataRecommendation } = useContext(animeDetailsContext);

   return (
      <AnimatePresence exitBeforeEnter>
         <Container
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
         >
            {dataRecommendation?.map((recommendation) => {
               return (
                  <RecommendationWrapper key={recommendation.id}>
                     <Poster
                        src={
                           recommendation.coverImage.extraLarge !== null
                              ? recommendation.coverImage.extraLarge
                              : recommendation.coverImage.large
                        }
                     />
                     <Details>
                        <Title>
                           {recommendation.title.english !== null
                              ? recommendation.title.english
                              : recommendation.title.romaji}
                        </Title>
                        <Episodes>
                           {recommendation.episodes !== null
                              ? `${recommendation.episodes} Episodes`
                              : "Not Available"}
                        </Episodes>
                        <Status>{recommendation.status}</Status>
                     </Details>
                  </RecommendationWrapper>
               );
            })}
         </Container>
      </AnimatePresence>
   );
};

export default Recommendation;
