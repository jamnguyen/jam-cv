import React from 'react';
import styles from './text-area-styles.module.scss';

const TextArea = (props) => {
  const { required, label, name, id, value, onChange, className, disabled, inputStyles } = props;

  return (
    <div className={`${styles.formGroup} ${className || ''}`}>
      <textarea
        disabled={ disabled }
        required={ required }
        name={ name }
        id={ id || name }
        placeholder={ label }
        value={ value }
        onChange={ onChange }
        style={ inputStyles }
      />
      <label htmlFor={ name } >{ label }</label>
    </div>
  );
}

export default TextArea;