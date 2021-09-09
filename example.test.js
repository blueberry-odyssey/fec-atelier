function sum(a, b) {
  return a + b;
}

test('adds two integers', () => {
  expect(sum(5, 5)).toBe(10);
});