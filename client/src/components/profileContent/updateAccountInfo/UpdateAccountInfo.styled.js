import { motion } from "framer-motion";
import styled from "styled-components";
import UpdateBackground from "../../../assets/images/howl.jpg";
import {
   BackDrop,
   ModalBackgroundImage,
   ModalContent,
   ModalForm,
   ModalLogo,
} from "../../../sharedStyle";

export const UpdateBackDrop = styled(motion.div)`
   ${BackDrop}
`;

export const UpdateModalContent = styled(motion.div)`
   ${ModalContent}
`;

export const UpdateModalBackgroundImage = styled.div`
   background: linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, #1b1b1b 100%),
      url(${UpdateBackground});
   ${ModalBackgroundImage}
`;

export const UpdateLogo = styled.img`
   ${ModalLogo}
`;

export const UpdateForm = styled.form`
   ${ModalForm}
`;
