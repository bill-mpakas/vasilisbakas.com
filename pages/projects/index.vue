<script setup></script>

<template>
	<h1 class="text-4xl leading-relaxed font-bold">Blog</h1>
	<ContentList path="/projects" v-slot="{ list }">
		<div v-for="article in list" :key="article._path">
			<h2>{{ article.title }}</h2>
			<p>{{ article.description }}</p>
			{{ article._path }}
		</div>
	</ContentList>
</template>
