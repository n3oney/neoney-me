<script lang="ts">
	let x = -1000;
    let y = -1000;

	function handleMouseMove(e: MouseEvent) {
		x = e.clientX;
		y = e.clientY;
	}

    function handleTouch(e: TouchEvent) {
        x = e.touches[0].pageX;
        y = e.touches[0].pageY;
    }
</script>

<style>
	@supports (not (mix-blend-mode: darken)) {
		#cursor {
			display: none !important;
		}
	}
</style>

<svelte:head>
	<title>neoney's website</title>
</svelte:head>

<svelte:body
	on:pointermove={handleMouseMove}
	on:touchmove={handleTouch}
    on:touchstart={handleTouch} />

<div
	id="cursor"
	class="h-96 w-96 bg-hotPink fixed top-0 left-0 rounded-full pointer-events-none mix-blend-darken"
	style={`transform: translate(calc(${x}px - 12rem), calc(${y}px - 12rem));`}
/>
