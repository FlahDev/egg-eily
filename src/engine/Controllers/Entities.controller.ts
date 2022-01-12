import { RenderService } from 'engine/Render'
import { PlayerEntity, FloorEntity, ObstacleEntity } from 'engine/Entities'
import { Object2D } from 'engine/Objects'
import { GravityMechanic } from 'engine/Mechanics'
import { CollisionService } from 'engine/Services'

import { CanvasController } from '.'
import { KeyboardEvent } from 'engine/DomEvents/Keyboard.event'

export class EntitiesController {
	private constructor() {
		return
	}

	private static _instance: EntitiesController

	public static getInstance(): EntitiesController {
		return this._instance || (this._instance = new this())
	}

	public player!: PlayerEntity
	public floor!: FloorEntity
	public block!: ObstacleEntity

	public setup() {
		this.floorSetup()
		this.playerSetup()
		this.blockSetup()
	}

	private floorSetup() {
		this.floor = new FloorEntity(
			new Object2D().createMap({
				x: 0,
				y: CanvasController.canvasHeight - 100,
				width: CanvasController.canvasWidth,
				height: 100
			})
		)
		RenderService.addRegister({
			name: 'floor',
			action: () => this.floor.render(),
			level: 'normal',
			priority: 4
		})
		// collision
		CollisionService.addRegister({
			name: 'floor',
			collisonAction: voidFunction,
			uncollisonAction: voidFunction,
			getObject2D: () => this.floor.mo.getObject()
		})
	}
	private playerSetup() {
		this.player = new PlayerEntity(
			new Object2D().createMap({
				x: 50,
				y: this.floor.mo.getObject().y - 50,
				width: 50,
				height: 70
			})
		)

		// events
		KeyboardEvent.addRegister({
			name: 'player',
			action: () => this.player.jump()
		})
		KeyboardEvent.addRegister({
			name: 'playerRight',
			action: () => this.player.right()
		})
		KeyboardEvent.addRegister({
			name: 'playerLeft',
			action: () => this.player.left()
		})

		// render
		RenderService.addRegister({
			name: 'player',
			action: () => this.player.render(),
			level: 'normal',
			priority: 5
		})

		// gravity
		GravityMechanic.addRegister({
			name: 'player',
			action: (gravityPower) => this.player.fall(gravityPower),
			weight: 4
		})

		// collision
		CollisionService.addRegister({
			name: 'player',
			collisonAction: (collindings) => this.player.collide(collindings),
			uncollisonAction: () => this.player.collide([]),
			getObject2D: () => this.player.mo.getObject()
		})
	}
	private blockSetup() {
		this.block = new ObstacleEntity(
			new Object2D().createMap({
				x: 170,
				y: this.floor.mo.getObject().y - 50,
				width: 70,
				height: 70
			})
		)
		RenderService.addRegister({
			name: 'block',
			action: () => this.block.render(),
			level: 'normal',
			priority: 5
		})
		// collision
		CollisionService.addRegister({
			name: 'block',
			collisonAction: voidFunction,
			uncollisonAction: voidFunction,
			getObject2D: () => this.block.mo.getObject()
		})
	}
}

const voidFunction = () => {
	return
}
