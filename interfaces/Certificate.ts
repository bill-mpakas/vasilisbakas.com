export type Category =
	| 'User Experience'
	| 'Web Development'
	| 'Accessibility'
	| 'Agile'
	| 'Analytics';

export interface Certificate {
	category: Category;
	certificate: string;
	icon?: string;
	organization?: string;
	date?: string;
	description?: string;
	certificateUrl?: string;
}

export const certificationData: Certificate[] = [
	{
		category: 'Web Development',
		certificate: 'Javascript Essential Training',
		organization: 'LinkedIn',
		icon: 'ri:linkedin-fill',
		// date: 'Mar 2022',
	},
	{
		category: 'Web Development',
		certificate: 'Vue.js Testing and Debugging',
		organization: 'LinkedIn',
		icon: 'ri:linkedin-fill',
		// date: 'Mar 2022',
	},
	{
		category: 'Web Development',
		certificate: "Let's Learn Laravel: A guided path for beginners",
		icon: 'ri:linkedin-fill',
		organization: 'LinkedIn',
		// date: 'Mar 2022',
	},
	{
		category: 'Web Development',
		certificate: 'Web Components and Modularization: Practical Approaches',
		icon: 'ri:linkedin-fill',
		organization: 'LinkedIn',
		// date: 'Mar 2022',
	},
	{
		category: 'User Experience',
		certificate: 'Design Thinking: Understanding the Process',
		icon: 'ri:linkedin-fill',
		organization: 'LinkedIn',
		// date: 'Mar 2022',
	},
	{
		category: 'User Experience',
		certificate: 'Design Thinking: Implementing the Process',
		icon: 'ri:linkedin-fill',
		organization: 'LinkedIn',
		// date: 'Mar 2022',
	},
	{
		category: 'User Experience',
		certificate: 'UX Foundations: Style Guides and Design Systems',
		icon: 'ri:linkedin-fill',
		organization: 'LinkedIn',
		// date: 'Mar 2022',
	},
	{
		category: 'Accessibility',
		certificate: 'HTML Essential Training',
		icon: 'ri:linkedin-fill',
		organization: 'LinkedIn',
		// date: 'Mar 2022',
	},
	{
		category: 'Accessibility',
		certificate:
			'Simplifying Web Development with Accessibility in Best Practices',
		icon: 'ri:linkedin-fill',
		organization: 'LinkedIn',
		// date: 'Mar 2022',
	},
	{
		category: 'Analytics',
		certificate: 'Advanced Google Tag Manager',
		icon: 'ri:linkedin-fill',
		organization: 'LinkedIn',
		// date: 'Mar 2021',
	},
	{
		category: 'Analytics',
		certificate: 'Google Analytics Essential Training',
		icon: 'ri:linkedin-fill',
		organization: 'LinkedIn',
		// date: 'Mar 2021',
	},
	{
		category: 'Analytics',
		certificate:
			'Design Powered by Data: Getting Started with UX Web Analytics',
		icon: 'ri:linkedin-fill',
		organization: 'LinkedIn',
	},
	{
		category: 'Agile',
		certificate: 'Scrum: The Basics',
		icon: 'ri:linkedin-fill',
		organization: 'LinkedIn',
		// date: 'Feb 2023',
	},
	{
		category: 'Agile',
		certificate: 'What is Scrum?',
		icon: 'ri:linkedin-fill',
		organization: 'LinkedIn',
		// date: 'Feb 2023',
	},
	// ... other certificates
];
