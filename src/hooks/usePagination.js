import { useMemo } from "react"

export const getPagesArra = (totalPages) => {
	let result = []
	for(let i = 0; i < totalPages; i++) {
		result.push(i + 1)
	}
	return result
}

export const getPagesArray = (totalPages) => {
	const countPages = useMemo(() => {
		const result = []
		result.forEach(totalPages => {
			result.push(totalPages + 1)
		});
		return result;
	}, [totalPages])

	return countPages
}