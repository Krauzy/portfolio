/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useContext } from 'react';
import { darkTheme, lightTheme } from '@/config/theme';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import { ThemeContext } from '@/contexts/ThemeContext';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    overflow-x: hidden;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;	
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }
`;

export const InitialPane = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${props => props.theme.color.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function GlobalLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  const { actualTheme } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={actualTheme === 'light' ? lightTheme : darkTheme} >
      <GlobalStyle />
      <InitialPane>
        {children}
      </InitialPane>
    </ThemeProvider>
  )
}
