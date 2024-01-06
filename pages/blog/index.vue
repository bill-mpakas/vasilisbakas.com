<script setup>
definePageMeta({
	layout: 'default',
});
</script>

<template>
	<h1 class="text-4xl leading-relaxed font-bold">Blog</h1>
	<ContentList path="/blog" v-slot="{ list }">
		<div v-for="article in list" :key="article._path">
			<a class="underline" :href="article._path">{{ article.title }} </a>
		</div>
	</ContentList>
</template>
