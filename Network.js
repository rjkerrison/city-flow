const cytoscape = require('cytoscape')
const City = require('./City')
const cityData = require('./cities.json')

var network = new cytoscape()

var cities = []

for (var cityEntry of cityData) {
  let city = new City(cityEntry.name, network)
  cities.push({
    city: city,
    data: cityEntry
  })
}

for (let city of cities) {
  for (let connection of city.data.connections) {
    var target = network.nodes(node => node.data().city.name === connection.target)[0].data().city
    if (target) {
      var newConnection = city.city.addConnection(target, connection.distance)

      if (newConnection)
        console.log(newConnection.data())
    }
  }
}

module.exports = {
  cities: cities,
  network: network
}
