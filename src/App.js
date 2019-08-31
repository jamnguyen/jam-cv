import React from 'react';
import styles from './App-styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const App = (props) => {
  return (
    <div className={ styles.container }>
      Haizzzz
      <FontAwesomeIcon icon={['far', 'copyright']} />
    </div>
  );
}

export default App;
