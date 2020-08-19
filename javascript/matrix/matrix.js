//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
  constructor(str) {
    this.matrix = str.split("\n").map((e) => e.split(" ").map((e) => parseInt(e)));
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    return this.matrix[0].map((col,index) => this.rows.map((row) => row[index]));
  }
}
