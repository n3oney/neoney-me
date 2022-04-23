<script lang="ts">
	import HomeSection from '../components/HomeSection.svelte';
	import SkillsSection from '../components/SkillsSection.svelte';
	import ProjectsSection from '../components/ProjectsSection.svelte';
	import SocialSection from '../components/SocialSection.svelte';
</script>

<div id="index-snap" class="h-screen overflow-auto snap-y snap-proximity child:snap-center">
	<HomeSection />
	<SkillsSection />
	<ProjectsSection />
	<SocialSection />
</div>
