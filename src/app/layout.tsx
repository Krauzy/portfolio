import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { LanguageProvider } from "@/components/providers/LanguageProvider";
import { ScrollMotionController } from "@/components/providers/ScrollMotionController";
import { profileMeta } from "@/data/i18n";
import { cn } from "@/lib/cn";

config.autoAddCss = false;

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display"
});

export const metadata: Metadata = {
  title: `${profileMeta.name} | ${profileMeta.role}`,
  description: profileMeta.summary,
  metadataBase: new URL("https://portfolio.local"),
  openGraph: {
    title: `${profileMeta.name} | ${profileMeta.role}`,
    description: profileMeta.summary,
    type: "website"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020207"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn(inter.variable, spaceGrotesk.variable)}>
      <body className="min-h-screen overflow-x-hidden bg-background font-sans antialiased">
        <LanguageProvider>
          <ScrollMotionController />
          <Navbar />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
