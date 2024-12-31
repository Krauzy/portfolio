import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackHomeButton, TileContainer } from "./styles";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

interface TileProperties {
  maxWidth: number;
  title: string;
  children: React.ReactNode
}

export default function Tile({ 
  maxWidth, 
  title,
  children } : Readonly<TileProperties>) {
  return (
    <TileContainer maxWidth={maxWidth}>
      <title>{title}</title>
      {children}
      <BackHomeButton>
        <FontAwesomeIcon icon={faHouse} />
      </BackHomeButton>
    </TileContainer>
  )
}
