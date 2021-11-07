//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const responces = {
  question: "Sure.",
  yell: "Whoa, chill out!",
  yellQuestion: "Calm down, I know what I'm doing!",
  blank: "Fine. Be that way!",
};

function isUpperCase(str) {
  return str === str.toUpperCase();
}

function lowerAndUpperUnequal(str) {
  return str.toLowerCase() != str.toUpperCase();
}

function isQuestion(str) {
  return str.slice(-1) === "?";
}

function isBlank(str) {
  return str.trim().length === 0;
}

export const hey = (message) => {
  if (isBlank(message)) {
    return responces["blank"];
  }

  if (isQuestion(message) && isUpperCase(message)) {
    return responces["yellQuestion"];
  }

  if (isUpperCase(message) && lowerAndUpperUnequal(message)) {
    return responces["yell"];
  }

  if (isQuestion(message)) {
    return responces["question"];
  }

  return "Whatever.";
};
