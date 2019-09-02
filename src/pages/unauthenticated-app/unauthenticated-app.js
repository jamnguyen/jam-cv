import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './unauthenticated-app-styles.module.scss';
import CvView from '../cv-view/cv-view';

const UnauthenticatedApp = (props) => {
  return (
    <div className={ styles.container }>
      <Router>
        <Switch>
          <Route path='/view/:cvId' component={ CvView } />
        </Switch>
      </Router>
    </div>
  );
}

export default UnauthenticatedApp;