import { ImageModel, LoadedImageModel } from 'engine/models'

export class ImageService {
	private constructor() {
		return
	}

	private static _instance: ImageService

	public static getInstance(): ImageService {
		return this._instance || (this._instance = new this())
	}

	private static registers: ImageModel[] = []
	private static loadedImages: LoadedImageModel[] = []

	private static find(name: string): ImageModel | void {
		return this.registers.find((item) => item.name === name)
	}

	public static addRegister(register: ImageModel): boolean {
		const alreadRegistered =
			this.find(register.name) || this.isImageLoaded(register.name)

		if (alreadRegistered) return false

		this.registers.push(register)

		this.loadImage(register)

		return true
	}

	private static isImageLoaded(name: string) {
		return this.loadedImages.find((item) => item.name === name)
	}

	private static loadImage(register: ImageModel) {
		const found = this.find(register.name)

		if (found && !this.isImageLoaded(found.name)) {
			const img = new Image()
			img.src = register.path
			img.onload = () => {
				const current = this.loadedImages

				current.push({
					name: register.name,
					image: img
				})

				this.loadedImages = current
			}
		}
	}

	public static getImage(name: string) {
		const found = this.find(name)

		if (found) {
			const loadedImage = this.isImageLoaded(found.name)

			if (loadedImage) return loadedImage.image
		}
	}
}
