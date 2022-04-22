<script lang="ts">
	let pageX = -1000;
	let pageY = -1000;
    let scrollX = 0;
    let scrollY = 0;

    $: x = pageX - scrollX;
    $: y = pageY - scrollY;

	function handleMouseMove(e: MouseEvent) {
		pageX = e.pageX;
	    pageY = e.pageY;
	}

    function handleScroll(e: UIEvent) {
        scrollX = window.scrollX;
        scrollY = window.scrollY;
    }
</script>

<svelte:head>
	<title>neoney's website</title>
</svelte:head>

<svelte:body on:mousemove={handleMouseMove} on:pointermove={handleMouseMove}  />
<svelte:window on:scroll={handleScroll}/>

<div
	id="cursor"
	class="h-96 w-96 bg-hotPink fixed top-0 left-0 rounded-full pointer-events-none mix-blend-darken"
	style={`transform: translate(calc(${x}px - 12rem), calc(${y}px - 12rem));`}
/>
