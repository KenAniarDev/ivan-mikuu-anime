import styled from "styled-components";
import {
   InputsMainContainer,
   ModalAccountErrorMessage,
   ModalInputContainer,
   ModalInputLabel,
   ModalInputTextbox,
} from "../../../sharedStyle";

export const RegisterInputsContainer = styled.div`
   ${InputsMainContainer}
`;
export const InputsContainer = styled.div`
   ${ModalInputContainer}
`;

export const RegisterLabel = styled.label`
   ${ModalInputLabel}
`;

export const RegisterTextbox = styled.input`
   ${ModalInputTextbox}
`;

export const AccountErrorMessage = styled.span`
   ${ModalAccountErrorMessage}
`;
