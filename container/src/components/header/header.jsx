import React from 'react';
import styles from './index.module.scss';
import globalStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import logo from '../../static/assets/images/logo.png';

const Header = () => {
  return (
    <header>
      <div>
        <nav className={`${globalStyles['navbar']} ${globalStyles['navbar-expand-sm']} ${globalStyles['custom-navbar']} `}>
          <div className={`${globalStyles['container']}`}>
            <div className={styles.logo}>
              <img alt="logo" src={logo} />
            </div>
            <div
              className={`${globalStyles['collapse']} ${globalStyles['navbar-collapse']}`}
              id={`${globalStyles['navbarSupportedContent']}`}
            >
              <ul className={`${globalStyles['navbar-nav']} ${globalStyles['ml-auto']}`}>
                <li className={`${globalStyles['nav-item']} active`}>
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
  );
};
export default Header;
