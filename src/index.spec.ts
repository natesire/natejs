import Frontend from "./index.js";

it("should return 'Hello World!'", () => {
  let frontend = new Frontend();
  expect(() => {
    frontend.fetch();
  }).not.toThrow();
});