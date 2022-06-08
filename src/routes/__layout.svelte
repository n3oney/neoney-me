<script>
	import '../app.css';
	import '../roboto.css';
	import '../montserrat.css';
</script>

<svelte:head>
	<meta property="og:title" content="neoney's website" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://neoney.me" />
	<meta property="og:image" content="https://neoney.me/embed.png" />
	<meta property="og:locale" content="pl_PL" />
	<meta name="theme-color" content="#FF5ADC" />

	<meta name="twitter:card" content="summary_large_image" />


	<title>neoney's website</title>
</svelte:head>

<main> 
	<slot />
</main>