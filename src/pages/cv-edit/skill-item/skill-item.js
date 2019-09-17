import React from 'react';
import styles from './skill-item-styles.module.scss';
import { TextInput, ButtonInline } from '../../../common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CSS_CONFIG } from '../../../Constants';

const SkillItem = (props) => {

  const { level, max, name } = props.data;
  const { onInputChange, onChange, onAdd, onDelete, index, initStatus } = props;
  const [status] = React.useState(initStatus);

  const add = () => {
    onAdd(props.data);
  }

  const addPoint = (value) => {
    if (level + value < 0 || level + value > max) {
      return;
    }
    onChange(index, level + value);
  }

  const color = CSS_CONFIG.PRIMARY_COLOR;
  const percentage = Math.floor(level / max * 100);
  const borderWidth = 2;
  const progressStyle = {
    backgroundImage: `linear-gradient(to right, ${color} 0%, ${color} ${percentage}%, white ${percentage}%)`,
    border: `${borderWidth}px solid ${color}`
  }

  return (
    <div className={`${styles.container} ${status === 'add' ? styles.topDivider : ''} row mb-l`}>
      {
        index >= 0 ? <div className={`${styles.order}`}>#{ index + 1 }</div> : null
      }
      <div className={`col-95 row`}>
        <TextInput
          className="col-40 pr-m"
          noMargin
          label="Skill Name"
          value={ name }
          name="name"
          id={ `skill-${index}-name` }
          type="text"
          onChange={ onInputChange }
        />
        <span className="col-5">
          <ButtonInline
            color="lightgray"
            outline
            title={<FontAwesomeIcon icon={['fas', 'minus']} fixedWidth />}
            onClick={ () => addPoint(-1) }
          />
        </span>
        <span className="col-50 pl-s pr-m">
          <div
            className={`${styles.progressBar}`}
            style={progressStyle}
          >{ `${level}/${max}` }</div>
        </span>
        <span className="col-5">
          <ButtonInline
            color="lightgray"
            outline
            title={<FontAwesomeIcon icon={['fas', 'plus']} fixedWidth />}
            onClick={ () => addPoint(1) }
          />
        </span>
      </div>
      <span className="col-5 pl-s">
      {
        status === 'add' ? (
          <ButtonInline title={<FontAwesomeIcon icon={['fas', 'plus']} fixedWidth />} onClick={ add } />
        ) : (
          <ButtonInline color="orange" title={<FontAwesomeIcon icon={['far', 'trash-alt']} fixedWidth />} onClick={ onDelete } />
        )
      }
      </span>
    </div>
  );
}

export default SkillItem;