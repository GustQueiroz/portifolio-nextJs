import type React from "react";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Gustavo Queiroz - Full-Stack Developer",
  description:
    "Portfolio of a Full-Stack Developer specializing in Node.js, TypeScript, React, and Vue.js",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        <div className="relative flex min-h-screen flex-col">{children}</div>
      </body>
    </html>
  );
}

import "./globals.css";
