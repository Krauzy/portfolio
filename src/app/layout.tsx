'use client'

import ThemeContextProvider from "@/contexts/ThemeContext";
import GlobalLayout from "@/layout/global";
import "@/layout/globals.css";
import { cn } from "@/lib/utils"
import StyledComponentsRegistry from "./registry";
import LoadingContextProvider from "@/contexts/LoadingContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(`antialiased font-sans`)} suppressHydrationWarning>
        <ThemeContextProvider>
          <GlobalLayout>
            <StyledComponentsRegistry>
              <LoadingContextProvider>
                {children}
              </LoadingContextProvider>
            </StyledComponentsRegistry>
          </GlobalLayout>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
