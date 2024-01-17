const str1 = "EBG13 rknzcyr." // -> "ROT13 example."
const str2 = "This is my first ROT13 excercise!" // -> "Guvf vf zl svefg EBG13 rkprepvfr!"
const str3 = "Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf."

function rot13(str) {
    let normalAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let encodedAlphabet = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"
    let returnStr = ""

    for (const char of str) {
        let toAdd = char
        if (/^[A-Z]$/i.test(char)) {
            let encodedIdx = encodedAlphabet.indexOf(char)
            let normalChar = normalAlphabet[encodedIdx]
            toAdd = normalChar
        }
        returnStr += toAdd
    }
    return returnStr
}


console.log(rot13(str1))
console.log(rot13(str2))
console.log(rot13(str3))