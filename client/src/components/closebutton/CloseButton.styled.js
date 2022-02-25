import { motion } from "framer-motion";
import { HiX } from "react-icons/hi";
import styled from "styled-components";
import { buttonReset } from "../../sharedStyle";

export const Button = styled(motion.button)`
   ${buttonReset}
   background-color: ${(props) => props.theme.closeButton.backgroundColor};
   align-self: flex-end;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0.25em;
   position: absolute;
   right: 3rem;
   top: 2.5rem;
   margin-left: auto;
   border-radius: 0.5rem;
   z-index: 99;
`;

export const Icon = styled(HiX)`
   width: 2rem;
   height: 2rem;
   color: ${(props) => props.theme.closeButton.color};
`;
