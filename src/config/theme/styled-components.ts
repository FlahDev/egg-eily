import 'styled-components'

declare module 'styled-components' {
	export interface ColorsTheme {
		primary: string
		primaryLighter: string
		primaryDarker: string
		secondary: string
		secondaryLighter: string
		backgroundPrimary: string
		white: string
		black: string
		success: string
		error: string
		alert: string
		warning: string
		textPrimary: string
		textSecondary: string
		textDisabled: string
		grey: string
	}

	export interface DefaultTheme {
		font: {
			family: string
			color: string
		}

		colors: ColorsTheme
	}
}
