// import Cytoscape from 'cytoscape'
import { City, Connection } from './City'
import cityData from './cities.json'

// const addNetworkConnection = (source: City, target: City, distance: number) => {
//   if (target.network === source.network) {
//     const data = {
//       source: source.id,
//       target: target.id,
//       distance: distance
//     }

//     if (!source.network.edges(`source=${source.id} and target=${target.id}`).empty()) {
//       console.log("found this edge already", data)
//     } else {
//       console.log("new edge", data)

//       source.network.add({
//         group: 'edges',
//         data
//       })

//     }

//   }
// }

export const buildNetwork = () => {
  // const network = Cytoscape()

  const cities: City[] = []

  for (const cityEntry of cityData) {
    const city = new City(cityEntry)
    cities.push(city)
  }

  for (const city of cities) {
    for (const connection of city.connections) {

      const target = cities.find(city => city.name === connection.target)
      if (target) {
        // addNetworkConnection(city, target, connection.distance)
        target.addConnection({
          ...connection,
          target: city.name,
        })
      }
    }
  }

  return {
    cities,
    // network
  }
}