import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { destinos } from "../../lib/destinos";
import styles from "./page.module.css";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;

  const destino = destinos.find((d) => d.id === id);

  return {
    title: destino
      ? `${destino.nome} - Portal de Viagens`
      : "Destino não encontrado",

    description: destino
      ? destino.descricao
      : "Explore detalhes sobre o seu próximo destino.",
  };
}

export default async function DestinoDetalhe({ params }: Props) {
  const { id } = await params;

  const destino = destinos.find((d) => d.id === id);

  if (!destino) {
    notFound();
  }

  return (
    <section className={styles.container}>
      <h1 className={styles.titulo}>{destino.nome}</h1>

      <div className={styles.imagemWrapper}>
        <Image
          src={destino.imagem}
          alt={`Fotografia panorâmica de ${destino.nome}`}
          fill
          className={styles.imagem}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1024px"
          priority
        />
      </div>

      <p className={styles.descricao}>{destino.descricao}</p>
    </section>
  );
}
