export interface RenderModel {
	name: string
	priority: number
	level: 'modal' | 'normal' | 'screen' | 'tooltip'
	action: () => void
}
