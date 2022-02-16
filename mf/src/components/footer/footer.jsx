import React from 'react';
import styles from './index.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <ul>
          <li>
            <a className={styles.footer_links} href="#">
              Home
            </a>
          </li>
          <li>
            <a className={styles.footer_links} href="#">
              About
            </a>
          </li>
          <li>
            <a className={styles.footer_links} href="#">
              Contact
            </a>
          </li>
        </ul>
        <p>&copy; 2022 MicrofrontEnd Boilerplate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
