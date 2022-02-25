import { motion } from "framer-motion";
import styled from "styled-components";
import { buttonReset } from "../../../sharedStyle";

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

   &:hover {
      transform: scale(1.08);
   }
`;

export const TopContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: flex-end;
   position: relative;
   position: absolute;
   padding: 0 2rem;
   top: 3rem;
   width: 100%;
`;

export const CardImage = styled.img`
   width: 8.8rem;
   height: 12.6rem;
   object-fit: cover;
   position: relative;
   border-radius: 1rem;
   z-index: 111;
   filter: ${(props) => (props.isfavorite === "liked" ? `grayscale(.9)` : "")};
`;

export const Like = styled(motion.button)`
   ${buttonReset}
   margin-left: auto;
   z-index: 111;
   display: flex;
   align-items: center;
   justify-content: center;
   padding: 0.6rem;
   border-radius: 0.5rem;
   transition: all 0.1s;
   background-color: ${(props) =>
      props.isfavorite === "liked"
         ? props.theme.likeColor.backgroundColor
         : props.theme.defaultButton.backgroundColor};
   color: ${(props) => props.theme.defaultButton.color};

   & > * {
      color: currentColor;
      width: 1.8rem;
      height: 1.8rem;
   }
`;

export const CardBackgroundImage = styled.div`
   width: 21rem;
   height: 17.6rem;

   background: linear-gradient(
         0deg,
         rgba(207, 207, 207, 0.6),
         rgba(207, 207, 207, 0.6)
      ),
      url(${({ backgroundImage }) => backgroundImage});
   background-size: cover;
   background-repeat: no-repeat;
   clip-path: polygon(0 0, 100% 0, 100% 100%, 0 77%);
   border-radius: 10px 10px 0px 0px;
   filter: ${(props) => (props.isfavorite === "liked" ? `grayscale(.9)` : "")};
`;

export const CardDetails = styled.div`
   z-index: 1;
   padding: 0rem 1.6rem 2rem 1.6rem;
   width: 100%;
   display: flex;
   flex-direction: column;
   justify-content: center;
   margin-top: 2.2rem;
`;

export const CardTitle = styled.div`
   text-overflow: ellipsis;
   white-space: nowrap;
   overflow: hidden;
   font-size: 1.6rem;
   font-weight: 600;
   margin-bottom: 0.2rem;
   color: ${(props) => props.theme.secondaryFontColor};
   text-align: left;
   padding-right: 2rem;
`;

export const CardEpisode = styled.span`
   font-size: 1.4rem;
   color: #bebebe;
`;

export const ButtonContainer = styled.div`
   margin-top: 2.6rem;
   align-self: center;
`;

export const ViewMore = styled(motion.button)`
   ${buttonReset}
   background-color: ${(props) => props.theme.defaultButton.backgroundColor}};
   color: ${(props) => props.theme.defaultButton.color}};
   font-size: 1.4rem;
   border-radius: 0.5rem;
   padding: 0.5em 1em;
   transition: all 0.1s;
   
`;
