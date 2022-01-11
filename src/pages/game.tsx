// libs
import React, { useEffect, useRef } from 'react'
import { Grid } from '@mui/material'

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
		<Grid container style={{ height: '100%' }}>
			<Grid item xs={12}>
				Header
			</Grid>
			<Grid style={{ height: '100%' }} item xs={12} sm={12} md={8}>
				<canvas ref={ref} />
			</Grid>
			<Grid style={{ height: '100%' }} item xs={12} sm={12} md={4}>
				banner
			</Grid>
		</Grid>
	)
}

export { Game }
