<script>
	import skills from '../assets/skills.svg';
</script>

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
