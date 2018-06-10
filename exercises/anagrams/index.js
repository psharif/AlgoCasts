// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {}

function createObjects(str){
  charObj = {};

  for ( let char of str.toLowerCase().replace(/[^\w]/g, "")){
    charObj[char] = charObj[char] + 1 || 1;
  }
  return charObj;
}

function anagrams(stringA, stringB){

  Obj1 = createObjects(stringA);
  Obj2 = createObjects(stringB);

  if( Object.keys(Obj1).length !== Object.keys(Obj2).length ){
    return false;
  }

  for( let key in Obj1 ){
    if( Obj1[key] !== Obj2[key] ){
      return false;
    }
  }

  return true;
}

// function sortAndReplace(str){
//   return str.toLowerCase()
//              .replace(/[^\w]/g, "")
//              .split("")
//              .sort()
//              .join("");
// }
//
// function anagrams(stringA, stringB){
//   return sortAndReplace(stringA) === sortAndReplace(stringB);
// }


// console.log(anagrams('rail safety', 'fairy tales'));
// console.log(anagrams('Hi there', 'Bye there'));
// console.log(anagrams('RAIL! SAFETY!', 'fairy tales'));


module.exports = anagrams;
