import React from 'react';
import styles from './index.module.scss';
import globalStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../../static/assets/images/logo.png';

const Header = () => {
  return (
    <header>
      <div>
        <nav className={`${styles.nav_bar} ${globalStyles['navbar']} ${globalStyles['navbar-expand-sm']} ${globalStyles['custom-navbar']} `}>
          <div className={`${globalStyles['container']}`}>
            <div className={`${globalStyles['brand-logo']}`}>
              <Link to="/home"><img className={styles.logo} alt="logo" src={logo} /></Link>
            </div>
            <div
              className={`${globalStyles['collapse']} ${globalStyles['navbar-collapse']}`}
              id={`${globalStyles['navbarSupportedContent']}`}
            >
              <ul className={`${styles.navbar_nav} ${globalStyles['navbar-nav']} ${globalStyles['ml-auto']}`}>
                <li className={`${styles.nav_item} ${globalStyles['nav-item']} `}>
                  <Link className={`${styles.nav_link} ${globalStyles['nav-link']} `} to="/home">
                    {'Home'}
                  </Link>
                </li>
                <li className={`${styles.nav_item} ${globalStyles['nav-item']}`}>
                  <Link className={`${styles.nav_link} ${globalStyles['nav-link']}`} to="/about-us">
                    {'About Us'}
                  </Link>
                </li>
                <li className={`${styles.nav_item} ${globalStyles['nav-item']}`}>
                  <Link className={`${styles.nav_link} ${globalStyles['nav-link']}`} to="/contact-us ">
                    {'Contact Us'}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
