
function countOccurrences(str, word) {
  const count = str.split(" ").reduce((acc,curr) => (curr == word ? acc+1 : acc),0);
  return count;
}
const comment = "This product is great. The quality is great and it's a great value.";
const wordToCount = "great";

const count = countOccurrences(comment, wordToCount);
console.log(`The word ${wordToCount} appears ${count} times in the comment.`);


  