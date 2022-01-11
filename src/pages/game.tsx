// libs
import React, { useEffect, useRef } from 'react'
import { Grid, Box } from '@mui/material'

import { GameApplication } from 'engine'

function Game() {
	const ref = useRef<HTMLCanvasElement>(null)

	useEffect(() => {
		if (ref && ref.current) {
			const game = GameApplication.getInstance()
			game.setup(ref.current)
			game.start()
		}
	}, [ref])

	return (
		<Box width="100vw" height="100vh" display="flex" flexDirection="column">
			<Box height="60px" width="100%">
				header
			</Box>

			<Box height="100%" width="100%">
				<canvas ref={ref} style={{ width: '100%', height: '100%' }} />
			</Box>
		</Box>
	)
}

export { Game }
