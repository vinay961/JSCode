
function convertToNumber(str) {
    const num = parseInt(str);
    return isNaN(num) ? "NaN" : num;
}

console.log(convertToNumber("123")); // 123
console.log(convertToNumber("abc")); // NaN
  