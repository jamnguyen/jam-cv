import React from 'react';
import { useAuth } from './auth-provider';

const UserContext = React.createContext();

const UserProvider = (props) => {
  return (
    <UserContext.Provider value={ useAuth().user } {...props} />
  );
}

const useUser = () => React.useContext(UserContext);

export { UserProvider, useUser };