// libs
import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'

import { Route, CombineRoutes } from 'config'

// routes
import * as PagesRoutes from './routes'
import { NotFoundRoutes } from './notFound.routes'

export function Routes(): JSX.Element {
	const routes = CombineRoutes(PagesRoutes)
	routes.push(...NotFoundRoutes)
	return (
		<BrowserRouter>
			<Switch>
				{routes.map((item, key) => (
					<Route key={key} {...item} exact />
				))}
			</Switch>
		</BrowserRouter>
	)
}
