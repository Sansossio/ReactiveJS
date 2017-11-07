'use strict';

var _ = require('../');

var options = {
  Mongo: 'mongodb://localhost:27017/castlesurvival'
};
var Reactive = new _.ReactiveJS(options);
Reactive.startup(function (MongoDb) {
  // Your code here
  var users = MongoDb.ReactiveCollection('users');
  var usersItems = MongoDb.ReactiveCollection('users_items');

  users.autorun(function (data) {
    console.log(data.length, 'users');
  });

  usersItems.autorun(function (data) {
    console.log(data.length, 'users_items');
  });
  var count = 0;
  setInterval(async function () {
    count += 1;
    var info = { test: count };
    await users.InsertAsync(info);
  }, 1000);
});