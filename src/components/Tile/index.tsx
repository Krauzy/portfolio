import { TileContainer } from "./styles";

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
    </TileContainer>
  )
}
