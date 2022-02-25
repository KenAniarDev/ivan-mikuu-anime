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
} from "./Recommendation.styled";

const Recommendation = () => {
   const { recommendations } = useContext(animeDetailsContext);

   return (
      <AnimatePresence exitBeforeEnter>
         <Container
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
         >
            {recommendations.nodes?.map((recommendation) => {
               return (
                  <RecommendationWrapper
                     key={recommendation.mediaRecommendation.id}
                  >
                     <Poster
                        src={
                           recommendation.mediaRecommendation.coverImage
                              .extraLarge !== null
                              ? recommendation.mediaRecommendation.coverImage
                                   .extraLarge
                              : recommendation.mediaRecommendation.coverImage
                                   .large
                        }
                     />
                     <Details>
                        <Title>
                           {recommendation.mediaRecommendation.title.english !==
                           null
                              ? recommendation.mediaRecommendation.title.english
                              : recommendation.mediaRecommendation.title.romaji}
                        </Title>
                        <Episodes>
                           {recommendation.mediaRecommendation.episodes !== null
                              ? `${recommendation.mediaRecommendation.episodes} Episodes`
                              : "Not Available"}
                        </Episodes>
                        <Status>
                           {recommendation.mediaRecommendation.status}
                        </Status>
                     </Details>
                  </RecommendationWrapper>
               );
            })}
         </Container>
      </AnimatePresence>
   );
};

export default Recommendation;
