'use client'

import Navbar from "@/components/Navbar";
import Tile from "@/components/Tile";
import FitMetric from "@/components/tools/fitMetric";
import MarkdownWriter from "@/components/tools/markdownWriter";
import WordCounter from "@/components/tools/wordCounter";
import { useEffect, useState } from "react";

interface DataTools {
  tools: {
    slug: string;
    render: React.ReactNode;
  }[];
}

export default function Tool({
  params,
}: Readonly<{
  params: Promise<{ slug: string }>
}>) {

  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    params.then(({ slug }) => {
      setSlug(slug);
    })
  }, [params]);

  const dataTools: DataTools = {
    tools: [
      {
        slug: 'markdown-writer',
        render: <MarkdownWriter />
      },
      {
        slug: 'word-counter',
        render: <WordCounter />
      },
      {
        slug: 'fit-metric',
        render: <FitMetric />
      }
    ]
  }
  
  return (
    <Tile maxWidth={1440} title={`krauzy • ${slug}`}>
      <Navbar selected="tools" />
      {slug && dataTools.tools.filter(tool => tool.slug === slug)[0].render}
    </Tile>
  )
}
