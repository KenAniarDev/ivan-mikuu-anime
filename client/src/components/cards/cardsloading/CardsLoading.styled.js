import styled, { css } from "styled-components";

export const List = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 3rem;
   justify-content: center;
   padding: 5rem 1rem;

   @media screen and (max-width: 560px) {
      gap: 1rem;
   }
`;

export const Cards = styled.div`
   width: 21rem;
   height: 30rem;
   position: relative;
   border-radius: 1rem;
   overflow: hidden;
   transition: transform 0.3s;
   background-color: #1e1e1e;
   display: flex;
   flex-direction: column;

   -webkit-animation: pulsate-fwd 2s ease-in-out infinite both;
   animation: pulsate-fwd 2s ease-in-out infinite both;

   @-webkit-keyframes pulsate-fwd {
      0% {
         -webkit-transform: scale(0.98);
         transform: scale(0.98);
         opacity: 0.4;
      }
      50% {
         -webkit-transform: scale(1);
         transform: scale(1);
         opacity: 1;
      }
      100% {
         -webkit-transform: scale(0.98);
         transform: scale(0.98);
         opacity: 0.4;
      }
   }

   @keyframes pulsate-fwd {
      0% {
         -webkit-transform: scale(0.98);
         transform: scale(0.98);
         opacity: 0.4;
      }
      50% {
         -webkit-transform: scale(1);
         transform: scale(1);
         opacity: 1;
      }
      100% {
         -webkit-transform: scale(0.98);
         transform: scale(0.98);
         opacity: 0.4;
      }
   }
`;

export const CardBackgroundImage = styled.div`
   width: 21rem;
   height: 17.6rem;

   background: linear-gradient(
      0deg,
      rgba(240, 240, 240, 0.4),
      rgba(207, 207, 207, 0.4)
   );
   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 77%);
   border-radius: 10px 10px 0px 0px;
`;

export const CardDetails = styled.div`
   z-index: 1;
   padding: 0rem 1.6rem 1.6rem 1.6rem;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin-top: 2.2rem;
`;

const loading = css`
   background-color: #646464;
   margin-bottom: 2rem;
   width: 100%;
   height: 1.5rem;
   border-radius: 0.5rem;
`;

export const CardTitle = styled.div`
   ${loading}
   width: 14rem;
`;

export const CardEpisode = styled.span`
   ${loading}
   margin-bottom: 0;
   width: 8rem;
`;

export const ViewMore = styled.div`
   border: none;
   border-radius: 1rem;
   background-color: ${(props) => props.theme.defaultButton.backgroundColor};
   border-radius: 0.5rem;
   height: 2.5rem;
   width: 9rem;
   margin: 2.6rem auto 0 auto;
`;
