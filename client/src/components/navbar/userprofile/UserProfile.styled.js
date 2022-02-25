import { FiChevronDown } from "react-icons/fi";
import styled from "styled-components";

export const UserProfileContainer = styled.div`
   display: flex;
   align-items: center;
   cursor: pointer;
   gap: 1rem;
   position: relative;

   @media screen and (max-width: 769px) {
      display: none;
   }
`;

export const UserImage = styled.img`
   width: 4rem;
   height: 4rem;
   object-fit: cover;
   border-radius: 1rem;
   border: 2px solid #fff;
`;

export const UserDropdownIcon = styled(FiChevronDown)`
   width: 3rem;
   height: 3rem;
   color: #fff;

   animation: ${({ hide }) =>
      hide
         ? "rotate-180-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"
         : "revert-180-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both"};

   @keyframes rotate-180-cw {
      0% {
         -webkit-transform: rotate(0);
         transform: rotate(0);
      }
      100% {
         -webkit-transform: rotate(180deg);
         transform: rotate(180deg);
      }
   }

   @keyframes revert-180-cw {
      0% {
         -webkit-transform: rotate(180deg);
         transform: rotate(180deg);
      }
      100% {
         -webkit-transform: rotate(0);
         transform: rotate(0);
      }
   }
`;
