import React from 'react';
import styles from './loading-cover-styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSettings } from '../../context/settings-provider';

const LoadingCover = () => {
  const { isLoading, firstTimeLoading } = useSettings();

  return (
    <div className={ `${styles.loadingContainer} ${(!firstTimeLoading && !isLoading) ? styles.hidden : ''}` }>
      <div className={ styles.spinner }>
        <FontAwesomeIcon icon={['far', 'times-circle']} fixedWidth size="5x" />
      </div>
    </div>
  );
}

export default LoadingCover;