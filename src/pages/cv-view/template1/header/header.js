import React from 'react';
import styles from './header-styles.module.scss';
import commonStyles from '../template1-styles.module.scss';
import { DATE_FORMAT } from '../../../../Constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CvHeader = (props) => {

  const { cv } = props;
  const [infoItems, setInfoItems] = React.useState([]);
  
  React.useEffect(() => {
    const madeUpInfoItems = [];

    if (cv.git_url) {
      madeUpInfoItems.push({
        icon: ['fab', 'github'],
        value: 'Github Page',
        href: cv.git_url
      });
    }
    if (cv.email) {
      madeUpInfoItems.push({
        icon: ['fas', 'envelope'],
        value: cv.email,
        href: null
      });
    }
    if (cv.phone) {
      madeUpInfoItems.push({
        icon: ['fas', 'phone-alt'],
        value: cv.phone,
        href: null
      });
    }
    if (cv.skype) {
      madeUpInfoItems.push({
        icon: ['fab', 'skype'],
        value: cv.skype,
        href: null
      });
    }
    if (cv.dob) {
      madeUpInfoItems.push({
        icon: ['fas', 'birthday-cake'],
        value: cv.getBirthDate(DATE_FORMAT.DD_MM_YYYY__DOT),
        href: null
      });
    }
    if (cv.address) {
      madeUpInfoItems.push({
        icon: ['fas', 'map-marker-alt'],
        value: cv.address,
        href: null
      });
    }

    setInfoItems(madeUpInfoItems);
  }, [cv]);

  const getGeneralInfo = () => {
    return infoItems.map((info, index) => {
      return (
        <div key={ `info-${index}` } className={ `${styles.infoItem}` }>
          <FontAwesomeIcon icon={ info.icon } fixedWidth />
          {
            info.href ?
              <span className="ml-s"><a className={ commonStyles.link } href={ info.href } target="_blank" rel="noopener noreferrer" >{ info.value }</a></span> :
              <span className="ml-s">{ info.value }</span>
          }
        </div>
      );
    });
  }

  return (
    <div className={ styles.header }>
      <div className={ styles.left }>
        <div className={ `${styles.avatar} mr-l` }>
          <img alt="User Avatar" src={ cv.avatar } />
        </div>
        <div>
          <h1 className={ commonStyles.heading1 }>{ `${cv.first_name} ${cv.last_name}` }</h1>
          <h3 className={ `${styles.jobTitle}` }>{ cv.title }</h3>
        </div>
      </div>
      <div className={ styles.right }>
        { getGeneralInfo() }
      </div>
    </div>
  );
}

export default CvHeader;