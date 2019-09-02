import React from 'react';
import { useUser } from './context/user-provider';
import { AuthenticatedApp, UnauthenticatedApp } from './pages';

const App = (props) => {
  const user = useUser();
  return (
    user ? <AuthenticatedApp /> : <UnauthenticatedApp />
  );
}

export default App;
