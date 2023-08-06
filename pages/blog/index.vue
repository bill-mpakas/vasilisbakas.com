<script setup>
const posts = await queryContent('blog').sort({ title: 1 }).find();
</script>

<template>
	<h1 class="text-4xl leading-relaxed font-bold">Blog</h1>
	<ul>
		<li v-for="post in posts" :key="post._id">
			<NuxtLink :to="post._path">{{ post.title }}</NuxtLink>
		</li>
	</ul>
</template>
