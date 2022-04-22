<script>
    import ScrollArrow from "../components/ScrollArrow.svelte";
</script>

<section id="home" class="flex flex-col justify-center items-center h-screen text-center">
    <!-- <div class='h-20 flex-grow'/> -->

	<h1 class="font-header text-6xl font-extrabold">
		Hi, I'm <span class="text-gradient-animated">neoney</span>
	</h1>
	<h2 class="font-header text-lg font-bold mt-1">and I'm a full-stack web developer!</h2>

	<a href="/blog" class="mt-4 bg-gradient-to-r from-hotPink to-blueish rounded-full hover:scale-125 transition-transform">
		<div class="bg-background-900 m-1 text-lg px-8 py-1 rounded-full font-header font-bold">
			<span class="text-gradient">read my blog</span>
		</div>
	</a>

    <!-- <ScrollArrow href='#skills' /> -->
    <!-- Uncomment this and the top div when skills section is created -->
</section>