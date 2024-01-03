<template>
	<main id="resume" class="container max-w-7xl py-12 xl:py-24">
		<div class="flex flex-col gap-8 xl:gap-16 2xl:gap-24">
			<section id="objective">
				<h2
					class="text-xl xl:text-2xl font-medium max-w-[200px] uppercase mb-8 border-gray-600 pb-3 border-b-2"
				>
					Objective
				</h2>
				<p class="text-lg lg:text-xl leading-6 text-gray-700">
					A Product Designer with a background in front-end development,
					experienced in solving complex UX design challenges, as well as
					collecting and analyzing qualitative and quantitative data to create
					actionable insights.
				</p>
			</section>
			<section id="summary-of-qualifications">
				<h2
					class="text-xl 2xl:text-2xl font-medium max-w-[400px] uppercase mb-8 border-gray-600 pb-3 border-b-2"
				>
					Summary of Qualifications
				</h2>
				<ul class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 2xl:gap-10">
					<li
						v-for="(skill, index) in skills"
						:key="index"
						class="flex flex-col gap-2"
					>
						<h3 class="font-medium text-2xl text-gray-900">
							{{ skill.title }}
						</h3>
						<p class="text-xl text-gray-700">{{ skill.description }}</p>
					</li>
				</ul>
			</section>
			<section id="professional-experience">
				<h2
					class="text-xl 2xl:text-2xl font-medium max-w-[400px] uppercase mb-8 border-gray-600 pb-3 border-b-2"
				>
					Professional Experience
				</h2>
			</section>
		</div>
	</main>
</template>

<script setup lang="ts">
const skills = [
	{
		title: 'Front-end development',
		description:
			'Experienced in HTML, CSS, and JavaScript, as well as frameworks like Vue.js and Tailwind CSS.',
	},
	{
		title: 'Product Design',
		description:
			'Experience in creating and maintaining a living style guide and design system - Familiarity with Sketch & Figma',
	},
	{
		title: 'Interaction design',
		description:
			'Proficient in driving design decisions with qualitative and quantitative data, then synthesize and present the findings as design concepts.',
	},
	{
		title: 'Qualitative research',
		description:
			'Comprehensive experience of qualitative research methods, including conducting user interviews, moderating usability tests, and creating personas.',
	},
	{
		title: 'Visual design',
		description:
			'Experienced in creating visual design systems and UI components.',
	},
	{
		title: 'Accessibility',
		description:
			'Experience in design and developing inclusive products, as well as performing accessibility evaluations for web pages.',
	},
];
</script>
