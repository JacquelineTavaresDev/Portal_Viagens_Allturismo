import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.logo}>
        Portal de Viagens
      </Link>

      <nav aria-label="Menu principal">
        <Link href="/">Home</Link>
        <Link href="/destinos">Destinos</Link>
      </nav>
    </header>
  );
}
