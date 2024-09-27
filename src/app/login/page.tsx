'use client'

import Navbar from "@/components/Navbar";
import Tile from "@/components/Tile";
import getLocale from "@/config/data";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext, useState } from "react";
import { AnchorBack, LoginButton, LoginContainer, LoginContent, LoginFooterContainer, LoginInnerContent, LoginTitle } from "./styles";
import { GhostAsset, GhostAssetContainer } from "../styles";
import TextBox from "@/components/TextBox";
import PasswordBox from "@/components/PasswordBox";

export default function Login() {

  const { locale } = useContext(ThemeContext)
  const localeData = getLocale(locale);
  const title = 'login';

  const [email, setEmail] = useState<string>('');
  const [emailError, setEmailError] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [passwordError, setPasswordError] = useState<boolean>(false);

  return (
    <Tile maxWidth={1440} title={`krauzy • ${title}`}>
      <Navbar />
      <LoginContainer>
        <LoginContent>
          <LoginTitle>LOGIN</LoginTitle>
          <LoginInnerContent>
            <TextBox 
              placeholder={localeData.login.emailPlaceholder}
              label={localeData.login.email}
              value={email}
              setValue={setEmail}
              error={emailError ? localeData.login.emailError : undefined}
            />
            <PasswordBox 
              placeholder={localeData.login.passwordPlaceholder}
              label={localeData.login.password}
              value={password}
              setValue={setPassword}
              error={passwordError ? localeData.login.passwordError : undefined}
            />
          </LoginInnerContent>
          <LoginFooterContainer>
            <LoginButton>{localeData.login.loginButton}</LoginButton>
            <AnchorBack href={'/'}>{localeData.login.back}</AnchorBack>
          </LoginFooterContainer>
        </LoginContent>
        <GhostAssetContainer>
          <GhostAsset src={'/assets/ghost.svg'} />
        </GhostAssetContainer>
      </LoginContainer>
    </Tile>
  )
}
