import type { Metadata } from "next";
import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Portal de Viagens AllTurismo",
  description:
    "Encontre os melhores destinos turísticos mundiais. Explore Paris, Roma, Rio de Janeiro e Tóquio com conforto, segurança e máxima velocidade.",
  keywords: [
    "viagens",
    "turismo",
    "roteiros",
    "destinos",
    "allturismo",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
