import { RenderModel } from 'engine/models'

export class RenderService {
	private constructor() {
		return
	}

	private static _instance: RenderService

	public static getInstance(): RenderService {
		return this._instance || (this._instance = new this())
	}

	private static registers: RenderModel[] = []

	private static registersLogs: Array<
		Pick<RenderModel, 'name'> & { times: number }
	> = []
	private static isOrdering = false
	private static canRender = true

	private static find(name: string): RenderModel | void {
		return this.registers.find((item) => item.name === name)
	}

	public static addRegister(register: RenderModel): boolean {
		this.canRender = false

		const alreadRegistered = this.find(register.name)

		if (alreadRegistered) {
			this.canRender = true
			return false
		}

		const current = this.registers
		current.push(register)
		this.registers = current

		this.reOrder()

		this.canRender = true

		return true
	}

	private static applyRender(name: string): boolean {
		const found = this.find(name)

		const currentLogs = this.registersLogs

		if (found) {
			found.action()

			const log = currentLogs.find((item) => item.name === found.name)

			if (log) {
				log.times++

				const filtered = currentLogs.filter((item) => item.name !== found.name)
				filtered.push(log)

				this.registersLogs = filtered
			} else {
				currentLogs.push({ name: found.name, times: 1 })
				this.registersLogs = currentLogs
			}

			return true
		}

		return false
	}

	private static reOrder() {
		this.isOrdering = true

		const current = this.registers

		const screens = current.filter((item) => item.level === 'screen')
		const modals = current.filter((item) => item.level === 'modal')
		const normals = current.filter((item) => item.level === 'normal')
		const tooltips = current.filter((item) => item.level === 'tooltip')

		const orderedScreens = orderRegisters(screens)
		const orderedModals = orderRegisters(modals)
		const orderedNormals = orderRegisters(normals)
		const orderedTooltips = orderRegisters(tooltips)

		const ordered = [
			...orderedScreens,
			...orderedModals,
			...orderedNormals,
			...orderedTooltips
		]

		this.registers = ordered

		this.isOrdering = false
	}

	public static renderAll() {
		if (this.canRender)
			this.registers.forEach((item) => {
				if (!this.isOrdering) {
					this.applyRender(item.name)
				}
			})
	}
}

function orderRegisters(registers: RenderModel[]): RenderModel[] {
	return registers.sort((itemA, itemB) => {
		if (itemA.priority > itemB.priority) return 1

		if (itemA.priority < itemB.priority) return -1

		return 0
	})
}
