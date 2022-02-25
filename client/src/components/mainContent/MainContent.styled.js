import styled from "styled-components";

export const Container = styled.div`
   padding: 5.4rem;

   @media screen and (max-width: 769px) {
      padding: 5.4rem 1rem;
   }
`;

export const Title = styled.h1`
   color: ${(props) => props.theme.secondaryFontColor};
   margin-bottom: 5.4rem;
   @media screen and (max-width: 769px) {
      margin-left: 5.4rem;
   }
`;
