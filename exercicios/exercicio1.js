const maskify = (sentence) => {
  if (typeof sentence !== "string") {
    throw new Error("The function parameter must be a string");
  }

  let out = "";
  for (let i = 0; i < sentence.length - 4; i++) {
    out += "#";
  }
  return out + sentence.substring(sentence.length - 4);
};

module.exports = maskify;
