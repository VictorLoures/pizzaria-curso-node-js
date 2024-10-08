import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Pizzaria - A melhor pizzaria",
  description: "A melhor pizzaria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
