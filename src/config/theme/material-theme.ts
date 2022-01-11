// libs
import { createTheme } from '@mui/material'
import { ptBR } from '@mui/material/locale'

// settings
import { defaultTheme } from './'

export const MaterialTheme = createTheme(
	{
		palette: {
			primary: { main: defaultTheme.colors.primary },
			secondary: { main: defaultTheme.colors.secondary },
			success: { main: defaultTheme.colors.success },
			error: { main: defaultTheme.colors.error },
			common: {
				black: defaultTheme.colors.black,
				white: defaultTheme.colors.white
			}
		},
		typography: {
			allVariants: {
				fontFamily: defaultTheme.font.family
			}
		}
	},
	ptBR
)
