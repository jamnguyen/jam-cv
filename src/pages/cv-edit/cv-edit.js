import React from 'react';
import styles from './cv-edit-styles.module.scss';
import CvService from '../../utilities/cv-service';
import { useSettings } from '../../context/settings-provider';
import Title from './title/title';
import { TextInput, Button, TextArea } from '../../common';
import EducationItem from './education-item/education-item';
import { EducationModel, ExperienceModel, ProjectModel } from '../../models';
import ExperienceItem from './experience-item/experience-item';
import ProjectItem from './project-item/project-item';

const CvEdit = (props) => {

  const id = props.match.params.cvId;
  const [cv, setCv] = React.useState();
  const [temp, setTemp] = React.useState({});
  const { isLoading, setIsLoading, showHeadFooter, setShowHeadFooter, setHeaderTitle } = useSettings();

  React.useLayoutEffect(() => {
    setIsLoading(true);   // For full page loading component
    
    const getCv = async () => {
      try {
        const result = await CvService.getCv(id);
        setCv(result);
        setHeaderTitle('Edit CV');
        if (!showHeadFooter) setShowHeadFooter(true);
        // Setup temp
        setTemp({
          edu: new EducationModel(),
          exp: new ExperienceModel(),
          proj: new ProjectModel()
        });
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
    event.preventDefault();
    setCv({
      ...cv,
      [event.target.name]: event.target.value
    });
  }

  const onTempInputChange = (property, event) => {
    event.preventDefault();
    let prop = temp[property];
    prop[event.target.name] = event.target.value;

    setTemp({
      ...temp,
      [property]: prop
    });
  }

  // ------------------------------------------------------------------------------------
  // EDUCATION
  // ------------------------------------------------------------------------------------
  const onEduChange = (index, event) => {
    event.preventDefault();
    let { educations } = cv;
    educations[index][event.target.name] = event.target.value;

    setCv({
      ...cv,
      educations
    });
  }

  const onAddEdu = (edu) => {
    setCv({
      ...cv,
      educations: [...cv.educations, edu]
    });

    setTemp({
      ...temp,
      edu: new EducationModel()
    });
  }

  const onDeleteEdu = (index) => {
    let newEdus = [...cv.educations];
    newEdus.splice(index, 1);
    setCv({
      ...cv,
      educations: newEdus
    });
  }

  const eduJsx = () => {
    return (
      <React.Fragment>
        {
          cv.educations.map((edu, index) => {
            return <EducationItem
                      key={ `edu-${index}` }
                      index={ index }
                      data={ edu }
                      onChange={ (e) => onEduChange(index, e) }
                      onDelete={ () => onDeleteEdu(index) }
                      initStatus="edit"
                    />
          })
        }
        <EducationItem
          index={ -1 }
          data={ temp.edu }
          onChange={ (e) => onTempInputChange('edu', e) }
          onAdd={ () => onAddEdu(temp.edu) }
          initStatus="add"
        />
      </React.Fragment>
    );
  }

  // ------------------------------------------------------------------------------------
  // EXPERIENCE
  // ------------------------------------------------------------------------------------
  const onExpChange = (index, event) => {
    event.preventDefault();
    let { experiences } = cv;
    experiences[index][event.target.name] = event.target.value;

    setCv({
      ...cv,
      experiences
    });
  }

  const onAddExp = (exp) => {
    setCv({
      ...cv,
      experiences: [...cv.experiences, exp]
    });

    setTemp({
      ...temp,
      exp: new ExperienceModel()
    });
  }

  const onDeleteExp = (index) => {
    let newExps = [...cv.experiences];
    newExps.splice(index, 1);
    setCv({
      ...cv,
      experiences: newExps
    });
  }

  const expJsx = () => {
    return (
      <React.Fragment>
        {
          cv.experiences.map((exp, index) => {
            return <ExperienceItem
                      key={ `exp-${index}` }
                      index={ index }
                      data={ exp }
                      onChange={ (e) => onExpChange(index, e) }
                      onDelete={ () => onDeleteExp(index) }
                      initStatus="edit"
                    />
          })
        }
        <ExperienceItem
          index={ -1 }
          data={ temp.exp }
          onChange={ (e) => onTempInputChange('exp', e) }
          onAdd={ () => onAddExp(temp.exp) }
          initStatus="add"
        />
      </React.Fragment>
    );
  }

  // ------------------------------------------------------------------------------------
  // Projects
  // ------------------------------------------------------------------------------------
  const onProjChange = (index, event) => {
    event.preventDefault();
    let { projects } = cv;
    projects[index][event.target.name] = event.target.value;

    setCv({
      ...cv,
      projects
    });
  }

  const onAddProj = (proj) => {
    setCv({
      ...cv,
      projects: [...cv.projects, proj]
    });

    setTemp({
      ...temp,
      proj: new ProjectModel()
    });
  }

  const onDeleteProj = (index) => {
    let newProjs = [...cv.projects];
    newProjs.splice(index, 1);
    setCv({
      ...cv,
      projects: newProjs
    });
  }

  const projectJsx = () => {
    return (
      <React.Fragment>
        {
          cv.projects.map((proj, index) => {
            return <ProjectItem
                      key={ `proj-${index}` }
                      index={ index }
                      data={ proj }
                      onChange={ (e) => onProjChange(index, e) }
                      onDelete={ () => onDeleteProj(index) }
                      initStatus="edit"
                    />
          })
        }
        <ProjectItem
          index={ -1 }
          data={ temp.proj }
          onChange={ (e) => onTempInputChange('proj', e) }
          onAdd={ () => onAddProj(temp.proj) }
          initStatus="add"
        />
      </React.Fragment>
    );
  }


  if (isLoading) {
    return null;
  }

  if (cv) {
    return (
      <div className={ `${styles.container} page-container mt-x` }>
        <form onSubmit={ onSubmit }>
          <div className={ `${styles.section}` }>
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
            <div className={`row`}>
              <TextInput className="col-50 pr-s" label="Avatar URL" value={ cv.avatar } name="avatar" type="text" onChange={ onInputChange } required />
              <TextInput className="col-50 pl-s" label="Github URL" value={ cv.git_url } name="git_url" type="text" onChange={ onInputChange } />
            </div>
            <TextArea label="Description" value={ cv.about } name="about" onChange={ onInputChange } required  />
          </div>
          <div className={ `${styles.section}` }>
            <Title text="education" />
            { eduJsx() }
          </div>
          <div className={ `${styles.section}` }>
            <Title text="experience" />
            { expJsx() }
          </div>
          <div className={ `${styles.section}` }>
            <Title text="projects" />
            { projectJsx() }
          </div>
          {/* interest */}
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