import React from 'react';
import styles from './sign-in-styles.module.scss';
import { useSettings } from '../../context/settings-provider';
import { FirebaseSignInButton } from '../../utilities/firebase';

const SignIn = (props) => {

  const { showHeadFooter, setShowHeadFooter } = useSettings();

  React.useLayoutEffect(() => {
    if (showHeadFooter) setShowHeadFooter(false);
  }, []);

  return (
    <div className={ `${styles.container} full-height-viewport flex-center` }>
      <div className={ `${styles.card} flex-center` }>
        <h3 className={`${styles.title} mb-m`}>Create your own curriculum vitae</h3>
        <FirebaseSignInButton />
      </div>
    </div>
  );
}

export default SignIn;