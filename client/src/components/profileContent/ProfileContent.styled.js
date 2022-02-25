import styled from "styled-components";
import { Container } from "../heroSection/HeroSection.styled";

export const ProfileContainer = styled(Container)`
   height: 50vh;
   background-position: center;
`;

export const Profile = styled.div`
   display: flex;
   margin-top: -12.5rem;
   margin-left: 8rem;
   gap: 2rem;

   @media screen and (max-width: 769px) {
      margin-left: 4rem;
   }
`;

export const ProfileImage = styled.img`
   width: 13rem;
   height: 15.8rem;
   object-fit: cover;
   border-radius: 2rem;
`;

export const ProfileInfo = styled.div`
   display: flex;
   flex-direction: column;
   text-align: left;
   margin-top: 0.2rem;
`;

export const ProfileDescription = styled.div`
   font-size: 1.6rem;
   color: ${(props) => props.theme.secondaryTitle};
`;

export const ProfileName = styled.h2`
   font-size: 3rem;
   color: ${(props) => props.theme.secondaryFontColor};
   font-weight: 800;
`;

export const ButtonContainer = styled.div`
   margin-top: 0.5rem;
`;
