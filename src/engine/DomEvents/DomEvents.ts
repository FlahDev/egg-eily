import { Registers } from 'engine/Registers'

import { Resize } from './Resize.event'
import { KeyboardEvent } from './Keyboard.event'

export class DomEvents {
	public static start() {
		const resizeEvent = new Resize()
		Registers.addRegister({
			name: 'resize',
			registerAction: () => resizeEvent.eventTrigger(),
			unique: true
		})

		Registers.addRegister({
			name: 'keyboard',
			registerAction: () => KeyboardEvent.getInstance().eventTrigger(),
			unique: true
		})
	}
}
