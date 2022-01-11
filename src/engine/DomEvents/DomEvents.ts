import { Registers } from 'engine/Registers'

import { WindowSizeEvent } from './WindowSize.event'

export class DomEvents {
	public static start() {
		const resizeEvent = new WindowSizeEvent()
		Registers.addRegister({
			name: 'resize',
			registerAction: () => resizeEvent.eventTrigger(),
			unique: true
		})
	}
}
