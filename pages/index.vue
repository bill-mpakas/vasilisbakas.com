<script setup lang="ts">
const posts = await queryContent('blog')
	.where({ tags: { $contains: ['tools'] } })
	.find();
definePageMeta({
	layout: 'full-width',
});

const socialLinks = ref([
	{
		ariaLabel: 'Profile on LinkedIn',
		href: 'https://linkedin.com/in/vasileios-bakas',
		icon: 'ri:linkedin-fill',
	},
	{
		ariaLabel: 'Profile on GitHub',
		href: 'https://github.com/bill-mpakas',
		icon: 'ri:github-fill',
	},
	{
		ariaLabel: 'Follow on X',
		href: 'https://twitter.com/bill_bakas',
		icon: 'ri:twitter-x-fill',
	},
	{
		ariaLabel: 'Follow on Instagram',
		href: 'https://www.instagram.com/bill_mpakas/',
		icon: 'ri:instagram-fill',
	},
	// ... other social links
]);

const images = [
	{
		alt: 'Boost your conversion rate',
		imageUrl: '/assets/images/matterhorn.jpg',
	},
	{
		alt: 'Boost your conversion rate',
		imageUrl: '/assets/images/matterhorn.jpg',
	},
	{
		alt: 'Boost your conversion rate',
		imageUrl: '/assets/images/matterhorn.jpg',
	},
	{
		alt: 'Boost your conversion rate',
		imageUrl: '/assets/images/matterhorn.jpg',
	},
	{
		alt: 'Boost your conversion rate',
		imageUrl: '/assets/images/matterhorn.jpg',
	},
	// More posts...
];
</script>

<template>
	<main>
		<section class="py-12" id="intro">
			<div class="sm:px-8 mt-9">
				<div class="mx-auto w-full max-w-6xl lg:px-8">
					<div class="relative px-4 sm:px-8 lg:px-12">
						<div class="mx-auto max-w-2xl lg:max-w-5xl">
							<div class="max-w-3xl">
								<h1
									class="text-4xl font-bold leading-8 tracking-tight text-zinc-800 sm:text-5xl"
								>
									Hi, I am Vasilis. <br />
									Product Designer / UI Developer.
								</h1>
								<p class="mt-6 text-xl leading-8 xl:text-2xl text-zinc-600">
									I'm currently working at
									<a
										target="_blank"
										class="hover:underline"
										href="https://www.pointer.gr/en"
										>Pointer.gr</a
									>
									while pursuing my Master's degree in Strategic Product Design.
								</p>
								<div class="mt-6 flex gap-6">
									<a
										v-for="link in socialLinks"
										:key="link.ariaLabel"
										class="group -m-1 p-1"
										:aria-label="link.ariaLabel"
										:href="link.href"
									>
										<Icon :name="link.icon" class="icon" color="#71717a" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="py-6" id="images">
			<div
				class="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8"
			>
				<div
					class="relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl"
					v-for="(image, index) in images"
					:key="index"
					:class="index % 2 === 0 ? 'rotate-2' : '-rotate-2'"
				>
					<img
						:alt="image.alt"
						loading="lazy"
						width="3744"
						height="5616"
						decoding="async"
						data-nimg="1"
						class="absolute inset-0 h-full w-full object-cover"
						style="color: transparent"
						sizes="(min-width: 640px) 18rem, 11rem"
						:src="image.imageUrl"
					/>
				</div>
			</div>
		</section>
		<section
			class="container lg:max-w-5xl max-w-4xl mx-auto py-6 lg:py-12"
			id="post-list"
		>
			<h2 class="text-xl md:text-2xl xl:text-3xl tracking-tight font-medium">
				Latest from the Blog
			</h2>
			<ul class="py-4 flex-col flex gap-6 lg:py-8">
				<li
					class="flex flex-col gap-2"
					v-for="article in posts"
					:key="article._path"
				>
					<a class="underline text-2xl" :href="article._path"
						>{{ article.title }}
					</a>
					<small>{{ article.date }}</small>
				</li>
			</ul>
		</section>
	</main>
</template>
