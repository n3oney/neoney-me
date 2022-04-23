<script>
	import IoLogoTwitter from 'svelte-icons/io/IoLogoTwitter.svelte';
	import FaDiscord from 'svelte-icons/fa/FaDiscord.svelte';
	import FaMailBulk from 'svelte-icons/fa/FaMailBulk.svelte';
</script>

<section
	id="social"
	class="flex flex-col justify-center items-center min-h-screen border-t border-gray-600/25 font-medium"
>
	<h1 class="font-header font-extrabold text-6xl text-center">Contact me!</h1>
	<table class="text-xl">
		<tbody>
			<tr
				class="cursor-pointer"
				on:click={() => (window.location.href = 'https://twitter.com/neoneydev')}
			>
				<td class="h-[1.5em] text-[#1DA1F2]"><IoLogoTwitter /></td>
				<td>@neoneydev</td>
			</tr>
			<tr>
				<td class="h-[1.5em] text-[#5865F2]"><FaDiscord /></td>
				<td>neoney<span class="text-gray-500">#7991</span></td>
			</tr>
			<tr class="cursor-pointer" on:click={() => (window.location.href = 'mailto:neoney@pm.me')}>
				<td class="h-[1.5em]"><FaMailBulk /></td>
				<td>neoney@pm.me</td>
			</tr>
		</tbody>
	</table>
</section>

<style>
	table td:first-child {
		text-align: right;
	}

	table {
		border-spacing: 0.2em 0.5em;
		border-collapse: separate;
	}
</style>
