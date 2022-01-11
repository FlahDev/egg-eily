export class GameLoop {
	private static run() {
		// console.log('hello world')

		window.requestAnimationFrame(() => this.run())
	}

	public static start() {
		window.requestAnimationFrame(() => this.run())
	}
}
