import { motion } from "framer-motion";
import styled from "styled-components";
import TempBackgroundImage from "../../assets/images/spirited-away.jpg";
import {
   BackDrop,
   ModalBackgroundImage,
   ModalContent,
} from "../../sharedStyle";

export const AnimeBackDrop = styled(motion.div)`
   ${BackDrop}
`;
export const AnimeModalContent = styled(motion.div)`
   ${ModalContent}
   width: 98rem;
`;

export const AnimeModalBackgroundImage = styled.div.attrs((props) => ({
   backgroundimage: props.backgroundimage || `${TempBackgroundImage}`,
}))`
   background: linear-gradient(
         0deg,
         rgba(30, 30, 30, 0.6),
         rgba(30, 30, 30, 0.6)
      ),
      url(${(props) => props.backgroundimage});
   ${ModalBackgroundImage}
`;

export const HeaderWrapper = styled.div`
   display: flex;
   gap: 2rem;
   padding: 2rem 8rem 2rem 0;
   height: 100%;
   display: flex;
   align-items: flex-end;

   @media screen and (max-width: 769px) {
      align-items: center;
      padding: 2rem 8rem 2rem 5rem;
   }
`;

export const AnimePoster = styled.img`
   width: 21rem;
   height: 32rem;
   object-fit: cover;
   border-radius: 1rem;
   position: absolute;
   z-index: 2;
   top: 10rem;
   left: 5rem;

   @media screen and (max-width: 769px) {
      position: relative;
      width: 12rem;
      height: 18rem;
      top: initial;
      left: initial;
   }
`;

export const TitleWrapper = styled.div`
   color: ${(props) => props.theme.secondaryFontColor};
   padding: 1rem 0;
   margin-left: 28rem;

   @media screen and (max-width: 769px) {
      margin-left: 0;
      align-self: flex-end;
   }
`;

export const AnimeTitlePrimary = styled.h1`
   line-height: 1.1;

   @media screen and (max-width: 769px) {
      font-size: 1.8rem;
      margin-top: auto;
   }
`;

export const AnimeTitleSecondary = styled.div`
   @media screen and (max-width: 769px) {
      font-size: 1.4rem;
   }
`;

export const MainContentContainer = styled.div`
   background-color: #1b1b1b;
   border-radius: 1rem 1rem 2rem 2rem;
   margin-top: -1rem;
   min-height: 46rem;
   position: relative;
`;

export const ContentContainer = styled(motion.div)`
   margin-left: 26rem;
   padding: 1rem 4rem 5rem 4rem;
   color: ${(props) => props.theme.secondaryFontColor};

   @media screen and (max-width: 769px) {
      margin-left: 0;
   }
`;

export const ContentTitle = styled.h2`
   padding: 1.5rem 0;
`;
