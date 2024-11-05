import Link from "next/link";
import styled, { css } from "styled-components"
import { SheetContent, SheetTrigger } from "../ui/sheet";

export const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
  overflow-y: hidden;
`;

export const LogoTitle = styled.span`
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.secondary};
  font-size: 1.4em;
  font-weight: 600;
`;

export const MenuList = styled.div<{ off?: boolean }>`
  display: flex;
  gap: 1.5em;

  @media only screen and (max-width: 1100px) {
    ${props => props.off && css`display: none;`}
    flex-direction: column;
    align-items: center;
  }
`;

export const ResponsiveMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (min-width: 1100px) {
    display: none;
  }
`;

export const ResponsiveTrigger = styled(SheetTrigger)`
  font-size: 1.5em;
  background-color: ${props => props.theme.color.secondary};
  color: ${props => props.theme.color.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2em;
  height: 2em;
  border-radius: 50%;
`;

export const ResponsiveMenuContent = styled(SheetContent)`
  background-color: ${props => props.theme.color.primary};
  border: none;
  border-radius: 0 0 8px 8px;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 3em;
  padding: 2.5em 0;
  flex-direction: column;
`;

export const MenuItem = styled(Link)<{ selected?: boolean }>`
  color: ${props => props.theme.color.secondary};
  font-size: 1.2em;
  font-family: ${props => props.theme.fonts.spaceMono};
  border-bottom: 2px solid ${props => props.theme.color.primary};
  transition: all .2s ease-in-out;

  ${props => props.selected ? css`
    color: ${props => props.theme.color.purple};
  ` : css`
    color: ${props => props.theme.color.secondary};

    &:hover {
      border-bottom: 2px solid ${props => props.theme.color.secondary};
    }
  `}

`;

export const WidgetSettings = styled.div<{ off?: boolean }>`
  font-size: 1.4em;
  display: flex;

  @media screen and (max-width: 1100px) {
    ${props => props.off && css`display: none;`}
  }
`;

export const ThemeSwitcher = styled.button`
  background-color: ${props => props.theme.color.pink};
  width: 2.2em;
  height: 2.2em;
  border-radius: 8px 0 0 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .8s ease-in-out;
  color: ${props => props.theme.color.primary};
  font-size: 1em;

  &:hover {
    padding: 0 1.5em;
  }

  @media screen and (max-width: 1100px) {
    font-size: .8em;
  }
`;

export const LocaleSwitcher = styled.button`
  background-color: ${props => props.theme.color.yellow};
  width: 2.2em;
  height: 2.2em;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .8s ease-in-out;
  color: ${props => props.theme.color.primary};

  &:hover {
    padding: 0 1.5em;
  }

  @media screen and (max-width: 1100px) {
    font-size: .8em;
  }
`;

export const LoginButton = styled(Link)`
  background-color: ${props => props.theme.color.purple};
  height: 2.2em;
  font-weight: 600;
  padding: 0 .8em;
  border-radius: 0 8px 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all .5s ease-in-out;
  color: ${props => props.theme.color.primary};

  &:hover {
    padding: 0 1.5em;
  }

  @media screen and (max-width: 1100px) {
    font-size: .8em;
  }
`;
