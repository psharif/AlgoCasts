// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse2(str) {

  strArray = str.split("");
  let end = strArray.length - 1;
  let beg = 0;

  while(end > beg){
    let temp = strArray[beg];
    strArray[beg] = strArray[end];
    strArray[end] = temp;

    end--;
    beg++;
  }

  return strArray.join("")
}

function reverse(str){
  return str.split("").reduce((rev, char) => char + rev , "")
}
console.log(reverse('Greetings!'));
console.log(reverse2('Greetings!'));

module.exports = reverse;
