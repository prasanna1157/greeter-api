const subject = require('../../handlers/default-handler');

test('language based greeting is generated correctly', () => {
  expect(subject.generateGreetingBy("en")).toBe("Hello");
  expect(subject.generateGreetingBy("fr")).toBe("👋");
});

test('final greeting is generated correctly', () => {
    expect(subject.greet()).toContain(" from Moneycatcha!");
});