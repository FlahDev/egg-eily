export class CanvasController {
	private static canvasRef: HTMLCanvasElement

	private constructor() {
		return
	}

	public static canvasWidth = 0
	public static canvasHeight = 0
	public static screenWidth = 0
	public static screenHeight = 0

	private static canvasContext?: CanvasRenderingContext2D

	static create(canvas: HTMLCanvasElement) {
		if (this.canvasRef) return

		this.canvasRef = canvas

		this.updateCanvas(this.canvasRef.clientWidth, this.canvasRef.clientHeight)

		const ctx = this.canvasRef.getContext('2d')

		if (ctx) this.canvasContext = ctx
	}

	static updateCanvas(width: number, height: number) {
		this.canvasWidth = width
		this.canvasHeight = height

		this.canvasRef.setAttribute('width', String(width))
		this.canvasRef.setAttribute('height', String(height))
	}
	static updateScreen(width: number, height: number) {
		this.screenWidth = width
		this.screenHeight = height

		this.updateCanvas(
			this.canvasRef.clientWidth,
			this.canvasRef.clientHeight - 60
		)
	}

	static ctx(): CanvasRenderingContext2D {
		if (this.canvasContext) return this.canvasContext

		const ctx: CanvasRenderingContext2D = this?.canvasRef?.getContext(
			'2d'
		) as any

		this.canvasContext = ctx

		return ctx
	}

	static getCanvas() {
		return this.canvasRef as HTMLCanvasElement
	}
}
