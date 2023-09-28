
export class GameClock {
    hour: number;

    constructor() {
        this.hour = 0;
    }

    advanceHour() {
        this.hour++;
    }
}
