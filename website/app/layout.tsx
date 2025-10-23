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
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        <script dangerouslySetInnerHTML={{
          __html: `
            (function() {
              if ('connection' in navigator) {
                const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
                if (conn && (conn.effectiveType === 'slow-2g' || conn.effectiveType === '2g' || conn.saveData)) {
                  document.documentElement.classList.add('slow-connection');
                }
              }
            })();
          `
        }} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
