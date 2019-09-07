import Helper from '../utilities/helper';

export default class ExperienceModel {
  company;
  from;
  position;
  to;
  work;

  // from & to is string of format 'YYYY-MM-DD'
  constructor(data) {
    if (!data) {
      this.company = '';
      this.from = '2001-05-27';
      this.position = '';
      this.to = 'now';
      this.work = '';
    } else {
      this.company = data.company;
      this.position = data.position;
      this.work = data.work;
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