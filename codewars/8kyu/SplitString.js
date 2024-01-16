// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
   let returnArr = []

    let temp = ""
    for (let i=0; i<str.length; i++) {
        if (i % 2 !== 0) {
            temp += str[i]
            returnArr.push(temp)
            temp = ''

        } else {
            temp += str[i]
        }
    }
    if (temp.length > 0) {
        temp += "_"
        returnArr.push(temp)
    }
    return returnArr 
}

console.log(solution("abc"))
console.log(solution("abcdefg"))