import React from 'react';
import styles from './cv-edit-styles.module.scss';
import CvService from '../../utilities/cv-service';
import { useSettings } from '../../context/settings-provider';
import Title from './title/title';
import { TextInput, Button } from '../../common';

const CvEdit = (props) => {

  const id = props.match.params.cvId;
  const [cv, setCv] = React.useState();
  const { isLoading, setIsLoading, showHeadFooter, setShowHeadFooter, setHeaderTitle } = useSettings();

  React.useLayoutEffect(() => {
    setIsLoading(true);   // For full page loading component
    
    const getCv = async () => {
      try {
        const result = await CvService.getCv(id);
        setCv(result);
        setHeaderTitle('Edit CV');
        if (!showHeadFooter) setShowHeadFooter(true);
      } catch (err) {
      }
      setIsLoading(false);
    }

    getCv();
  }, [id]);

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(cv);
  }

  const onInputChange = (event) => {
    // *CAUTION: 'name' must be a field in CvModel
    event.preventDefault();
    setCv({
      ...cv,
      [event.target.name]: event.target.value
    });
  }

  if (isLoading) {
    return null;
  }

  if (cv) {
    return (
      <div className={ `${styles.container} page-container mt-x` }>
        <form onSubmit={ onSubmit }>
          <Title text="general information" />
          <div className={`row`}>
            <TextInput className="col-70 pr-s" label="Full Name" value={ cv.full_name } name="full_name" type="text" onChange={ onInputChange } required />
            <TextInput className="col-30 pl-s" label="Birthdate" value={ cv.dob } name="dob" type="date" onChange={ onInputChange } required />
          </div>
          <TextInput label="Job Title" value={ cv.title } name="title" type="text" onChange={ onInputChange } required />
          <div className={`row`}>
            <TextInput className="col-40 pr-s" label="Email Address" value={ cv.email } name="email" type="email" onChange={ onInputChange } />
            <TextInput className="col-30 pl-s pr-s" label="Phone Number" value={ cv.phone } name="phone" type="text" onChange={ onInputChange } required />
            <TextInput className="col-30 pl-s" label="Skype" value={ cv.skype } name="skype" type="text" onChange={ onInputChange } />
          </div>
          {/* Github url */}
          <div className={`row`}>
            <TextInput className="col-50 pr-s" label="Avatar URL" value={ cv.avatar } name="avatar" type="text" onChange={ onInputChange } required />
            <TextInput className="col-50 pl-s" label="Github URL" value={ cv.git_url } name="git_url" type="text" onChange={ onInputChange } />
          </div>
          <Button type="submit" title="Save" />
        </form>
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

export default CvEdit;