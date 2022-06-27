<script>
	import Project from './Project.svelte';
</script>

<section
	id="projects"
	class="py-16 px-6 sm:mx-10 lg:mx-14 xl:mx-20 flex flex-col justify-center min-h-screen border-t border-gray-600/25"
>
	<h1 class="font-header text-6xl font-extrabold">My projects</h1>
	<div class="text-2xl font-medium mt-4 leading-9">
		I've made several projects, with lots of them being private.<br />
		Here are the projects that I've publicly released:
	</div>
	<div class="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 place-content-stretch">
		<Project title="This website" url="https://github.com/n3oney/neoney-me">
			This website is open-source, with the source code being available on GitHub.
		</Project>
		<Project title="InPost QR Generator" url="https://inpost.neoney.dev">
			An open-source web app for generating QR codes for InPost's parcel lockers.
		</Project>
		<Project title="Discord Update Skip" url="https://github.com/n3oney/discord-update-skip">
			A simple bash script to fix discord wanting to update to a version that isn't in the repos.
		</Project>
		<Project title="Voice Chat Generator" url="https://github.com/n3oney/voice-chat-generator">
			A Discord bot that dynamically generates voice channels.
		</Project>
		<Project title="Nexe Ban Appeals" url="https://nexe.neoney.dev">
			A website where one can send a ban appeal from <a
				href="https://www.youtube.com/c/Nexee"
				class="text-hotPink">Nexe</a
			>'s Discord server.
		</Project>
	</div>
</section>
