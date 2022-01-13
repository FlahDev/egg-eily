import { ImageService } from 'engine/Services'

import { EggSprite } from 'engine/Assets'

export class ImagesController {
	private constructor() {
		return
	}

	private static _instance: ImagesController

	public static getInstance(): ImagesController {
		return this._instance || (this._instance = new this())
	}

	public setup() {
		ImageService.addRegister({
			name: 'egg',
			path: EggSprite
		})
	}
}
