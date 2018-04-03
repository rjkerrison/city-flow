const cytoscape = require('cytoscape')
const City = require('./City')

// var network = new cytoscape()

// var sanFrancisco = new City('San Francisco', network)
// var losAngeles = new City('Los Angeles', network)

// sanFrancisco.addConnection(losAngeles, 20)

// var dijkstra = network.elements().dijkstra(sanFrancisco.node, edge => edge.data().distance)

// var distance = dijkstra.distanceTo(losAngeles.node)

// console.log(distance)

const networkDetails = require('./Network')

//console.log(networkDetails.network)
console.log(networkDetails.cities)
