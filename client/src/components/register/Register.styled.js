import { motion } from "framer-motion";
import styled from "styled-components";
import registerBackground from "../../assets/images/regv2.jpg";
import {
    BackDrop,
    ModalBackgroundImage,
    ModalContent,
    ModalForm,
    ModalLogo,
    ModalPageDescription,
    ModalPageTitle,
    PageTitleContainer
} from "../../sharedStyle";


export const RegisterBackDrop = styled(motion.div)`
   ${BackDrop}
`;

export const RegisterModalContent = styled(motion.div)`
   ${ModalContent}
`;

export const RegisterModalBackgroundImage = styled.div`
   background: linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, #1b1b1b 100%),
      url(${registerBackground});
   ${ModalBackgroundImage}
`;

export const RegisterLogo = styled.img`
   ${ModalLogo}
`;

export const RegisterForm = styled.form`
   ${ModalForm}
`;

export const RegisterTitleWrapper = styled.div`
   ${PageTitleContainer}
`;

export const PageTitle = styled.h1`
   ${ModalPageTitle}
`;

export const PageDescription = styled.p`
   ${ModalPageDescription}
`;

