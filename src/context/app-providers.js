import React from 'react';
import { AuthProvider } from './auth-provider';
import { UserProvider } from './user-provider';
import { SettingsProvider } from './settings-provider';

const AppProviders = ({children}) => {
  return (
    <AuthProvider>
      <UserProvider>
        <SettingsProvider>
          { children }
        </SettingsProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default AppProviders;