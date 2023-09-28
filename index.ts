import Game from './Game'
import { buildNetwork } from './Network'

const { cities } = buildNetwork()
const game = new Game(cities)

game.createPlayer('Robin')
console.log(game.player)

for (let i = 0; i < 10; i++) {

    console.log(
        `${game.player?.name} is in ${game.player?.city.name}`,
    )
    console.log(
        `${game.player?.name} has ${game.player?.bills.length} bills`,
    )

    console.log(
        `${game.player?.name} can move to these cities: `,
        game.player?.city.connections
    )

    game.move()


}
