import React from 'react';
import styles from './title-styles.module.scss';
import commonStyles from '../template1-styles.module.scss';

const CvTitle = (props) => {
  const { classNames } = props;
  const part1 = props.text.split(' ')[0];
  const part2 = props.text.substring(part1.length + 1);

  return (
    <h2 className={ `${commonStyles.heading2} ${styles.title} mb-m ${classNames || ''}` }>
      <span className={ commonStyles.fontBold }>{ part1 }</span> { part2 }
    </h2>
  );
}

export default CvTitle;