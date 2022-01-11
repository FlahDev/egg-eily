export class CanvasController {
	private constructor() {
		return
	}

	public static canvasWidth = 0
	public static canvasHeight = 0
	public static screenWidth = 0
	public static screenHeight = 0

	private static canvasContext?: CanvasRenderingContext2D
	private static canvas?: HTMLCanvasElement

	static create(canvas: HTMLCanvasElement) {
		this.updateCanvas(canvas.width, canvas.height)

		const ctx = canvas.getContext('2d')

		if (ctx) this.canvasContext = ctx
	}

	static updateCanvas(width: number, height: number) {
		this.canvasWidth = width
		this.canvasHeight = height
	}
	static updateScreen(width: number, height: number) {
		this.screenWidth = width
		this.screenHeight = height

		console.log(this.screenWidth, this.screenHeight)
	}

	static ctx(): CanvasRenderingContext2D {
		if (this.canvasContext) return this.canvasContext

		const ctx: CanvasRenderingContext2D = this?.canvas?.getContext('2d') as any

		this.canvasContext = ctx

		return ctx
	}

	static getCanavs() {
		return this.canvas as HTMLCanvasElement
	}
}
