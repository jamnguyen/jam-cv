import React from 'react';
import styles from './text-input-styles.module.scss';

const TextInput = (props) => {
  const { type, required, label, name, value, onChange, className } = props;

  return (
    <div className={`${styles.formGroup} ${className}`}>
      <input
        type={ type || 'text' }
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

export default TextInput;