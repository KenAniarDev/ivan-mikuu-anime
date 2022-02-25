import React from "react";
import {
   CardBackgroundImage,
   CardDetails,
   CardEpisode,
   Cards,
   CardTitle,
   ViewMore,
} from "./CardsLoading.styled";

const CardsLoading = () => {
   return (
      <Cards>
         <CardBackgroundImage />
         <CardDetails>
            <CardTitle />
            <CardEpisode />
            <ViewMore />
         </CardDetails>
      </Cards>
   );
};

export default CardsLoading;
