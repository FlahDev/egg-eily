import { RTDO } from 'engine/Render'
import { Object2D, MovimentableObject } from 'engine/Objects'

export class FloorEntity {
	public mo!: MovimentableObject
	private rs!: RTDO

	constructor(objetc2D: Object2D) {
		this.mo = new MovimentableObject(objetc2D)
		this.rs = new RTDO('green', 'fill')
	}

	public render() {
		if (this.mo.isVisible) this.rs.render(this.mo.getObject())
	}

	public setVisibility(visibility = false) {
		this.mo.isVisible = visibility
	}
}
