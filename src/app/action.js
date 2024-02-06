'use server'

export const fetchData = async (url, auth) => {
	const response = await fetch(url, {
		headers: {
			Authorization: auth,
		},
	})
	const data = await response.json()
	return data
}
