<script setup lang="ts">
definePageMeta({
	layout: 'full-width',
});
</script>

<template>
	<ContentDoc v-slot="{ doc }">
		<main :id="doc.theme">
			<section class="hero">
				<Hero :title="doc.title" :description="doc.description"></Hero>
			</section>
			<section
				id="content"
				class="prose-lg xl:prose-xl container max-w-6xl mx-auto"
			>
				<ContentRenderer :value="doc" />
			</section>
		</main>
	</ContentDoc>
</template>
