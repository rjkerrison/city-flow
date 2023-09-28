import { Bill } from './Bill'
import { City } from './City'

class Bearer {
  bills: Bill[]
  name: string
  city: City

  constructor(name: string, city: City) {
    this.bills = []
    this.name = name
    this.city = city
  }

  receive(bill: Bill) {
    if (bill instanceof Bill) {
      this.bills.push(bill)
    }
  }

  changeLocation(city: City) {
    this.city = city
  }

  pay(bearer: Bearer, amount: number) {
    if (bearer instanceof Bearer) {
      while (amount) {
        const bill = this.bills.pop()
        if (bill) {
          bearer.receive(bill)
          amount--
        } else {
          return
        }
      }
    }
  }
}

export class Player extends Bearer {
}

export class Bank extends Bearer {
  reportToFbi: (bill: Bill, bank: Bank) => void

  constructor(city: City, reportToFbi: (bill: Bill) => void) {
    super(`${city.name} Bank`, city)
    this.reportToFbi = reportToFbi
  }

  changeLocation() {
    console.log('Don\'t be silly. Banks can\'t move.')
    return false
  }

  receive(bill: Bill) {
    super.receive(bill)
    this.reportToFbi(bill, this)
  }
}
