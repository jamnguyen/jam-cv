import EducationModel from './Education';
import ExperienceModel from './Experience';
import SkillModel from './Skill';
import Helper from '../utilities/helper';
import { DATE_FORMAT } from '../Constants';
import ProjectModel from './Project';

export default class CvModel {
  about;
  address;
  avatar;
  dob;
  educations;
  email;
  experiences;
  first_name;
  full_name
  git_url;
  id;
  interest;
  last_name;
  phone;
  pob;
  projects;
  skills;
  skype;
  title;

  constructor(data) {
    if (!data) {
      this.about = '';
      this.address = '';
      this.avatar = '';
      this.dob = '2001-05-27';
      this.educations = [new EducationModel()];
      this.email = '';
      this.experiences = [new ExperienceModel()];
      this.first_name = '';
      this.full_name = '';
      this.git_url = '';
      this.id = null;
      this.interest = [];
      this.last_name = '';
      this.phone = '';
      this.pob = '';
      this.projects = [new ProjectModel()];
      this.skills = [new SkillModel()];
      this.skype = '';
      this.title = '';
    } else {
      this.about = data.about;
      this.address = data.address;
      this.avatar = data.avatar;
      this.dob = data.dob;
      this.email = data.email;
      this.first_name = data.first_name;
      this.full_name = data.full_name;
      this.git_url = data.git_url;
      this.id = data.id;
      this.interest = data.interest || [];
      this.last_name = data.last_name;
      this.phone = data.phone;
      this.pob = data.pob;
      this.published = data.published;
      this.skype = data.skype;
      this.title = data.title;

      this.educations = [];
      if (data.educations) {
        for (let edu of data.educations) {
          this.educations.push(new EducationModel(edu));
        }
      }

      this.experiences = [];
      if (data.experiences) {
        for (let exp of data.experiences) {
          this.experiences.push(new ExperienceModel(exp));
        }
      }

      this.projects = [];
      if (data.projects) {
        for (let proj of data.projects) {
          this.projects.push(new ProjectModel(proj));
        }
      }

      this.skills = [];
      if (data.skills) {
        for (let skill of data.skills) {
          this.skills.push(new SkillModel(skill));
        }
      }
    }
  }

  setData(data) {
    this.about = data.about;
    this.address = data.address;
    this.avatar = data.avatar;
    this.dob = data.dob;
    this.email = data.email;
    this.first_name = data.first_name;
    this.full_name = data.full_name;
    this.git_url = data.git_url;
    this.id = data.id;
    this.interest = data.interest || [];
    this.last_name = data.last_name;
    this.phone = data.phone;
    this.pob = data.pob;
    this.published = data.published;
    this.skype = data.skype;
    this.title = data.title;

    this.educations = [];
    if (data.educations) {
      for (let edu of data.educations) {
        this.educations.push(new EducationModel(edu.institution, edu.major, edu.from, edu.to));
      }
    }

    this.experiences = [];
    if (data.experiences) {
      for (let exp of data.experiences) {
        this.experiences.push(new ExperienceModel(exp.company, exp.position, exp.work, exp.from, exp.to));
      }
    }

    this.projects = [];
    if (data.projects) {
      for (let proj of data.projects) {
        this.projects.push(new ProjectModel(proj.name, proj.description, proj.technology, proj.business_domain, proj.work));
      }
    }

    this.skills = [];
    if (data.skills) {
      for (let skill of data.skills) {
        this.skills.push(new SkillModel(skill.name, skill.level, skill.max));
      }
    }
  }

  getBirthDate(format = DATE_FORMAT.YYYY_MM_DD__DOT) {
    return Helper.formatDate(this.dob, format);
  }

}