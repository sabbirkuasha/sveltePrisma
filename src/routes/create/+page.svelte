<script>
	export let form;
</script>

<div class="page">
	<form method="post">
		<h1>Create Draft</h1>
		{#if form?.missing}<p class="error">Missing field required!</p>{/if}
		<input name="title" placeholder="Title" type="text" value={form?.title ?? ''} />
		<textarea name="content" cols="50" placeholder="Content" rows="8" value={form?.content ?? ''} />
		<button type="submit">Create</button>
		<a class="back" href="/"> or Cancel </a>
	</form>
</div>
