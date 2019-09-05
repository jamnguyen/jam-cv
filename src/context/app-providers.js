import React from 'react';
import { AuthProvider } from './auth-provider';
import { UserProvider } from './user-provider';
import { SettingsProvider } from './settings-provider';

const AppProviders = ({children}) => {
  return (
    <SettingsProvider>
      <AuthProvider>
        <UserProvider>
          { children }
        </UserProvider>
      </AuthProvider>
    </SettingsProvider>
  );
}

export default AppProviders;