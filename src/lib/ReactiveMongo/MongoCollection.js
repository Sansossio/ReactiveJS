import ReactiveBase from '../ReactiveBase';

class MongoCollection extends ReactiveBase {
  // Logics
  static toArray(item) {
    if (typeof item === 'array') return item;
    return [item];
  }
  constructor(database, col, timeUpdate) {
    super(null);
    this.database = database;
    this.col = col;
    this.update = timeUpdate;
  }
  async Collection() {
    const self = this;
    self.database.collection(self.col).find({}).toArray(async (error, collection) => {
      self.Value = JSON.parse(JSON.stringify(collection));
      if (self.update) {
        await super.sleep(self.update);
        self.Collection();
      }
    });
  }
  // Mongo Methods
  // Insert
  async InsertAsync(Fields) {
    const col = this.database.collection(this.col);
    const response = await col.insertMany(MongoCollection.toArray(Fields));
    this.Collection();
    return response;
  }
  Insert(Fields, callback = () => {}) {
    const self = this;
    const col = self.database.collection(this.col);
    col.insertMany(MongoCollection.toArray(Fields), (err, result) => {
      if (!err) self.Collection();
      callback(err, result);
    });
  }
}

export default MongoCollection;
