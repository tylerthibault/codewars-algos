

const board1 = [[0, 0, 1],
                [0, 1, 2],
                [2, 1, 0]]
const expected1 = -1

const board2 = [[2, 2, 2],
                [0, 1, 2],
                [2, 1, 0]]
const expected2 = 2

const board3 = [[2, 1, 2],
                [2, 0, 1],
                [2, 1, 0]]
const expected3 = 2

const board4 = [[2, 1, 2],
                [0, 1, 2],
                [1, 1, 1]]
const expected4 = 1

const board5 = [[1, 2, 2],
                [0, 2, 2],
                [2, 2, 0]]
const expected5 = 2

const board6 = [[2, 1, 1],
                [0, 1, 1],
                [2, 2, 2]]
const expected6 = 2

const board7 = [[0,1,1],[2,0,2],[2,1,0]]
const expected7 = -1

const board8 = [[0,0,2],[0,0,0],[1,0,1]]
const expected8 = -1


function isSolved(board) {
  let foundZero = false

  for (let row=0; row<board.length; row++) {
    for (let col=0; col<board[row].length; col++) {
      let current = board[row][col]

      if (current == 0) {
        myDebugLog("found a 0", 3)
        foundZero = true
      }

      stringNum = `${row}${col}`
      myDebugLog(`\n\ntesting on ${stringNum}`, 3)
      let result = checkNum(stringNum, board)

      if (result == 2) {
        myDebugLog("Found a winner " + current, 1)
        myDebugLog("result = " + result, 1)
        let winner = current
        return winner
      }
    }
  }

  myDebugLog(`FoundZero: ${foundZero}`, 3)
  if (foundZero) return -1
  return 0

}


function checkNum(number, board) {
  myDebugLog("\n\n Starting CheckNum", 2)
  const solutions = {
    // wins for the top row
    '00': [
      [
        [0, 1],
        [0, 2],
      ],
      [
        [1, 0],
        [2, 0],
      ],
      [
        [1, 1],
        [2, 2],
      ],
    ],
    '01': [
      [
        [1, 1],
        [2, 1],
      ],
    ],
    '02': [
      [
        [1, 1],
        [2, 0],
      ],
      [
        [1, 2],
        [2, 2],
      ],
    ],
    // wins for the 2nd row
    '10': [
      [
        [1, 1],
        [1, 2],
      ]
    ],
    // wins for the 3rd row
    '20': [
      [
        [2, 1],
        [2, 2],
      ]
    ]
  }

  const compareValue = board[number[0]][number[1]]

  if (!solutions.hasOwnProperty(number)) {
    return false
  }

  let isWin = 0

  for (let i = 0; i < solutions[number].length; i++) {
    myDebugLog(`checking option ${i + 1}`, 2)
    let options = solutions[number][i]
    myDebugLog("Options:", 3)
    myDebugLog(options, 3)

    myDebugLog("resetting isWin count", 2)
    isWin = 0
    for (let j=0; j<options.length; j++){ 
      let coords = options[j]

      let loc1 = coords[0]
      let loc2 = coords[1]
      let itemInPlace = board[loc1][loc2]

      // check to see if current position matches the item we are looking for
      if (compareValue != 0) {
        myDebugLog(` ** comparing ${itemInPlace} to ${compareValue} **`, 3)
        if (itemInPlace == compareValue) {
          myDebugLog("adding one to isWin cound", 2)
          isWin += 1
        }
      } else {
        myDebugLog("Can't compare 0", 3)
      }
    }
    
    myDebugLog(`Checking isWin: ${isWin}`, 3)
    if (isWin >= 2) {
      break;
    }

  }
  myDebugLog(`Returning: ${isWin}`, 3)
  myDebugLog("Ending CheckNum \n\n", 2)
  return isWin
}

function myDebugLog(message, level) {
  if (myDebugStat) {
    if (level <= debugLevel) {
      console.log(message)
    }
  }
}

const myDebugStat = false

// const myDebugStat = true
const debugLevel = 3

// console.log("got:", isSolved(board1), "expected:", expected1)
// console.log("got:", isSolved(board2), "expected:", expected2)
// console.log("got:", isSolved(board3), "expected:", expected3)
// console.log("got:", isSolved(board4), "expected:", expected4)
// console.log("got:", isSolved(board5), "expected:", expected5)
// console.log("got:", isSolved(board6), "expected:", expected6)
console.log("got:", isSolved(board7), "expected:", expected7)
console.log("got:", isSolved(board8), "expected:", expected8)