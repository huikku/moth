import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MOTH — Minimal Overhead Technical Hierarchy",
  description: "Compact notation for technical specifications, PRDs, and coding rules. Optimized for AI coding agents.",
  keywords: ["MOTH", "PRD", "specification", "coding rules", "architecture", "AI", "LLM"],
  authors: [{ name: "huikku" }],
  openGraph: {
    title: "MOTH — Minimal Overhead Technical Hierarchy",
    description: "Compact notation for technical specifications, PRDs, and coding rules.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
