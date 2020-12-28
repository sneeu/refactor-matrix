export type Point = {
  x: number;
  y: number;
  z: number;
};

export const rotate = (point: Point, transformMatrix: number[][]): Point => {
  const x_ =
    transformMatrix[0][0] * point.x +
    transformMatrix[0][1] * point.y +
    transformMatrix[0][2] * point.z;
  const y_ =
    transformMatrix[1][0] * point.x +
    transformMatrix[1][1] * point.y +
    transformMatrix[1][2] * point.z;
  const z_ =
    transformMatrix[2][0] * point.x +
    transformMatrix[2][1] * point.y +
    transformMatrix[2][2] * point.z;

  return { x: x_, y: y_, z: z_ };
};

export const rotateX = (point: Point, theta: number): Point => {
  const s = Math.sin(theta);
  const c = Math.cos(theta);
  return rotate(point, [
    [1, 0, 0],
    [0, c, -s],
    [0, s, c],
  ]);
};

export const rotateY = (point: Point, theta: number): Point => {
  const s = Math.sin(theta);
  const c = Math.cos(theta);
  return rotate(point, [
    [c, 0, s],
    [0, 1, 0],
    [-s, 0, c],
  ]);
};

export const rotateZ = (point: Point, theta: number): Point => {
  const s = Math.sin(theta);
  const c = Math.cos(theta);
  return rotate(point, [
    [c, -s, 0],
    [s, c, 0],
    [0, 0, 1],
  ]);
};
