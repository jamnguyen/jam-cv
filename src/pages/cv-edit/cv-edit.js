import React from 'react';
import styles from './cv-edit-styles.module.scss';
import CvService from '../../utilities/cv-service';
import { useSettings } from '../../context/settings-provider';
import Title from './title/title';
import { TextInput, Button, TextArea } from '../../common';
import EducationItem from './education-item/education-item';
import { EducationModel, ExperienceModel, ProjectModel, SkillModel, CvModel } from '../../models';
import ExperienceItem from './experience-item/experience-item';
import ProjectItem from './project-item/project-item';
import SkillItem from './skill-item/skill-item';
import { useUser } from '../../context/user-provider';

const CvEdit = (props) => {

  const id = props.match.params.cvId;
  const isCreating = props.match.url.includes('create');
  const [cv, setCv] = React.useState();
  const [temp, setTemp] = React.useState({});
  const [saving, setSaving] = React.useState(false);
  const [publishing, setPublishing] = React.useState(false);
  const { isLoading, setIsLoading, showHeadFooter, setShowHeadFooter, setHeaderTitle } = useSettings();
  const user = useUser();

  React.useLayoutEffect(() => {
    if (!isCreating) {
      
      const getCv = async () => {
        setIsLoading(true);   // For full page loading component
        try {
          const result = await CvService.getCv(id);
          setCv(result);
          setHeaderTitle('Edit CV');
          setIsLoading(false);
        } catch (err) {
          setIsLoading(false);
        }
      }
      
      getCv();
    } else {
      setCv(new CvModel(null, user));
      setHeaderTitle('Create CV');
    }
    
    if (!showHeadFooter) setShowHeadFooter(true);
    // Setup temp
    setTemp({
      edu: new EducationModel(),
      exp: new ExperienceModel(),
      proj: new ProjectModel(),
      skill: new SkillModel()
    });
  }, [id]);

  const onSubmit = (event) => {
    event.preventDefault();

    const add = async () => {
      setSaving(true);
      try {
        const result = await CvService.addCv(cv);
        console.log('added', result)
        props.history.push(`/edit/${result.id}`);
        setSaving(false);
      } catch(error) {
        console.log(error);
        setSaving(false);
      }
    }
    const update = async () => {
      setSaving(true);
      try {
        const result = await CvService.saveCv(cv);
        setSaving(false);
        console.log('Saved', result);
      } catch(error) {
        console.log(error);
        setSaving(false);
      }
    }

    if (isCreating) {
      add();
    } else {
      update();
    }
  }

  const onInputChange = (event) => {
    event.preventDefault();
    setCv({
      ...cv,
      [event.target.name]: event.target.value
    });
  }

  const onTempInputChange = (property, event, isPrimitive = false) => {
    event.preventDefault();
    if (!isPrimitive) {
      let prop = temp[property];
      prop[event.target.name] = event.target.value;
  
      setTemp({
        ...temp,
        [property]: prop
      });
    } else {
        setTemp({
          ...temp,
          [property]: event.target.value
        });
    }
  }

  const publish = (event) => {
    event.preventDefault();

    const patch = async () => {
      setPublishing(true);
      try {
        const result = await CvService.patchCv(cv.id, { published: !cv.published });
        setCv({ ...cv, published: !cv.published });
        setPublishing(false);
      } catch(error) {
        console.log(error);
        setPublishing(false);
      }
    }

    patch();
  }

  // ------------------------------------------------------------------------------------
  // Skills
  // ------------------------------------------------------------------------------------
  const onSkillChange = (index, value) => {
    let { skills } = cv;
    skills[index]['level'] = value;

    setCv({
      ...cv,
      skills
    });
  }

  const onSkillInputChange = (index, event) => {
    event.preventDefault();
    let { skills } = cv;
    skills[index][event.target.name] = event.target.value;

    setCv({
      ...cv,
      skills
    });
  }

  const onTempSkillChange = (index, value) => {
    let { skill } = temp;
    skill.level = value;

    setTemp({
      ...temp,
      skill
    });
  }

  const onAddSkill = (skill) => {
    setCv({
      ...cv,
      skills: [...cv.skills, skill]
    });

    setTemp({
      ...temp,
      skill: new SkillModel()
    });
  }

  const onDeleteSkill = (index) => {
    let newSkills = [...cv.skills];
    newSkills.splice(index, 1);
    setCv({
      ...cv,
      skills: newSkills
    });
  }

  const skillsJsx = () => {
    return (
      <React.Fragment>
        {
          cv.skills.map((skill, index) => {
            return <SkillItem
                      key={ `skill-${index}` }
                      index={ index }
                      data={ skill }
                      onInputChange={ (e) => onSkillInputChange(index, e) }
                      onChange={ onSkillChange }
                      onDelete={ () => onDeleteSkill(index) }
                      initStatus="edit"
                    />
          })
        }
        <SkillItem
          index={ -1 }
          data={ temp.skill }
          onInputChange={ (e) => onTempInputChange('skill', e) }
          onChange={ onTempSkillChange }
          onAdd={ () => onAddSkill(temp.skill) }
          initStatus="add"
        />
      </React.Fragment>
    );
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
          {
            user ?
              <div className={`row row-justify-end ${styles.actionBar}`}>
                <Button saving={ saving } type="submit" title="Save" />
                <Button saving={ publishing } className={`ml-s`} onClick={ (e) => { publish(e) } } title={ cv.published ? 'Unpublish' : 'Publish' } />
                <Button className={`ml-s`} onClick={ () => { props.history.push(`/view/${cv.id}`) } } title="View" />
              </div> :
              null
          }
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
            <TextInput label="Interest (separate by commas)" value={ cv.interest } name="interest" type="text" onChange={ onInputChange } />
          </div>
          <div className={ `${styles.section}` }>
            <Title text="skills" />
            { skillsJsx() }
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