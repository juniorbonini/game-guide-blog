import type { Metadata } from "next";
import "../theme/index.css";

export const metadata: Metadata = {
  title: "Game Guide Hub - ",
  description: "Blog com detonados de games de todas as gerações",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-full flex flex-col bg-background">{children}</body>
    </html>
  );
}
