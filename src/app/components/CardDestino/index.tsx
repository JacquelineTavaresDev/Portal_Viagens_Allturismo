import Link from "next/link";
import Image from "next/image";
import styles from "./CardDestino.module.css";

type Props = {
  id: string;
  nome: string;
  imagem: string;
};

export default function CardDestino({ id, nome, imagem }: Props) {
  return (
    <Link
      href={`/destinos/${id}`}
      className={styles.card}
      aria-label={`Ver detalhes sobre o destino ${nome}`}
    >
      <div className={styles.imagemWrapper}>
        <Image
          src={imagem}
          alt={`Imagem do destino ${nome}`}
          fill
          className={styles.imagem}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <h3 className={styles.titulo}>{nome}</h3>
    </Link>
  );
}
