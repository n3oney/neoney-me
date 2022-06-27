<script>
	import IoLogoTwitter from 'svelte-icons/io/IoLogoTwitter.svelte';
	import FaDiscord from 'svelte-icons/fa/FaDiscord.svelte';
	import FaMailBulk from 'svelte-icons/fa/FaMailBulk.svelte';
</script>

<section
	id="social"
	class="py-16 px-8 flex flex-col justify-center items-center min-h-screen border-t border-gray-600/25 font-medium"
>
	<h1 class="font-header font-extrabold text-6xl text-center">Contact me!</h1>
	<div class="text-xl grid social-grid gap-3 mt-6">
		<a href="https://twitter.com/neoneydev" class="justify-self-end h-[1.5em] text-[#1DA1F2]">
			<IoLogoTwitter />
		</a>
		<a href="https://twitter.com/neoneydev">@neoneydev</a>
		<div class="h-[1.5em] text-[#5865F2] justify-self-end">
			<FaDiscord />
		</div>
		<div>neoney<span class="text-gray-500">#7991</span></div>
		<a class="cursor-pointer justify-self-end h-[1.5em]" href="mailto:neoney@pm.me">
			<FaMailBulk />
		</a>
		<a href="mailto:neo@neoney.dev">neo@neoney.dev</a>
	</div>
</section>

<style>
	.social-grid {
		grid-template-columns: 1.5em 1fr;
	}
</style>
