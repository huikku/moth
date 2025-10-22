import type { Metadata } from "next";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
