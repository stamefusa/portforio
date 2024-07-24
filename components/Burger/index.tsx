'use client';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';
import styles from './index.module.css';

export default function Burger() {
  return (
    <div id="outer-container" className={styles.burger}>
      <Menu pageWrapId={'page-wrap'} outerContainerId={'outer-container'} right>
        <main id="page-wrap">
          <Link href="/profile" className="menu-item">
            <li className={styles.li}>Profile</li>
          </Link>
          <Link href="/" className="menu-item">
            <li className={styles.li}>Machines</li>
          </Link>
          <Link href="/contact" className="menu-item">
            <li className={styles.li}>Contact</li>
          </Link>
        </main>
      </Menu>
    </div>
  );
}
