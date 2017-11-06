import { ReactiveVar } from '../';

const test = new ReactiveVar('123');

test.autorun((nextValue, previousValue) => {
  console.log(`cambio a de ${previousValue} to ${nextValue}`);
  return true;
});

test.Value = '123333';
