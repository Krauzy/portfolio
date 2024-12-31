import styled from "styled-components"

export const TileContainer = styled.div<{ maxWidth: number }>`
  width: 100%;
  max-width: ${props => `${props.maxWidth}px`};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.4em 2em;
`;

export const BackHomeButton = styled.button`
  position: fixed;
  right: 2em;
  bottom: 2em;
  color: ${props => props.theme.color.variation.secondary()};

`;
