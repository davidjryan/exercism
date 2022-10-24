//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const countWords = (string) => {
  try {
    const words = string
      .replace(",", " ")
      .split(" ")
      .reduce((acc, cur) => {
        if (!acc[cur]) {
          acc[cur] = 1;
        } else {
          acc[cur] = acc[cur] + 1;
        }
        return acc;
      }, {});

    return words;
  } catch {
    throw new Error("Remove this statement and implement this function");
  }
};
