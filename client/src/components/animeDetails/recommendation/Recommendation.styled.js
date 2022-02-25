import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-gap: 2.5rem 4rem;
`;

export const RecommendationWrapper = styled.div`
   display: flex;
   gap: 1rem;
   align-items: center;
`;

export const Details = styled.div``;

export const Poster = styled.img`
   width: 5rem;
   height: 6rem;
   object-fit: cover;
   border-radius: 0.5rem;
`;

export const Title = styled.h4`
   padding-bottom: 0.4rem;
   line-height: 1.1;
`;

export const Episodes = styled.div`
   font-size: 1.4rem;
   color: ${(props) => props.theme.title};
   line-height: 1.1;
`;

export const Status = styled.div`
   font-size: 1.4rem;
   color: ${(props) => props.theme.title};
`;
