import { StyleMode } from 'engine/interfaces'
import { Object2D } from 'engine/Objects/2D.object'
import { CtxController } from '../CtxController'

export class RTDO {
	private style = '#000'
	private styleMode: StyleMode = 'fill'

	constructor(style?: string, styleMode?: StyleMode) {
		if (style) this.style = style

		if (styleMode) this.styleMode = styleMode
	}

	public setStyle(style: string) {
		this.style = style

		return this
	}

	public setStyleMode(styleMode: StyleMode) {
		this.styleMode = styleMode

		return this
	}

	public render(object2D: Object2D) {
		const { x, y, width, height } = object2D

		CtxController.getInstance().drawRect(
			x,
			y,
			width,
			height,
			this.style,
			this.styleMode
		)
	}
}
