const fs = require('fs')
const path = require('path')

function getData(inputFile, dataType = String) {
  const data = fs.readFileSync(path.resolve(__dirname, inputFile), {
    encoding: 'utf8'
  })
  return data.split(/\n/g).map(dataType)
}

module.exports = {
  getData
}