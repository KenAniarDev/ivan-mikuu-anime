import { AnimatePresence } from "framer-motion";
import React, { useContext, useState } from "react";
import toggle from "../../../helper/toggle";
import { animeDetailsContext } from "../../../hooks/useContext";
import {
   ButtonContainer,
   Container,
   Plot,
} from "../../animeDetails/summary/Summary.styled";
import Button from "../../button/Button";

const Summary = () => {
   const [readMore, setReadMore] = useState(true);

   const { dataDescription } = useContext(animeDetailsContext);

   const replaceSummary = dataDescription.replaceAll(`<br>`, "\n");

   return (
      <AnimatePresence exitBeforeEnter>
         <Container
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
         >
            <Plot readMore={readMore}>{replaceSummary}</Plot>
            {dataDescription.length > 590 && (
               <ButtonContainer>
                  <Button
                     size={"1.4rem"}
                     text={readMore ? "Read More" : "Hide Details"}
                     onClick={() => toggle(setReadMore)}
                  />
               </ButtonContainer>
            )}
         </Container>
      </AnimatePresence>
   );
};

export default Summary;
