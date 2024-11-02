import styled, { keyframes } from "styled-components"

const colorLoop = keyframes`
  0% {
    color: #5865F2;
  }
  20% {
    color: #EB459E;
  }
  40% {
    color: #FEE75C;
  }
  60% {
    color: #57F287;
  }
  80% {
    color: #ED4245;
  }
  100% {
    color: #5865F2;
  }
`;

export const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: ${props => props.theme.color.variation.primary(.9)};
  font-size: 5em;
  transition: all .2s ease-in-out;
  animation: ${colorLoop} 2s ease-in-out infinite;
`;
