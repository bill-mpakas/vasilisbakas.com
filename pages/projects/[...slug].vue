<script setup lang="ts">
definePageMeta({
	layout: 'full-width',
});
</script>

<template>
	<ContentDoc v-slot="{ doc }">
		<pre>{{ doc }}</pre>
		<!-- use doc.projectColor as the background color -->
		<header :class="`bg-[${doc.projectColor}]`">
			<Hero :title="doc.title" :description="doc.description"></Hero>
		</header>
		<main class="prose-lg xl:prose-xl container max-w-4xl mx-auto">
			<ContentRenderer :value="doc" />
		</main>
	</ContentDoc>
</template>
