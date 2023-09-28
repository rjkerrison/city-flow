import { Player } from './Bearer.js'
import Cytoscape from 'cytoscape'
import { Fbi } from './Fbi.js'
import { GameClock } from './GameClock.js';
import { City } from './City.js';

class Game {
  clock: GameClock;
  fbi: Fbi;
  player?: Player;
  // network: Cytoscape.Core;
  cities: City[]

  constructor(cities: City[]) {
    // this.network = network
    this.cities = cities
    this.clock = new GameClock()
    this.fbi = new Fbi(this.clock)
    this.player = undefined
  }

  createPlayer(name: string) {
    if (!this.player) {
      this.player = new Player(name, this.cities[Math.floor(Math.random() * this.cities.length)])
    }

    return this.player
  }

  move() {
    if (!this.player) {
      return
    }
    const { connections } = this.player.city
    const { target } = connections[Math.floor(Math.random() * connections.length)]
    const newCity = this.cities.find(city => city.name === target)
    if (newCity) {
      this.player.changeLocation(newCity)
    }
  }


}

export default Game
