import React from 'react';
import styles from './index.module.scss';
import globalStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className={styles.page_header}>
      <header>
        <div>
          <nav className={`${globalStyles['navbar']} ${globalStyles['navbar-expand-sm']} custom-navbar`}>
            <div className={`${globalStyles['container']}`}>
              <div
                className={`${globalStyles['collapse']} ${globalStyles['navbar-collapse']}`}
                id={`${globalStyles['navbarSupportedContent']}`}
              >
                <ul className={`${globalStyles['navbar-nav']} ${globalStyles['ml-auto']}`}>
                  <li className={`${globalStyles['nav-item active']}`}>
                    <Link className={`${globalStyles['nav-link']}`} to="/home">
                      {'Home'}
                    </Link>
                  </li>
                  <li className={`${globalStyles['nav-item']}`}>
                    <Link className={`${globalStyles['nav-link']}`} to="/about-us">
                      {'About Us'}
                    </Link>
                  </li>
                  <li className={`${globalStyles['nav-item']}`}>
                    <Link className={`${globalStyles['nav-link']}`} to="/contact-us ">
                      {'Contact Us'}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};
export default Header;
