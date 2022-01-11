import { EntitiesController, CtxController } from './Controllers'
import { RenderService } from 'engine/Render'

export class GameLoop {
	private static run() {
		CtxController.getInstance().resetAll()

		RenderService.renderAll()

		window.requestAnimationFrame(() => this.run())
	}

	public static start() {
		EntitiesController.getInstance().setup()

		window.requestAnimationFrame(() => this.run())
	}
}
