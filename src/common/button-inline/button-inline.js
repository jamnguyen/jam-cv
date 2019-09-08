import React from 'react';
import buttonStyles from './button-inline-styles.module.scss';
import { CSS_CONFIG } from '../../Constants';

const ButtonInline = (props) => {
  const { type, onClick, styles, className, title } = props;

  const color = props.color || CSS_CONFIG.PRIMARY_COLOR;

  let backgroundStyle = {
    backgroundColor: color
  }

  if (color === 'lightgray' || color === 'white') {
    backgroundStyle = {
      ...backgroundStyle,
      color: 'black'
    }
  } else {
    backgroundStyle = {
      ...backgroundStyle,
      color: 'white'
    }
  }

  return (
    <button
      className={ `${buttonStyles.button} ${className}` }
      type={ type || 'button' }
      onClick={ onClick }
      style={{...styles, ...backgroundStyle}}
    >{ title }</button>
  );
}

export default ButtonInline;