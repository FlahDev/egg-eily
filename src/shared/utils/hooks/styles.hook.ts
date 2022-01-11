// libs
import { useMediaQuery, useTheme } from '@mui/material'

// assets
import { ColorsProvider, ColorsOptions } from 'config'

// todo delete this
interface UseTextStylesProps {
	w?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
	size?: number
	color?: ColorsOptions
	clickable?: boolean
}
export const useTextStyles = ({
	clickable,
	color,
	size,
	w
}: UseTextStylesProps) => {
	const styles: Record<string, any> = {}

	if (clickable === false || clickable === true)
		styles.cursor = clickable ? 'pointer' : 'default'

	if (color) styles.color = ColorsProvider.colors[color]

	if (size) styles.fontSize = `${size}px`

	if (w) styles.fontWeight = w * 100

	return styles
}

export const useMedia = () => {
	const theme = useTheme()

	const xs = useMediaQuery(theme.breakpoints.up('xs'))
	const sm = useMediaQuery(theme.breakpoints.up('sm'))
	const md = useMediaQuery(theme.breakpoints.up('md'))
	const lg = useMediaQuery(theme.breakpoints.up('lg'))
	const xl = useMediaQuery(theme.breakpoints.up('xl'))

	return {
		xs,
		sm,
		md,
		lg,
		xl
	}
}
