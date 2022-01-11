import { DomEvents } from './DomEvents'
import { GameLoop } from './GameLoop'
import { Registers } from './Registers'

export class GameApplication {
	constructor(private canvas: HTMLCanvasElement) {}

	public init() {
		DomEvents.start()

		Registers.startAll()

		GameLoop.start()
	}
}
