import { ReactiveJS } from '../';


const options = {
  Mongo: 'mongodb://localhost:27017/castlesurvival',
};
const Mongo = new ReactiveJS(options);
Mongo.startup((MongoDb) => {
  // Your code here
  const users = MongoDb.ReactiveCollection('users');
  const usersItems = MongoDb.ReactiveCollection('users_items');

  users.autorun((data) => {
    console.log(data.length, 'users');
  });

  usersItems.autorun((data) => {
    console.log(data.length, 'users_items');
  });
});
