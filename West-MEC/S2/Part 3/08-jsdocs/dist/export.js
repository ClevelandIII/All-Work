/**
 * is a string holding the name Jimmy
 * @type {string[]}
 */
export const testing = ["Jimmy", "Seam"];
/**
 * Multiplies two numbers
 * @param {number} a - first number
 * @param {number} b - second number
 * @returns {number} the product of a * b
 */
export const mult = (a, b) => {
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
}
/**
 * @member {number} pi - holds 3.14
 */
Areas.pi = 3.14;
Areas.circle = {
    /**
     * finds the area of a circle
     * @param {number} rad - radius
     * @returns {number} area
     */
    area(rad) {
        return rad * Math.pow(Areas.pi, 2);
    },
    /**
     * finds the circumference of a circle
     * @param {number} rad - radius
     * @returns {number} circumference
     */
    circumference(rad) {
        return 2 * Areas.pi * rad;
    },
};
Areas.triangle = {
    /**
     * finds area of a triangle
     * @param {number} base - bottom
     * @param {number} height - hight
     * @returns {number} - area
     */
    area(base, height) {
        return (base * height) / 2;
    },
};
console.log(`Circle Radius - ${Areas.circle.area(10)} Triangle Radius - ${Areas.triangle.area(10, 20)}
   Circumference - ${Areas.circle.circumference(10)}`);
//# sourceMappingURL=export.js.map