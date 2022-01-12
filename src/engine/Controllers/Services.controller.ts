import { CollisionService } from 'engine/Services'

export class ServicesController {
	private constructor() {
		return
	}

	private static _instance: ServicesController

	public static getInstance(): ServicesController {
		return this._instance || (this._instance = new this())
	}

	public run() {
		CollisionService.collindingsStart()
	}
}
