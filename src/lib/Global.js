/* eslint-disable class-methods-use-this */
/* eslint-disable no-console */
class Global {
  constructor() {
    this.packageName = 'ReactiveJS';
  }
  showMessage(type, msg) {
    console[type](msg);
  }
  print(type, msg) {
    const message = `[${this.packageName}] ${msg}`;
    this.showMessage(type, message);
    if (type === 'error') process.exit();
  }
  async sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

export default Global;
