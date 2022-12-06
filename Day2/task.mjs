// Total time taken -  80 mins
// Learnt readFileSync, enum
// Polished up on 
// emotion - Ran out of time so might miss the second part

import { readFileSync } from 'node:fs';

// Pull in the the stratergy given to me by the elfs - need to split into each battle so I can assign a score. 
const eachBattle = readFileSync('./stratergy.txt', { encoding: 'utf-8' })
    .trim()
    .split('\n') // we are splitting here on each new line.
    .map((line) => line.split(' ')); // This will map through the one big array and create an array for each battle;

// created a enum as a base to ensure that every battle action had the right score
const moves = {
    rock: 1,
    paper: 2,
    scissors: 3,
};

// Converted the inputs from the input file to the right values, both opponent and myself
const inputMap = {
    A: moves.rock,
    B: moves.paper,
    C: moves.scissors,
    X: moves.rock,
    Y: moves.paper,
    Z: moves.scissors,
}
// It will be good to do a console.log here to make sure everything is correct 

// The below helper function go through the logic of a possible win or draw and returns the correct score
const score = (opponentMove, myMove) => {
    if (opponentMove === myMove) {
        return myMove + 3;
    }
    if ((opponentMove === moves.rock && myMove === moves.paper) ||
        (opponentMove === moves.paper && myMove === moves.scissors) ||
        (opponentMove === moves.scissors && myMove === moves.rock)
    ) {
        return myMove + 6;
    }
    return myMove;
}


const part1 = () => {
    const battleOutcome = eachBattle.map((battleMove) => {
        const opponentMove = inputMap[battleMove[0]];
        const myMove = inputMap[battleMove[1]];
        //console.log the above two and perform some checks that all are correct
        return score(opponentMove, myMove);
    })
    return battleOutcome.reduce((a, b) => a + b, 0);

}

// Didnt get time to try part 2 as I spent hours looking for the below which allowed me to skip testing for an empty arrow function
/* istanbul ignore next */

console.log(part1())