import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { buttonReset } from "../../sharedStyle";

export const ButtonContainer = styled(motion.button).attrs((props) => ({
   type: props.type || "button",
   width: props.width || "",
   size: props.size || "1.6rem",
}))`
   ${buttonReset}
   color: ${(props) => props.theme.defaultButton.color}};
   background-color: ${(props) =>
      props.backgroundcolor
         ? props.backgroundcolor
         : props.theme.defaultButton.backgroundColor};
   border-radius: 0.5rem;
   padding: 0.5em 1em;
   transition: all 0.1s;
   font-size: ${(props) => props.size};
   width: ${(props) => props.width};

   ${(props) => props.defaultButton && css``}
`;
