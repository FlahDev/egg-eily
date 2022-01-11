// libs
import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	${({ theme }) => css`
		* {
			margin: 0;
			box-sizing: border-box;
		}

		body {
			background: ${theme.colors.backgroundPrimary};

			overflow-x: hidden;
			overflow-y: hidden;
		}

		body,
		html,
		#root {
			font-family: ${theme.font.family};
			color: ${theme.font.color};
		}
	`}
`
