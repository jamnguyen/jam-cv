import React from 'react';
import buttonStyles from './button-inline-styles.module.scss';
import { CSS_CONFIG } from '../../Constants';

const ButtonInline = (props) => {
  const { type, onClick, styles, className, title, outline } = props;

  const color = props.color || CSS_CONFIG.PRIMARY_COLOR;
  let dynamicStyle;
  
  if (!outline) {
    dynamicStyle = {
      backgroundColor: color
    }
    if (color === 'lightgray' || color === 'white') {
      dynamicStyle = {
        ...dynamicStyle,
        color: 'black'
      }
    } else {
      dynamicStyle = {
        ...dynamicStyle,
        color: 'white'
      }
    }
  } else {
    dynamicStyle = {
      backgroundColor: 'transparent',
      borderColor: color,
      color
    }
  }

  return (
    <button
      className={ `${buttonStyles.button} ${className || ''}` }
      type={ type || 'button' }
      onClick={ onClick }
      style={{...styles, ...dynamicStyle}}
    >{ title }</button>
  );
}

export default ButtonInline;