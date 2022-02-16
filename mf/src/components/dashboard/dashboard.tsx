import React from 'react';
import styles from './dashboard.module.scss';

const Dashboard = () => {
  return (
    <div>
      <nav>
        <div className={styles.logo}>
          <div className={styles.arrow_down} />
        </div>
        <ul>
          <li>
            <a className="nav-link" href="#home-section">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#about-us">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.banner_section}>
        <div className={styles.banner_text}>
          <h1>Welcome to Microfrontend!!</h1>
          <p>
            <strong>Microfrontend Application 1</strong>
          </p>
          <button>Get Started</button>
        </div>
      </div>

      <div className={styles.info_section}>
        <div className={`${styles.container}`}>
          <h1 className={styles.info_heading}>What We Do?</h1>
          <div className={`${styles.row}`}>
            <div className={`${styles['col-md-4']}`}>
              <div className={styles.main}>
                <div className={styles.service}>
                  <div className={styles.service_logo}>
                    <img src="https://fadzrinmadu.github.io/hosted-assets/website-design-service-section/icon-apple.png" />
                  </div>
                  <h4>App Design</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat molestiae
                    ducimus laborum voluptate quisquam adipisci aut tempore cum iste nesciunt
                    repudiandae sapiente, et suscipit.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles['col-md-4']}`}>
              <div className={styles.main}>
                <div className={styles.service}>
                  <div className={styles.service_logo}>
                    <img src="https://fadzrinmadu.github.io/hosted-assets/website-design-service-section/icon-android.png" />
                  </div>
                  <h4>Development</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat molestiae
                    ducimus laborum voluptate quisquam adipisci aut tempore cum iste nesciunt
                    repudiandae sapiente, et suscipit.
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles['col-md-4']}`}>
              <div className={styles.main}>
                <div className={styles.service}>
                  <div className={styles.service_logo}>
                    <img src="https://fadzrinmadu.github.io/hosted-assets/website-design-service-section/icon-geography.png" />
                  </div>
                  <h4>Marketing</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat molestiae
                    ducimus laborum voluptate quisquam adipisci aut tempore cum iste nesciunt
                    repudiandae sapiente, et suscipit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.section_primary_alt}>
        <div className={styles.features}>
          <div className={styles.bg_image_2}>
            <h3>Reasons to buy this product:</h3>
            <div className={`${styles['col-5']}`}>
              <ul>
                <li>Its the best</li>
                <li>Its awesome</li>
                <li>It makes you happy</li>
                <li>It brings world peace</li>
                <li>Its free!</li>
              </ul>
            </div>
            <div className={`${styles['col-5']}`}>
              <ul>
                <li>Youre the best</li>
                <li>Youre awesome</li>
                <li>You make you happy</li>
                <li> You bring world peace</li>
                <li>You like free!</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <p>&copy; 2022 MicrofrontEnd Boilerplate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
