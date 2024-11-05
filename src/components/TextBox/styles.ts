import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components"

export const TextBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5em;
`;

export const TextBoxLabel = styled.label`
  font-size: 1.2em;
  font-weight: 600;
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.secondary};

  @media screen and (max-width: 1100px) {
    font-size: 1em;
  }
`;

export const TextBoxInput = styled.input`
  background-color: ${props => props.theme.color.variation.secondary(.10)};
  outline: none;
  padding: .9em 1em;
  border-radius: 12px;
  border: 2px solid ${props => props.theme.color.primary};
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.secondary};
  font-size: .9em;
  transition: all .2s ease-in-out;

  &:focus {
    border-color: ${props => props.theme.color.purple};
  }

  @media screen and (max-width: 1100px) {
    font-size: .8em;
  }
`;

export const TextBoxErrorContainer = styled.div`
  display: flex;
  gap: .3em;
  align-items: center;
  font-size: .9em;
  padding-left: 1em;
  color: ${props => props.theme.color.error};

  @media screen and (max-width: 1100px) {
    font-size: .7em;
  }
`;

export const TextBoxErrorIcon = styled(FontAwesomeIcon)`
`;

export const TextBoxError = styled.small`
  font-family: ${props => props.theme.fonts.spaceMono};
`;
