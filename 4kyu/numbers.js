// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
    let sum = ""

    let longer = a
    let shorter = b
    if (b.length > a.length) {
        longer = b
        shorter = a
    }

    let addTen = false
    for (let i = 0; i<longer.length; i++) {
        let val1 = parseInt(longer[longer.length - 1 - i])
        let val2 = parseInt(shorter[shorter.length - 1 - i])
        // console.log(val1, val2)
        let tempSum = 0
        if (!isNaN(val2)){
            tempSum = val1 + val2
        } else {
            tempSum = val1
        }

        if (addTen) {
            tempSum += 1
        }

        tempSum > 9 ? addTen = true : addTen = false

        let tempSumString = tempSum.toString()
        sum = tempSumString[tempSumString.length - 1] + sum
    }

    if (addTen) {
        sum = "1" + sum
    }

    return sum
}

console.log(add("1", "1")); // "2")
console.log(add("123", "456")); // "579")
console.log(add("888", "222")); // "1110")
console.log(add("1372", "69")); // "1441")
console.log(add("12", "456")); // "468")
console.log(add("101", "100")); // "201")
console.log(add('63829983432984289347293874', '90938498237058927340892374089')) // "91002328220491911630239667963"