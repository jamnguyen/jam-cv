import React from 'react';
import styles from './education-item-styles.module.scss';
import commonStyles from '../cv-edit-styles.module.scss';
import { TextInput, Button, ButtonInline } from '../../../common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const EducationItem = (props) => {

  const { institution, major, from, to } = props.data;
  const { onChange, onAdd, onSave, onDelete, id, initStatus } = props;
  const [status, setStatus] = React.useState(initStatus);

  const add = () => {
    onAdd(props.data);
  }

  const enableSave = () => {
    setStatus('save');
  }

  const cancel = () => {
    setStatus('read-only');
  }

  const save = () => {
    onSave(props.data);
    setStatus('read-only');
  }

  return (
    <div className={`row`}>
      <TextInput
        disabled={status === 'read-only'}
        className="col-25 pr-s"
        label="Institution"
        value={ institution }
        name="institution"
        id={ `${id}-institution` }
        type="text"
        onChange={ onChange }
      />
      <TextInput
        disabled={status === 'read-only'}
        className="col-25 pl-s pr-s"
        label="Major"
        value={ major }
        name="major"
        id={ `${id}-major` }
        type="text"
        onChange={ onChange }
      />
      <TextInput
        disabled={status === 'read-only'}
        className="col-20 pl-s pr-s"
        label="From"
        value={ from }
        name="from"
        id={ `${id}-from` }
        type="date"
        onChange={ onChange }
      />
      <TextInput
        disabled={status === 'read-only'}
        className="col-20 pl-s pr-s"
        label="To"
        value={ to }
        name="to"
        id={ `${id}-to` }
        type="date"
        onChange={ onChange }
        title="Leave empty for 'Now' value"
      />
      {
        status === 'add' ?
          <span className="col-10 pl-s">
            <div className={`${styles.formGroup}`}>
              <ButtonInline title={<FontAwesomeIcon icon={['fas', 'plus']} fixedWidth />} onClick={ add } />
            </div>
          </span>
          : (
            status === 'save' ?
              <span className="col-10 pl-s">
                <div className={`${styles.formGroup}`}>
                  <ButtonInline title={<FontAwesomeIcon icon={['fas', 'check']} fixedWidth />} onClick={ save } />
                  <ButtonInline className={`ml-s`} color="lightgray" title={<FontAwesomeIcon icon={['fas', 'times']} fixedWidth />} onClick={ cancel } />
                </div>
              </span>
            : <span className="col-10 pl-s">
                <div className={`${styles.formGroup}`}>
                  <ButtonInline title={<FontAwesomeIcon icon={['far', 'edit']} fixedWidth />} onClick={ enableSave } />
                  <ButtonInline className={`ml-s`} color="orange" title={<FontAwesomeIcon icon={['far', 'trash-alt']} fixedWidth />} onClick={ onDelete } />
                </div>
              </span>
          )
      }
    </div>
  );
}

export default EducationItem;