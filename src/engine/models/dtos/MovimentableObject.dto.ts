export interface MovimentableObjectPointDTO {
	x: number
	y: number
}

export interface MovimentableObjectPointsDTO {
	tl: MovimentableObjectPointDTO
	tr: MovimentableObjectPointDTO
	bl: MovimentableObjectPointDTO
	br: MovimentableObjectPointDTO
}

export interface MovimentableObjectSizesDTO {
	width: number
	height: number
}
