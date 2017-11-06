import ReactiveBase from './ReactiveBase';

class MongoCollection extends ReactiveBase {
  constructor(col, database) {
    super(null);
    this.col = col;
    this.database = database;
    this.Collection();
  }
  async Collection() {
    const self = this;
    self.database.collection(self.col).find({}).toArray(async (error, collection) => {
      self.Value = JSON.parse(JSON.stringify(collection));
      await super.sleep(1000);
      self.Collection(self.col);
    });
  }
}

export default MongoCollection;
