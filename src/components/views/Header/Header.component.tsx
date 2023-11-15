import React from 'react';

import {Typography} from '~/components';

import styles from './Header.module.scss';

const Header: React.FC = () => (
  <header className={styles.header}>
    <Typography className={styles.header_logo}></Typography>
    <div className={styles.header_menu}>
      <Typography className={styles.header_menu_item}></Typography>
      <Typography className={styles.header_menu_item}></Typography>
      <Typography className={styles.header_menu_item}></Typography>
    </div>
  </header>
);

export default Header;
