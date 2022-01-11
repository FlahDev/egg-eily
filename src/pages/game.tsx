// libs
import React, { useEffect, useRef } from 'react'
import { Grid, Box } from '@mui/material'

import { GameApplication } from 'engine'

function Game() {
	const ref = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		if (ref && ref.current) {
			const game = new GameApplication(ref.current)
			game.init()
		}
	}, [ref])

	return (
		<Box width="100vw" height="100vh" display="flex" flexDirection="column">
			<Box
				height="60px"
				width="100%"

				// alignItems="center"
				// justifyContent="center"
			>
				header
			</Box>

			<Box height="100%" width="100%">
				<canvas ref={ref} style={{ width: '100%', height: '100%' }} />
			</Box>
		</Box>

		// <Box width="100vw" height="100vh">
		// 	<Grid container style={{ height: '100%', background: 'red' }}>
		// 		<Grid item xs={12}>
		// 			<Box height="60px">Header</Box>
		// 		</Grid>
		// 		<Grid item xs={12}>
		// 			<Box height="fill-parent">
		// 				<canvas ref={ref} style={{ width: '100%', height: '100%' }} />
		// 			</Box>
		// 		</Grid>
		// 	</Grid>
		// </Box>
	)
}

export { Game }
