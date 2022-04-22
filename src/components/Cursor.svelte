<script lang="ts">
	let x = -1000;
	let y = -1000;

	function handleMouseMove(e: MouseEvent) {
		x = e.x;
		y = e.y;
	}
</script>

<svelte:head>
	<title>neoney's website</title>
</svelte:head>

<svelte:body on:mousemove={handleMouseMove} />

<div
	id="cursor"
	class="h-96 w-96 bg-hotPink fixed top-0 left-0 rounded-full pointer-events-none mix-blend-darken"
	style={`transform: translate(calc(${x}px - 12rem), calc(${y}px - 12rem));`}
/>
