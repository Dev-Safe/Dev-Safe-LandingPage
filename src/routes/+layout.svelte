<script lang="ts">
	import favicon from '$lib/assets/DevSafe_logo.jpg';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/jpeg" href={favicon} />
</svelte:head>

{@render children()}
