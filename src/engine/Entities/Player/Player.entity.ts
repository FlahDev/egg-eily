import { RTDO } from 'engine/Render'
import { Object2D, MovimentableObject } from 'engine/Objects'

export class PlayerEntity {
	public mo!: MovimentableObject
	private rs!: RTDO

	public isActive = false
	private collindings: string[] = []
	private floorY!: number

	public readonly JUMP_HEIGHT = 100

	constructor(objetc2D: Object2D) {
		this.mo = new MovimentableObject(objetc2D)
		this.rs = new RTDO('red', 'fill')
		this.floorY = objetc2D.y
	}

	public render() {
		if (this.mo.isVisible) this.rs.render(this.mo.getObject())
	}

	public setVisibility(visibility = false) {
		this.mo.isVisible = visibility
	}

	public jump() {
		if (
			this.collindings.includes('floor') &&
			this.mo.getObject().y === this.floorY
		)
			this.mo.walkY(-this.JUMP_HEIGHT)
	}

	public fall(gravityPower: number) {
		const tdo = this.mo.getObject()

		if (tdo.y === this.floorY) return

		const newY = tdo.y + gravityPower

		if (newY < this.floorY) this.mo.walkY(gravityPower)
		else {
			this.mo.moveY(this.floorY)
		}
	}

	public right() {
		this.mo.walkX(20)
	}
	public left() {
		this.mo.walkX(-20)
	}

	public collide(collidings: string[]) {
		this.collindings = [...collidings]
	}
}
