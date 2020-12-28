export type Point = {
  x: number;
  y: number;
  z: number;
};

export const rotateX = (point: Point, theta: number): Point => {
  const x_ = point.x * 1 + point.y * 0 + point.z * 0;
  const y_ =
    point.x * 0 + point.y * Math.cos(theta) - point.z * Math.sin(theta);
  const z_ =
    point.x * 0 + point.y * Math.sin(theta) + point.z * Math.cos(theta);
  return { x: x_, y: y_, z: z_ };
};

export const rotateY = (point: Point, theta: number): Point => {
  const x_ =
    point.x * Math.cos(theta) + point.y * 0 + point.z * Math.sin(theta);
  const y_ = point.x * 0 + point.y * 1 + point.z * 0;
  const z_ =
    -point.x * Math.sin(theta) + point.y * 0 + point.z * Math.cos(theta);
  return { x: x_, y: y_, z: z_ };
};

export const rotateZ = (point: Point, theta: number): Point => {
  const x_ =
    point.x * Math.cos(theta) - point.y * Math.sin(theta) + point.z * 0;
  const y_ =
    point.x * Math.sin(theta) + point.y * Math.cos(theta) + point.z * 0;
  const z_ = point.x * 0 + point.y * 0 + point.z * 1;
  return { x: x_, y: y_, z: z_ };
};
