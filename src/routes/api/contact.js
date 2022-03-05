export const post = async ({ request }) => {
	const res = await request.formData()
	const email = await res.get('email')
	console.log(email)
	return {}
}
