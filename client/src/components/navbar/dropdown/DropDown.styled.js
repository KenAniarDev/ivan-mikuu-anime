import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { buttonReset } from "../../../sharedStyle";

export const DropdownContent = styled(motion.div)`
   position: absolute;
   padding: 1.9rem 2.2rem;
   background-color: #fff;
   min-width: 18rem;
   top: 130%;
   right: 0;
   border-radius: 0.5rem;
   box-shadow: 0 0 16px 0 rgba(12, 12, 12, 0.8);
`;

export const Description = styled.span`
   font-size: 1.2rem;
   color: #868686;
`;

const dropDownDesign = css`
   font-size: 1.6rem;
   font-weight: 400;
   color: ${(props) => props.theme.tertiaryFontColor};
   transition: all 0.3s;
   padding-top: 1rem;

   &:hover {
      color: ${(props) => props.theme.primaryFontColor};
   }
`;

export const DisplayName = styled.div`
   font-size: 1.6rem;
   border-bottom: 1px solid #dadada;
   padding-bottom: 1rem;
   font-weight: 600;
   color: ${(props) => props.theme.primaryFontColor};
`;

export const DropdownLink = styled(NavLink)`
   ${dropDownDesign}
   text-decoration: none;
   display: block;
`;

export const DropdownButton = styled.button`
   ${buttonReset}
   ${dropDownDesign}

   padding-bottom: 0.5rem;
`;
