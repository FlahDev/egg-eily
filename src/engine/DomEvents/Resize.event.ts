import { DOMEventModel } from 'engine/models/DOMEvent.model'
import { CanvasController } from 'engine/Controllers'

export class Resize implements DOMEventModel {
	eventAction() {
		const width = window.innerWidth
		const height = window.innerHeight

		CanvasController.updateScreen(width, height)
	}
	eventValidation() {
		this.eventAction()
	}

	eventTrigger() {
		window.addEventListener('resize', () => this.eventValidation())
	}
}
