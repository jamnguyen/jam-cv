import React from 'react';
import styles from './cv-view-styles.module.scss';
import CvTemplate1 from './template1/template1';
import CvService from '../../utilities/cv-service';
import { useSettings } from '../../context/settings-provider';
import { useUser } from '../../context/user-provider';
import { Button } from '../../common';

const CvView = (props) => {
  const id = props.match.params.cvId;
  const [cv, setCv] = React.useState();
  const { isLoading, setIsLoading, showHeadFooter, setShowHeadFooter } = useSettings();
  const user = useUser();

  React.useLayoutEffect(() => {

    const getCv = async () => {
      setIsLoading(true);   // For full page loading component
      try {
        const result = await CvService.getCv(id);
        setCv(result);
        if (!showHeadFooter) setShowHeadFooter(true);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }

    getCv();
  }, [id]);

  const renderTemplateContent = () => {
    return <CvTemplate1 cv={ cv } />;
    // switch(settings.template) {
    //   case 1:
    //   default:
    //     return <CvTemplate1 cv={ state } />;
    // }
  }

  if (isLoading) {
    return null;
  }

  if (cv) {
    return (
      <div className={ styles.container } >
        {
          user ?
            <div className={`page-container row row-justify-end ${styles.actionBar}`}>
              <Button onClick={ () => { props.history.push(`/edit/${cv.id}`) } } title="Edit" />
            </div> :
            null
        }
        { renderTemplateContent() }
      </div>
    );
  } else {
    return (
      <div className={ `full-height-viewport flex-center` } >
        <h1 className={ styles.message }>Cannot load data, please try another url or refresh the page.</h1>
      </div>
    );
  }

}

export default CvView;