const Bill = require('./Bill')
const City = require('./City')

class Bearer {
  constructor(name, city) {
    this.bills = []
    this.name = name
    this.city = city
  }

  receive(bill) {
    if (bill instanceof Bill) {
      this.bills.push(bill)
    }
  }

  changeLocation(city) {
    if (city instanceof City) {
      this.city = city
    }
  }

  pay(bearer, amount) {
    if (bearer instanceof Bearer) {
      while (amount) {
        var bill = this.bills.pop()
        bearer.receive(bill)
        amount--
      }
    }
  }
}

class Player extends Bearer {
}

class Bank extends Bearer {
  constructor(city, game) {
    super('Bank ' + city.name, city)
    this.game = game
  }

  changeLocation() {
    console.log('Don\'t be silly. Banks can\'t move.')
    return false
  }

  receive(bill) {
    super(bill)
    this.game.recordBill(bill, this)
  }
}

module.exports = {
  Bank: Bank,
  Bearer: Bearer,
  Player: Player
}