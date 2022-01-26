/**
 * Math related shinanegans
 */
abstract class Aims {
  /**
   * @member {number} pi - holds 3.14
   */
  static pi = 3.14;

  /**
   * Finds the Area of several shapes
   */
  static Area = {
    /**
     *
     * @param {number} base - base
     * @param {number} height - height
     * @returns area of a triangle
     */
    triangle(base: number, height: number) {
      return (base * height) / 2;
    },
    /**
     *
     * @param {number} length - length
     * @param {number} width - width
     * @returns area of a rectangle
     */
    rectangle(length: number, width: number) {
      return length * width;
    },
    /**
     *
     * @param {number} base1 - base 1
     * @param {number} base2 - base 2
     * @param {number} height - height
     * @returns area of a trapezoid
     */
    trapezoid(base1: number, base2: number, height: number) {
      return (height * (base1 * base2)) / 2;
    },
    /**
     *
     * @param {number} base - base
     * @param {number} height - height
     * @returns area of a parallelogram
     */
    parallelogram(base: number, height: number) {
      return base * height;
    },
    /**
     *
     * @param {number} radius - radius
     * @returns area of a circle
     */
    circle(radius: number) {
      return Aims.pi * radius ** 2;
    },
    /**
     *
     * @param {number} radius - radius
     * @param {number} slantHeight - slant height
     * @returns area of a right circular cone
     */
    rightCircularCone(radius: number, slantHeight: number) {
      return Aims.pi * radius * slantHeight + Aims.pi * radius ** 2;
    },
    /**
     *
     * @param {number} areaOfBase - area of the base
     * @param {number} perimeter - perimeter of the base
     * @param {number} slantHeight - slant height
     * @returns area of a pyramid
     */
    pyramid(areaOfBase: number, perimeter: number, slantHeight: number) {
      return areaOfBase + (perimeter * slantHeight) / 2;
    },
    /**
     *
     * @param {number} radius - radius
     * @returns area of a sphere
     */
    sphere(radius: number) {
      return 4 * Aims.pi * radius ** 2;
    },
    /**
     *
     * @param {number} radius - radius
     * @param {number} height - height
     * @returns area of a right circular cylinder
     */
    rightCircularCylinder(radius: number, height: number) {
      return 2 * Aims.pi * radius * height + 2 * Aims.pi * radius ** 2;
    },
    /**
     *
     * @param {number} areaOfBase - area of the base
     * @param {number} perimeter - perimeter of the base
     * @param {number} height - height
     * @returns area of a right prism
     */
    rightPrism(areaOfBase: number, perimeter: number, height: number) {
      return 2 * areaOfBase + perimeter * height;
    },
  };

  /**
   * Finds the Volume of several shapes
   */
  static Volume = {
    /**
     *
     * @param {number} radius - radius
     * @param {number} height - height
     * @returns volume of a right circular cone
     */
    rightCircularCone(radius: number, height: number) {
      return (Aims.pi * radius ** 2 * height) / 3;
    },
    /**
     *
     * @param {number} areaOfBase - area of the base
     * @param {number} height - height
     * @returns volume of a pyramid
     */
    pyramid(areaOfBase: number, height: number) {
      return (areaOfBase * height) / 3;
    },
    /**
     *
     * @param {number} radius - radius
     * @returns volume of a sphere
     */
    sphere(radius: number) {
      return (4 * (Aims.pi * radius ** 3)) / 3;
    },
    /**
     *
     * @param {number} radius - radius
     * @param {number} height - height
     * @returns volume of a right circular cylinder
     */
    rightCircularCylinder(radius: number, height: number) {
      return Aims.pi * radius ** 2 * height;
    },
    /**
     *
     * @param {number} areaOfBase - area of the base
     * @param {number} height - height
     * @returns volume of a right prism
     */
    rightPrism(areaOfBase: number, height: number) {
      return areaOfBase * height;
    },
  };

  /**
   *
   * @param {number} a - leg a
   * @param {number} b - leg b
   * @returns hypotenuse of a triangle
   */
  static pythagoreanTheorem(a: number, b: number) {
    return Math.sqrt(a ** 2 * b ** 2);
  }

  /**
   * Finds several things provided two sets of coordinates
   */
  static coordinateGeometry = {
    /**
     *
     * @param {number} x1 - x of first coordinate
     * @param {number} x2 - x of second coordinate
     * @param {number} y1 - y of first coordinate
     * @param {number} y2 - y of second coordinate
     * @returns the distance between two points
     */
    distance(x1: number, x2: number, y1: number, y2: number) {
      return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    },
    /**
     *
     * @param {number} x1 - x of first coordinate
     * @param {number} x2 - x of second coordinate
     * @param {number} y1 - y of first coordinate
     * @param {number} y2 - y of second coordinate
     * @returns the midpoint between two points
     */
    midpoint(x1: number, x2: number, y1: number, y2: number) {
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
    slopeOfLine(x1: number, x2: number, y1: number, y2: number) {
      return (y2 - y1) / (x2 - x1);
    },
  };

  /**
   *
   * @param {number} a - first constant
   * @param {number} b - second constant
   * @param {number} c - third constant
   * @returns the solution to a quadratic equation
   */
  static quadraticFormula(a: number, b: number, c: number) {
    return [
      ((-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2) * a,
      ((-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2) * a,
    ];
  }
}