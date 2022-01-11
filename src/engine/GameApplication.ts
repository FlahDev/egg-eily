import { CanvasController } from './CanvasController'
import { DomEvents } from './DomEvents'
import { GameLoop } from './GameLoop'
import { Registers } from './Registers'

export class GameApplication {
	private isSetup = false

	private constructor() {
		return
	}

	private static _instance: GameApplication

	public static getInstance(): GameApplication {
		return this._instance || (this._instance = new this())
	}

	public setup(canvas: HTMLCanvasElement) {
		if (this.isSetup) return

		this.isSetup = true

		CanvasController.create(canvas)

		DomEvents.start()

		Registers.startAll()
	}

	public start() {
		GameLoop.start()
	}
}
