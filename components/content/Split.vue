<template>
	<section class="py-6 md:py-8 grid grid-cols-2 gap-8 xl:gap-16">
		<div class="split">
			<slot name="left" />
		</div>
		<div class="split">
			<slot name="right" />
		</div>
	</section>
</template>

<style>
.split h4 {
	@apply text-sm md:text-lg uppercase font-medium;
}
</style>
