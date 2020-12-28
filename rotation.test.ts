import { rotateX, Point } from "./rotation";

test("rotates points along the X axis by nothing", () => {
  expect(rotateX({ x: 0, y: 0, z: 0 }, 90)).toStrictEqual({ x: 0, y: 0, z: 0 });
  expect(rotateX({ x: 1, y: 0, z: 0 }, 90)).toStrictEqual({ x: 1, y: 0, z: 0 });
  expect(rotateX({ x: -2, y: 0, z: 0 }, 90)).toStrictEqual({
    x: -2,
    y: 0,
    z: 0,
  });
  expect(rotateX({ x: 103, y: 0, z: 0 }, 90)).toStrictEqual({
    x: 103,
    y: 0,
    z: 0,
  });
});
