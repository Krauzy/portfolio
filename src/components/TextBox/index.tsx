import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { TextBoxContainer, TextBoxError, TextBoxErrorContainer, TextBoxErrorIcon, TextBoxInput, TextBoxLabel } from "./styles";
import { useEffect } from "react";

interface TextBoxProperties {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  error?: string;
  isNumber?: boolean;
  maxWidth?: number;
}

export default function TextBox({
  label,
  placeholder,
  value,
  setValue,
  error,
  isNumber,
  maxWidth
}: Readonly<TextBoxProperties>) {

  useEffect(() => {}, [error]);

  return (
    <TextBoxContainer>
      <TextBoxLabel>{label}</TextBoxLabel>
      <TextBoxInput maxLength={maxWidth} placeholder={placeholder} value={value} onChange={(e) => {
        if (isNumber) {
          if (!isNaN(Number(e.target.value))) {
            setValue(e.target.value);
          }  
        } else setValue(e.target.value);
      }} />
      {error && 
        <TextBoxErrorContainer>
          <TextBoxErrorIcon icon={faWarning} />
          <TextBoxError>{error}</TextBoxError>
        </TextBoxErrorContainer>
      }
    </TextBoxContainer>
  )
}
