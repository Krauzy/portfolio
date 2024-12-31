import Link from "next/link";
import styled from "styled-components";

export const CardToolContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 25%;
  transition: all .3s ease-in-out;
  background-color: ${props => props.theme.color.variation.secondary(.05)};
  padding: 14px;
  border-radius: 18px;
  border: 2px solid ${props => props.theme.color.primary};
  height: 17em;

  &:hover {
    span {
      height: 2em;
    }

    button {
      opacity: 1;
      height: fit-content;
      padding: 1em;
      font-size: 1em;
      width: 100%;
    }
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const CardToolOverhaul = styled.span<{ backgroundColor: string, foreColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.5em;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.foreColor};
  flex-direction: column-reverse;
  font-size: 2.5em;
  border-radius: 12px;
  transition: all .2s ease-in-out;
`;

export const CardToolContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em .5em;
  padding-bottom: 0;
  gap: .6em;  
  border-radius: 0 0 12px 12px;
`;

export const CardToolTitle = styled.span`
  font-weight: 600;
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.secondary};
`;

export const CardToolFooter = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 1em;
`;

export const CardToolDate = styled.span`
  color: ${props => props.theme.color.variation.secondary(.7)};
  font-family: ${props => props.theme.fonts.spaceMono};
  font-size: .7em;
`;

export const CardToolAnchor = styled.button`
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.purple};
  font-family: ${props => props.theme.fonts.spaceMono};
  width: 100%;
  padding: 1em;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  font-weight: 600;
  font-size: .8em;
  border-radius: 8px;
  opacity: 0;
  height: 0;
  padding: 0;
  font-size: 1px;
  width: 0;
  transition: all .3s ease-in-out;
  overflow: hidden;

  &:hover {
    background-color: ${props => props.theme.color.white};
    color: ${props => props.theme.color.purple};
  }
`;
