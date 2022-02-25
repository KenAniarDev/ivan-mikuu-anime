import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Container = styled(motion.div)`
   padding-right: 2rem;
`;

export const Plot = styled.p`
   ${({ readMore }) =>
      readMore &&
      css`
         overflow: hidden;
         text-overflow: ellipsis;
         display: -webkit-box;
         -webkit-line-clamp: 7;
         -webkit-box-orient: vertical;
      `}
`;

export const ButtonContainer = styled.div`
   margin-top: 1.5rem;
`;
