'use client'

import Navbar from "@/components/Navbar";
import Tile from "@/components/Tile";
import MarkdownWriter from "@/components/tools/markdownWriter";
import WordCounter from "@/components/tools/wordCounter";

interface DataTools {
  tools: {
    slug: string;
    render: React.ReactNode;
  }[];
}

export default function Tool({ params } : Readonly<{ params: { slug: string } }>) {

  const dataTools: DataTools = {
    tools: [
      {
        slug: 'markdown-writer',
        render: <MarkdownWriter />
      },
      {
        slug: 'word-counter',
        render: <WordCounter />
      }
    ]
  }

  return (
    <Tile maxWidth={1440} title={`krauzy • ${params.slug}`}>
      <Navbar selected="tools" />
      {dataTools.tools.filter(tool => tool.slug === params.slug)[0].render}
    </Tile>
  )
}
