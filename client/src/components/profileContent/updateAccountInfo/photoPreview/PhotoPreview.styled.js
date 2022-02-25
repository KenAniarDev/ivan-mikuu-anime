import { FiImage } from "react-icons/fi";
import styled from "styled-components";

export const PhotoContainer = styled.div`
   position: relative;
   display: inline-flex;
`;

export const ProfilePhoto = styled.img`
   width: 16rem;
   height: 20rem;
   object-fit: cover;
   border-radius: 1rem;
   background-color: ${(props) => props.theme.title};
`;

export const UpdatePhotoContainer = styled.div`
   position: absolute;
   margin: 1rem;
   bottom: 0;
   display: flex;
   width: 100%;
   right: 0;
`;

export const UpdatePhoto = styled.input`
   display: none;
`;

export const UpdateLabel = styled.label`
   color: ${(props) => props.theme.glowingButton.color};
   display: flex;
   align-items: center;
   padding: 0.25em 0.5em;
   gap: 1rem;
   border-radius: 0.5rem;
   cursor: pointer;
   margin-left: auto;
   background: ${(props) => props.theme.glowingButton.backgroundColor};
   border: ${(props) => props.theme.glowingButton.border};
   box-shadow: ${(props) => props.theme.glowingButton.boxShadow};
   width: 3.6rem;
   overflow: hidden;
   transition: 0.3s;

   &:hover {
      width: 13.8rem;
   }
`;

export const UpdateIconContainer = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
`;

export const UpdateIcon = styled(FiImage)``;

export const UpdateText = styled.div`
   font-size: 1.4rem;
   width: 100%;
   white-space: nowrap;
`;
