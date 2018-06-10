// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charObj = {};
  let highVal = 0;
  let maxChar = "";
  for( let char of str ){
    charObj[char] = charObj[char] + 1 || 1;
  }
  
  for( key in charObj ){
    if( charObj[key] > highVal){
      highVal = charObj[key];
      maxChar = key;
    }
  }

  return maxChar;
}

// console.log(`The highest letter in the string is ${ maxChar("abcccccccd") } `);
// console.log(`The highest letter in the string is ${ maxChar("apple 1231111") } `);

module.exports = maxChar;
