import Helper from '../utilities/helper';

export default class EducationModel {
  institution;
  major;
  from;
  to;

  constructor(data) {
    if (!data) {
      this.institution = '';
      this.major = '';
      this.from = new Date('2001-05-27');
      this.to = new Date();
    } else {
      this.institution = data.institution;
      this.major = data.major;
      this.from = new Date(data.from);
      this.to = data.to.toLowerCase() === 'now' ? 'Now' : new Date(data.to);
    }
  }

  get fromInFormat() {
    return this.from instanceof Date ? Helper.formatDate(this.from) : this.from;
  }

  get toInFormat() {
    return this.to instanceof Date ? Helper.formatDate(this.to) : this.to;
  }
}