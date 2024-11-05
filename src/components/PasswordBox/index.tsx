import { faEye, faEyeSlash, faWarning } from "@fortawesome/free-solid-svg-icons";
import { PasswordBoxContainer, PasswordBoxError, PasswordBoxErrorContainer, PasswordBoxErrorIcon, PasswordBoxInput, PasswordBoxLabel, PasswordContentBox, PasswordShow } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

interface PasswordBoxProperties {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  error?: string;
}

export default function PasswordBox({
  label,
  placeholder,
  value,
  setValue,
  error
}: PasswordBoxProperties) {

  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <PasswordBoxContainer>
      <PasswordBoxLabel>{label}</PasswordBoxLabel>
      <PasswordContentBox>
        <PasswordBoxInput placeholder={placeholder} type={showPassword ? 'text' : 'password'} />
        <PasswordShow>
          <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} onClick={() => setShowPassword(!showPassword)} />
        </PasswordShow>
      </PasswordContentBox>
      {error && 
        <PasswordBoxErrorContainer>
          <PasswordBoxErrorIcon icon={faWarning} />
          <PasswordBoxError>{error}</PasswordBoxError>
        </PasswordBoxErrorContainer>
      }
    </PasswordBoxContainer>
  )
}
