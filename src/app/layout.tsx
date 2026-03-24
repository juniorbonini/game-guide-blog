import type { Metadata } from "next";
import "../theme/index.css";
import { LayoutProps } from "../interfaces/Layout/props";
import { Container } from "../components/Container";
import { Header } from "../components/Header";

export const metadata: Metadata = {
  title: "Game Guide Hub - ",
  description: "Blog com detonados de games de todas as gerações",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="pt-BR">
      <body>
        <Container>
           <Header />
          {children}
          </Container>
      </body>
    </html>
  );
}
