import styled, { keyframes } from "styled-components"

const translateMotion = keyframes`
  0% { transform: translate(0px, -10px) }
  50% { transform: translate(0px, 10px) }
  100% { transform: translate(0px, -10px) }
`

export const Motion = styled.span<{ color: string }>`
  color: ${props => props.theme.color[props.color ?? "secondary"]};
  animation: ${translateMotion} 3s ease-in-out infinite;
  font-size: 2.5em;
`;
