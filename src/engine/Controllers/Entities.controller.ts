import { KeyboardEvent } from 'engine/DomEvents/Keyboard.event'
import { PlayerEntity } from 'engine/Entities'
import { Object2D } from 'engine/Objects'
import { CanvasController } from '.'

export class EntitiesController {
	private constructor() {
		return
	}

	private static _instance: EntitiesController

	public static getInstance(): EntitiesController {
		return this._instance || (this._instance = new this())
	}

	public player!: PlayerEntity

	public setup() {
		this.player = new PlayerEntity(
			new Object2D().createMap({
				x: 10,
				y: CanvasController.canvasHeight - 100,
				width: 100,
				height: 100
			})
		)

		KeyboardEvent.addRegister({
			name: 'player',
			action: () => this.player.jump()
		})
	}
}
