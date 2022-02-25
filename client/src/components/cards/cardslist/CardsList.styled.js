import styled from "styled-components";

export const List = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 3rem;
   justify-content: center;

   @media screen and (max-width: 560px) {
      gap: 1rem;
   }
`;

export const NoDataFound = styled.h1`
   margin: 5rem;
   color: #8b8b8b;
`;
