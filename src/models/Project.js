export default class ProjectModel {
  name;
  description;
  technology;
  business_domain;
  work;

  constructor(data) {
    if (!data) {
      this.name = '';
      this.description = '';
      this.technology = '';
      this.business_domain = '';
      this.work = '';
    } else {
      this.name = data.name;
      this.description = data.description;
      this.technology = data.technology;
      this.business_domain = data.business_domain;
      this.work = data.work;
    }
  }
}