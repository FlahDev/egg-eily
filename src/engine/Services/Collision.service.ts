import { Object2D } from 'engine/Objects'
import { CollisionModel } from 'engine/models'

export class CollisionService {
	private constructor() {
		return
	}

	private static _instance: CollisionService

	public static getInstance(): CollisionService {
		return this._instance || (this._instance = new this())
	}

	private static registers: CollisionModel[] = []

	private static find(name: string): CollisionModel | void {
		return this.registers.find((item) => item.name === name)
	}

	public static addRegister(register: CollisionModel): boolean {
		const alreadRegistered = this.find(register.name)

		if (alreadRegistered) return false

		this.registers.push(register)
		return true
	}

	public static is2ObjectsColliding(obj1: Object2D, obj2: Object2D) {
		if (
			obj1.x < obj2.x + obj2.width &&
			obj1.x + obj1.width > obj2.x &&
			obj1.y < obj2.y + obj2.height &&
			obj1.y + obj1.height > obj2.y
		)
			return true

		return false
	}

	public static isCollindingAnything(name: string, ignore?: string[]) {
		const found = this.find(name)

		if (found) {
			const ignoreds = (ignore || []).concat(name)

			const current = this.registers
			const filtered = current.filter((item) => !ignoreds.includes(item.name))

			const collindingObjects = filtered.filter((item) =>
				this.is2ObjectsColliding(found.getObject2D(), item.getObject2D())
			)

			if (collindingObjects) return collindingObjects.map((item) => item.name)
		}
	}

	public static collindingsStart() {
		const ignoreds: string[] = []

		this.registers.forEach((item) => {
			const result = this.isCollindingAnything(item.name, ignoreds)

			if (!result) {
				ignoreds.push(item.name)
				item.uncollisonAction()
			} else item.collisonAction(result)
		})
	}
}
