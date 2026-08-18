import "./globals.css";
import { Inter } from "next/font/google";
import { ServerThemeProvider } from "next-themes";
import Providers from "./providers";
import { generalData } from "@/data/general";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(generalData.website),
  title: `${generalData.name} - ${generalData.jobTitle}`,
  description:
    "Full-stack software engineer building dependable web and mobile products with React, React Native, Next.js and Node.js.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: generalData.website,
    siteName: `${generalData.name} - ${generalData.jobTitle}`,
    title: `${generalData.name} - ${generalData.jobTitle}`,
    description:
      "Full-stack software engineer building dependable web and mobile products with React, React Native, Next.js and Node.js.",
    images: [
      {
        url: "/me.webp",
        width: 1680,
        height: 1892,
        alt: `Portrait of ${generalData.name}`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en">
        <body className={inter.className}>
          <Providers>{children}</Providers>
        </body>
      </html>
    </ServerThemeProvider>
  );
}
