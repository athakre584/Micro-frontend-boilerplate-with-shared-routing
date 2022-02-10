import React from 'react';
import styles from './index.module.scss';

const Dashboard = () => {
  return (
    <div>
      {/* <h1 className={styles.title_header}>Dashboard</h1> */}
      <nav>
        <div className={styles.logo}>
          <div className={styles.arrow_down}></div>
        </div>
        <ul>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      <header className={styles.bgimage}>
        <div className={styles.container}>
          <h1>Welcome to the Microfrontend !!</h1>
          <a href="#" className={styles.btn}>
            Get Started
          </a>
        </div>
      </header>

      <section className="">
        <div className={styles.container}>
          <div className="col-7">
            {/* <div className={styles.details}>
              <h3>SAMPLE TEMPLATE</h3>
              <p>Simple Parallax Landing Page</p>
            </div> */}
            <div className={styles.container}>
              <div className="row">
                <div className="col-lg-12 d-flex">
                  <div className="col-md-4">
                    <div className={styles.card}>
                      <img
                        className={styles.card_icon}
                        src="https://image.ibb.co/cFV8mR/monitoring.png"
                        alt="monitoring"
                      />
                      <h3 className={styles.card_title}>Monitoring</h3>
                      <p className={styles.card_text}>
                        Collect metrics on visibility, monitor Droplet performance
                        and receive alerts when problems arise in your
                        infrastructure–at no additional cost.
                      </p>
                      <a className={styles.card_link} href="#">
                        Learn more
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={styles.card}>
                      <img
                        className={styles.card_icon}
                        src="https://image.ibb.co/jfmg6R/cloud_firewalls.png"
                        alt="monitoring"
                      />
                      <h3 className={styles.card_title}>Cloud Firewalls</h3>
                      <p className={styles.card_text}>
                        Perfect for both staging and production deployments, cloud
                        firewalls let you easily secure your infrastructure and
                        define what services are visible on your Droplets–at no
                        additional cost.
                      </p>
                      <a className={styles.card_link} href="#">
                        Learn more
                      </a>
                    </div>
                  </div>
                  {/* <div className="mb-30 col-md-6 col-lg-4"> */}
                  <div className="col-md-4">
                    <div className={styles.card}>
                      <img
                        className={styles.card_icon}
                        src="https://image.ibb.co/fcnzt6/team_management.png"
                        alt="team management"
                      />
                      <h3 className={styles.card_title}>Team Management</h3>
                      <p className={styles.card_text}>
                        With Digital Teams you can invite and manage users, ensure
                        security with two-factor authentication, and control your
                        resource spend with centralized billing–at no additional
                        cost.
                      </p>
                      <a className={styles.card_link} href="#">
                        Learn more
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={styles.card}>
                      <img
                        className={styles.card_icon}
                        src="https://image.ibb.co/evyiLm/backups.png"
                        alt="monitoring"
                      />
                      <h3 className={styles.card_title}>Backups</h3>
                      <p className={styles.card_text}>
                        Backups run automatically on your Droplets each week and are
                        stored for four weeks–add 20% of monthly Droplet cost.
                      </p>
                      <a className={styles.card_link} href="#">
                        Learn more
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={styles.card}>
                      <img
                        className={styles.card_icon}
                        src="https://image.ibb.co/g9bERR/snapshots.png"
                        alt="snapshots"
                      />
                      <h3 className={styles.card_title}>Snapshots</h3>
                      <p className={styles.card_text}>
                        Scale out your system effortlessly. Just take a snapshot of
                        an existing server, then spin up a new Droplet from the
                        snapshot–add $0.05 per gigabyte per month.
                      </p>
                      <a className={styles.card_link} href="#">
                        Learn more
                      </a>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className={styles.card}>
                      <img
                        className={styles.card_icon}
                        src="https://image.ibb.co/cFV8mR/monitoring.png"
                        alt="monitoring"
                      />
                      <h3 className={styles.card_title}>Monitoring</h3>
                      <p className={styles.card_text}>
                        Collect metrics on visibility, monitor Droplet performance
                        and receive alerts when problems arise in your
                        infrastructure–at no additional cost.
                      </p>
                      <a className={styles.card_link} href="#">
                        Learn more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section_primary_alt}>
        <div className={styles.container}>
          <h3>Remember this brand.</h3>
          <p>
            Use this template for business, portfolio, ecommerce, blogs.Simple setup,
            add content, link to more content -- modern and beautiful!
          </p>
        </div>
      </section>

      <section className={styles.section_primary_light}>
        <div className={styles.container}>
          <blockquote className={styles.testimonial}>
            <p>
              Slick parallax! Clean design thats easy to read! Gets your message
              across with no distractions. Love it
            </p>
            <cite>Satisfied Customer</cite>
          </blockquote>
        </div>
      </section>

      <section className={styles.section_primary_alt}>
        <div className={styles.bg_image}>
          <div className={styles.bg_image_2}>
            <div className={styles.text_center}>
              <div className={styles.text_center}>
                <h3>Reasons to buy this product:</h3>
                <div className="col-5">
                  <div className={styles.text_left}>
                    <ul>
                      <li>Its the best</li>
                      <li>Its awesome</li>
                      <li>It makes you happy</li>
                      <li>It brings world peace</li>
                      <li>Its free!</li>
                    </ul>
                  </div>
                </div>
                <div className="col-5">
                  <div className={styles.text_left}>
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
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="container">
          <h3>You know you like it.</h3>
          <a href="#" className={styles.btn}>
            Customize yours now!
          </a>
        </div>
      </section>

      <footer>
        <div className="container">
          <ul>
            <li>
              <a href="#">Weblinks</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Mainpage</a>
            </li>
          </ul>
          <p>&copy; 2022 MicrofrontEnd Boilerplate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
