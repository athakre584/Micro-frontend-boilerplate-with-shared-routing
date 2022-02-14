import React from 'react';
import styles from './index.module.scss';
import globalStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import mfImage from '../../static/assets/images/mfe.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
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
      <div className={styles.landing_page}>
        <div className={styles.banner_section}>
          <div className={styles.banner_text}>
            <h1>Welcome to Microfrontend Boiler Plate</h1>
            <p><strong>Container Application</strong></p>
            <button>Get Started</button>
          </div>
        </div>
        <div className={styles.card}>
          <div className={`${globalStyles['row']}`}>
            <div className={`${globalStyles['col-md-4']}`}>
              <div className={styles.cards_item}>
                <div className={styles.card}>
                  <div className={styles.card_image}><img src={mfImage} alt=""/></div>
                  <div className={styles.card_content}>
                    <h2 className={styles.card_title}>What is microfrontend?</h2>
                    <p className={styles.card_text}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className={styles.btn}>Read More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${globalStyles['col-md-4']}`}>
              <div className={styles.cards_item}>
                <div className={styles.card}>
                  <div className={styles.card_image}><img src={mfImage} alt="container"/></div>
                  <div className={styles.card_content}>
                    <h2 className={styles.card_title}>What is container?</h2>
                    <p className={styles.card_text}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className={styles.btn}>Read More</button>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${globalStyles['col-md-4']}`}>
              <div className={styles.cards_item}>
                <div className={styles.card}>
                  <div className={styles.card_image}><img src={mfImage}/></div>
                  <div className={styles.card_content}>
                    <h2 className={styles.card_title}>Concepts behind Microfrontend</h2>
                    <p className={styles.card_text}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                    <button className={styles.btn}>Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section_primary}>
          <div className={styles.three_point_section}>
            <div className={styles.features}>
              <i className="fa fa-bolt"></i>
              <p> Say cool stuff here</p>
            </div>

            <div className={styles.features}>
              <i className="fa fa-bank"></i>
              <p>This is why its great.  Heres the one thing you should know about the microfrontend.
              </p>
            </div>
            <div className={styles.features}>
              <i className="fa fa-heart"></i>
              <p>
     Still curious?  Find out more by clicking on the link.
              </p>
            </div>
          </div>
        </div>
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
      </div>
    </div>
  );
};
export default Home;
