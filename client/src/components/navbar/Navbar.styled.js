import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { buttonReset, movingActiveState } from "../../sharedStyle";

export const Header = styled.header`
   width: 100%;
   height: 8rem;
   background-color: transparent;
   display: flex;
   align-items: center;
   padding: 0 4rem;
   position: fixed;
   z-index: 999;
   transition: all 0.3s ease-in-out;

   ${({ changeBG }) =>
      changeBG === true &&
      css`
         padding: 0 3.4rem;
         height: 6.4rem;
         background-color: #1b1b1b;
         box-shadow: 0px 5px 20px #000;
      `}
`;

export const Logo = styled.img`
   width: 2.8rem;
   height: 2.8rem;
   cursor: pointer;
`;

export const Nav = styled(motion.nav)`
   @media screen and (max-width: 769px) {
      position: fixed;
      display: flex;
      flex-direction: column;
      top: 0;
      bottom: 0;
      right: 0rem;
      width: 24rem;
      background-color: #1b1b1b;
      box-shadow: 0px 4px 20px 10px rgba(62, 61, 61, 0.25);
   }
`;

export const WebNav = styled.nav`
   margin-left: 5rem;
   margin-right: 5rem;
`;

export const ActiveMobile = styled(motion.div)`
   display: none;

   @media screen and (max-width: 769px) {
      ${movingActiveState}
      display: block;
      height: 4rem;
      top: -0.4rem;
   }
`;

export const MobileBackgroundImage = styled.div`
   background-image: linear-gradient(
         90deg,
         #1b1b1b 1.78%,
         rgba(27, 27, 27, 0.37) 32.36%,
         rgba(27, 27, 27, 0) 100%
      ),
      linear-gradient(180deg, rgba(27, 27, 27, 0) 0%, #1b1b1b 100%),
      url(${({ background }) => background});

   width: 24rem;
   height: 14rem;
   background-size: cover;
   background-repeat: no-repeat;
   z-index: -1;
`;

export const MobileUserPhoto = styled(motion.img)`
   width: 8.8rem;
   height: 10.6rem;
   margin: -2.5rem auto 0 auto;
   border-radius: 1rem;
   border: 2px solid #fff;
`;

export const MobileDisplayName = styled(motion.div)`
   font-weight: 700;
   font-size: 2.4rem;
   color: ${(props) => props.theme.primaryFontColor};
   padding: 1.6rem 0 5rem 0;
   text-align: center;
`;

export const MobileLogout = styled(motion.button)`
   ${buttonReset}
   margin-top: auto;
   margin-bottom: 3rem;
   color: ${(props) => props.theme.secondaryFontColor};
   font-size: 2rem;

   &:hover {
      color: ${(props) => props.theme.primaryFontColor};
   }
`;
