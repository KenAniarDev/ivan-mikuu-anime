import styled from "styled-components";
import {
   InputsMainContainer,
   ModalAccountErrorMessage,
   ModalInputContainer,
   ModalInputLabel,
   ModalInputTextbox,
} from "../../../sharedStyle";

export const LoginInputsContainer = styled.div`
   ${InputsMainContainer}
`;
export const InputsContainer = styled.div`
   ${ModalInputContainer}
`;

export const LoginLabel = styled.label`
   ${ModalInputLabel}
`;

export const LoginTextbox = styled.input`
   ${ModalInputTextbox}
`;

export const AccountErrorMessage = styled.span`
   ${ModalAccountErrorMessage}
`;
