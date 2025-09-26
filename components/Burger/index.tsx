'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Squash as Hamburger } from 'hamburger-react';
import { Menu, MenuItem } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import styles from './index.module.css';

export default function Burger() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.burger}>
      <Menu
        menuButton={
          <div className={styles.hamburgerButton}>
            <Hamburger toggled={isOpen} toggle={setOpen} size={24} />
          </div>
        }
        transition
        align="end"
        arrow={false}
        onMenuChange={(e) => setOpen(e.open)}
      >
        <MenuItem>
          <Link href="/profile" className={styles.menuLink}>
            Profile
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/" className={styles.menuLink}>
            Machines
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="/contact" className={styles.menuLink}>
            Contact
          </Link>
        </MenuItem>
      </Menu>
    </div>
  );
}
