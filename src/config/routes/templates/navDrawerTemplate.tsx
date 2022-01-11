// libs
import React, { DefaultChildren } from 'react'
import { Grid, Box } from '@mui/material'

// shared
// import { Navbar, NavDrawer } from 'shared'

function NavDrawerTemplate({ children }: DefaultChildren) {
	return <Box width="100%">{children}</Box>

	// return (
	// 	<Grid container>
	// 		<Grid item xs={12}>
	// 			<NavDrawer />
	// 			<Box width="100%" pl="calc(100vw / 5)">
	// 				<Navbar />
	// 				<Box width="100%">{children}</Box>
	// 			</Box>
	// 		</Grid>
	// 	</Grid>
	// )
}

export { NavDrawerTemplate }
