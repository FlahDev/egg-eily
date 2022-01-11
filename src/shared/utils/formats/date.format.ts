// libs
import { format } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR/index.js'
import ptBr from 'date-fns/locale/pt-BR'

export const FormatToAmerican = (date: string) => {
	const array = date.split('/')

	const day = array[0]
	const month = array[1]
	const year = array[2]

	return new Date(`${resolveZeros(month)}/${resolveZeros(day)}/${year}`)
}

// 2021-10-29 24:00:00
export const ApiDatePattnern = (date: Date) =>
	format(date, "uuuu'-'MM'-'dd' 'HH':'mm':'ss", {
		locale: ptBr
	})

// 26/10/2021
export const SimpleDatePattnern = (date: Date) =>
	format(date, "dd'/'MM'/'uuuu", {
		locale: ptBr
	})

export const StyledDateTimerPattern = (date: Date) =>
	format(date, "MMM' 'dd', 'uuuu' - 'HH':'mm", {
		locale: ptBR
	})

function resolveZeros(num: string | number) {
	const value = String(num)

	if (value.length === 1) return `0${value}`

	return value
}
