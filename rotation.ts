export type Point = {
  x: number;
  y: number;
  z: number;
};

export const rotateX = (point: Point, theta: number): Point => {
  const y_ = point.y * Math.cos(theta) - point.z * Math.sin(theta);
  const z_ = point.y * Math.sin(theta) + point.z * Math.cos(theta);
  return { x: point.x, y: y_, z: z_ };
};

export const rotateY = (point: Point, theta: number): Point => {
  const x_ = point.x * Math.cos(theta) + point.z * Math.sin(theta);
  const z_ = -point.x * Math.sin(theta) + point.z * Math.cos(theta);
  return { x: x_, y: point.y, z: z_ };
};

export const rotateZ = (point: Point, theta: number): Point => {
  const x_ = point.x * Math.cos(theta) - point.y * Math.sin(theta);
  const y_ = point.x * Math.sin(theta) + point.y * Math.cos(theta);
  return { x: x_, y: y_, z: point.z };
};
