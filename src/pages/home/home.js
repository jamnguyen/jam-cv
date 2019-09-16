import React from 'react';
import styles from './home-styles.module.scss';
import { Button } from '../../common';
import { useSettings } from '../../context/settings-provider';
import { useUser } from '../../context/user-provider';
import CvService from '../../utilities/cv-service';

const Home = (props) => {

  const { setShowHeadFooter, setHeaderTitle, isLoading, setIsLoading } = useSettings();
  const user = useUser();
  const [cv, setCv] = React.useState(null);

  const buttonStyle = {
    minWidth: '10rem'
  }

  React.useLayoutEffect(() => {
    setIsLoading(true);
    setHeaderTitle(`My CV`);
    setShowHeadFooter(true);

    const getUserCVs = async () => {
      try {
        const result = await CvService.getUserCVs(user);
        if (result.length > 0) {
          setCv(result[0]);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    
    getUserCVs();
  }, []);

  const noCvContent = () => {
    return (
      <React.Fragment>
        <div className={ `${styles.message} mb-l`}>You haven't created a CV yet</div>
        <div className={ `${styles.message}` }>
          <Button onClick={ () => { props.history.push(`/create`) } } title="Create one" />
        </div>
      </React.Fragment>
    );
  }

  const haveCvContent = () => {
    return (
      <React.Fragment>
        <div className={ `${styles.message} mb-l`}>You've already got a CV</div>
        <div className={ `${styles.message} row` }>
          <Button styles={ buttonStyle } onClick={ () => { props.history.push(`/edit/${cv.id}`) } } title="Edit" />
          <Button styles={ buttonStyle } className="ml-m" onClick={ () => { props.history.push(`/view/${cv.id}`) } } title="View" />
        </div>
      </React.Fragment>
    );
  }

  if (isLoading) {
    return null;
  }

  return (
    <div className={ `${styles.container} flex-center page-container mt-x` }>
      { cv ? haveCvContent() : noCvContent() }
    </div>
  );

}

export default Home;