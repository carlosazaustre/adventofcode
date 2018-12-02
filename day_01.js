const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: fs.createReadStream('./day_01_input.txt')
})

let frequency = 0

// Part 1
rl.on('line', num => frequency += Number(num))
rl.on('close', () => console.log(`Final: ${frequency}`))

// Part 2

