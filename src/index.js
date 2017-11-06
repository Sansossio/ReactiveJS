/* eslint-disable no-await-in-loop */
/* import ReactiveVar from './lib/ReactiveVar';

const test = new ReactiveVar('123');
test.autorun((nextValue, previousValue) => {
  console.log(`cambio a de ${previousValue} to ${nextValue}`);
  return true;
});
test.Value = '123333';
console.log(test.Value);

*/
import ReactiveBase from './lib/ReactiveBase';
import ReactiveVar from './lib/ReactiveVar';
import ReactiveMongo from './lib/ReactiveMongo';

class ReactiveJS extends ReactiveBase {
  constructor(options = {}) {
    super(null);
    this.finish = false;
    this.url = options.Mongo;
    this.callback = () => { };
  }
  async run() {
    this.Mongo = new ReactiveMongo(this.url);
    while (!this.finish) {
      if (this.Mongo.database) this.finish = true;
      await super.sleep(200);
    }
    this.callback(this.Mongo);
  }
  startup(callback) {
    this.callback = callback;
    // If a not mongo reactive
    if (!this.url) this.callback();
    else this.run();
  }
}

export {
  ReactiveJS,
  ReactiveVar,
};
