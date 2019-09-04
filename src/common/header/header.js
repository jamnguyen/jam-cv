import React from 'react';
import styles from './header-styles.module.scss';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/auth-provider';
import { useUser } from '../../context/user-provider';
import { useSettings } from '../../context/settings-provider';

const Header = () => {

  const { signOut } = useAuth();
  const user = useUser();
  const { headerTitle, headerVisibility } = useSettings();

  const getSignInContent = () => {
    if (user) {
      return (
        <React.Fragment>
          <img src={ user.avatar } className={`${styles.userAvatar} mr-s`} alt="Avatar of user" />
          { user.name },<button className={`${styles.menuItemBtn} ml-s`} onClick={ signOut }>sign out</button>
        </React.Fragment>
      );
    }

    return (
      <li className={ `${styles.menuItem}` }>
        <Link className={ `${styles.menuItemLink}`} to="/signin" >Sign in</Link>
      </li>
    );
  }

  return (
    headerVisibility ? (
      <div className={ styles.header } >
        <div className={ `${styles.headerContainer} page-container` } >
          <div className={ styles.logo }>{ headerTitle }</div>
          <ul className={ styles.menu }>
            { getSignInContent() }
          </ul>
        </div>
      </div>
    ) : null
  );
}

export default Header;