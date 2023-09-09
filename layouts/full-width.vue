<template>
	<div>
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
