import React from 'react';

const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const [state, setState] = React.useState({loadingSignInInfo: true});

  // Loading User login info
  setInterval(() => { setState({...state, loadingSignInInfo: false, user: null}) }, 2000);

  if (state.loadingSignInInfo) {
    return <div>Loading user info...</div>
  }

  const signIn = () => {};
  const signOut = () => {};

  return (
    <AuthContext.Provider value={{user: state.user, signIn, signOut}} {...props} />
  );

}

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };