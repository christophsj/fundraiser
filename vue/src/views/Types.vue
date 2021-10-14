<template>
	<div>
		<div class="container">
      	<!-- this line is used by starport scaffolding # 4 -->
		<SpType modulePath="christophsj.fundraiser.fundraiser" moduleType="Fund"  />
		<SpType modulePath="christophsj.fundraiser.fundraiser" moduleType="Project"  />  

		</div>
	</div>
</template>

<script>
import ProjectForm from "../components/ProjectForm";
import ProjectList from "../components/ProjectList";
export default {
	name: 'Types',
	components: {ProjectForm, ProjectList},
}
</script>