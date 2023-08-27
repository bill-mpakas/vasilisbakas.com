<script setup lang="ts">
const posts = await queryContent('blog')
	.where({ tags: { $contains: ['tools'] } })
	.find();
</script>

<template>
	<main class="container max-w-7xl mx-auto">
		<div v-for="article in posts" :key="article._path">
			<a class="underline" :href="article._path">{{ article.title }} </a>
		</div>
	</main>
</template>
