import type { Metadata } from "next";
import { destinos } from "../lib/destinos";
import CardDestino from "../components/CardDestino";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Destinos Turísticos | Portal de Viagens",
  description: "Explore destinos incríveis para sua próxima viagem.",
};

export default function Destinos() {
  return (
    <section className={styles.container}>
      <h1>Destinos Turísticos</h1>

      <div className={styles.grid}>
        {destinos.map((destino) => (
          <CardDestino
            key={destino.id}
            id={destino.id}
            nome={destino.nome}
            imagem={destino.imagem}
          />
        ))}
      </div>
    </section>
  );
}
