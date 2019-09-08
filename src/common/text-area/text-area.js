import React from 'react';
import styles from './text-area-styles.module.scss';

const TextArea = (props) => {
  const { required, label, name, value, onChange, className } = props;

  return (
    <div className={`${styles.formGroup} ${className || ''}`}>
      <textarea
        required={ required }
        name={ name }
        id={ name }
        placeholder={ label }
        value={ value }
        onChange={ onChange }
      />
      <label htmlFor={ name } >{ label }</label>
    </div>
  );
}

export default TextArea;