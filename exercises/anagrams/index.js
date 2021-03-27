// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	const mappedStrA = buildCharMap(stringA)
	const mappedStrB = buildCharMap(stringB)

	if(Object.keys(mappedStrA).length !== Object.keys(mappedStrB).length) {
		return false
	}
	for(let char in mappedStrA) {
		if(mappedStrA[char] !== mappedStrB[char]) {
			return false
		}
	}
	return true
}

function buildCharMap(str) {
  let mappedChars = {};
  let strippedStr = str.replace(/[^\w]/g, "");

  for (char of strippedStr) {
    mappedChars[char] = mappedChars[char] + 1 || 1;
  }
  return mappedChars;
}

module.exports = anagrams;
