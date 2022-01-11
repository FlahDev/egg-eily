// libs
import React from 'react'

// assets
import { ColorsProvider } from 'config'
import DashboardIcon from '@mui/icons-material/DashboardRounded'
import CouponIcon from '@mui/icons-material/LocalActivityRounded'
import AccountIcon from '@mui/icons-material/AccountCircleRounded'

const defualtIconStyle = {
	style: {
		color: ColorsProvider.colors.primary
	}
}

export const NavDrawerItems = [
	{
		label: 'Dashboard',
		icon: <DashboardIcon {...defualtIconStyle} />
	},
	{
		label: 'Cupons',
		icon: <CouponIcon {...defualtIconStyle} />,
		path: '/company/coupons'
	},
	{
		label: 'Ver perfil',
		icon: <AccountIcon {...defualtIconStyle} />,
		path: '/company/profile'
	}
]
