type VoidAnyFunction = (...args: any) => void

export interface DOMEventModel {
	readonly eventAction: VoidAnyFunction
	readonly eventValidation: VoidAnyFunction

	eventTrigger: VoidAnyFunction
}
