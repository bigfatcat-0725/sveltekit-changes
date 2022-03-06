<script>
	// page endpoints
	export let posts

	let email = ''
</script>

{JSON.stringify(posts)}
{JSON.stringify(localStorage)}

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<!-- body parsing of post request -->
<form action="/api/contact" method="POST">
	<input type="email" name="email" value={email} />
	<input type="submit" />
</form>
