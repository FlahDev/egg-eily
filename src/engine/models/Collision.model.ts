import { Object2D } from 'engine/Objects'

export interface CollisionModel {
	name: string
	collisonAction: (collindings: string[]) => void
	uncollisonAction: () => void
	getObject2D: () => Object2D
}
