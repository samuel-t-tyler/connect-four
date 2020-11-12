const drop1 = document.getElementById("drop1")
const drop2 = document.getElementById("drop2")
const drop3 = document.getElementById("drop3")
const drop4 = document.getElementById("drop4")
const drop5 = document.getElementById("drop5")
const drop6 = document.getElementById("drop6")
const drop7 = document.getElementById("drop7")
const title = document.getElementById("title")
let masterList = [drop1, drop2, drop3, drop4, drop5, drop6, drop7]
let body = document.getElementById("body")
let mainTable = document.getElementById("maintable")
// index maker
const listOfIndex = []
let listOfElements = []
const indexMaker = () => {
    for (i=1; i < 43; i++) {
        listOfIndex.push(i.toString())
    }
}
const elementMaker = () => {
    for (i=0; i < listOfIndex.length; i++) {
        let currentElement;
        currentElement = document.getElementById(listOfIndex[i])
        listOfElements.push(currentElement)
    }
}

indexMaker()
elementMaker()
// 




let winningArrays = [
//east west
    [1,2,3,4],
    [2,3,4,5],
    [3,4,5,6],
    [4,5,6,7],

    [8,9,10,11],
    [9,10,11,12],
    [10,11,12,13],
    [11,12,13,14],

    [15,16,17,18],
    [16,17,18,19],
    [17,18,19,20],
    [18,19,20,21],

    [22,23,24,25],
    [23,24,25,26],
    [24,25,26,27],
    [25,26,27,28],

    [29,30,31,32],
    [30,31,32,33],
    [31,32,33,34],
    [32,33,34,35],

    [36,37,38,39],
    [37,38,39,40],
    [38,39,40,41],
    [39,40,41,42],
// north south
    [1,8,15,22],
    [8,15,22,29],
    [15,22,29,36],

    [2,9,16,23],
    [9,16,23,30],
    [16,23,30,37],

    [3,10,17,24],
    [10,17,24,31],
    [17,24,31,38],

    [4,11,18,25],
    [11,18,25,32],
    [18,25,32,39],

    [5,12,19,26],
    [12,19,26,33],
    [19,26,33,40],

    [6,13,20,27],
    [13,20,27,34],
    [20,27,34,41],

    [7,14,21,28],
    [14,21,28,35],
    [21,28,35,42],
//diagonal SE NW
    [4,12,20,28],

    [3,11,19,27],
    [11,19,27,35],

    [2,10,18,26],
    [10,18,26,34],
    [18,26,34,42],

    [1,9,17,25],
    [9,17,25,33],
    [17,25,33,41],

    [8,16,24,32],
    [16,24,32,40],

    [15,23,31,39],
// diagonal SW + NE
    [21,27,33,39],

    [14,20,26,32],
    [20,26,32,38],

    [7,13,19,25],
    [13,19,25,31],
    [19,25,31,37],

    [6,12,18,24],
    [12,18,24,30],
    [18,24,30,36],

    [5,11,17,23],
    [11,17,23,29],

    [4,10,16,22],
]
let playerOneMoves = []
let playerTwoMoves = []
let activePlayer = 1
let columnOneMoves=0;
let columnTwoMoves=0;
let columnThreeMoves=0;
let columnFourMoves=0;
let columnFiveMoves=0;
let columnSixMoves=0;
let columnSevenMoves=0;
let gameOver = false;
let arrayColumnMoves = [columnOneMoves, columnTwoMoves, columnThreeMoves, columnFourMoves, columnFiveMoves, columnSixMoves, columnSevenMoves]

// setup functions
function reverseAndAppend() {
    let temparr = []
    for (i=0; i < winningArrays.length; i++) {
        temparr.push(winningArrays[i].slice().reverse())
    }
    for (i=0; i < temparr.length; i++) {
        winningArrays.push(temparr[i])
    }
}
reverseAndAppend()
//end of setup functions

//switch turn
let columnOneValues = [36, 29, 22, 15, 8, 1]
function dropColumnOne() {
    if (gameOver === false) {
        if (columnOneMoves < 6) {
            if (activePlayer % 2 === 1) {
                playerOneMoves.push(columnOneValues[columnOneMoves])
                console.log(columnOneValues[columnOneMoves])
                changePic(columnOneValues[columnOneMoves], activePlayer % 2)
                columnOneMoves++
                checkWin(playerOneMoves)
            } 
            else {
                playerTwoMoves.push(columnOneValues[columnOneMoves])
                changePic(columnOneValues[columnOneMoves], activePlayer % 2)
                columnOneMoves++
                checkWin(playerTwoMoves)
            }
        }
    }
}
let columnTwoValues = [37,30,23,16,9,2]
function dropColumnTwo() {
    if (gameOver === false) {
        if (columnTwoMoves < 6) {
            if (activePlayer % 2 === 1) {
                playerOneMoves.push(columnTwoValues[columnTwoMoves])
                changePic(columnTwoValues[columnTwoMoves], activePlayer % 2)
                columnTwoMoves++
                checkWin(playerOneMoves)
            } 
            else {
                playerTwoMoves.push(columnTwoValues[columnTwoMoves])
                changePic(columnTwoValues[columnTwoMoves], activePlayer % 2)
                columnTwoMoves++
                checkWin(playerTwoMoves)
            }
        }
    }
}
let columnThreeValues = [38,31,24,17,10,3]
function dropColumnThree() {
    if (gameOver === false) {
        if (columnThreeMoves < 6) {
            if (activePlayer % 2 === 1) {
                playerOneMoves.push(columnThreeValues[columnThreeMoves])
                console.log("player one has the following moves: "+ playerOneMoves)
                changePic(columnThreeValues[columnThreeMoves], activePlayer % 2)
                columnThreeMoves++
                checkWin(playerOneMoves)
            } 
            else {
                playerTwoMoves.push(columnThreeValues[columnThreeMoves])
                changePic(columnThreeValues[columnThreeMoves], activePlayer % 2)
                columnThreeMoves++
                checkWin(playerTwoMoves)
            }
        }
    }
}
let columnFourValues = [39,32,25,18,11,4]
function dropColumnFour() {
    if (gameOver === false) {
        if (columnFourMoves < 6) {
            if (activePlayer % 2 === 1) {
                playerOneMoves.push(columnFourValues[columnFourMoves])
                changePic(columnFourValues[columnFourMoves], activePlayer % 2)
                columnFourMoves++
                checkWin(playerOneMoves)
            }
            else {
                playerTwoMoves.push(columnFourValues[columnFourMoves])
                changePic(columnFourValues[columnFourMoves], activePlayer % 2)
                columnFourMoves++
                checkWin(playerTwoMoves)
            }
        }
    }
}
let columnFiveValues = [40,33,26,19,12,5]
function dropColumnFive() {
    if (gameOver === false) {
        if (columnFiveMoves < 6) {
            if (activePlayer % 2 === 1) {
                playerOneMoves.push(columnFiveValues[columnFiveMoves])
                changePic(columnFiveValues[columnFiveMoves], activePlayer % 2)
                columnFiveMoves++
                checkWin(playerOneMoves) 
            }  
            else {
                playerTwoMoves.push(columnFiveValues[columnFiveMoves])
                changePic(columnFiveValues[columnFiveMoves], activePlayer % 2)
                columnFiveMoves++
                checkWin(playerTwoMoves)
            }
        }
    }
}
let columnSixValues = [41, 34, 27, 20, 13, 6]
function dropColumnSix() {
    if (gameOver === false) {
        if (columnSixMoves < 6) {
            if (activePlayer % 2 === 1) {
                playerOneMoves.push(columnSixValues[columnSixMoves])
                changePic(columnSixValues[columnSixMoves], activePlayer % 2)
                columnSixMoves++
                checkWin(playerOneMoves)
            }  
            else {
                playerTwoMoves.push(columnSixValues[columnSixMoves])
                changePic(columnSixValues[columnSixMoves], activePlayer % 2)
                columnSixMoves++
                checkWin(playerTwoMoves)
            }
        }
    }
}
let columnSevenValues = [42, 35, 28, 21, 14, 7]
function dropColumnSeven() {
    if (gameOver === false) {
        if (columnSevenMoves < 6) {
            if (activePlayer % 2 === 1) {
                playerOneMoves.push(columnSevenValues[columnSevenMoves])
                            console.log(columnSevenValues[columnSevenMoves])
                changePic(columnSevenValues[columnSevenMoves], activePlayer % 2)
                columnSevenMoves++
                checkWin(playerOneMoves)
            }  
            else {
                playerTwoMoves.push(columnSevenValues[columnSevenMoves])
                changePic(columnSevenValues[columnSevenMoves], activePlayer % 2)
                columnSevenMoves++
                checkWin(playerTwoMoves)
            }
        }
    }
}
let dropColumnArr = [dropColumnOne, dropColumnTwo, dropColumnThree, dropColumnFour, dropColumnFive, dropColumnSix, dropColumnSeven]



//check win function
function checkWin(arr) {
    switchToWhite()
    addMouseEvents()
    if (activePlayer % 2 === 0) {
            for (j=0; j<winningArrays.length; j++){
                if (arr.length >= 4) {
                if (winningArrays[j].every(i => arr.includes(i))){
                    title.innerHTML = "Play Again?"
                    gameOver = true;
                    body.style.backgroundColor = "#ff3838"
                    mainTable.style.backgroundColor = "#6975A5"
                    title.style.color = "#F3E96B"
                    removeHoverColor()
                    switchToWhite()
                    break;
                }
                }
            }
        } else {
            for (j=0; j<winningArrays.length; j++){
                if (arr.length >= 4) {
                if (winningArrays[j].every(i => arr.includes(i))) {
                    title.innerHTML = "Play Again?"
                    gameOver = true;
                    body.style.backgroundColor = "#F3E96B"
                    mainTable.style.backgroundColor = "#6975A5"
                    title.style.color = "#ff3838"
                    removeHoverColor()
                    switchToWhite()
                    break;
                }
            }
        }
    }
}

function changePic(indexOf, active) {
    if (active === 1){
        listOfElements[indexOf-1].style.backgroundColor = "#ff3838"
    }
    if (active === 0){
        listOfElements[indexOf-1].style.backgroundColor = "#F3E96B"
    }
    activePlayer++
    console.log("active player count:")
    console.log(activePlayer)
}

function callRightFunction(event) {
    for (i=0; i< masterList.length; i++) {
        if (masterList[i] === event.target) {
            let functionCall = dropColumnArr[i]
            functionCall()
            console.log("calling drop function")
        }
    }
}

title.onclick = () => {
    if (gameOver === true) {
        resetGame()
    }
}

function resetGame() {
    playerOneMoves = []
    playerTwoMoves = []
    activePlayer = 1
    columnOneMoves=0;
    columnTwoMoves=0;
    columnThreeMoves=0;
    columnFourMoves=0;
    columnFiveMoves=0;
    columnSixMoves=0;
    columnSevenMoves=0;
    gameOver = false;
    title.innerHTML = "Connect Four"
    for (i=0; i < listOfElements.length; i++) {
        listOfElements[i].style.backgroundColor = "#838eb8"
    }
    body.style.backgroundColor = "#6975A5"
    title.style.color = "#F28a30"
    switchToWhite()
    addMouseEvents()
}


drop1.addEventListener("click", callRightFunction)
drop2.addEventListener("click", callRightFunction)
drop3.addEventListener("click", callRightFunction)
drop4.addEventListener("click", callRightFunction)
drop5.addEventListener("click", callRightFunction)
drop6.addEventListener("click", callRightFunction)
drop7.addEventListener("click", callRightFunction)

const addMouseEvents = () => {
    if (activePlayer % 2 === 0) {
        drop1.onmouseover = () => {drop1.style.backgroundColor = "#F3E96B"}
        drop1.onmouseleave = () => {drop1.style.backgroundColor = "#6975A6"}
        drop2.onmouseover = () => {drop2.style.backgroundColor = "#F3E96B"}
        drop2.onmouseleave = () => {drop2.style.backgroundColor = "#6975A6"}
        drop3.onmouseover = () => {drop3.style.backgroundColor = "#F3E96B"}
        drop3.onmouseleave = () => {drop3.style.backgroundColor = "#6975A6"}
        drop4.onmouseover = () => {drop4.style.backgroundColor = "#F3E96B"}
        drop4.onmouseleave = () => {drop4.style.backgroundColor = "#6975A6"}
        drop5.onmouseover = () => {drop5.style.backgroundColor = "#F3E96B"}
        drop5.onmouseleave = () => {drop5.style.backgroundColor = "#6975A6"}
        drop6.onmouseover = () => {drop6.style.backgroundColor = "#F3E96B"}
        drop6.onmouseleave = () => {drop6.style.backgroundColor = "#6975A6"}
        drop7.onmouseover = () => {drop7.style.backgroundColor = "#F3E96B"}
        drop7.onmouseleave = () => {drop7.style.backgroundColor = "#6975A6"}
    }
    else {
        console.log("swapping to red")
        drop1.onmouseover = () => {drop1.style.backgroundColor = "#ff3838"}
        drop1.onmouseleave = () => {drop1.style.backgroundColor = "#6975A6"}
        drop2.onmouseover = () => {drop2.style.backgroundColor = "#ff3838"}
        drop2.onmouseleave = () => {drop2.style.backgroundColor = "#6975A6"}
        drop3.onmouseover = () => {drop3.style.backgroundColor = "#ff3838"}
        drop3.onmouseleave = () => {drop3.style.backgroundColor = "#6975A6"}
        drop4.onmouseover = () => {drop4.style.backgroundColor = "#ff3838"}
        drop4.onmouseleave = () => {drop4.style.backgroundColor = "#6975A6"}
        drop5.onmouseover = () => {drop5.style.backgroundColor = "#ff3838"}
        drop5.onmouseleave = () => {drop5.style.backgroundColor = "#6975A6"}
        drop6.onmouseover = () => {drop6.style.backgroundColor = "#ff3838"}
        drop6.onmouseleave = () => {drop6.style.backgroundColor = "#6975A6"}
        drop7.onmouseover = () => {drop7.style.backgroundColor = "#ff3838"}
        drop7.onmouseleave = () => {drop7.style.backgroundColor = "#6975A6"}
    }
}

function switchToWhite() {
    for (i=0; i<masterList.length; i++) {
        masterList[i].style.backgroundColor = body.style.backgroundColor
    }
}

function removeHoverColor() {
    drop1.onmouseover = () => {drop1.style.backgroundColor = body.style.backgroundColor}
    drop1.onmouseleave = () => {drop1.style.backgroundColor = body.style.backgroundColor}
    drop2.onmouseover = () => {drop2.style.backgroundColor = body.style.backgroundColor}
    drop2.onmouseleave = () => {drop2.style.backgroundColor = body.style.backgroundColor}
    drop3.onmouseover = () => {drop3.style.backgroundColor = body.style.backgroundColor}
    drop3.onmouseleave = () => {drop3.style.backgroundColor = body.style.backgroundColor}
    drop4.onmouseover = () => {drop4.style.backgroundColor = body.style.backgroundColor}
    drop4.onmouseleave = () => {drop4.style.backgroundColor = body.style.backgroundColor}
    drop5.onmouseover = () => {drop5.style.backgroundColor = body.style.backgroundColor}
    drop5.onmouseleave = () => {drop5.style.backgroundColor = body.style.backgroundColor}
    drop6.onmouseover = () => {drop6.style.backgroundColor = body.style.backgroundColor}
    drop6.onmouseleave = () => {drop6.style.backgroundColor = body.style.backgroundColor}
    drop7.onmouseover = () => {drop7.style.backgroundColor = body.style.backgroundColor}
    drop7.onmouseleave = () => {drop7.style.backgroundColor = body.style.backgroundColor}
}

addMouseEvents()
for (i=0; i < listOfElements.length; i++) {
    listOfElements[i].style.backgroundColor = "#838eb8"
}


