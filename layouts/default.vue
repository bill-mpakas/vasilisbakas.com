<template>
	<div class="max-w-6xl mx-auto">
		<TheHeader />
		<slot />
		<TheFooter />
	</div>
</template>

<script>
useHead({
	bodyAttrs: {
		class: 'grain',
	},
});
</script>
