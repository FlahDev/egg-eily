import { DefaultTheme, ColorsTheme } from 'styled-components'

export class ColorsProvider {
	static colors: ColorsTheme = {
		primary: '#1C8EBA',
		primaryLighter: '#1C8EBAaa',
		primaryDarker: '#146787',
		secondary: '#e37222',
		secondaryLighter: '#e37222',
		success: '#2DDA93',
		error: '#E85751',
		warning: 'orange',
		alert: 'yellow',
		black: '#000',
		white: '#fff',
		backgroundPrimary: '#e1e2e1',
		textPrimary: '#525252',
		textSecondary: '#777',
		textDisabled: '#e7e7e7',
		grey: '#b7b7b7'
	}
}

export type ColorsOptions = keyof typeof ColorsProvider.colors

export const defaultTheme: DefaultTheme = {
	colors: ColorsProvider.colors,
	font: {
		family: 'Inter',
		color: ColorsProvider.colors.textPrimary
	}
}
