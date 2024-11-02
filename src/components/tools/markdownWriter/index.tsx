import { useContext, useEffect, useState } from "react";
import { MarkdownContent, MarkdownShow, MarkdownWriterBox } from "./styles";
import getLocale from "@/config/data";
import { ThemeContext } from "@/contexts/ThemeContext";
import { ToolBackButton, ToolContainer, ToolDescription, ToolDescriptionHeader, ToolDescriptionSubtitle, ToolDescriptionText, ToolDescriptionTitle, ToolHeader, ToolHeaderContent, ToolIconContent, ToolTitle } from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MarkdownWriter() {

  const slug = 'markdown-writer';

  const { locale } = useContext(ThemeContext)
  const localeData = getLocale(locale);
  const actualTool = localeData.tools.categoryTools.filter(categoryTool => categoryTool.slug === slug)[0];
  
  const [content, setContent] = useState<string>("");
  const [markdownContent, setMarkdownContent] = useState<string>("");
  
  function markdownToHtml(markdown: string): string {
    markdown = markdown.replace(/^(#{1,6})\s*(.+)$/gm, (_, hashes, content) => {
      const level = hashes.length;
      return `<h${level}>${content}</h${level}>`;
    });  
    markdown = markdown.replace(/(\*\*|__)(.*?)\1/g, '<strong>$2</strong>');
    markdown = markdown.replace(/(\*|_)(.*?)\1/g, '<em>$2</em>');
    markdown = markdown.replace(/\[([^\[]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2">$1</a>');
    markdown = markdown.replace(/\!\[([^\[]+)\]\((https?:\/\/[^\)]+)\)/g, '<img src="$2" alt="$1">');
    markdown = markdown.replace(/^(\*|\-|\+)\s+(.+)$/gm, '<ul><li>$2</li></ul>');
    markdown = markdown.replace(/```(.*)```/g, '<pre><code>$1</code></pre>');
    markdown = markdown.replace(/`([^`]+)`/g, '<code>$1</code>');
    markdown = markdown.replace(/^>\s+(.+)$/gm, '<blockquote>$1</blockquote>');
  
    return markdown;
  }

  useEffect(() => {
    if (content) {
      setMarkdownContent(markdownToHtml(content));
    } 
    else setMarkdownContent("");
  }, [content]);

  return (
    <ToolContainer>
      <ToolHeader>
        <ToolBackButton href={'/tools'}>{localeData.tools.backMessage}</ToolBackButton>
      </ToolHeader>
      <ToolTitle>{actualTool.title ?? ''}</ToolTitle>
      <MarkdownContent>
        <MarkdownWriterBox placeholder="# Title example" value={content} onChange={(e) => setContent(e.target.value)} />
        <MarkdownShow dangerouslySetInnerHTML={{ __html: markdownContent }} />
      </MarkdownContent>
      <ToolDescription>
        <ToolDescriptionHeader>
          <ToolIconContent backgroundColor={actualTool.backgroundColor} foreColor={actualTool.foreColor} >
            <FontAwesomeIcon icon={actualTool.icon} />
          </ToolIconContent>
          <ToolHeaderContent>
            <ToolDescriptionTitle>{actualTool.title}</ToolDescriptionTitle>
            <ToolDescriptionSubtitle>{actualTool.subtitle}</ToolDescriptionSubtitle>
          </ToolHeaderContent>
        </ToolDescriptionHeader>
        <ToolDescriptionText dangerouslySetInnerHTML={{__html: actualTool.description}} />
      </ToolDescription>
    </ToolContainer>
  )
}
