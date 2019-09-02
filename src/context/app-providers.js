import React from 'react';
import { AuthProvider } from './auth-provider';
import { UserProvider } from './user-provider';

const AppProviders = ({children}) => {
  return (
    <AuthProvider>
      <UserProvider>
        { children }
      </UserProvider>
    </AuthProvider>
  );
}

export default AppProviders;