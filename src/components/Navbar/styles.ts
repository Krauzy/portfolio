import Link from "next/link";
import styled from "styled-components"

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
`;

export const LogoTitle = styled.span`
  font-family: ${props => props.theme.fonts.spaceMono};
  color: ${props => props.theme.color.secondary};
  font-size: 1.4em;
  font-weight: 600;
`;

export const MenuList = styled.div`
  display: flex;
  gap: 1.5em;
`;

export const MenuItem = styled(Link)`
  color: ${props => props.theme.color.secondary};
  font-size: 1.2em;
  font-family: ${props => props.theme.fonts.spaceMono};
  border-bottom: 2px solid ${props => props.theme.color.primary};
  transition: all .2s ease-in-out;

  &:hover {
    border-bottom: 2px solid ${props => props.theme.color.secondary};
  }
`;

export const WidgetSettings = styled.div`
  font-size: 1.4em;
  display: flex;
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

  &:hover {
    padding: 0 1.5em;
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
`;

export const LoginButton = styled.button`
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
`;
