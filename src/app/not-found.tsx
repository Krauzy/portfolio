'use client'

import getLocale from "@/config/data";
import { ThemeContext } from "@/contexts/ThemeContext";
import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import styled, { keyframes } from "styled-components"

const Container404 = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconMotion = keyframes`
  0% {
    font-size: 0em;
  }
  50% {
    font-size: 6em;
  }
  100% {
    font-size: 0em;
  }
`;

export const Icon = styled.span<{ x: number, y: number }>`
  position: fixed;
  bottom: ${props => props.y}px;
  right: ${props => props.x}px;
  z-index: 990;
  font-size: 3em;
  color: ${props => props.theme.color.secondary};
  font-size: 6em;
  animation: ${IconMotion} 3s ease-in-out infinite;
  opacity: .6;
`;

export const Content404 = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2em;
  z-index: 999;
`;

export const Title404 = styled.h1`
  font-family: ${props => props.theme.fonts.spaceMono};
  font-size: 10em;
  font-weight: 700;
  color: ${props => props.theme.color.purple};
`;

export const BackButton404 = styled(Link)`
  font-family: ${props => props.theme.fonts.spaceMono};
  padding: 1em 2em;
  background-color: ${props => props.theme.color.purple};
  color: ${props => props.theme.color.white};
  border-radius: 12px;
  transition: all .2s ease-in-out;
  border: 2px solid ${props => props.theme.color.purple};
  font-weight: 600;
  text-transform: uppercase;

  &:hover {
    background-color: ${props => props.theme.color.white};
    color: ${props => props.theme.color.purple};
  }
`;

export default function NotFound() {

  const { locale } = useContext(ThemeContext)
  const localeData = getLocale(locale);

  const [screen, setScreen] = useState<{ x: number, y: number} | undefined>();
  
  const randomizer = (max: number) => Math.floor(Math.random() * (max + 1));
  
  const generateRandomList = () => {
    return Array.from({ length: 25 }, () => Math.floor(Math.random() * (100 + 1)));
  };
  
  const [arr, setArr] = useState<number[]>(generateRandomList());
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScreen({
        x: window.screen.width,
        y: window.screen.height,
      });

      const intervalId = setInterval(() => {
        setArr(generateRandomList());
      }, 3000);
      
      return () => clearInterval(intervalId);
    }
  }, []);

  const renderGhost = useCallback((screenX: number, screenY: number, key: number) => {
    if (screenX > 0 && screenY > 0) {
      
      const y = randomizer(screenY);
      const x = randomizer(screenX);
  
      return (
        <Icon x={x} y={y} key={`key-${key}`}>
          <FontAwesomeIcon icon={faGhost} />  
        </Icon>
      )
    }
  }, [screen]);

  return (
    <Container404>
      {screen && arr && arr.map((value) => (renderGhost(screen.x, screen.y, value + Math.random())))}
      <Content404>
        <Title404>404</Title404>
        <BackButton404 href="/">{localeData.notFound.backButton}</BackButton404>
      </Content404>
    </Container404>
  )
}
