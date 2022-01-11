// libs
import React from 'react'
import { Grid } from '@mui/material'

function Game() {
	return (
		<Grid container style={{ height: '100%' }}>
			<Grid item xs={12}>
				Header
			</Grid>
			<Grid style={{ height: '100%' }} item xs={12} sm={12} md={8}>
				canvas
			</Grid>
			<Grid style={{ height: '100%' }} item xs={12} sm={12} md={4}>
				banner
			</Grid>
		</Grid>
	)
}

export { Game }
