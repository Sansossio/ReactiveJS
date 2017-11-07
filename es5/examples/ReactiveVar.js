'use strict';

var _ = require('../');

var test = new _.ReactiveVar(123);

test.autorun(function (value) {
  console.log('new value ' + value);
  return true;
});

test.Value = 321;