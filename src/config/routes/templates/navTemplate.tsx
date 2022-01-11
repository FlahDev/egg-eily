// libs
import React, { DefaultChildren } from 'react'
import { Box, Container } from '@mui/material'

// shared
// import { Navbar } from 'shared'

function NavTemplate({ children }: DefaultChildren) {
	return (
		<Box width="100%">
			{/* <Navbar /> */}
			<Box width="100%" pt="30px">
				<Container>
					<>{children}</>
				</Container>
			</Box>
		</Box>
	)
}

export { NavTemplate }
