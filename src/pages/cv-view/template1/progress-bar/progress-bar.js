import React from 'react';
import styles from './progress-bar-styles.module.scss';

const CvProgressBar = (props) => {
  const color = props.color || 'black';
  const background = props.background || 'white';
  const percentage = props.percentage || 0;
  const borderColor = props.borderColor || 'black';
  const borderWidth = props.borderWidth || 1;

  const progressStyle = {
    backgroundImage: `linear-gradient(to right, ${color} 0%, ${color} ${percentage}%, ${background} ${percentage}%)`,
    border: `${borderWidth}px solid ${borderColor}`
  }

  return (
    <div className={ styles.container } style={ progressStyle } >
    </div>
  );
}

export default CvProgressBar;