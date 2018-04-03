const cytoscope = require('cytoscope')
const camelCase = require('camelcase')

var network = new cytoscope()

class City {
  constructor(name) {
    this.name = name
    this.id = camelCase(name)
  }
}