import Link from "next/link";
import styled from "styled-components"

export const ToolContainer = styled.div`
  margin-top: 8em;
  gap: 2em;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ToolTitle = styled.span`
  font-size: 2em;
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.secondary};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;

  @media screen and (max-width: 1100px) {
    width: 100%;
    text-align: center;
  }
`;

export const ToolDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5em;
  background-color: ${props => props.theme.color.variation.secondary(.1)};
  font-family: ${props => props.theme.fonts.spaceMono};
  border-radius: 8px;
  padding: 2em;
`;

export const ToolDescriptionTitle = styled.span`
  font-size: 1.5em;
  font-weight: 700;
  color: ${props => props.theme.color.secondary};

  @media screen and (max-width: 1100px) {
    font-size: 1.3em;
  }
`;

export const ToolDescriptionSubtitle = styled.span`
  font-size: 1.1em;
  color: ${props => props.theme.color.variation.secondary(.9)};

  @media screen and (max-width: 1100px) {
    font-size: 1em;
    text-align: justify;
  }
`;

export const ToolDescriptionHeader = styled.div`
  display: flex;
  width: 100%;
  gap: 1em;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const ToolHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ToolIconContent = styled.div<{ backgroundColor: string, foreColor: string }>`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.foreColor};
  font-size: 1.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5em;
  height: 2.5em;
  border-radius: 8px;
`;

export const ToolDescriptionText = styled.p`
  color: ${props => props.theme.color.variation.secondary(.5)};

  h1 {
    font-size: 1.3em;
  }

  a {
    color: ${props => props.theme.color.purple};
    text-decoration: underline;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: .6em;
  }

  @media screen and (max-width: 1100px) {
    font-size: .9em;
  }
`;

export const ToolHeader = styled.div`
  width: 100%;
  display: flex;
`;

export const ToolBackButton = styled(Link)`
  background-color: ${props => props.theme.widget.pack1.background};
  color: ${props => props.theme.widget.pack1.color};
  padding: 1em 1.5em;
  text-transform: uppercase;
  font-weight: 600;
  font-family: ${props => props.theme.fonts.spaceMono};
  border-radius: 12px;
  transition: all .2s ease-in-out;

  &:hover {
    background-color: ${props => props.theme.widget.pack1.color};
    color: ${props => props.theme.widget.pack1.background};
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
    text-align: center;
    font-size: .9em;
    font-weight: 500;
  }
`;
