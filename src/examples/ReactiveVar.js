import { ReactiveVar } from '../';

const test = new ReactiveVar(123);

test.autorun((value) => {
  console.log(`new value ${value}`);
  return true;
});

test.Value = 321;
