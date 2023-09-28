import { Bill } from './Bill.js';
import { Bank } from './Bearer.js';
import { City } from './City.js';
import { GameClock } from './GameClock.js';

export class MarkedBill extends Bill {
}

type FoundBill = {
    bill: Bill;
    bank: Bank;
    hour: GameClock["hour"];
};
export class Fbi {
    foundBills: FoundBill[];
    clock: GameClock;

    constructor(clock: GameClock) {
        this.foundBills = [];
        this.clock = clock;
    }

    recordBill(bill: Bill, bank: Bank) {
        if (bill instanceof MarkedBill) {
            this.foundBills.push({
                bill,
                bank,
                hour: this.clock.hour
            });
        }
    }

    getFoundBillsForCity(city: City) {
        return this.foundBills.filter(foundBill => foundBill.bank.city === city);
    }
}
