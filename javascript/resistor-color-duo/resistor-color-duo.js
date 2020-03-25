//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = colors => {

  const colorString = colorMapTens[colors[0]] + colorMapOnes[colors[1]];
  
  return colorString;
};

const colorMapTens = {
    'black': 0,
    'brown': 10,
    'red': 20,
    'orange': 30,
    'yellow': 40,
    'green': 50,
    'blue': 60,
    'violet': 70,
    'grey': 80,
    'white': 90,
};
const colorMapOnes = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9,
};