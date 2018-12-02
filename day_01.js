const fs = require('fs')
const readline = require('readline')

const rl = readline.createInterface({
  input: fs.createReadStream('./day_01_input.txt')
})

function getSymbol (number) {
  return number.split('')[0]
}

function getValue (number) {
  return parseInt(number.substring(1, number.length))
}

function isPositive (number) {
  return (getSymbol(number) === '+') ? true : false
}

let frequency = 0
let freqReached = [0]

// Part 1
rl.on('line', number => { 
  isPositive(number) ? frequency += getValue(number) : frequency -= getValue(number)
  console.log(`resulting frequency: ${frequency}`)
})



