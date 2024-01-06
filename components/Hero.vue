<script setup lang="ts">
const props = defineProps({
	title: {
		type: String,
		required: false,
	},
	subTitle: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
});
</script>

<template>
	<div class="px-6 py-24 sm:py-32 lg:px-8">
		<div class="mx-auto max-w-2xl text-center">
			<p class="text-base font-semibold leading-7 text-indigo-600">
				{{ props.subTitle }}
			</p>
			<h1 class="project__title">
				{{ props.title }}
			</h1>
			<p class="project__description">
				{{ props.description }}
			</p>
		</div>
	</div>
</template>
