import { RegisterModel } from 'engine/models'

export class Registers {
	private constructor() {
		return
	}

	private static registers: RegisterModel[] = []

	public static find(name: string): RegisterModel | void {
		return this.registers.find((item) => item.name === name)
	}

	public static addRegister(register: RegisterModel): boolean {
		const alreadRegistered = this.find(register.name)

		if (alreadRegistered && alreadRegistered.unique) return false

		this.registers.push(register)
		return true
	}

	public static startAll() {
		console.log(this.registers.length)
		this.registers.forEach(function (item) {
			console.log(item.name)
			item.registerAction()
		})
	}
}
