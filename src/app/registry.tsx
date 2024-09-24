'use client'
 
import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import isPropValid from '@emotion/is-prop-valid'
 
export default function StyledComponentsRegistry({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())
 
  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })
 
  if (typeof window !== 'undefined') return <>{children}</>
 
  return (
    <StyleSheetManager 
      shouldForwardProp={(prop) => isPropValid(prop)} 
      sheet={styledComponentsStyleSheet.instance}
    >
      {children}
    </StyleSheetManager>
  )
}
