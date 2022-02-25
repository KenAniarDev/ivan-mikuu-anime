import styled from "styled-components";
import {
   InputsMainContainer,
   ModalInputContainer,
   ModalInputLabel,
   ModalInputTextbox,
} from "../../../../sharedStyle";

export const AccountDetailsContainer = styled.div`
   ${InputsMainContainer}
`;

export const SecondaryTitle = styled.h1`
   margin-bottom: 1rem;
`;

export const InputsContainer = styled.div`
   ${ModalInputContainer}
`;

export const AccountDescription = styled.label`
   ${ModalInputLabel}
`;

export const AccountInput = styled.input`
   ${ModalInputTextbox}
`;

export const AccountErrorMessage = styled.span`
   font-size: 1.2rem;
   margin-left: 0.5rem;
   color: #ff4141;
`;
