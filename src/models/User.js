export default class UserModel {
  name;
  email;
  avatar;
  uid;

  constructor(data) {
    this.name = data.displayName;
    this.email = data.email;
    this.avatar = data.photoURL;
    this.uid = data.uid;
  }
}