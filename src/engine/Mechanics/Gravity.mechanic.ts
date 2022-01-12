import { GravityModel } from 'engine/models'

export class GravityMechanic {
	private constructor() {
		return
	}

	private static _instance: GravityMechanic

	public static getInstance(): GravityMechanic {
		return this._instance || (this._instance = new this())
	}

	private static registers: GravityModel[] = []

	private static freezes: string[] = []

	private static readonly GRAVITY_POWER = 2

	private static find(name: string): GravityModel | void {
		return this.registers.find((item) => item.name === name)
	}

	public static addRegister(register: GravityModel): boolean {
		const alreadRegistered = this.find(register.name)

		if (alreadRegistered) return false

		this.registers.push(register)
		return true
	}

	private static applyGravity(name: string): boolean {
		const found = this.find(name)

		if (found && !this.isFreezed(found.name)) {
			found.action(this.GRAVITY_POWER * found.weight)

			return true
		}

		return false
	}

	public static isFreezed(name: string) {
		return this.freezes.includes(name)
	}

	public static freeze(name: string) {
		const found = this.find(name)

		if (found && !this.isFreezed(found.name)) {
			const current = this.freezes

			current.push(found.name)

			this.freezes = current
		}
	}

	public static unfreeze(name: string) {
		const found = this.find(name)

		if (found && this.isFreezed(found.name)) {
			const current = this.freezes

			const filtered = current.filter((item) => item !== found.name)

			this.freezes = filtered
		}
	}

	public static gravityStart() {
		this.registers.forEach((item) => {
			this.applyGravity(item.name)
		})
	}
}
