import { motion } from "framer-motion";
import styled from "styled-components";

export const InformationWrapper = styled(motion.div)`
   display: flex;
   flex-direction: column;
   gap: 1rem;
`;

export const Information = styled.div`
   display: flex;
   gap: 0.5rem;
`;

export const Title = styled.span`
   color: ${(props) => props.theme.title};
`;

export const Description = styled.span`
   font-weight: 600;
`;
