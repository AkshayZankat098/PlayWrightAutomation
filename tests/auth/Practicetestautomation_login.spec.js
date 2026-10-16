const text = "programming";

const duplicates = [...new Set(
  [...text].filter((char, index) => text.indexOf(char) !== index)
)].sort();

console.log(duplicates);