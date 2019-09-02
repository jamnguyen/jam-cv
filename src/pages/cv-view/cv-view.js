import React from 'react';
import styles from './cv-view-styles.module.scss';
import CvTemplate1 from './template1/template1';
import CvService from '../../utilities/cv-service';

const CvView = (props) => {
  const id = props.match.params.cvId;
  const [cv, setCv] = React.useState(); 
  const [isLoading, setIsLoading] = React.useState(false); 

  React.useEffect(() => {
    const getCv = async () => {
      setIsLoading(true);
      const result = await CvService.getCv(id);
      setCv(result);
      setIsLoading(false);
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
    return <div>Loading...</div>;
  }

  if (cv) {
    return (
      <div className={ styles.container } >
        { renderTemplateContent() }
      </div>
    );
  } else {
    return <div>Cannot load CV!</div>
  }

}

export default CvView;