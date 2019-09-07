import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import styles from './authenticated-app-styles.module.scss';
import { Header, Footer } from '../../common';
import CvEdit from '../cv-edit/cv-edit';
import Home from '../home/home';


const AuthenticatedApp = (props) => {
  return (
    <div className={ styles.container }>
      <Router>
        <div className={ styles.wrapper } >
          <Header />
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/edit/:cvId' component={ CvEdit } />
            <Route render={ () => <Redirect to='/' /> }/>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default AuthenticatedApp;