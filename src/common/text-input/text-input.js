import React from 'react';
import styles from './text-input-styles.module.scss';

const TextInput = (props) => {
  const { type, required, label, name, id, value, onChange, className, title, disabled, inputStyles, noMargin } = props;

  return (
    <div className={`${styles.formGroup} ${noMargin ? 'mb-none' : ''} ${className || ''}`}>
      <input
        type={ type || 'text' }
        required={ required }
        name={ name }
        id={ id || name }
        placeholder={ label }
        value={ value }
        onChange={ onChange }
        title={ title }
        disabled={ disabled }
        style={ inputStyles }
      />
      <label htmlFor={ name } >{ label }</label>
    </div>
  );
}

export default TextInput;