'use strict'

/** 
 * --- Day 2: Inventory Management System ---
 * https://adventofcode.com/2018/day/2
 */

const { getData } = require('../utils')

function getNumberOfTimes (array, value) {
  let times = 0
  array.forEach(v => v === value && times++)
  return times
}

function getChecksum (arrayData) {
  // Array Reduce doc:
  // The reduce() method executes a reducer function 
  // (that you provide) on each member of the array 
  // resulting in a single output value.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  const checksum = arrayData.reduce((acum, current) => {
    // Convert current string ID into a char array
    const letters = [...current]

    let numberOfTimes = {}

    // Store each letter as key in an object.
    // value will be the number of occurrences/times that
    // appears.
    letters.forEach(letter => {
      numberOfTimes[letter] = numberOfTimes[letter] 
        ? numberOfTimes[letter]++
        : 1
    })
    
    // Array.prototype.some
    // The some() method tests whether at least one
    // element in the array passes the test implemented 
    // by the provided function.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    if (Object.keys(numberOfTimes).some(key => numberOfTimes[key] === 2)) acum[0]++
    if (Object.keys(numberOfTimes).some(key => numberOfTimes[key] === 3)) acum[1]++
    
    return acum
  }, [ 0, 0 ])

  return checksum[0] * checksum[1]
}

const arrayIds = getData('day_02/input.txt')
console.log(`PART 1 -- List of box IDs Checksum: ${getChecksum(arrayIds)}`)
