import React from 'react';
import styles from './home-styles.module.scss';
import { Button } from '../../common';
import { useSettings } from '../../context/settings-provider';

const Home = (props) => {

  const { setShowHeadFooter, setHeaderTitle } = useSettings();
  const [cv, setCv] = React.useState({});

  React.useLayoutEffect(() => {
    setHeaderTitle(`Jam CV`);
    setShowHeadFooter(true);
  }, []);

  const noCvContent = () => {
    return (
      <React.Fragment>
        <div className={ `${styles.message} mb-l`}>You haven't created a CV yet</div>
        <div className={ `${styles.message}` }>
          <Button onClick={ () => { props.history.push(`/edit/1`) } } title="Create one" />
        </div>
      </React.Fragment>
    );
  }

  const haveCvContent = () => {
    return (
      <React.Fragment>
        <div className={ `${styles.message} mb-l`}>You've already got a CV</div>
        <div className={ `${styles.message}` }>
          <Button onClick={ () => { props.history.push(`/edit/1`) } } title="Edit my CV" />
        </div>
      </React.Fragment>
    );
  }

  return (
    <div className={ `${styles.container} flex-center page-container mt-x` }>
      { cv ? haveCvContent() : noCvContent() }
    </div>
  );

}

export default Home;