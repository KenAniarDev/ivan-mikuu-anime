import styled from "styled-components";

export const Container = styled.div`
   background: linear-gradient(
         180deg,
         rgba(18, 18, 18, 0.3) 0%,
         rgba(18, 18, 18, 1) 100%
      ),
      url(${({ img }) => img});
   width: 100%;
   height: 90vh;
   background-position: bottom;
   background-repeat: no-repeat;
   display: flex;
   justify-content: center;
   flex-direction: column;
   background-size: cover;
   color: ${(props) => props.theme.secondaryFontColor};
   padding-left: 8.4rem;
   border-radius: 0px 0px 30px 30px;

   @media screen and (max-width: 900px) {
      align-items: center;
      padding: 0;
      text-align: center;
   }
`;

export const PageTitle = styled.h1`
   font-size: 9rem;
   font-weight: 900;
   color: ${(props) => props.theme.secondaryFontColor};
   margin-top: auto;

   @media screen and (max-width: 540px) {
      line-height: 1.2;
   }

   @media screen and (max-width: 769px) {
      font-size: 7.5rem;
   }
`;

export const PageDescription = styled.p`
   font-size: 3rem;
   width: 60rem;
   margin-bottom: auto;

   @media screen and (max-width: 769px) {
      font-size: 2.5rem;
   }

   @media screen and (max-width: 900px) {
      width: 100%;
      padding: 0 4rem;
   }
`;
