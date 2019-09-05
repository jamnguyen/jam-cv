import React from 'react';
import styles from './footer-styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSettings } from '../../context/settings-provider';

const Footer = (props) => {

  const { showHeadFooter } = useSettings();

  return (
    showHeadFooter ? (
      <div className={ `${styles.footer} page-container` } >
        <div className={ styles.footerCredit }><FontAwesomeIcon icon={['far', 'copyright']} /> 2019 Jam Nguyen</div>
        <div className={ styles.footerDescription }>A simple CV template for anyone who started getting bored of their job. Find source code <a className='link' href="https://github.com/jamnguyen/jam-cv" target="_blank" rel="noopener noreferrer" >here</a>. { `:)` }</div>
      </div>
    ) : null
  );
}

export default Footer;