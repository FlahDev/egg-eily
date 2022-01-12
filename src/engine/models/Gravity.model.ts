export interface GravityModel {
	name: string
	weight: number
	action: (gravityPower: number) => void
}
