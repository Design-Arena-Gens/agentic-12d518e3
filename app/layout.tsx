import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Finance Dashboard",
  description: "Next-gen AI-powered finance management",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
