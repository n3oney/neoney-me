<script>
	import ScrollArrow from '../components/ScrollArrow.svelte';
	import skills from '../assets/skills.svg';
</script>

<section id="home" class="px-4 flex flex-col justify-center items-center min-h-screen text-center">
	<div class="h-20 flex-grow" />

	<h1 class="font-header text-6xl font-extrabold">
		Hi, I'm <span class="text-gradient-animated">neoney</span>
	</h1>
	<h2 class="font-header text-lg font-bold mt-1">and I'm a full-stack web developer!</h2>

	<a
		href="/blog"
		class="mt-4 bg-gradient-to-r from-hotPink to-blueish rounded-full hover:scale-125 transition-transform"
	>
		<div class="bg-background-900 m-1 text-lg px-8 py-1 rounded-full font-header font-bold">
			<span class="text-gradient">read my blog</span>
		</div>
	</a>

	<ScrollArrow href="#skills" />
</section>

<section
	id="skills"
	class="flex justify-between items-center min-h-screen border-t border-gray-600/25 bg-background-900"
>
	<div class="my-4 mx-6 sm:mx-10 lg:mx-14 xl:mx-20">
		<h1 class="font-header text-7xl font-extrabold">My skills</h1>
		<div class="mt-8 font-body text-xl font-medium child:mb-4 leading-8">
			<div>
				I've been programming in JavaScript since 2018 and have made the switch to <span
					class="font-header font-bold text-gradient">TypeScript</span
				> in 2020.
			</div>
			<div>
				My Web Framework of choice is <span class="font-header font-bold text-gradient">React</span
				>, often used with Next.js, but I've recently started learning
				<span class="font-header font-bold text-gradient">Svelte</span>. In my web apps, I tend to
				use <span class="font-header font-bold text-gradient">TailwindCSS</span> as it lets me rapidly
				improve my styling while keeping a consistent theme.
			</div>
			<div>
				I've also been working on all of the back-end by myself, which I most often make in <span
					class="font-header font-bold text-gradient">Node.js</span
				>
				alongside with TypeScript.
			</div>
		</div>
	</div>
	<img class="hidden lg:block h-screen" src={skills} alt="" />
</section>
