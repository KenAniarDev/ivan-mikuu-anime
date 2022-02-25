import { motion } from "framer-motion";
import styled from "styled-components";
import { movingActiveState } from "../../../sharedStyle";

export const Items = styled(motion.li)`
   display: flex;
   margin-bottom: 2rem;
   font-size: 2rem;
   cursor: pointer;
   position: relative;
   padding: 1rem 2rem;
   z-index: 2;
   transition: 0.1s;

   @media screen and (max-width: 900px) {
      font-size: 1.6rem;
      padding: 1rem;
   }
`;

export const BackgroundActive = styled(motion.div)`
   ${movingActiveState}
   left: 0;
   top: 0;
   height: 100%;
`;
