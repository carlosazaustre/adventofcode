'use strict'

/** 
 * --- Day 2: Inventory Management System ---
 * https://adventofcode.com/2018/day/2
 */

const { getData } = require('../utils')

const arrayIds = getData('day_02/input.txt')

function getNumberOfTimes (array, value) {
  let times = 0
  array.forEach(v => v === value && times++)
  return times
}

let twoTimesCounter = 0
let threeTimesCounter = 0

arrayIds.forEach(idString => {
  const id = idString.split('')

  let twoTimes = false
  let threeTimes = false
    
  id.forEach(letter => {
    if (getNumberOfTimes(id, letter) === 2) twoTimes = true
    if (getNumberOfTimes(id, letter) === 3) threeTimes = true
  })
  
  if (twoTimes) twoTimesCounter++
  if (threeTimes) threeTimesCounter++
  
  twoTimes = threeTimes = false
})

console.log('twoTimes: ', twoTimesCounter)
console.log('threeTimes: ', threeTimesCounter)
console.log('Checksum: ', twoTimesCounter * threeTimesCounter)
