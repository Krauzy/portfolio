import styled from "styled-components"

export const TileContainer = styled.div<{ maxWidth: number }>`
  width: 100%;
  max-width: ${props => `${props.maxWidth}px`};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.4em 2em;
`
