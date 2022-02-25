import { motion } from "framer-motion";
import styled from "styled-components";
import LoginBackground from "../../assets/images/loginv2.jpg";
import {
   BackDrop,
   ModalBackgroundImage,
   ModalContent,
   ModalForm,
   ModalLogo,
   ModalPageDescription,
   ModalPageTitle,
   PageTitleContainer,
} from "../../sharedStyle";

export const LoginBackDrop = styled(motion.div)`
   ${BackDrop}
`;

export const LoginModalContent = styled(motion.div)`
   ${ModalContent}
`;

export const LoginModalBackgroundImage = styled.div`
   background: linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, #1b1b1b 100%),
      url(${LoginBackground});
   ${ModalBackgroundImage}
`;

export const LoginLogo = styled.img`
   ${ModalLogo}
`;

export const LoginForm = styled.form`
   ${ModalForm}
`;

export const LoginTitleWrapper = styled.div`
   ${PageTitleContainer}
`;

export const PageTitle = styled.h1`
   ${ModalPageTitle}
`;

export const PageDescription = styled.p`
   ${ModalPageDescription}
`;
