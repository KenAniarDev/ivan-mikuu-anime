import styled, { css } from "styled-components";
import { buttonReset } from "../../../sharedStyle";

export const MenuBtn = styled.button`
   ${buttonReset}
   z-index: 99;
   position: relative;
   transition: all 0.5s ease-in-out;
   width: 2.2rem;
   height: 2.8rem;
   display: none;

   @media screen and (max-width: 769px) {
      display: flex;
      justfy-content: center;
      align-items: center;
   }
`;

const burgerMenu = css`
   height: 0.3rem;
   background: #fff;
   border-radius: 10000px;
   transition: all 0.5s ease-in-out;
   cursor: pointer;
`;

export const MenuIcon = styled.div`
   ${burgerMenu};
   width: 2.2rem;

   ${({ isHidden }) =>
      isHidden &&
      css`
         transform: translateY(1.6rem);
         background: transparent;
      `}

   &::before,
   &::after {
      content: "";
      position: absolute;
      ${burgerMenu};
      right: 0;
   }

   &::before {
      transform: translateY(-0.8rem);
      width: 2.2rem;

      ${({ isHidden }) =>
         isHidden &&
         css`
            transform: rotate(-45deg) translate(1rem, -1rem);
         `}
   }

   &::after {
      transform: translateY(0.8rem);
      width: 1.5rem;

      ${({ isHidden }) =>
         isHidden &&
         css`
            transform: rotate(45deg) translate(-1rem, -1rem);
            width: 2.2rem;
         `}
   }
`;
