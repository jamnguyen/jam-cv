import React from 'react';
import styles from './template1-styles.module.scss';
import CvHeader from './header/header';
import CvMain from './main/main';
import CvSidebar from './sidebar/sidebar';

const CvTemplate1 = (props) => {

  const { cv } = props;
  if (!cv) {
    return;
  }

  return (
    <div className={ `${styles.cv} page-container mt-x` }>
      <CvHeader cv={ cv } />
      <div className={ `${styles.body} mt-x` }>
        <div className={ styles.main }>
          <CvMain cv={ cv } />
        </div>
        <div className={ styles.sidebar }>
          <CvSidebar cv={ cv } />
        </div>
      </div>
    </div>
  );
}

export default CvTemplate1;
