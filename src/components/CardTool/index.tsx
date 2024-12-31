import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { CardToolAnchor, CardToolContainer, CardToolContent, CardToolDate, CardToolFooter, CardToolOverhaul, CardToolTitle } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import getLocale from "@/config/data";
import { ThemeContext } from "@/contexts/ThemeContext";

interface CardToolProperties {
  title: string;
  foreColor: string;
  backgroundColor: string;
  icon: IconProp;
  link: string;
  date: Date;
}

export default function CardTool({
  link,
  backgroundColor,
  foreColor,
  icon,
  title,
  date
} : CardToolProperties) {

  const { locale } = useContext(ThemeContext)
  const localeData = getLocale(locale);

  const daysLeft = (date: Date) => {
    const now = new Date();
    const timestamp = Math.abs(now.getTime() - date.getTime());
    return Math.floor(timestamp / (1000 * 60 * 60 * 24)) - 1;
  }

  return (
    <CardToolContainer href={link}>
      <CardToolOverhaul backgroundColor={backgroundColor} foreColor={foreColor}>
        <FontAwesomeIcon icon={icon} />
      </CardToolOverhaul>
      <CardToolContent>
        <CardToolTitle>{title}</CardToolTitle>
        <CardToolFooter>
          <CardToolDate>{`${daysLeft(date)} ${localeData.tools.dateDescription}`}</CardToolDate>
          <CardToolAnchor>{localeData.tools.anchorDescription}</CardToolAnchor>
        </CardToolFooter>
      </CardToolContent>
    </CardToolContainer>
  )
}
