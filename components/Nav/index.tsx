import Link from 'next/link';
import styles from './index.module.css';

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <Link href="/profile">
          <li className={styles.li}>Profile</li>
        </Link>
        <Link href="/">
          <li className={styles.li}>Machines</li>
        </Link>
        <Link href="/contact">
          <li className={styles.li}>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
