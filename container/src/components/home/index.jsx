import React from 'react';
import styles from './index.module.scss';
import globalStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import mfImage from '../../static/assets/images/mfe.jpg';
import architectureImage from '../../static/assets/images/architecture.png';
import Header from '../header/header';
import Footer from '../footer/footer';

const Home = () => {
  return (
    <div>
      {<Header />}
      <div className={styles.landing_page}>
        <div className={styles.banner_section}>
          <div className={styles.banner_text}>
            <h1>Welcome to Microfrontend Boiler Plate</h1>
            <p><strong>Container Application</strong></p>
          </div>
        </div>
        <div className={styles.mission}>
          <div className={`${globalStyles['container']}`}>
            <h3>Mission</h3>
            <p>Use this template for business, portfolio, ecommerce, blogs.Simple setup, add content, link to more content -- modern and beautiful!</p>
          </div>
        </div>
        <div className={styles.architect_section}>
          <div className={`${globalStyles['container']}`}>
            <div className={`${globalStyles['row']}`}>
              <div className={`${globalStyles['col-lg-6']}`}>
                <img className={`${globalStyles['w-150']} ${globalStyles['shadow']} ${globalStyles['p-3']} ${globalStyles['mt-5']}`} src={architectureImage} />
              </div>
              <div className={`${globalStyles['col-lg-6']}`}>
                <div className={`${globalStyles['p-5']} ${globalStyles['mt-4']}`}>
                  <h1 className={`${globalStyles['display-4']}`}>Microfrontend Architecture</h1>
                  <p className={styles.lead}>Crows nest schooner ho scallywag hail-shot gabion salmagundi. Doubloon careen code of conduct lugsail hulk ye long clothes. </p>
                  <a href="#" className={`${globalStyles['btn']} ${globalStyles['btn-outline-dark']}`}>Read More</a>
                </div>
              </div>
            </div>
            <div className={styles.cards_section}>
              <div className={`${globalStyles['row']}`}>
                <div className={`${globalStyles['col-md-4']}`}>
                  <div className={styles.cards_item}>
                    <div className={styles.card}>
                      <div className={styles.card_image}><img src={mfImage} alt="image" /></div>
                      <div className={styles.card_content}>
                        <h2 className={styles.card_title}>What is microfrontend?</h2>
                        <p className={styles.card_text}>Demo of pixel perfect pure CSS </p>
                        <button className={styles.btn}>Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${globalStyles['col-md-4']}`}>
                  <div className={styles.cards_item}>
                    <div className={styles.card}>
                      <div className={styles.card_image}><img src={mfImage} alt="image" /></div>
                      <div className={styles.card_content}>
                        <h2 className={styles.card_title}>What is container?</h2>
                        <p className={styles.card_text}>Demo of pixel perfect pure CSS</p>
                        <button className={styles.btn}>Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${globalStyles['col-md-4']}`}>
                  <div className={styles.cards_item}>
                    <div className={styles.card}>
                      <div className={styles.card_image}><img src={mfImage}  alt="image"/></div>
                      <div className={styles.card_content}>
                        <h2 className={styles.card_title}>Concepts behind Microfrontend</h2>
                        <p className={styles.card_text}>Demo of pixel perfect pure CSS </p>
                        <button className={styles.btn}>Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.section_primary}>
          <div className={styles.three_point_section}>
            <div className={`${globalStyles['row']}`}>
              <div className={`${globalStyles['col-md-4']}`}>
                <div className={styles.features}>
                  <i className="fa fa-bolt"></i>
                  <p> Say cool stuff here</p>
                </div>
              </div>
              <div className={`${globalStyles['col-md-4']}`}>
                <div className={styles.features}>
                  <i className="fa fa-bank"></i>
                  <p>This is why its great.  Heres the one thing you should know about the microfrontend.
                  </p>
                </div>
              </div>
              <div className={`${globalStyles['col-md-4']}`}>
                <div className={styles.features}>
                  <i className="fa fa-heart"></i>
                  <p>
                    Still curious?  Find out more by clicking on the link.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {<Footer />}
    </div>
  );
};
export default Home;
