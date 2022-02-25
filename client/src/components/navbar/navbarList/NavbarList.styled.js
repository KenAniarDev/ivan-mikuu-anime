import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { movingActiveState } from "../../../sharedStyle";

export const NavList = styled(motion.ul)`
   display: flex;
   gap: 3rem;
   transition: 0.3s;

   @media screen and (max-width: 769px) {
      flex-direction: column;
      align-items: center;
      padding: 0 2rem;
   }
`;

export const NavItem = styled(motion.li)`
   transition: 0.1s;

   @media screen and (max-width: 769px) {
      width: 100%;
      text-align: center;
      position: relative;
   }
`;

export const NavItemMobile = styled(NavItem)`
   display: none;
   @media screen and (max-width: 769px) {
      display: block;
   }
`;

export const NavLinks = styled(NavLink)`
   text-decoration: none;
   color: #fff;
   font-size: 2rem;
   font-weight: 400;
   position: relative;

   @media screen and (min-width: 769px) {
      &.${({ activeclassname }) => activeclassname} {
         &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -0.8rem;
            background-color: currentColor;
            animation: slide-in-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
               both;
         }
      }
   }

   @keyframes slide-in-top {
      0% {
         -webkit-transform: translateY(0.5rem);
         transform: translateY(0.5rem);
         opacity: 0;
      }
      100% {
         -webkit-transform: translateY(0);
         transform: translateY(0);
         opacity: 1;
      }
   }
`;

export const ActiveMobile = styled(motion.div)`
   display: none;

   @media screen and (max-width: 769px) {
      ${movingActiveState}
      display: block;
      height: 4.2rem;
      top: 50%;
      transform: translateY(-50%) !important;
   }
`;
