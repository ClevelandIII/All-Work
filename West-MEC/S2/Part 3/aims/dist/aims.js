"use strict";
/**
 * Math related shinanegans
 */
class Aims {
    /**
     *
     * @param {number} a - leg a
     * @param {number} b - leg b
     * @returns hypotenuse of a triangle
     */
    static pythagoreanTheorem(a, b) {
        return Math.sqrt(Math.pow(a, 2) * Math.pow(b, 2));
    }
    /**
     *
     * @param {number} a - first constant
     * @param {number} b - second constant
     * @param {number} c - third constant
     * @returns the solution to a quadratic equation
     */
    static quadraticFormula(a, b, c) {
        return [
            ((-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2) * a,
            ((-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / 2) * a,
        ];
    }
}
/**
 * @member {number} pi - holds 3.14
 */
Aims.pi = 3.14;
/**
 * Finds the Area of several shapes
 */
Aims.Area = {
    /**
     *
     * @param {number} base - base
     * @param {number} height - height
     * @returns area of a triangle
     */
    triangle(base, height) {
        return (base * height) / 2;
    },
    /**
     *
     * @param {number} length - length
     * @param {number} width - width
     * @returns area of a rectangle
     */
    rectangle(length, width) {
        return length * width;
    },
    /**
     *
     * @param {number} base1 - base 1
     * @param {number} base2 - base 2
     * @param {number} height - height
     * @returns area of a trapezoid
     */
    trapezoid(base1, base2, height) {
        return (height * (base1 * base2)) / 2;
    },
    /**
     *
     * @param {number} base - base
     * @param {number} height - height
     * @returns area of a parallelogram
     */
    parallelogram(base, height) {
        return base * height;
    },
    /**
     *
     * @param {number} radius - radius
     * @returns area of a circle
     */
    circle(radius) {
        return Aims.pi * Math.pow(radius, 2);
    },
    /**
     *
     * @param {number} radius - radius
     * @param {number} slantHeight - slant height
     * @returns area of a right circular cone
     */
    rightCircularCone(radius, slantHeight) {
        return Aims.pi * radius * slantHeight + Aims.pi * Math.pow(radius, 2);
    },
    /**
     *
     * @param {number} areaOfBase - area of the base
     * @param {number} perimeter - perimeter of the base
     * @param {number} slantHeight - slant height
     * @returns area of a pyramid
     */
    pyramid(areaOfBase, perimeter, slantHeight) {
        return areaOfBase + (perimeter * slantHeight) / 2;
    },
    /**
     *
     * @param {number} radius - radius
     * @returns area of a sphere
     */
    sphere(radius) {
        return 4 * Aims.pi * Math.pow(radius, 2);
    },
    /**
     *
     * @param {number} radius - radius
     * @param {number} height - height
     * @returns area of a right circular cylinder
     */
    rightCircularCylinder(radius, height) {
        return 2 * Aims.pi * radius * height + 2 * Aims.pi * Math.pow(radius, 2);
    },
    /**
     *
     * @param {number} areaOfBase - area of the base
     * @param {number} perimeter - perimeter of the base
     * @param {number} height - height
     * @returns area of a right prism
     */
    rightPrism(areaOfBase, perimeter, height) {
        return 2 * areaOfBase + perimeter * height;
    },
};
/**
 * Finds the Volume of several shapes
 */
Aims.Volume = {
    /**
     *
     * @param {number} radius - radius
     * @param {number} height - height
     * @returns volume of a right circular cone
     */
    rightCircularCone(radius, height) {
        return (Aims.pi * Math.pow(radius, 2) * height) / 3;
    },
    /**
     *
     * @param {number} areaOfBase - area of the base
     * @param {number} height - height
     * @returns volume of a pyramid
     */
    pyramid(areaOfBase, height) {
        return (areaOfBase * height) / 3;
    },
    /**
     *
     * @param {number} radius - radius
     * @returns volume of a sphere
     */
    sphere(radius) {
        return (4 * (Aims.pi * Math.pow(radius, 3))) / 3;
    },
    /**
     *
     * @param {number} radius - radius
     * @param {number} height - height
     * @returns volume of a right circular cylinder
     */
    rightCircularCylinder(radius, height) {
        return Aims.pi * Math.pow(radius, 2) * height;
    },
    /**
     *
     * @param {number} areaOfBase - area of the base
     * @param {number} height - height
     * @returns volume of a right prism
     */
    rightPrism(areaOfBase, height) {
        return areaOfBase * height;
    },
};
/**
 * Finds several things provided two sets of coordinates
 */
Aims.coordinateGeometry = {
    /**
     *
     * @param {number} x1 - x of first coordinate
     * @param {number} x2 - x of second coordinate
     * @param {number} y1 - y of first coordinate
     * @param {number} y2 - y of second coordinate
     * @returns the distance between two points
     */
    distance(x1, x2, y1, y2) {
        return Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    },
    /**
     *
     * @param {number} x1 - x of first coordinate
     * @param {number} x2 - x of second coordinate
     * @param {number} y1 - y of first coordinate
     * @param {number} y2 - y of second coordinate
     * @returns the midpoint between two points
     */
    midpoint(x1, x2, y1, y2) {
        return [(x2 + x1) / 2, (y2 + y1) / 2];
    },
    /**
     *
     * @param {number} x1 - x of first coordinate
     * @param {number} x2 - x of second coordinate
     * @param {number} y1 - y of first coordinate
     * @param {number} y2 - y of second coordinate
     * @returns the slope of the line between two points
     */
    slopeOfLine(x1, x2, y1, y2) {
        return (y2 - y1) / (x2 - x1);
    },
};
//# sourceMappingURL=aims.js.map