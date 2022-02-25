import styled from "styled-components";
import { buttonReset } from "../../sharedStyle";

export const Container = styled.div`
   text-align: center;
   padding-top: 1.4rem;
`;

export const ChangeFormInformation = styled.span`
   color: ${(props) => props.theme.secondaryFontColor};
   margin-right: 0.5rem;
`;

export const ChangeFormButton = styled.button`
   ${buttonReset}
   color: ${(props) => props.theme.defaultButton.secondaryColor};

   &:hover {
      color: ${(props) => props.theme.defaultButton.hover};
   }
`;
