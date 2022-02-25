import { motion } from "framer-motion";
import styled from "styled-components";
import { movingActiveState } from "../../../sharedStyle";

export const Navbar = styled.div`
   position: relative;
   width: 100%;
   background-color: #222222;
   padding: 1.6rem;
   border-radius: 1rem;
`;

export const List = styled.ul`
   display: flex;
   margin-left: 28rem;
   gap: 3rem;

   @media screen and (max-width: 769px) {
      margin-left: 0;
      justify-content: center;
   }
`;

export const Item = styled(motion.li)`
   color: ${(props) => props.theme.secondaryFontColor};
   cursor: pointer;
   position: relative;
   z-index: 1;
   padding: 0.5em 1em;
   transition: all 0.1s;
`;

export const BackgroundActive = styled(motion.div)`
   ${movingActiveState}
   height: 100%;
   left: 0;
   top: 0;
   border-radius: 0.5rem;
`;
