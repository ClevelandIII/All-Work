/**
 * is a string holding the name Jimmy
 * @type {string[]}
 */
export const testing: string[] = ["Jimmy", "Seam"];

/**
 * Multiplies two numbers
 * @param {number} a - first number
 * @param {number} b - second number
 * @returns {number} the product of a * b
 */
export const mult = (a: number, b: number) => {
  return a * b;
};
console.log(mult(777, 666));

//!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

/**
 * Holds a bunch of math related shinanagans
 */
export class Areas {
  /**
   * @member {number} pi - holds 3.14
   */
  static pi = 3.14;

  static circle = {
    /**
     * finds the area of a circle
     * @param {number} rad - radius
     * @returns {number} area
     */
    area(rad: number) {
      return rad * Areas.pi ** 2;
    },
    /**
     * finds the circumference of a circle
     * @param {number} rad - radius
     * @returns {number} circumference
     */
    circumference(rad: number) {
      return 2 * Areas.pi * rad;
    },
  };

  static triangle = {
    /**
     * finds area of a triangle
     * @param {number} base - bottom
     * @param {number} height - hight
     * @returns {number} - area
     */
    area(base: number, height: number): number {
      return (base * height) / 2;
    },
  };
}

console.log(
  `Circle Radius - ${Areas.circle.area(
    10
  )} Triangle Radius - ${Areas.triangle.area(10, 20)}
   Circumference - ${Areas.circle.circumference(10)}`
);
