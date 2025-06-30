const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
  expect(sum(2, 2)).toBe(0);
});

test('adds 2 + 3 to equal 5', () => {
  expect(sum(2, 3)).toBe(5);
});

test('subtracts 5 - 3 to equal 2', () => {
  expect(difference(5, 3)).toBe(2);
});

test('subtracts 3 - 3 to equal 0', () => {
  expect(difference(3, 3)).toBe(0);
});
