<script lang="ts">
	export let href: string;

	import IoMdArrowRoundDown from 'svelte-icons/io/IoMdArrowRoundDown.svelte';
</script>

<a class="animate-pulse text-white/50 flex items-center justify-center flex-grow" {href}>
	<div class="h-20">
		<IoMdArrowRoundDown />
	</div>
</a>
