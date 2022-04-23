<script lang="ts">
	export let title: string;
	export let url: string;
</script>

<a href={url}>
	<div class="bg-background-800 rounded-lg p-4">
		<h2 class="text-hotPink font-header font-bold text-2xl">{title}</h2>
		<div class="font-medium mt-2 text-lg">
			<slot />
		</div>
	</div>
</a>
