<template>
	<main class="prose container max-w-4xl mx-auto">
		<ContentDoc v-slot="{ doc }">
			<ContentRenderer :value="doc" />
		</ContentDoc>
	</main>
</template>
