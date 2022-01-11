import { RoutesParams } from 'types'

export function CombineRoutes(PagesRoutes: any): RoutesParams[] {
	const RoutesObj: Record<string, any> = PagesRoutes
	const routesArray: any[] = Object.values(RoutesObj)

	let routes: RoutesParams[] = []

	routesArray.forEach((f) => (routes = routes.concat(f)))

	return routes
}
