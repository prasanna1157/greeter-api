const subject = require('../../handlers/default-handler');

test('correct local greeting is generated', () => {
  expect(subject.generateGreetingBy("en")).toBe("Hello");
  expect(subject.generateGreetingBy("fr")).toBe("👋");
});

test('correct greeting is generated', () => {
    expect(subject.greet()).toContain(" from Moneycatcha!");
});