'use strict'

/** 
 * --- Day 2: Inventory Management System ---
 * https://adventofcode.com/2018/day/2
 */

const { getData } = require('../utils')


/* PART 1 */
function repeatedCounter (array) {
  let storeObj = {}

  // Array.prototype.some
  // The some() method tests whether at least one
  // element in the array passes the test implemented 
  // by the provided function.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
  array.forEach(value => {
    storeObj[value] = storeObj[value] ? storeObj[value] + 1 : 1
  })

  return storeObj
}

function getValueFromIDs (acum, current) {
  // Convert current string into a char array
  const letters = [...current]
  
  // Store each letter as key in an object.
  // value will be the number of occurrences/times that
  // appears.
  let numberOfTimes = repeatedCounter(letters)
  
  if (Object.values(numberOfTimes).includes(2)) acum[0]++
  if (Object.values(numberOfTimes).includes(3)) acum[1]++

  return acum
}

function getChecksum (data) {
  // Array Reduce doc:
  // The reduce() method executes a reducer function 
  // (that you provide) on each member of the array 
  // resulting in a single output value.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
  const checksum = data.reduce(getValueFromIDs, [ 0, 0 ])

  return checksum[0] * checksum[1]
}

const arrayIds = getData('day_02/input.txt')
console.log(`PART 1 -- List of box IDs Checksum: ${getChecksum(arrayIds)}`)
