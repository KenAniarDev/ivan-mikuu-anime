import { css } from "styled-components";

export const buttonReset = css`
   border: none;
   background-color: transparent;
   cursor: pointer;
   transition: 0.1s;
`;

export const movingActiveState = css`
   position: absolute;
   z-index: -1;
   width: 100%;
   background-color: ${(props) => props.theme.glowingButton.backgroundColor};
   border: ${(props) => props.theme.glowingButton.border};
   box-shadow: ${(props) => props.theme.glowingButton.boxShadow};
   border-radius: 1rem;
`;

export const BackDrop = css`
   position: fixed;
   inset: 0;
   width: 100%;
   max-height: 100vh;
   background: rgba(49, 49, 49, 0.33);
   border-radius: 16px;
   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
   backdrop-filter: blur(7.6px);
   -webkit-backdrop-filter: blur(7.6px);
   z-index: 99999;
   display: flex;
   justify-content: center;
   align-items: center;
   overflow: auto;
`;

export const ModalContent = css`
   background-color: #1b1b1b;
   border-radius: 2rem;
   position: relative;
   overflow: hidden;
   max-width: 100%;
   width: 48rem;
   margin: auto 2rem;
`;

export const ModalBackgroundImage = css`
   width: 100%;
   height: 24rem;
   background-size: cover;
   background-repeat: no-repeat;
   position: relative;
`;

export const InputsMainContainer = css`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   margin-top: 4.5rem;
   color: ${(props) => props.theme.secondaryFontColor};
`;

export const ModalInputContainer = css`
   display: flex;
   flex-direction: column;
`;

export const ModalInputLabel = css`
   padding: 0.5rem 0;
   font-size: 1.4rem;
`;

export const ModalInputTextbox = css`
   border: none;
   outline: none;
   border-radius: 0.5rem;
   padding: 0.5em 1em;
   background-color: #3f3f3f;
   color: ${(props) => props.theme.secondaryFontColor};
`;

export const ModalLogo = css`
   position: absolute;
   top: 7rem;
   left: 4rem;
   z-index: 2;
`;

export const ModalForm = css`
   padding: 0 4rem 5rem 4rem;
   margin-top: -8rem;
`;

export const PageTitleContainer = css`
   margin-top: -8rem;
   color: ${(props) => props.theme.secondaryFontColor};
   z-index: 2;
   position: relative;
`;

export const ModalPageTitle = css`
   font-size: 6rem;
   font-weight: 800;
`;

export const ModalPageDescription = css`
   width: 30rem;
`;

export const ModalAccountErrorMessage = css`
   padding-top: 0.5rem;
   padding-bottom: 0.5rem;
   color: #f17771;
   font-size: 1.4rem;
`;
