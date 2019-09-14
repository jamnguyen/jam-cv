export default class SkillModel {
  level;
  name;
  max;

  constructor(data) {
    if (!data) {
      this.name = '';
      this.level = 0;
      this.max = 10;
    } else {
      this.name = data.name;
      this.level = data.level;
      this.max = data.max;
    }
  }
}