import React from 'react';
import { firebase } from '../utilities/firebase';
import { UserModel } from '../models';

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [state, setState] = React.useState({loadingSignInInfo: true});

  React.useEffect(() => {
    // Loading User login info
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setState({...state, user: new UserModel(user), loadingSignInInfo: false});
      } else {
        setState({...state, user: null, loadingSignInInfo: false});
      }
    });
  }, []);

  if (state.loadingSignInInfo) {
    return null;
  }

  const signIn = () => {};
  const signOut = () => {
    return firebase.auth().signOut();
  };

  return (
    <AuthContext.Provider value={{user: state.user, signIn, signOut}} {...props} />
  );

}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };