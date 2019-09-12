import React from 'react';
import styles from './education-item-styles.module.scss';
import { TextInput, ButtonInline } from '../../../common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EducationItem = (props) => {

  const { institution, major, from, to } = props.data;
  const { onChange, onAdd, onDelete, index, initStatus } = props;
  const [status, setStatus] = React.useState(initStatus);

  const add = () => {
    onAdd(props.data);
  }

  return (
    <div className={`${styles.container} ${status === 'add' ? styles.topDivider : ''} row mb-s`}>
      {
        index >= 0 ? <div className={`${styles.order}`}>#{ index + 1 }</div> : null
      }
      <TextInput
        className="col-25 pr-s"
        label="Institution"
        value={ institution }
        name="institution"
        id={ `edu-${index}-institution` }
        type="text"
        onChange={ onChange }
      />
      <TextInput
        className="col-30 pl-s pr-s"
        label="Major"
        value={ major }
        name="major"
        id={ `edu-${index}-major` }
        type="text"
        onChange={ onChange }
      />
      <TextInput
        className="col-20 pl-s pr-s"
        label="From"
        value={ from }
        name="from"
        id={ `edu-${index}-from` }
        type="date"
        onChange={ onChange }
      />
      <TextInput
        className="col-20 pl-s pr-s"
        label="To"
        value={ to }
        name="to"
        id={ `edu-${index}-to` }
        type="date"
        onChange={ onChange }
        title="Leave empty for 'Now' value"
      />
      <span className="col-5 pl-s">
      {
        status === 'add' ? (
          <div className={`${styles.formGroup}`}>
            <ButtonInline title={<FontAwesomeIcon icon={['fas', 'plus']} fixedWidth />} onClick={ add } />
          </div>
        ) : (
          <div className={`${styles.formGroup}`}>
            <ButtonInline color="orange" title={<FontAwesomeIcon icon={['far', 'trash-alt']} fixedWidth />} onClick={ onDelete } />
          </div>
        )
      }
      </span>
    </div>
  );
}

export default EducationItem;