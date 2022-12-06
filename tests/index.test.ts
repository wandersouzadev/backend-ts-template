import { expect, it } from "vitest";
import { hi } from "../src/index.js";

it("should return 'hello world'", () => {
  expect(hi()).toBe("hello world");
});
