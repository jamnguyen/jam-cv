export default class UserModel {
  name;
  email;
  avatar;

  constructor(data) {
    this.name = data.displayName;
    this.email = data.email;
    this.avatar = data.photoURL;
  }
}