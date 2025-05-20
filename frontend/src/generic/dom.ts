export function getElementTextContent(elementId: string): string {
	const element = document.getElementById(elementId)

	if (!element) {
		throw new Error(`The element with the "${elementId}" id was not found`)
	}

	return element.textContent ?? ""
}


export function getElementJSONContent(elementId: string): string {
	const textContent = getElementTextContent(elementId)
	return JSON.parse(textContent)
}
