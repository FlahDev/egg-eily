import { CanvasController } from './CanvasController'
import { DomEvents } from './DomEvents'
import { GameLoop } from './GameLoop'
import { Registers } from './Registers'

export class GameApplication {
	constructor(private canvas: HTMLCanvasElement) {}

	public init() {
		CanvasController.create(this.canvas)

		CanvasController.ctx().fillRect(
			0,
			0,
			CanvasController.canvasWidth,
			CanvasController.canvasHeight
		)

		DomEvents.start()

		Registers.startAll()

		GameLoop.start()
	}
}
