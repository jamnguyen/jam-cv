import React from 'react';
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styles from './unauthenticated-app-styles.module.scss';
import { Header, Footer } from '../../common';
import SignIn from '../sign-in/sign-in';
import CvView from '../cv-view/cv-view';

const UnauthenticatedApp = (props) => {
  return (
    <div className={ styles.container }>
      <Router>
        <div className={ styles.wrapper } >
          <Header />
          <Switch>
            <Route path='/signin' component={ SignIn } />
            <Route path='/view/:cvId' component={ CvView } />
            <Route render={ () => <Redirect to='/signin' /> }/>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default UnauthenticatedApp;