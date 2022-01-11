import { DOMEventModel } from 'engine/models/DOMEvent.model'
import { CanvasController } from 'engine/CanvasController'

export class WindowSizeEvent implements DOMEventModel {
	eventAction() {
		const width = window.innerWidth
		const height = window.innerHeight

		CanvasController.updateScreen(width, height)

		console.log('resize')
	}
	eventValidation() {
		this.eventAction()
	}

	eventTrigger() {
		window.addEventListener('resize', () => this.eventValidation())
	}
}
