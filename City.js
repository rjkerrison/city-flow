const camelCase = require('camelcase')

class City {
  constructor(name, network) {
    this.name = name
    this.id = camelCase(name)
    this.network = network

    this.node = this.network.add({
      group: 'nodes',
      data: {
        id: this.id,
        city: this
      }
    })
  }

  addConnection(city, distance) {
    if (city instanceof City
      && city.network === this.network) {
      var newConnection = this.network.add({
        group: 'edges',
        data: {
          source: this.id,
          target: city.id,
          distance: distance
        }
      })

      return newConnection
    }
  }
}

module.exports = City
