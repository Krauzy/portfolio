import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components"

export const PasswordBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5em;
`;

export const PasswordBoxLabel = styled.label`
  font-size: 1.2em;
  font-weight: 600;
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.secondary};

  @media screen and (max-width: 1100px) {
    font-size: 1em;
  }
`;

export const PasswordShow = styled.button`
  font-size: 1em;
  color: ${props => props.theme.color.purple};
`;

export const PasswordContentBox = styled.div`
  display: flex;
  background-color: ${props => props.theme.color.variation.secondary(.10)};
  padding: .8em 1em;
  border-radius: 12px;
  border: 2px solid ${props => props.theme.color.primary};
  transition: all .2s ease-in-out;
  
  &:focus-within {
    border-color: ${props => props.theme.color.purple};
  }

  @media screen and (max-width: 1100px) {
    padding: .6em 1em;
  }
`;

export const PasswordBoxInput = styled.input`
  background-color: transparent;
  outline: none;
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.secondary};
  font-size: .9em;
  width: 100%;
  padding: 0;

  @media screen and (max-width: 1100px) {
    font-size: .8em;
  }
`;

export const PasswordBoxErrorContainer = styled.div`
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

export const PasswordBoxErrorIcon = styled(FontAwesomeIcon)`
`;

export const PasswordBoxError = styled.small`
  font-family: ${props => props.theme.fonts.spaceMono};
`;
