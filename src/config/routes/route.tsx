// libs
import React from 'react'
import { Route as DftRoute } from 'react-router-dom'

// types
import { RoutesParams } from 'types'

import { ContainerResolver } from './templates'

export function Route({ container, ...props }: RoutesParams) {
	if (container) {
		const contained = ContainerResolver({ container, ...props })

		return <DftRoute {...props} exact component={() => contained} />
	}

	return <DftRoute {...props} exact />
}
