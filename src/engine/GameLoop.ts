import { EntitiesController, CtxController } from './Controllers'
import { RenderService } from 'engine/Render'
import { GravityMechanic } from 'engine/Mechanics'

export class GameLoop {
	private static run() {
		CtxController.getInstance().resetAll()

		GravityMechanic.gravityStart()

		RenderService.renderAll()

		window.requestAnimationFrame(() => this.run())
	}

	public static start() {
		EntitiesController.getInstance().setup()

		window.requestAnimationFrame(() => this.run())
	}
}
