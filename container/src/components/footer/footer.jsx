import React from 'react';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import globalStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import facebook from '../../static/assets/images/facebook.png';
import twitter from '../../static/assets/images/twitter.png';
import skype from '../../static/assets/images/skype.png';
import linkedIn from '../../static/assets/images/linkedin.png';
import logo from '../../static/assets/images/logo.png';

const Footer = () => {
  return (
    <div className={styles.page_footer}>
      <footer>
        <div className={`${globalStyles['container']}`}>
          <div className={`${globalStyles['row']} mx-auto`}>
            <div className={`${globalStyles['col-lg-3']}`}>
              <div className={styles.mouritech_address}>
                <div className={styles.footer_logo}>
                  <img src={logo} alt="Logo" />
                </div>
                <address>
                  {' Tarabai Park, Kolhapur - 416003'}
                </address>
                <div className={styles.phone_no}>Phone: (123)456-789</div>
                <div className={styles.mouritech_email}>
                  {' Email: mouritech@example.com'}
                </div>
              </div>
            </div>
            <div className={`${globalStyles['col-lg-3']}`}>
              <h6 className={styles.footer_heading}>Useful Links</h6>
              <ul className={`${styles.footer_links} ${globalStyles['nav']} flex-column `}>
                <li className={`${globalStyles['nav-item']}`}>
                  <Link className={`${globalStyles['nav-link']}`} to="/home">Home</Link>
                </li>
                <li className={`${globalStyles['nav-item']}`}>
                  <Link className={`${globalStyles['nav-link']}`} to="/about ">About Us</Link>
                </li>
                <li className={`${globalStyles['nav-item']}`}>
                  <Link className={`${globalStyles['nav-link']}`} to="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>
            <div className={`${globalStyles['col-lg-3']}`}>
              <h6 className={styles.footer_heading}>Help</h6>
              <ul className={`${styles.footer_links} ${globalStyles['nav']} flex-column `}>
                <li className={`${globalStyles['nav-item']}`}>
                  <Link className={`${globalStyles['nav-link']}`} to=" ">Terms and Conditions</Link>
                </li>
              </ul>
            </div>
            <div className={`${globalStyles['col-lg-3']}`}>
              <h6 className={styles.footer_heading}>Our Social network</h6>
              <p className={styles.social_para}>
                {'To stay connected with'}
                <br />
                {'join us on our '}
                <br />
                {'social network'}
              </p>
              <ul className={`${styles.social_icons} ${globalStyles['nav']}`}>
                <li className={`${globalStyles['nav-item']}`}>
                  <Link className={`${globalStyles['nav-link']}`} to=" ">
                    <img src={twitter} alt="twitter" className={`${globalStyles['imgfluid']}`} />
                  </Link>
                </li>
                <li className={`${globalStyles['nav-item']}`}>
                  <Link className={`${globalStyles['nav-link']}`} to=" ">
                    <img src={skype} alt="skype" className={`${globalStyles['imgfluid']}`}/>
                  </Link>
                </li>
                <li className={`${globalStyles['nav-item']}`}>
                  <Link className={`${globalStyles['nav-link']}`} to=" ">
                    <img src={linkedIn} alt="linkedin" className={`${globalStyles['imgfluid']}`}/>
                  </Link>
                </li>
                <li className={`${globalStyles['nav-item']}`}>
                  <Link className={`${globalStyles['nav-link']}`} to=" ">
                    <img src={facebook} alt="facebook" className={`${globalStyles['imgfluid']}`} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className={styles.custom_hr} />
          <div className={styles.footer_bottom}>
            <p className={`${styles.copyright_para} ${globalStyles['mb-0']} mt-2 `}>
              <span>&copy;</span>
              {'Copyright 2022 All Rights Reserved'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
