import { CanvasController, ImagesController } from './Controllers'
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

		ImagesController.getInstance().setup()

		CanvasController.create(canvas)

		DomEvents.start()

		Registers.startAll()

		this.isSetup = true
	}

	public start() {
		GameLoop.start()
	}
}
