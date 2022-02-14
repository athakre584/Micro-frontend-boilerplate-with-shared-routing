import React from 'react';
import styles from './index.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <p>&copy; 2022 MicrofrontEnd Boilerplate. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
