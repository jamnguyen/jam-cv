import React from 'react';
import styles from './project-item-styles.module.scss';
import { TextInput, ButtonInline, TextArea } from '../../../common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ProjectItem = (props) => {

  const { business_domain, description, name, work, technology } = props.data;
  const { onChange, onAdd, onDelete, index, initStatus } = props;
  const [status] = React.useState(initStatus);

  const add = () => {
    onAdd(props.data);
  }

  return (
    <div className={`${styles.container} ${status === 'add' ? styles.topDivider : ''} row mb-s`}>
      {
        index >= 0 ? <div className={`${styles.order}`}>#{ index + 1 }</div> : null
      }
      <TextInput
        className="col-50 pr-s"
        label="Name"
        value={ name }
        name="name"
        id={ `project-${index}-name` }
        type="text"
        onChange={ onChange }
      />
      <TextInput
        className="col-45 pl-s pr-s"
        label="Business Domain"
        value={ business_domain }
        name="business_domain"
        id={ `project-${index}-business-domain` }
        type="text"
        onChange={ onChange }
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
      <TextInput
        className="col-50 pr-s"
        label="Description"
        value={ description }
        name="description"
        id={ `project-${index}-description` }
        type="text"
        onChange={ onChange }
      />
      <TextInput
        className="col-45 pl-s pr-s"
        label="Technology"
        value={ technology }
        name="technology"
        id={ `project-${index}-technology` }
        type="text"
        onChange={ onChange }
      />
      <TextArea
        className="col-95 pr-s"
        label="Your Work"
        value={ work }
        name="work"
        id={ `exp-${index}-work` }
        onChange={ onChange }
        inputStyles={{ height: '10rem' }}
      />
    </div>
  );
}

export default ProjectItem;