//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = dateIn => {
  const dateInSeconds = Date.getUTCSeconds(dateIn);

  const combineSeconds = dateInSeconds + 10^9;

  const dateFromSeconds = Date.getUTCDate(combineSeconds);

  return dateFromSeconds;
};
