// // Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).


// const strAA = "abc"
// const strAB = "bc"

// const strBA = "abc"
// const strBB = "d"

// function stringEndsWith(str, ending){

//     // getting the index value for the given str that starts from the back of the str the number of chars in the ending string. 
//     let strStartOfTheEnd = str.length - ending.length

//     // loops over the total of the ending length and compares the str at the index taken from above to the value of the ending at the looping index. 
//     for (let i = 0; i < ending.length; i++) {
//         // if the two values do not match then it does not end with the ending string. Return false. 
//         if (str[i + strStartOfTheEnd] !== ending[i]) {
//             return false
//         }
//     }

//     // the ending matches the ending of the str. Return true
//     return true

// }

// console.log(stringEndsWith(strAA, strAB))
// console.log(stringEndsWith(strBA, strBB))



// Enhance the solution to determine if the given string (first argument) ends with the specified ending (second argument).

const strAA = "abc";
const strAB = "bc";

const strBA = "abc";
const strBB = "d";

function stringEndsWith(str, ending) {
    // Obtain the index at which the comparison should start from the end of the string.
    let strStartOfTheEnd = str.length - ending.length;

    // Iterate over the length of the ending string and compare characters at corresponding positions.
    for (let i = 0; i < ending.length; i++) {
        // If characters do not match, the string does not end with the specified ending. Return false.
        if (str[i + strStartOfTheEnd] !== ending[i]) {
            return false;
        }
    }

    // The ending matches the end of the string. Return true.
    return true;
}

// Test the function with example strings.
console.log(stringEndsWith(strAA, strAB));
console.log(stringEndsWith(strBA, strBB));
