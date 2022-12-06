// Total time taken - 
// Learnt - new Set meathod - regex - charCodeAt
// Polished up on 
// emotion - Fell good starting this but trying to convert a letter to number with charCodeAt killed me and took my spirit for even trying part 2

import { readFileSync } from 'node:fs';

// Pull in the the rucksack items given to me by the elfs - need to split into each rucksack so I can assign a a point to the item type.
const rucksackItems = readFileSync('./rucksackItems.txt', { encoding: 'utf-8' })
    .trim()
    .split('\n') // we are splitting here on each new line.

const letterToPriorityNumber = (letter) => {
    if (/[a-z]/.test(letter)) {
        // score lowercase letters
        return letter.charCodeAt(0) - 96;
    } else {
        return letter.charCodeAt(0) - 65 + 27;
    }
    //If I console log this now passing a and z and A and Z into this function I should get 1 26 27 52
}

const part1 = () => {
    const result = rucksackItems.map((sack) => {
        // Below we are splitting the ruck sack in two compartments, place them into an array so we can filter through them
        const compartmentOne = [...sack.slice(0, sack.length / 2)];
        const compartmentTwo = [...sack.slice(sack.length / 2)];

        //Below are finding the items that exist in both compartments
        const compartmentOneSet = new Set(compartmentOne);
        //Below we are saying filter through compartment two and look in compartment one for the same Item
        const intersection = compartmentTwo.filter((x) => compartmentOneSet.has(x));
        //Below deals with the case were we find a duplicate that appears more than twice in a rucksack
        const removeDuplicates = [... new Set(intersection)];
        //Below I am coverting the returned item which is a letter to the required number
        return letterToPriorityNumber(removeDuplicates[0]);
    })
    //For each rucksack we get a letter that is converted to a number and we simply add them all up
    return result.reduce((a, b) => a + b, 0)
}

// Didnt get time to try part 2 


console.log(part1())