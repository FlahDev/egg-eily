// libs
import React from 'react'
import { Container, Box } from '@mui/material'
import { Route as DftRoute } from 'react-router-dom'

// types
import { RoutesParams } from 'types'

// containers
import { NavDrawerTemplate, NavTemplate } from './'

export function ContainerResolver({
	container,
	...props
}: RoutesParams): JSX.Element {
	switch (container) {
		case 'none': {
			return <DftRoute {...props} />
		}

		case 'navdrawer': {
			return (
				<NavDrawerTemplate>
					<Box pt="30px">
						<Container>
							<DftRoute {...props} />
						</Container>
					</Box>
				</NavDrawerTemplate>
			)
		}

		case 'nav': {
			return (
				<NavTemplate>
					<DftRoute {...props} />
				</NavTemplate>
			)
		}

		case 'customized': {
			return (
				<NavDrawerTemplate>
					<DftRoute {...props} />
				</NavDrawerTemplate>
			)
		}

		default: {
			return (
				<Container>
					<DftRoute {...props} />
				</Container>
			)
		}
	}
}
