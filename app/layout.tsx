import { Inter, Playfair_Display, Rubik } from "next/font/google";
import { defaultMetadata, siteConfig } from "@/lib/seo";
import {
  JsonLd,
  mobileAppJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/structured-data";
import "./globals.css";

// No `weight` -> Next loads the variable font: one file covering 300-900.
const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  display: "swap",
});

// Only the italic cut is used, for the accent words.
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = defaultMetadata;

export const viewport = {
  themeColor: siteConfig.themeColor,
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.language}
      className={`${rubik.variable} ${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="bg-page flex min-h-full flex-col text-white">
        {children}
        <JsonLd data={organizationJsonLd} />
        <JsonLd data={websiteJsonLd} />
        <JsonLd data={mobileAppJsonLd} />
      </body>
    </html>
  );
}
