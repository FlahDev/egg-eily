import { CtxController } from 'engine/Render/CtxController'

import { EntitiesController } from './Controllers'

export class GameLoop {
	private static run() {
		CtxController.getInstance().resetAll()

		EntitiesController.getInstance().player.render()

		window.requestAnimationFrame(() => this.run())
	}

	public static start() {
		EntitiesController.getInstance().setup()

		window.requestAnimationFrame(() => this.run())
	}
}
