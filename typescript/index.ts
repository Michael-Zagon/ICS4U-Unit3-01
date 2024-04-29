/**
 * The program for 301
 *
 * By: Michael Zagon
 * Version: 1.0
 * Since: 2024-04-23
 */

import { createPrompt } from 'bun-promptx'

/**
 *
 * This is the recurrsion function.
 *
 * @param {string} userWord the user input.
 * @returns {string} the string thats reversed.
 */
function recurrsionString(userWord: string): string {
  if (userWord === '') {
    return userWord
  } else {
    return recurrsionString(userWord.slice(1)) + userWord.slice(0, 1)
  }
}

// Asks for the users input
console.log('This program reverses a String')
const userWord = prompt('Enter your word: ')

// Shows the original word
console.log(`This is the Original Word: ${userWord}`)

// Shows the reversed string word.
console.log(`The reversed word is: ${recurrsionString(userWord)}`)

console.log('\nDone.')
