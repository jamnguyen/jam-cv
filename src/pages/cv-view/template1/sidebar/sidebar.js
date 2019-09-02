import React from 'react';
import styles from './sidebar-styles.module.scss';
import { CSS_CONFIG } from '../../../../Constants';
import CvTitle from '../title/title';
import CvProgressBar from '../progress-bar/progress-bar';

const CvSidebar = (props) => {

  const { skills, interest } = props.cv;

  const getSkillsContent = () => {
    return skills.map((skill, index) => {
      const percentage = Math.floor(skill.level / skill.max * 100);
      return (
        <div key={ `skill-${index}` } className={ styles.skill }>
          <div className={ styles.skillName }>{ skill.name }</div>
          <div className={ styles.skillProgress } >
            <CvProgressBar percentage={ percentage } color={ CSS_CONFIG.PRIMARY_COLOR } borderColor={ CSS_CONFIG.PRIMARY_COLOR } borderWidth={ 2 } />
          </div>
        </div>
      );
    });
  }

  const getInterestContent = () => {
    return interest.map((item, index) => {
      return (
        <span key={ `interest-${index}` } className={ styles.interestItem }>{ `#${item}` }</span>
      );
    });
  }

  return (
    <React.Fragment>
      <CvTitle text="skills" />
      { getSkillsContent() }
      <CvTitle text="interest" classNames="mt-x" />
      <div className={ styles.interest } >{ getInterestContent() }</div>
    </React.Fragment>
  );
}

export default CvSidebar;