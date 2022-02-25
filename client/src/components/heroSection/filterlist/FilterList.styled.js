import styled from "styled-components";

export const List = styled.ul`
   display: flex;
   margin-left: 8rem;
   gap: 3rem;
   position: relative;

   @media screen and (max-width: 900px) {
      margin-left: 0;
      gap: 1rem;
   }
`;
