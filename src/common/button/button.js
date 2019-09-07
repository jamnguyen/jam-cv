import React from 'react';
import buttonStyles from './button-styles.module.scss';

const Button = (props) => {

  const { type, onClick, styles, title } = props;

  return (
    <button
      className={ `${buttonStyles.button}` }
      type={ type || 'button' }
      onClick={ onClick }
      style={{...styles}}
    >{ title }</button>
  );

}

export default Button;