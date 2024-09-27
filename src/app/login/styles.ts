import Link from "next/link";
import styled, { keyframes } from "styled-components"

export const LoginContainer = styled.div`
  width: 100%;
  display: flex;
  padding-top: 10em;

  @media screen and (max-width: 1100px) {
    flex-direction: column-reverse;
    padding-top: 3em;
    gap: 4em;
    padding-bottom: 10em;
  }
`;

export const LoginContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 3em;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const LoginInnerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 2em;
  gap: 2em;

  @media screen and (max-width: 1100px) {
    padding-right: 0;
  }
`;

export const LoginTitle = styled.span`
  font-size: 1.8em;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.secondary};

  @media screen and (max-width: 1100px) {
    font-size: 1.5em;
  }
`;

export const LoginFooterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1em;
`;

export const LoginButton = styled.button`
  background-color: ${props => props.theme.color.purple};
  width: 50%;
  padding: .6em;
  font-family: ${props => props.theme.fonts.spaceMono};
  font-weight: 700;
  font-size: 1.3em;
  color: ${props => props.theme.color.secondary};
  border-radius: 12px;
  transition: all .2s ease-in-out;

  &:hover {
    opacity: .75;
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
    font-size: 1.1em;
  }
`;

export const AnchorBack = styled(Link)`
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.variation.secondary(.40)};
  text-decoration: underline;
  transition: all .2s ease-in-out;
  font-size: .9em;

  &:hover {
    color: ${props => props.theme.color.purple};
  }

  @media screen and (max-width: 1100px) {
    font-size: .8em;
  }
`;
