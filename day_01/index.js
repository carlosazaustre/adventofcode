'use strict'
/**
 * --- Day 1: Chronal Calibration ---
 * https://adventofcode.com/2018/day/1
 */

const fs = require('fs')
const path = require('path')

const input = fs.readFileSync(path.resolve(__dirname, 'input.txt'), { encoding: 'utf8' })
// Convert data file input
const frequencies = input.split(/\n/g).map(Number)

/** PART 1 */
function resolvePart1 (data) {
  // Array Reduce Docs:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  return data.reduce((acum, current) => acum + current)
}
// const finalFreq = frequencies.reduce((acum, current) => acum + current)
// console.log('Final Frequency ', finalFreq)

/* PART 2 */
function resolvePart2 (data) {
  let frequency = 0

  // Set object Docs:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  const freqReached = new Set()
  
  while(true) {
    // Note that your device might need to repeat its list of frequency
    // changes many times before a duplicate frequency is found
    for (let current of data) {
      freqReached.add(frequency)
      frequency += current
      
      if (freqReached.has(frequency)) {
        return frequency
      }
    }
  }
}

console.log(`PART 1 -- Resulting frequency: ${resolvePart1(frequencies)}`)
console.log(`PART 2 -- First frequency your device reaches twice: ${resolvePart2(frequencies)}`)


