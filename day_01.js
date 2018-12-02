const fs = require('fs')

const data = fs.readFileSync('./day_01_input.txt', { encoding: 'UTF-8' })
const frequencies = data.split(/\n/g).map(Number)

/* PART 1 */

// Array Reduce Docs:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
const finalFreq = frequencies.reduce((acum, current) => acum + current)
console.log('Final Frequency ', finalFreq)

/* PART 2 */

// Set object Docs:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
const freqReached = new Set()
let frequency = 0

while(true) {
  for (let currentFreq of frequencies) {
    freqReached.add(frequency)
    frequency += currentFreq
    if (freqReached.has(frequency)) {
      console.log('Reached Twice: ', frequency)
      return
    }
  }
}

