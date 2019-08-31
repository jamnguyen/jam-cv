import { Helper } from '../utilities';

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
      this.from = new Date('2001-05-27');
      this.position = '';
      this.to = new Date();
      this.work = '';
    } else {
      this.company = data.company;
      this.position = data.position;
      this.work = data.work;
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