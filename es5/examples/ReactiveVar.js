'use strict';

var _ = require('../');

var test = new _.ReactiveVar('123');

test.autorun(function (nextValue, previousValue) {
  console.log('cambio a de ' + previousValue + ' to ' + nextValue);
  return true;
});

test.Value = '123333';