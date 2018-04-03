const Bill = require('./Bill')
const bearers = require('./Bearer')
const Bearer = bearers.Bearer
const Bank = bearers.Bank
const Player = bearers.Player

class MarkedBill extends Bill {
}

class Fbi {
  constructor() {
    this.foundBills = []
  }

  recordBill(bill, bank) {
    if (bill instanceof MarkedBill) {
      this.foundBills.push({
        bill: bill,
        bank: bank,
        hour: this.game.clock.hour
      })
    }
  }

  getFoundBillsForCity(city) {
    return this.foundBills.filter(foundBill => foundBill.bank.city === city)
  }
}

class GameClock {
  constructor() {
    this.hour = 0
  }

  advanceHour() {
    this.hour++
  }
}

class Game {
  constructor(network) {
    this.network = network
    this.clock = new GameClock()
    this.fbi = new Fbi()
  }

  createPlayer(name) {
    if (!this.player) {
      this.player = new Player(name)
    }

    return this.player
  }
}

module.exports = Game
