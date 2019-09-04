import React from 'react';
import { useAuth } from '../../context/auth-provider';

const AuthenticatedApp = (props) => {
  const { signOut } = useAuth();

  return (
    <div>Authenticated App
      <button onClick={() => { signOut() }}>Sign Out</button>
    </div>
  );
}

export default AuthenticatedApp;