const handler = require('../handlers/default-handler');

test('correct local greeting is generated', () => {
  expect(handler.getLocalGreeting("en")).toBe("Hello");
  expect(handler.getLocalGreeting("fr")).toBe("👋");
});

test('correct greeting is generated', () => {
    expect(handler.getGreeting()).toContain(" from Moneycatcha!");
});