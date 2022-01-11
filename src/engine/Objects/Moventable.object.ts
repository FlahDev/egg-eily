import {
	MovimentableObjectPointsDTO,
	MovimentableObjectPointDTO,
	MovimentableObjectSizesDTO
} from 'engine/models'

import { Object2D } from './2D.object'

export class MovimentableObject {
	constructor(private object2D: Object2D) {}

	public velocityX = 0
	public velocityY = 0
	public isVisible = true

	public moveX(nextX: number) {
		this.object2D.x = nextX
	}

	public moveY(nextY: number) {
		this.object2D.y = nextY
	}

	public translocate(pos: MovimentableObjectPointDTO) {
		this.object2D.x = pos.x
		this.object2D.y = pos.y
	}

	public getPoints(): MovimentableObjectPointsDTO {
		const { x, y, width, height } = this.object2D

		const tl: MovimentableObjectPointDTO = { x, y }
		const tr: MovimentableObjectPointDTO = { x: x + width, y }
		const bl: MovimentableObjectPointDTO = { x, y: y + height }
		const br: MovimentableObjectPointDTO = { x: x + width, y: y + height }

		return {
			tl,
			tr,
			bl,
			br
		}
	}

	public setSizes(sizes: MovimentableObjectSizesDTO) {
		this.object2D.width = sizes.width
		this.object2D.height = sizes.height
	}

	public getObjetc(): Readonly<Object2D> {
		return this.object2D
	}
}
