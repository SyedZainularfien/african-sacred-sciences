import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Plus_Jakarta_Sans } from "next/font/google";
import type { ReactNode } from "react";
import { absoluteUrl, siteUrl } from "@/lib/site-url";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: "African Sacred Science",
  url: absoluteUrl("/"),
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorantGaramond.variable} ${plusJakartaSans.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
