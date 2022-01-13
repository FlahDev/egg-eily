import { ImageService } from 'engine/Services/Images.service'
import { Object2D } from 'engine/Objects/2D.object'
import { CtxController } from 'engine/Controllers'
import { DrawImageDTO } from 'engine/models'

export class RenderImage {
	constructor(
		private imageSettings: Pick<
			DrawImageDTO,
			'imageHeight' | 'imageWidth' | 'imageX' | 'imageY'
		> & { image: string }
	) {}

	public render(object2D: Object2D) {
		const image = ImageService.getImage(this.imageSettings.image)

		if (image) {
			const { imageHeight, imageWidth, imageX, imageY } = this.imageSettings
			const { x, y, width, height } = object2D

			CtxController.getInstance().drawImage({
				x,
				y,
				width,
				height,
				imageHeight,
				imageWidth,
				imageX,
				imageY,
				image
			})
		}
	}
}
