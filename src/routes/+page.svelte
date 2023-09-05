<script>
	export let data;
	console.log(data);
</script>

<main>
	{#if data}
		{#each data.feed as post}
			<h1>{post.title}</h1>
		{/each}
	{/if}
</main>
