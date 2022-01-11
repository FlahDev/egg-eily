// types
import { RoutesParams } from 'types'

// pages
import { NotFound } from 'pages'

export const NotFoundRoutes: RoutesParams[] = [
	{
		component: NotFound,
		path: '404'
	},
	{
		component: NotFound,
		path: '*'
	}
]
