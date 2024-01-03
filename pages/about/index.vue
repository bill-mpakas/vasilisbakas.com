<template>
	<main id="resume" class="container py-12 xl:py-24">
		<div class="flex flex-col gap-8 xl:gap-16 2xl:gap-24">
			<section id="objective">
				<h2
					class="text-xl xl:text-2xl font-medium max-w-[200px] uppercase mb-8 border-gray-600 pb-3 border-b-2"
				>
					Objective
				</h2>
				<p class="text-lg lg:text-xl leading-6 text-gray-700">
					A goal-oriented Product Designer with a background in front-end
					development. Experienced in solving complex UX design challenges, as
					well as collecting and analyzing qualitative and quantitative data to
					create actionable insights.
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
						<h3 class="font-medium text-xl text-gray-900">
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
				<ul class="grid grid-cols-1 gap-4 md:gap-8 2xl:gap-10">
					<li
						v-for="(job, index) in experience"
						:key="index"
						class="flex flex-col gap-2"
					>
						<div class="flex flex-row justify-between gap-2">
							<!-- Content -->
							<div>
								<!-- Main Details -->
								<div>
									<h3 class="font-medium text-xl md:text-2xl text-gray-900">
										{{ job.company }}
									</h3>
									<p class="text-xl text-gray-700">{{ job.role }}</p>
								</div>
								<!-- Info - Description -->
								<div v-html="job.description" class="prose prose-lg mt-4"></div>
							</div>
							<!-- Date -->
							<div class="flex flex-col gap-px text-right">
								<p class="text-base md:text-lg text-gray-700">{{ job.date }}</p>
								<p class="text-base md:text-lg text-gray-700">
									{{ job.location }}
								</p>
							</div>
						</div>
					</li>
				</ul>
			</section>
			<section id="education">
				<h2
					class="text-xl 2xl:text-2xl font-medium max-w-[400px] uppercase mb-8 border-gray-600 pb-3 border-b-2"
				>
					Education
				</h2>
				<ul class="grid grid-cols-1 gap-4 md:gap-8 2xl:gap-10">
					<li
						v-for="(school, index) in education"
						:key="index"
						class="flex flex-col gap-2"
					>
						<div class="flex flex-row justify-between gap-2">
							<!-- Content -->
							<div>
								<!-- Main Details -->
								<div>
									<h3 class="font-medium text-2xl text-gray-900">
										{{ school.school }}
									</h3>
									<p class="text-xl text-gray-700">{{ school.degree }}</p>
								</div>
								<!-- Info - Description -->
								<div
									v-html="school.description"
									class="prose prose-lg mt-4"
								></div>
							</div>
							<!-- Date -->
							<div class="flex flex-col gap-px text-right">
								<p class="text-base md:text-lg text-gray-700">
									{{ school.date }}
								</p>
								<p class="text-base md:text-lg text-gray-700">
									{{ school.location }}
								</p>
							</div>
						</div>
					</li>
				</ul>
			</section>
			<section id="licenses-certifications">
				<h2
					class="text-xl 2xl:text-2xl font-medium max-w-[400px] uppercase mb-8 border-gray-600 pb-3 border-b-2"
				>
					Licenses & Certifications
				</h2>
				<div
					class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-8 2xl:gap-10"
				>
					<div
						v-for="(certificates, category) in groupedCertificationData"
						:key="category"
					>
						<h4 class="text-xl mb-2 xl:mb-4 font-medium">{{ category }}</h4>
						<ul class="flex flex-col divide-y divide-dashed divide-slate-300">
							<li
								class=""
								v-for="(certificate, index) in certificates"
								:key="index"
							>
								<!-- Name & Organization -->
								<div class="flex flex-col gap-px py-2">
									<!-- <Icon
										size="0.8rem"
										:name="certificate.icon"
										class="icon"
										color="#71717a"
									/> -->
									<h5 class="text-lg">{{ certificate.certificate }}</h5>
									<span class="text-gray-600">{{
										certificate.organization
									}}</span>
								</div>

								<p v-if="certificate.description">
									{{ certificate.description }}
								</p>
								<a
									v-if="certificate.certificateUrl"
									:href="certificate.certificateUrl"
									>View Certificate</a
								>
								<p v-if="certificate.date" class="text-gray-700">
									Issued: {{ certificate.date }}
								</p>
							</li>
						</ul>
					</div>
				</div>

				<!-- Show a link that goes to all certificates in LinkeIn -->
				<a
					href="https://www.linkedin.com/in/vasileios-bakas/details/certifications/"
					target="_blank"
					rel="noopener noreferrer"
					class="py-1 mt-6 lg:mt-12 rounded-sm inline-flex gap-2 px-2 border border-gray-400 text-base text-gray-700"
				>
					<span>View all certificates</span>
					<Icon
						name="heroicons:arrow-top-right-on-square"
						class="group -m-1 p-1"
						color="#71717a"
					/>
				</a>
			</section>
		</div>
	</main>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { experienceData } from '@/interfaces/Experience';
import { educationData } from '@/interfaces/Education';
import { certificationData } from '@/interfaces/Certificate';

const experience = experienceData;
const education = educationData;

const groupedCertificationData = computed(() => {
	return certificationData.reduce((groups, certificate) => {
		const category = certificate.category;
		if (!groups[category]) {
			groups[category] = [];
		}
		groups[category].push(certificate);
		return groups;
	}, {} as Record<string, typeof certificationData>);
});

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
