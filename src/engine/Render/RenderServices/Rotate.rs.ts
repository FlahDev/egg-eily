import { Object2D } from 'engine/Objects'
import { CtxController } from 'engine/Controllers'
import { RotateStyleDTO, RotateImageDTO } from 'engine/models'
import { ImageService } from 'engine/Services'

type RECT = 'rect'

export class Rotate<T extends 'rect' | 'image'> {
	constructor(private angle = 1, private mode: T) {}

	private readonly PORCENTAGE_INFLUENCE = -0.466667

	public increment() {
		this.angle += 10
	}
	public getAngle() {
		return this.angle
	}

	public render(
		object2D: Object2D,
		settings: T extends RECT
			? RotateStyleDTO
			: Omit<RotateImageDTO, 'image'> & { image: string }
	) {
		const { x, y, width, height } = object2D

		if (this.mode === 'rect') {
			const parsedSettings: RotateStyleDTO = settings as any
			CtxController.getInstance().rotateRect(
				{
					angle: this.angle,
					calculedX: this.PORCENTAGE_INFLUENCE * width,
					calculedY: this.PORCENTAGE_INFLUENCE * height,
					width,
					height,
					x,
					y
				},
				{
					style: parsedSettings.style,
					styleMode: parsedSettings.styleMode
				}
			)
		} else {
			const parsedSettings: Omit<RotateImageDTO, 'image'> & {
				image: string
			} = settings as any

			const image = ImageService.getImage(parsedSettings.image)

			if (image) {
				const { imageHeight, imageWidth, imageX, imageY } = parsedSettings
				const { x, y, width, height } = object2D

				CtxController.getInstance().rotateImage(
					{
						angle: this.angle,
						calculedX: this.PORCENTAGE_INFLUENCE * width,
						calculedY: this.PORCENTAGE_INFLUENCE * height,
						width,
						height,
						x,
						y
					},
					{
						imageHeight,
						imageWidth,
						imageX,
						imageY,
						image
					}
				)
			}
		}
	}
}
