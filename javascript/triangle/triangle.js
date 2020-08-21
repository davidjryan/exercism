//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(x, y ,z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  isEquilateral() {
    return !(this.x === 0 && this.y === 0 && this.z === 0) && (this.x === this.y && this.x === this.z);
  }

  isIsosceles() {
    return this.isValidTriangle() && (this.x === this.y || this.y === this.z || this.x === this.z);
  }

  isScalene() {
    return this.isValidTriangle() && (this.x !== this.y && this.y !== this.z);
  }

  isValidTriangle() {
    return (this.x > 0 && this.y > 0 && this.z > 0) && (
      this.z + this.y >= this.x &&
      this.x + this.z >= this.y &&
      this.x + this.y >= this.z
      )}
}
