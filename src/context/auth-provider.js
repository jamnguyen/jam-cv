import React from 'react';
import { firebase } from '../utilities/firebase';
import { UserModel } from '../models';
import { useSettings } from './settings-provider';

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [state, setState] = React.useState({loadingSignInInfo: true});
  const { setFirstTimeLoading } = useSettings();

  React.useEffect(() => {
    setFirstTimeLoading(true);

    // Loading User login info
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setState({...state, user: new UserModel(user), loadingSignInInfo: false});
      } else {
        setState({...state, user: null, loadingSignInInfo: false});
      }
      setTimeout(() => { setFirstTimeLoading(false) }, 1500);
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