import { motion } from "framer-motion";
import styled from "styled-components";
import { buttonReset } from "../../../sharedStyle";

export const ThemeOption = styled.div`
   display: flex;
   gap: 1rem;
   padding: 1rem 0;

   @media screen and (max-width: 769px) {
      padding: 2rem 0 0 0;
      justify-content: center;
   }
`;

export const ThemeColor = styled(motion.button)`
   ${buttonReset}
   width: 2rem;
   height: 2rem;
   padding: 0.5rem;
   border-radius: 50%;
   background-color: ${(props) => props.backgroundcolor};
   transition: 0.1s;
   outline: ${(props) =>
      props.tab === props.index ? ` 2px solid ${props.backgroundcolor}` : ""};
   outline-offset: 2px;
`;
