import { KeyboardEventDTO, DOMEventModel } from 'engine/models'

export class KeyboardEvent implements DOMEventModel {
	private constructor() {
		return
	}

	private static _instance: KeyboardEvent

	public static getInstance(): KeyboardEvent {
		return this._instance || (this._instance = new this())
	}

	private static readonly listenKeys = ['ArrowUp', 'w', ' ']

	private static registers: KeyboardEventDTO[] = []

	private static find(name: string): KeyboardEventDTO | void {
		return this.registers.find((item) => item.name === name)
	}

	public static addRegister(register: KeyboardEventDTO): boolean {
		const alreadRegistered = this.find(register.name)

		if (alreadRegistered) return false

		this.registers.push(register)
		return true
	}

	public static applyEvent(name: string): boolean {
		const found = this.find(name)

		if (found) {
			found.action()

			return true
		}

		return false
	}

	eventAction(key: string) {
		switch (key) {
			case 'ArrowUp':
			case 'w':
			case ' ': {
				KeyboardEvent.applyEvent('player')
				break
			}

			default:
				break
		}
	}
	eventValidation(key: string) {
		if (KeyboardEvent.listenKeys.includes(key))
			KeyboardEvent.getInstance().eventAction(key)
	}

	eventTrigger() {
		document.addEventListener('keyup', (evt) =>
			KeyboardEvent.getInstance().eventValidation(String(evt.key))
		)
	}
}
