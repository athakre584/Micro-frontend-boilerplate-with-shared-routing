import React from 'react';
import styles from './index.module.scss';
import globalStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from '../header/header';
import Footer from '../footer/footer';

const Dashboard = () => {
  return (
    <div>
      {<Header />}
      <div className={styles.dashboard_page}>
        <div className={styles.banner_section}>
          <div className={styles.banner_text}>
            <h1>Welcome to Microfrontend!!</h1>
            <p>
              <strong>Microfrontend Application 1</strong>
            </p>
          </div>
        </div>
        <div className={styles.info_section}>
          <div className={`${globalStyles['container']}`}>
            <h1 className={styles.info_heading}>What We Do?</h1>
            <div className={`${globalStyles['row']}`}>
              <div className={`${globalStyles['col-md-4']}`}>
                <div className={styles.main}>
                  <div className={styles.service}>
                    <div className={styles.service_logo}>
                      <img src="https://fadzrinmadu.github.io/hosted-assets/website-design-service-section/icon-apple.png" />
                    </div>
                    <h4>App Design</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fugiat molestiae ducimus laborum voluptate quisquam adipisci
                      aut tempore cum iste nesciunt repudiandae sapiente, et
                      suscipit.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${globalStyles['col-md-4']}`}>
                <div className={styles.main}>
                  <div className={styles.service}>
                    <div className={styles.service_logo}>
                      <img src="https://fadzrinmadu.github.io/hosted-assets/website-design-service-section/icon-android.png" />
                    </div>
                    <h4>Development</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fugiat molestiae ducimus laborum voluptate quisquam adipisci
                      aut tempore cum iste nesciunt repudiandae sapiente, et
                      suscipit.
                    </p>
                  </div>
                </div>
              </div>
              <div className={`${globalStyles['col-md-4']}`}>
                <div className={styles.main}>
                  <div className={styles.service}>
                    <div className={styles.service_logo}>
                      <img src="https://fadzrinmadu.github.io/hosted-assets/website-design-service-section/icon-geography.png" />
                    </div>
                    <h4>Marketing</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fugiat molestiae ducimus laborum voluptate quisquam adipisci
                      aut tempore cum iste nesciunt repudiandae sapiente, et
                      suscipit.
                    </p>
                  </div>
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

export default Dashboard;
