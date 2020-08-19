//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = (int) => {
  if(int < 1) { throw(new Error('Only positive numbers are allowed'))}

  let count = 0;

  while(int != 1) {
    if(int % 2 === 0) {
      int = int/2;
      count++;
    } else {
      int = (3 * int) + 1;
      count++;
    }
  }
  return count;
};
