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
      this.from = '2001-05-27';
      this.to = 'now';
    } else {
      this.institution = data.institution;
      this.major = data.major;
      this.from = data.from;
      this.to = data.to;
    }
  }

  get fromInFormat() {
    return Helper.formatDate(this.from);
  }

  get toInFormat() {
    return this.to.toLowerCase() === 'now' ? 'Now' : Helper.formatDate(this.to);
  }
}