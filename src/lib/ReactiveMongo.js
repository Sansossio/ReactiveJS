import MongoClient from 'mongodb';
import ReactiveBase from './ReactiveBase';
import MongoCollection from './MongoCollection';

class ReactiveMongo extends ReactiveBase {
  constructor(url) {
    super(null);
    this.Mongo = MongoClient;
    this.url = url;
    this.database = false;
    this.cursors = [];
    this.run();
  }
  run() {
    const self = this;
    this.Mongo.connect(this.url, (err, db) => {
      if (err) {
        self.print('error', `${err.name}: ${err.message}`);
        return;
      }
      self.database = db;
    });
  }
  ReactiveCollection(col) {
    const self = this;
    return new MongoCollection(col, self.database);
  }
}

export default ReactiveMongo;
