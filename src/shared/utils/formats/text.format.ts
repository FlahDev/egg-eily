export function FormatFileName(name: string, maxLength = 25): string {
	if (name.length > maxLength) return name.substr(0, maxLength)

	return name
}
