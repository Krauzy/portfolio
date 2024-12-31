import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BackHomeButton, TileContainer } from "./styles";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

interface TileProperties {
  maxWidth: number;
  title: string;
  children: React.ReactNode
}

export default function Tile({ 
  maxWidth, 
  title,
  children 
} : Readonly<TileProperties>) {
  const [disableAnchor, setDisableAnchor] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setDisableAnchor(window.scrollY === 0);
      };
      window.addEventListener('scroll', handleScroll);
      
      return () => { window.removeEventListener('scroll', handleScroll); }
    }
  }, []);

  return (
    <TileContainer maxWidth={maxWidth}>
      <title>{title}</title>
      {children}
      <BackHomeButton 
        onClick={() => {
          setDisableAnchor(true); 
          scrollTo({ top: 0 })
        }} 
        disable={disableAnchor} >
        <FontAwesomeIcon icon={faHouse} />
      </BackHomeButton>
    </TileContainer>
  )
}
