import { Object2D, MovimentableObject } from 'engine/Objects'
import { RTDO } from 'engine/Render'

export class GameLoop {
	private static run() {
		const square = new Object2D().createMap({
			x: 10,
			y: 10,
			width: 100,
			height: 100
		})

		const moviment = new MovimentableObject(square)

		const renderService = new RTDO('#333', 'fill')

		renderService.render(moviment.getObjetc())

		window.requestAnimationFrame(() => this.run())
	}

	public static start() {
		window.requestAnimationFrame(() => this.run())
	}
}
