const checkIfTheFirstLetterIsUppercase = (word) => {
  const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (typeof word !== "string") {
    throw new Error("The function parameter must be a string");
  }

  return capitalLetters.includes(word[0]);
};

module.exports = checkIfTheFirstLetterIsUppercase;
