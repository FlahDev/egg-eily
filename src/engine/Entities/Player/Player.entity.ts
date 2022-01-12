import { RTDO } from 'engine/Render'
import { Object2D, MovimentableObject } from 'engine/Objects'

export class PlayerEntity {
	public mo!: MovimentableObject
	private rs!: RTDO

	public isActive = false

	public readonly JUMP_HEIGHT = 25

	constructor(objetc2D: Object2D) {
		this.mo = new MovimentableObject(objetc2D)
		this.rs = new RTDO('red', 'fill')
	}

	public render() {
		if (this.mo.isVisible) this.rs.render(this.mo.getObject())
	}

	public setVisibility(visibility = false) {
		this.mo.isVisible = visibility
	}

	public jump() {
		this.mo.walkY(-this.JUMP_HEIGHT)
	}

	public fall(gravityPower: number) {
		this.mo.walkY(gravityPower)
	}
}
