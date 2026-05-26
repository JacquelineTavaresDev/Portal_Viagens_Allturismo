import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Portal de Viagens AllTurismo",
  description:
    "Descubra destinos incríveis ao redor do mundo com conforto, segurança e praticidade.",
};

export default function Home() {
  return (
    <section className={styles.home}>
      <h1>Bem-vindo ao Portal de Viagens</h1>

      <p>Descubra destinos incríveis ao redor do mundo.</p>

      <Link
        href="/destinos"
        className={styles.link}
        aria-label="Ir para a página de listagem de destinos turísticos"
      >
        Explorar Destinos
      </Link>
    </section>
  );
}
