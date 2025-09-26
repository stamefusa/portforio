import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/logo.png" alt="stamefusa.jp" width={305} height={64} priority />
        </Link>
      </div>
    </header>
  );
}
