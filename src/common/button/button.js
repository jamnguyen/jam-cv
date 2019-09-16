import React from 'react';
import buttonStyles from './button-styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Button = (props) => {

  const { type, onClick, styles, title, className, saving } = props;

  return (
    <button
      className={ `${buttonStyles.button} ${className || ''}` }
      type={ type || 'button' }
      onClick={ onClick }
      style={{...styles}}
      disabled={ saving }
    >{ saving ? <FontAwesomeIcon icon={['fas', 'compact-disc']} fixedWidth spin /> : title }</button>
  );

}

export default Button;