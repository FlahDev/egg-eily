import { StyleMode } from 'engine/interfaces'
import { DrawImageDTO } from './DrawImage.dto'

export interface RotateDTO {
	x: number
	y: number
	calculedX: number
	calculedY: number
	width: number
	height: number
	angle: number
}

export interface RotateStyleDTO {
	styleMode: StyleMode
	style: string
}

export type RotateImageDTO = Omit<DrawImageDTO, 'x' | 'y' | 'width' | 'height'>
