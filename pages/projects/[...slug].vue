<template>
	<ContentDoc v-slot="{ doc }">
		<header>
			<Hero :title="doc.title" :description="doc.description"></Hero>
		</header>
		<main class="prose container max-w-4xl mx-auto">
			<ContentRenderer :value="doc" />
		</main>
	</ContentDoc>
</template>
