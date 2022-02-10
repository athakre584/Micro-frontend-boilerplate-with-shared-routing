import React from 'react';

import styles from './index.module.scss';
import globalStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import bgImage from '../../static/assets/images/bg-image.jpg';

const Home = () => {
  return (
    <div className={styles.landingPage}>
      <button className={`${styles.error_btn} ${globalStyles['btn-primary']} row `}>
      Success
      </button>
      <div>
        <nav>
          <div className={styles.logo}>
            <div className={styles.arrow_down}></div>
          </div>
          <ul>
            <li><a className={`${globalStyles['nav-link']}`} href="#hero-section">Home</a></li>
            <li><a className={`${globalStyles['nav-link']}`} href="#about-us">About</a></li>
            <li><a className={`${globalStyles['nav-link']}`} href="#services">Services</a></li>
            <li><a className={`${globalStyles['nav-link']}`} href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className={styles.banner}>
          <div className="container">
            <div className={styles.banner_text}>
              <h1>Welcome to Microfrontend Boiler Plate</h1>
              <p><strong>Container Application</strong></p>
              <button>Get Started</button>
            </div>
          </div>
          <img className={styles.banner_image} src={bgImage} alt="monitoring" />
        </div>

        <div className={styles.card_container}>
          <div className={styles.card}>
            <div className={`${globalStyles['row']}`}>
              <div className={`${globalStyles['col-12']}`}>
                <div className={`${globalStyles['col-md-4']}`}>
                  <div className={styles.cards_item}>
                    <div className={styles.card}>
                      <div className={styles.card_image}><img src="https://picsum.photos/500/300/?image=2"/></div>
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
                      <div className={styles.card_image}><img src="https://picsum.photos/500/300/?image=5"/></div>
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
                      <div className={styles.card_image}><img src="https://picsum.photos/500/300/?image=5"/></div>
                      <div className={styles.card_content}>
                        <h2 className={styles.card_title}>Concepts behind Microfrontend</h2>
                        <p className={styles.card_text}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                        <button className={styles.btn}>Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${globalStyles['col-md-4']}`}>
                  <div className={styles.cards_item}>
                    <div className={styles.card}>
                      <div className={styles.card_image}><img src="https://picsum.photos/500/300/?image=2"/></div>
                      <div className={styles.card_content}>
                        <h2 className={styles.card_title}>Benefits of Microfrontend</h2>
                        <p className={styles.card_text}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                        <button className={styles.btn}>Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
               
                <div className= {`${globalStyles['col-md-4']}`}>
                  <div className={styles.cards_item}>
                    <div className={styles.card}>
                      <div className={styles.card_image}><img src="https://picsum.photos/500/300/?image=5"/></div>
                      <div className={styles.card_content}>
                        <h2 className={styles.card_title}>Ways to implement Microfrontend</h2>
                        <p className={styles.card_text}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                        <button className={styles.btn}>Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${globalStyles['col-md-4']}`}>
                  <div className={styles.cards_item}>
                    <div className={styles.card}>
                      <div className={styles.card_image}><img src="https://picsum.photos/500/300/?image=2"/></div>
                      <div className={styles.card_content}>
                        <h2 className={styles.card_title}>Microfrontend Architecture</h2>
                        <p className={styles.card_text}>Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                        <button className={styles.btn}>Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.section_primary}>
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
        </section>
        <footer>
          <div className={styles.container}>
            <ul>
              <li><a href="#">Weblinks</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Mainpage</a></li>
            </ul>
            <p>&copy; 2022 MicrofrontEnd Boilerplate. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Home;
