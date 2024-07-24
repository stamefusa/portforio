import Image from 'next/image';
import Link from 'next/link';
import styles from './index.module.css';
import Burger from '@/components/Burger';

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="SIMPLE"
          className={styles.logo}
          width={348}
          height={133}
          priority
        />
      </Link>
      <Burger />
    </header>
  );
}
