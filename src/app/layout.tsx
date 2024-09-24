'use client'

import ThemeContextProvider from "@/contexts/ThemeContext";
import GlobalLayout from "@/layout/global";
import "@/layout/globals.css";
import { cn } from "@/lib/utils"
import StyledComponentsRegistry from "./registry";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(`antialiased font-sans`)}>
        <ThemeContextProvider>
          <GlobalLayout>
            <StyledComponentsRegistry>
              {children}
            </StyledComponentsRegistry>
          </GlobalLayout>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
