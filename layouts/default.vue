<template>
	<div class="mx-auto">
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
