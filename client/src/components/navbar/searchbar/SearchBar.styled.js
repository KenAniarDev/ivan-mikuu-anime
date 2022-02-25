import { FiSearch } from "react-icons/fi";
import styled, { css } from "styled-components";

export const SearchContainer = styled.form`
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: transparent;
   border-radius: 1rem;
   gap: 1rem;
   transition: 0.5s;
   width: 3.4rem;
   height: 3.4rem;
   margin-left: auto;
   margin-right: 2.5rem;

   ${({ isFocused }) =>
      isFocused === true &&
      css`
         width: 30rem;
         padding: 0.25rem 1.5rem;
         background-color: rgba(120, 120, 120, 0.6);
         border: 2px solid #fff;
      `}

   @media screen and (max-width: 900px) {
      margin-left: auto;
   }
`;

export const SearchIcon = styled(FiSearch)`
   width: 2.4rem;
   height: 2.4rem;
   color: #fff;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
`;

export const SearchInput = styled.input`
   display: none;
   outline: none;
   font-size: 2rem;
   width: 100%;
   border: none;
   background-color: transparent;
   font-weight: 500;
   color: #fff;

   display: ${({ isFocused }) => (isFocused ? "block" : "none")};
`;
