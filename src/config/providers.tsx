// libs
import React from 'react'
import { ThemeProvider as SCProvider } from 'styled-components'
import { ThemeProvider as MuiProvider } from '@mui/material'

// settings
import { MaterialTheme, defaultTheme } from './theme'

declare module 'react' {
	export interface DefaultChildren {
		children: React.ReactNode
	}
}
interface DefaultChildren {
	children: React.ReactNode
}
export function Providers({ children }: DefaultChildren): JSX.Element {
	return (
		<SCProvider theme={defaultTheme}>
			<MuiProvider theme={MaterialTheme}>{children}</MuiProvider>
		</SCProvider>
	)
}
