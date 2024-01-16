// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
    let freqTable = {}
    for (let i=0; i<word.length; i++) {
        let char = word[i].toLowerCase()
        if (freqTable.hasOwnProperty(char)) {
            freqTable[char] += 1
        } else {
            freqTable[char] = 1
        }
    }

    let newStr = ""

    for (let i=0; i<word.length; i++) {
        let char = word[i].toLowerCase()
        if (freqTable[char] > 1) {
            newStr += ")"
        } else {
            newStr += "("
        }
    }
    return newStr
}

console.log(duplicateEncode("Din"))
console.log(duplicateEncode("recede"))
