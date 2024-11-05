import Link from "next/link";
import styled, { css } from "styled-components"

export const ToolContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10em;
  gap: 5em;

  @media screen and (max-width: 1100px) {
    margin-top: 6em;
  }
`;

export const ToolHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

export const ToolTitle = styled.span`
  color: ${props => props.theme.color.purple};
  text-transform: uppercase;
  font-weight: 700;
  font-family: ${props => props.theme.fonts.spaceMono};
  letter-spacing: 2px;
  font-size: 2em;

  @media screen and (max-width: 1100px) {
    font-size: 1.6em;
    text-align: center;
  }
`;

export const ToolDescription = styled.p`
  font-size: 1em;
  color: ${props => props.theme.color.variation.secondary(.8)};
  font-family: ${props => props.theme.fonts.spaceMono};
  font-weight: 200;
  
  @media screen and (max-width: 1100px) {
    text-align: justify;
    font-size: .9em;
  }
`;

export const ToolContent = styled.div`
  display: flex;
  width: 100%;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
  }
`;

export const ToolCategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  gap: .6em;

  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;

export const ToolCategoriesTitle = styled.span`
  font-size: 1em;
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.variation.secondary(.9)};
  margin-bottom: .5em;
  padding: .5em 1em;
`;

export const ToolCategoryOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .6em;
  width: 100%;

  @media screen and (max-width: 1100px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const ToolCategory = styled.button<{ selected?: boolean }>`
  display: flex;
  width: fit-content;
  padding: .5em 1em;
  font-family: ${props => props.theme.fonts.spaceMono};
  font-size: .9em;
  color: ${props => props.theme.color.secondary};
  transition: all .2s ease-in-out;

  ${props => props.selected ? css`
    background-color: ${props.theme.color.variation.purple(.4)};
    color: ${props.theme.color.purple};
    border-radius: 8px;
  ` : css`
    &:hover {
      color: ${props.theme.color.pink};
    }
  `}
`;

export const ToolListContainer = styled.div`
  display: flex;
  width: 75%;
  flex-wrap: wrap;
  gap: 2em;
  padding: 1.5em;
  background-color: transparent;

  @media screen and (max-width: 1100px) {
    width: 100%;
    padding: 1.5em 0;
  }
`;

export const ToolWidget = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 25%;
  transition: all .2s ease-in-out;

  &:hover {
    box-shadow: 0 0 14px 10px ${props => props.theme.color.variation.purple(.8)};
    background-color: ${props => props.theme.color.variation.purple(.6)};
  }

  @media screen and (max-width: 1100px) {
    width: 100%;
    padding: 0 1em;
    
    &:hover {
      box-shadow: none;
      background-color: transparent;
    }
  }
`;

export const ToolWidgetOverhaul = styled.div<{ backgroundColor: string, foreColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 3.5em;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.foreColor};
  flex-direction: column-reverse;
  font-size: 2.5em;
  border-radius: 12px 12px 0 0;
`;

export const ToolWidgetContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  gap: .6em;
  border-radius: 0 0 12px 12px;
  background-color: ${props => props.theme.color.primary};
`;

export const ToolWidgetTitle = styled.span`
  font-weight: 600;
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.secondary};
`;

export const ToolWidgetFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ToolWidgetDate = styled.span`
  color: ${props => props.theme.color.variation.secondary(.7)};
  font-family: ${props => props.theme.fonts.spaceMono};
  font-size: .7em;
`;

export const ToolWidgetAnchor = styled.span`
  color: ${props => props.theme.color.secondary};
  font-family: ${props => props.theme.fonts.spaceMono};
  font-weight: 600;
  font-size: .8em;
`;
