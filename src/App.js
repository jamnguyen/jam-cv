import React from 'react';
import './styles/global.scss';
import { useUser } from './context/user-provider';
import { AuthenticatedApp, UnauthenticatedApp } from './pages';
import { LoadingCover } from './common';

const App = (props) => {

  const user = useUser();

  return (
    <React.Fragment>
      <LoadingCover />
      { user ? <AuthenticatedApp /> : <UnauthenticatedApp /> }
    </React.Fragment>
  );
}

export default App;
