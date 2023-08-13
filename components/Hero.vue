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
			<h2
				class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
			>
				{{ props.title }}
			</h2>
			<p class="mt-6 text-lg leading-8 text-gray-600">
				{{ props.description }}
			</p>
		</div>
	</div>
</template>
