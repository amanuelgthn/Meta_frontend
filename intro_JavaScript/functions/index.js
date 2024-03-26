#!/usr/bin/node
/* Practicing with functions */

/* Funciton to found  */
const letterFinder = (word, match) => {
    for (let i = 0; i < word.length; i++) {
        if (word[i] === match) {
            console.log(`Fouund the ${match} at ${i}`);
        }
        else {
            console.log(`--No Match found at ${i}`);
        }
    }
}

letterFinder("test", "t")