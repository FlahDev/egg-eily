import { Object2DDTO } from 'engine/models'

export class Object2D implements Object2D {
	public isCreated = false

	public x = 0
	public y = 0
	public width = 0
	public height = 0

	constructor(useNull = false) {
		if (useNull) this.isCreated = true

		return this
	}

	public createMap(props: Object2D) {
		if (this.isCreated) return this

		this.x = props.x
		this.y = props.y
		this.width = props.width
		this.height = props.height

		this.isCreated = true

		return this
	}

	public createSingle(x: number, y: number, width: number, height: number) {
		if (this.isCreated) return this

		this.x = x
		this.y = y
		this.width = width
		this.height = height

		this.isCreated = true

		return this
	}
}
