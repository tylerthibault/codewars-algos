// Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//    [1, 4],
//    [7, 10],
//    [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

function sumIntervals(intervals) {
    let covered = [];

    intervals.forEach(interval => {
        let [start, end] = interval;

        // Check for overlap with existing covered ranges
        for (let i = 0; i < covered.length; i++) {
            let [cStart, cEnd] = covered[i];

            if (start <= cEnd && end >= cStart) {
                // Merge overlapping intervals
                start = Math.min(start, cStart);
                end = Math.max(end, cEnd);

                // Remove the merged interval from covered
                covered.splice(i, 1);
                i--;
            }
        }

        // Add the merged or original interval to covered
        covered.push([start, end]);
    });

    // Calculate the total length of covered ranges
    let sum = covered.reduce((acc, interval) => acc + interval[1] - interval[0], 0);

    return sum;
}



// Examples:
// console.log(sumIntervals( [
//     [1, 2],
//     [6, 10],
//     [11, 15]
//  ] ) )
// // => 9

// console.log(sumIntervals([
//     [1, 4], // 3 
//     [7, 10], // 3
//     [3, 5] // 2
// ]))
// => 7

// console.log(sumIntervals( [
//     [1, 5],
//     [10, 20],
//     [1, 6],
//     [16, 19],
//     [5, 11]
//  ] ) )
// => 19

console.log(sumIntervals( [
    [0, 20],
    [-100000000, 10],
    [30, 40]
 ] ) )

// for (let i=0; i<=100000000; i++) {
//     let name = "tyler"
// }
// for (let i=0; i<=100000000; i++) {
//     let name = "tyler"
// }

// => 100000030
// Tests with large intervals
// Your algorithm should be able to handle large intervals. All tested intervals are subsets of the range [-1000000000, 1000000000].

