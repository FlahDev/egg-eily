// libs
import React, { DefaultChildren } from 'react'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { Providers, GlobalStyles } from './'

export function Application({ children }: DefaultChildren): JSX.Element {
	return (
		<Providers>
			<GlobalStyles />
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
				theme="colored"
			/>
			{children}
		</Providers>
	)
}
