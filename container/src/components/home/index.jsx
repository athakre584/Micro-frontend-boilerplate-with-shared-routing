import React from 'react';

import styles from './index.module.scss';
import globalStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return (
    <button className={`${styles.error_btn} ${globalStyles['btn-primary']} row `}>
      Success
    </button>
  );
};
export default Home;
