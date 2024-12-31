import styled from "styled-components"

export const TileContainer = styled.div<{ maxWidth: number }>`
  width: 100%;
  max-width: ${props => `${props.maxWidth}px`};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.4em 2em;

  @media screen and (max-width: 1100px) {
    font-size: .8em !important;
  }
`;

export const BackHomeButton = styled.button<{ disable?: boolean }>`
  position: fixed;
  right: 2em;
  bottom: 2em;
  color: ${props => props.theme.color.white};
  background-color: ${props => props.theme.color.purple};
  padding: 1em;
  border-radius: 12px;
  transition: all .2s ease-in-out;
  font-size: 1.1em;
  border: 1px solid ${props => props.theme.color.purple};
  opacity: ${props => props.disable ? '0' : '1'};

  &:hover {
    background-color: ${props => props.theme.color.white};
    color: ${props => props.theme.color.purple};
  }
`;
