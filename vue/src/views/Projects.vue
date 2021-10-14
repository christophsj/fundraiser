<template>
	<div>
		<div class="container">
        <project-form />
        <project-list />
		</div>
	</div>
</template>

<script>
import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";
export default {
	name: 'Projects',
	components: {ProjectForm, ProjectList},
}
</script>

