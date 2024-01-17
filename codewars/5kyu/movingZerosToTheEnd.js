/**
* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
* 
* moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */

arr1 = [false,1,0,1,2,0,1,3,"a"] // [false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
    const zeroArr = []
    const baseArr = []
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        console.log(item)
        if (item === 0) {
            zeroArr.push(arr[i])
        } else {
            baseArr.push(arr[i])
        }
    }
    return [...baseArr, ...zeroArr] 
}

function moveZeros2(arr) {
    const zeroArr = []
    const baseArr = []
    for (const iterator of arr) {
        if (iterator === 0) zeroArr.push(iterator)
        else baseArr.push(iterator)
    }
    return [...baseArr, ...zeroArr]
}

console.log(moveZeros2(arr1))