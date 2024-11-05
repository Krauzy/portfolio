import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { TextBoxContainer, TextBoxError, TextBoxErrorContainer, TextBoxErrorIcon, TextBoxInput, TextBoxLabel } from "./styles";

interface TextBoxProperties {
  label: string;
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  error?: string;
}

export default function TextBox({
  label,
  placeholder,
  value,
  setValue,
  error
}: TextBoxProperties) {
  return (
    <TextBoxContainer>
      <TextBoxLabel>{label}</TextBoxLabel>
      <TextBoxInput placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
      {error && 
        <TextBoxErrorContainer>
          <TextBoxErrorIcon icon={faWarning} />
          <TextBoxError>{error}</TextBoxError>
        </TextBoxErrorContainer>
      }
    </TextBoxContainer>
  )
}
