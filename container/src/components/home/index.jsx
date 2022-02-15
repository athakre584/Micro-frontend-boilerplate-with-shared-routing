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
        <div className={styles.cards_section}>
          <div className={`${globalStyles['row']}`}>
            <div className={`${globalStyles['col-md-4']}`}>
              <div className={styles.cards_item}>
                <div className={styles.card}>
                  <div className={styles.card_image}><img src={mfImage} alt="" /></div>
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
                  <div className={styles.card_image}><img src={mfImage} alt="container" /></div>
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
                  <div className={styles.card_image}><img src={mfImage} /></div>
                  <div className={styles.card_content}>
                    <h2 className={styles.card_title}>Concepts behind MFE</h2>
                    <p className={styles.card_text}>Demo of pixel perfect pure CSS </p>
                    <button className={styles.btn}>Read More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.architect_section}>
          <div className={`${globalStyles['card']} ${globalStyles['bg-dark']} text-white`} >
            <img src={architectureImage} className={`${globalStyles['card-img']}`} alt="..." />
            <div className={`${globalStyles['card-img-overlay']}`}>
              <h5 className={`${globalStyles['card-title']}`}>Microfrontend Architecture</h5>
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
      </div>
      {<Footer />}
    </div>
  );
};
export default Home;
