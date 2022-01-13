import { CanvasController } from 'engine/Controllers'
import { StyleMode } from 'engine/interfaces'
import { DrawImageDTO } from 'engine/models'

export class CtxController {
	private constructor() {
		return
	}

	private static _instance: CtxController

	public static getInstance(): CtxController {
		return this._instance || (this._instance = new this())
	}

	private saveState() {
		CanvasController.ctx().save()
	}
	private restoreState() {
		CanvasController.ctx().restore()
	}

	public safeRender(action: () => void) {
		const currentStyle = CanvasController.ctx().fillStyle
		const currentStroke = CanvasController.ctx().strokeStyle

		action()

		CanvasController.ctx().fillStyle = currentStyle
		CanvasController.ctx().strokeStyle = currentStroke
	}

	public drawRect(
		x: number,
		y: number,
		width: number,
		height: number,
		style: string,
		mode?: StyleMode
	) {
		const drawMode = mode || 'fill'

		this.safeRender(() => {
			if (drawMode === 'fill') {
				CanvasController.ctx().fillStyle = style

				CanvasController.ctx().fillRect(x, y, width, height)
			} else {
				CanvasController.ctx().strokeStyle = style

				CanvasController.ctx().strokeRect(x, y, width, height)
			}
		})
	}

	public drawText(
		text: string,
		x: number,
		y: number,
		style: string,
		mode?: StyleMode
	) {
		const drawMode = mode || 'fill'

		this.safeRender(() => {
			if (drawMode === 'fill') {
				CanvasController.ctx().fillStyle = style

				CanvasController.ctx().fillText(text, x, y)
			} else {
				CanvasController.ctx().strokeStyle = style

				CanvasController.ctx().strokeText(text, x, y)
			}
		})
	}

	public drawImage(settings: DrawImageDTO) {
		this.safeRender(() => {
			CanvasController.ctx().drawImage(
				settings.image,
				settings.imageX,
				settings.imageY,
				settings.imageWidth,
				settings.imageHeight,
				settings.x,
				settings.y,
				settings.width,
				settings.height
			)
		})
	}

	public eraseAll() {
		CanvasController.ctx().clearRect(
			0,
			0,
			CanvasController.canvasWidth,
			CanvasController.canvasHeight
		)
	}

	public resetAll() {
		this.restoreState()
		CanvasController.ctx().fillStyle = '#000'
		CanvasController.ctx().strokeStyle = '#000'

		this.eraseAll()
	}
}
