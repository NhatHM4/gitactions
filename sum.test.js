const {sum, diff} = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});
test('adds -1 + 1 to equal 0', () => {
  expect(sum(-1, 1)).toBe(0);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(diff(5, 3)).toBe(2);
});

test('subtracts 3 - 5 to equal -2', () => {
  expect(diff(3, 5)).toBe(-2);
});

test('subtracts 0 - 0 to equal 0', () => {
  expect(diff(0, 0)).toBe(0);
});


