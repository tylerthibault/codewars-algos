// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""          

function generateHashtag (str) {
    let returnStr = "#"
    str = str.trim()
    let startOfWord = true
    let tempWord = ""
    for (let i=0; i<str.length; i++) {
        let char = str[i]
        if (startOfWord) {
            tempWord += char.toUpperCase()
            startOfWord = false
        } else if (str[i] === " " && str[i+1] !== " ") {
            startOfWord = true
            returnStr += tempWord
            tempWord = ""
        }
        else {
            if (char !== " "){
                tempWord += char
            }
        }
    }
    returnStr += tempWord
    if (returnStr.length < 2 || returnStr.length > 140) return false
    return returnStr
}
// function generateHashtag (str) {
//     let returnStr = "#"
//     let tempWord = ""
//     for (let i=0; i<str.length; i++) {
//         let char = str[i]
//         console.log(char, i, str.length - 1)

//         if (str[i - 1] === " " && str[i] !== " ") {
//             console.log("in One")
//             char = char.toUpperCase()
//             tempWord += char
//         } else if (str[i] !== " ") {
//             console.log("in two")
//             tempWord += str[i]
//         } else if (str[i] === " ") {
//             console.log("in Three")
//             returnStr += tempWord
//             tempWord = ""
//         }
//     }
//     console.log(returnStr)
//     if (returnStr.length < 2) {
//         return false
//     } 
//     returnStr += tempWord
//     return returnStr
// }

console.log(generateHashtag(""))
console.log(generateHashtag(" ".repeat(200)))
console.log(generateHashtag(" Hello there thanks for trying my Kata"))
console.log(generateHashtag("    Hello     World   "))
console.log(generateHashtag("Do We have A Hashtag"))
console.log(generateHashtag("Codewars"))
console.log(generateHashtag("Codewars Now"))