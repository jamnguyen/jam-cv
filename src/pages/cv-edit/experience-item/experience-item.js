import React from 'react';
import styles from './experience-item-styles.module.scss';
import { TextInput, ButtonInline, TextArea } from '../../../common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ExperienceItem = (props) => {

  const { company, position, from, to, work } = props.data;
  const { onChange, onAdd, onDelete, index, initStatus } = props;
  const [status, setStatus] = React.useState(initStatus);

  const add = () => {
    onAdd(props.data);
  }

  return (
    <div className={`${styles.container} row mb-s`}>
      {
        index >= 0 ? <div className={`${styles.order}`}>#{ index + 1 }</div> : null
      }
      <TextInput
        className="col-25 pr-s"
        label="Company"
        value={ company }
        name="company"
        id={ `exp-${index}-company` }
        type="text"
        onChange={ onChange }
      />
      <TextInput
        className="col-30 pl-s pr-s"
        label="Position"
        value={ position }
        name="position"
        id={ `exp-${index}-position` }
        type="text"
        onChange={ onChange }
      />
      <TextInput
        className="col-20 pl-s pr-s"
        label="From"
        value={ from }
        name="from"
        id={ `exp-${index}-from` }
        type="date"
        onChange={ onChange }
      />
      <TextInput
        className="col-20 pl-s pr-s"
        label="To"
        value={ to }
        name="to"
        id={ `exp-${index}-to` }
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
      <TextArea
        className="col-90 pr-s"
        label="Work Description"
        value={ work }
        name="work"
        id={ `exp-${index}-work` }
        onChange={ onChange }
        inputStyles={{ height: '10rem' }}
      />
    </div>
  );
}

export default ExperienceItem;