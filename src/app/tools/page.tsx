'use client'

import Navbar from "@/components/Navbar";
import Tile from "@/components/Tile";
import getLocale from "@/config/data";
import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext, useState } from "react";
import { ToolCategoriesContainer, ToolCategoriesTitle, ToolCategory, ToolCategoryOptionsContainer, ToolContainer, ToolContent, ToolDescription, ToolHeader, ToolListContainer, ToolTitle, ToolWidget, ToolWidgetAnchor, ToolWidgetContent, ToolWidgetDate, ToolWidgetFooter, ToolWidgetOverhaul, ToolWidgetTitle } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Tools() {
  const { locale } = useContext(ThemeContext)
  const localeData = getLocale(locale);
  const title = localeData.menu.tools;
  const [selectedCategory, setSelectedCategory] = useState<number>(0);
  const categories = localeData.tools.categoryTypeList.toSorted((a, b) => a.index - b.index);

  const daysLeft = (date: Date) => {
    const now = new Date();
    const timestamp = Math.abs(now.getTime() - date.getTime());
    return Math.floor(timestamp / (1000 * 60 * 60 * 24)) - 1;
  }

  return (
    <Tile maxWidth={1440} title={`krauzy • ${title}`}>
      <Navbar selected="tools" />
      <ToolContainer>
        <ToolHeader>
          <ToolTitle>{localeData.tools.title}</ToolTitle>
          <ToolDescription>{localeData.tools.description}</ToolDescription>
        </ToolHeader>
        <ToolContent>
          <ToolCategoriesContainer>
            <ToolCategoriesTitle>{localeData.tools.categoryTitle}</ToolCategoriesTitle>
            <ToolCategoryOptionsContainer>
              {categories.map(category => (
                <ToolCategory key={category.index} selected={selectedCategory === category.index} onClick={() => setSelectedCategory(category.index)}>{category.name}</ToolCategory>
              ))}
            </ToolCategoryOptionsContainer>
          </ToolCategoriesContainer>
          <ToolListContainer>
            {localeData.tools.categoryTools.filter(tool => selectedCategory === 0 || tool.categories.includes(selectedCategory)).map(tool => (
              <ToolWidget key={tool.title} href={tool.link}>
                <ToolWidgetOverhaul backgroundColor={tool.backgroundColor} foreColor={tool.foreColor}>
                  <FontAwesomeIcon icon={tool.icon} />
                </ToolWidgetOverhaul>
                <ToolWidgetContent>
                  <ToolWidgetTitle>{tool.title}</ToolWidgetTitle>
                  <ToolWidgetFooter>
                    <ToolWidgetDate>{`${daysLeft(tool.date)} ${localeData.tools.dateDescription}`}</ToolWidgetDate>
                    <ToolWidgetAnchor>{localeData.tools.anchorDescription} →</ToolWidgetAnchor>
                  </ToolWidgetFooter>
                </ToolWidgetContent>
              </ToolWidget>
            ))}
          </ToolListContainer>
        </ToolContent>
      </ToolContainer>
    </Tile>
  )
}
