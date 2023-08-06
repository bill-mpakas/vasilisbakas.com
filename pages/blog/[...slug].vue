<template>
	<main class="prose">
		<ContentDoc v-slot="{ doc }">
			<ContentRenderer :value="doc" />
		</ContentDoc>
	</main>
</template>
