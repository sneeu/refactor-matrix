import { rotateX, rotateY, rotateZ } from "./rotation";

describe.each([
  // On the X axis
  [{ x: 0, y: 0, z: 0 }, Math.PI / 2, { x: 0, y: -0, z: 0 }],
  [{ x: 1, y: 0, z: 0 }, Math.PI / 2, { x: 1, y: -0, z: 0 }],
  [{ x: -2, y: 0, z: 0 }, Math.PI / 2, { x: -2, y: -0, z: 0 }],

  // By π/2
  [{ x: 3, y: 11, z: 19 }, Math.PI / 2, { x: 3, y: -19, z: 11 }],
  [{ x: 5, y: 13, z: 23 }, Math.PI / 2, { x: 5, y: -23, z: 13 }],
  [{ x: 7, y: 17, z: 27 }, Math.PI / 2, { x: 7, y: -27, z: 17 }],

  // By π
  [{ x: 3, y: 11, z: 19 }, Math.PI, { x: 3, y: -11, z: -19 }],
  [{ x: 5, y: 13, z: 23 }, Math.PI, { x: 5, y: -13, z: -23 }],
  [{ x: 7, y: 17, z: 27 }, Math.PI, { x: 7, y: -17, z: -27 }],
])("rotateX", (point, theta, expected) => {
  test("rotates points around the X axis", () => {
    const rotatedPoint = rotateX(point, theta);
    expect(rotatedPoint.x).toBeCloseTo(expected.x);
    expect(rotatedPoint.y).toBeCloseTo(expected.y);
    expect(rotatedPoint.z).toBeCloseTo(expected.z);
  });
});

describe.each([
  // On the Y axis
  [{ x: 0, y: 0, z: 0 }, Math.PI / 2, { x: 0, y: 0, z: 0 }],
  [{ x: 0, y: 1, z: 0 }, Math.PI / 2, { x: 0, y: 1, z: 0 }],
  [{ x: 0, y: -2, z: 0 }, Math.PI / 2, { x: 0, y: -2, z: 0 }],

  // By π/2
  [{ x: 3, y: 11, z: 19 }, Math.PI / 2, { x: 19, y: 11, z: -3 }],
  [{ x: 5, y: 13, z: 23 }, Math.PI / 2, { x: 23, y: 13, z: -5 }],
  [{ x: 7, y: 17, z: 27 }, Math.PI / 2, { x: 27, y: 17, z: -7 }],

  // By π
  [{ x: 3, y: 11, z: 19 }, Math.PI, { x: -3, y: 11, z: -19 }],
  [{ x: 5, y: 13, z: 23 }, Math.PI, { x: -5, y: 13, z: -23 }],
  [{ x: 7, y: 17, z: 27 }, Math.PI, { x: -7, y: 17, z: -27 }],
])("rotateY", (point, theta, expected) => {
  test("rotates points around the Y axis", () => {
    const rotatedPoint = rotateY(point, theta);
    expect(rotatedPoint.x).toBeCloseTo(expected.x);
    expect(rotatedPoint.y).toBeCloseTo(expected.y);
    expect(rotatedPoint.z).toBeCloseTo(expected.z);
  });
});

describe.each([
  // On the Z axis
  [{ x: 0, y: 0, z: 0 }, Math.PI / 2, { x: 0, y: 0, z: 0 }],
  [{ x: 0, y: 0, z: 1 }, Math.PI / 2, { x: 0, y: 0, z: 1 }],
  [{ x: 0, y: 0, z: -2 }, Math.PI / 2, { x: 0, y: 0, z: -2 }],

  // By π/2
  [{ x: 3, y: 11, z: 19 }, Math.PI / 2, { x: -11, y: 3, z: 19 }],
  [{ x: 5, y: 13, z: 23 }, Math.PI / 2, { x: -13, y: 5, z: 23 }],
  [{ x: 7, y: 17, z: 27 }, Math.PI / 2, { x: -17, y: 7, z: 27 }],

  // By π
  [{ x: 3, y: 11, z: 19 }, Math.PI, { x: -3, y: -11, z: 19 }],
  [{ x: 5, y: 13, z: 23 }, Math.PI, { x: -5, y: -13, z: 23 }],
  [{ x: 7, y: 17, z: 27 }, Math.PI, { x: -7, y: -17, z: 27 }],
])("rotateZ", (point, theta, expected) => {
  test("rotates points around the Z axis", () => {
    const rotatedPoint = rotateZ(point, theta);
    expect(rotatedPoint.x).toBeCloseTo(expected.x);
    expect(rotatedPoint.y).toBeCloseTo(expected.y);
    expect(rotatedPoint.z).toBeCloseTo(expected.z);
  });
});
