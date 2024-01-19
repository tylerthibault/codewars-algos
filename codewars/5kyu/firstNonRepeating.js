/**
 * Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
 * 
 * For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
 * 
 * As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
 * If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
 */

const str1 = "sTreSS"

function firstNonRepeatingLetter(str) {
    // Add your code here
    let freq = {}
    for (const iterator of str) {
        let iteratorLower = iterator.toLowerCase()
        if (freq.hasOwnProperty(iteratorLower)) {
            freq = {
                ...freq,
                [iteratorLower]: {
                    qty: freq[iteratorLower]['qty'] + 1,
                    returnVal: iterator,
                }
            }
        } else {
            freq = {
                ...freq,
                [iteratorLower]: {
                    qty: 1,
                    returnVal: iterator,
                }
            }
            // freq[iterator] = 1 
        }
    }
    for (const i of str) {
        let iLower = i.toLowerCase()
        if (freq[iLower]['qty'] === 1) return i
    }
    return ""
}

console.log(firstNonRepeatingLetter(str1))