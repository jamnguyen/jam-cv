import React from 'react';
import styles from './main-styles.module.scss';
import commonStyles from '../template1-styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CvTitle from '../title/title';

const CvMain = (props) => {
  const { cv } = props;
  const { experiences, educations, projects } = cv;

  const getExpContent = () => {

    return experiences.map((exp, index) => (
      <div
        key={ `exp-${index}` }
        className={ styles.timelineItem }
      >
        <div className={ styles.timelineIcon } >
          <span className={ `${commonStyles.fontSemiBold}` }>{ exp.fromInFormat } - { exp.toInFormat }</span><FontAwesomeIcon icon={['fas', 'angle-right']} fixedWidth />
        </div>
        <div className={ styles.timelineContent } >
          <div className={ `${styles.timelineOrganization} ${commonStyles.fontBold}` } >{ exp.company }</div>
          <div className={ `${styles.timelineTitle} mb-s` } >{ exp.position }</div>
          <div className={ styles.timelineWork } >{ exp.work }</div>
        </div>
      </div>
    ));
  }

  const getEduContent = () => {
    return educations.map((edu, index) => (
      <div
        key={ `edu-${index}` }
        className={ styles.timelineItem }
      >
        <div className={ styles.timelineIcon } >
          <span className={ `${commonStyles.fontSemiBold}` }>{ edu.fromInFormat } - { edu.toInFormat }</span><FontAwesomeIcon icon={['fas', 'angle-right']} fixedWidth />
        </div>
        <div className={ styles.timelineContent } >
          <div className={ `${styles.timelineOrganization} ${commonStyles.fontBold}` } >{ edu.institution }</div>
          <div className={ `${styles.timelineTitle} mb-s` } >{ edu.major }</div>
        </div>
      </div>
    ));
  }

  const getProjectContent = () => {
    return projects.map((project, index) => (
      <div
        key={ `project-${index}` }
        className={ styles.projectItem }
      >
          <div className={ styles.projectTitle } ><span className={ styles.projectName }>{ project.name }</span><span className={ styles.projectTag }>{ project.business_domain }</span></div>
          <div className={ styles.projectInfo } >
            <div className={ styles.projectInfoDescription }>{ project.description }</div>
            <div className={ styles.projectInfoItem }>
              <span className={ styles.projectInfoItemLabel }>Technology: </span><span className={ `${styles.projectInfoItemContent} ${commonStyles.fontSemiBold}` }>{ project.technology }</span>
            </div>
            <div className={ styles.projectInfoItem }>
              <span className={ `${styles.projectInfoItemContent} ${commonStyles.fontItalic}` }>{ project.work }</span>
            </div>
          </div>
      </div>
    ));
  }

  return (
    <div className={ styles.main }>
      <CvTitle text="about me" />
      <div className={ styles.paragraph }>{ cv.about }</div>
      <CvTitle text="experience" classNames="mt-x" />
      <div className={ styles.timeline }>{ getExpContent() }</div>
      <CvTitle text="education" classNames="mt-x" />
      <div className={ styles.timeline }>{ getEduContent() }</div>
      <CvTitle text="projects" classNames="mt-x" />
      <div className={ styles.project }>{ getProjectContent() }</div>
    </div>
  );
}

export default CvMain;