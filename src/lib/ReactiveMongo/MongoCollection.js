import ReactiveBase from '../ReactiveBase';

class MongoCollection extends ReactiveBase {
  constructor(database) {
    super(null);
    this.database = database;
  }
  async Collection(col) {
    const self = this;
    self.database.collection(col).find({}).toArray(async (error, collection) => {
      self.Value = JSON.parse(JSON.stringify(collection));
      await super.sleep(1000);
      self.Collection(col);
    });
  }
}

export default MongoCollection;
