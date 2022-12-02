// Total time taken - 120 mins
// Learnt readFileSync, .mjs extention
// Polished up on reduce and regex
// Had a slight breakdown at the start as I thought I should be able to solve this in 5 seconds. After a lot of googling finally found a way.

import { mkdirSync, readFileSync } from 'node:fs';

// Pull in the the calories from the source file in a format that we need
const elvesCalories = readFileSync('./calories.txt', { encoding: 'utf-8' })
    .trim()
    .split('\n\n'); // we are splitting here on each new line and not just at the end of the line


// The below is a helper function I have created as for part due I reused the same code so I have created the helper function to make the code more DRY
const findMaxCaloriesEachElf = elvesCalories.map((elf) => {
    const caloriesConverstionNumber = elf.split('\n').map(Number); // This gives me many arrays of each elfs calories as number now not strings, console log it and see
    return caloriesConverstionNumber.reduce((previous, current) => previous + current, 0); // This gives me one array that contains the total number of calories for each elf
})

const part1 = () => {
    const findMaxCalories = Math.max(...findMaxCaloriesEachElf); // I am getting the max calories for each elf and finding the max from that array
    return findMaxCalories; // returns the largest number of calories for the array that totalled all the calories for each elf
}

const part2 = () => {
    const sortHighToLowCals = findMaxCaloriesEachElf.sort((a, b) => b - a); //got all the total calories for each elf and sorted them high to low
    const getTopThreeCals = sortHighToLowCals.slice(0, 3); // sliced off the top three 
    return getTopThreeCals.reduce((prev, curr) => prev + curr, 0) // used the reducer to give me a starting point that I could add to, than added each one of the three calories to that starting point
}

console.log(part1())
console.log(part2())