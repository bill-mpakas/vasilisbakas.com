export type Category = 'User Experience' | 'Front End Development' | 'Agile';
('Analytics');

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
		category: 'Front End Development',
		certificate: 'Vue.js Testing and Debugging',
		organization: 'LinkedIn',
		icon: 'ri:linkedin-fill',
		// date: 'Mar 2022',
	},
	{
		category: 'Front End Development',
		certificate: 'Vue.js Testing and Debugging',
		icon: 'ri:linkedin-fill',
		organization: 'LinkedIn',
		// date: 'Mar 2022',
	},
	{
		category: 'Front End Development',
		certificate: 'Vue.js Testing and Debugging',
		icon: 'ri:linkedin-fill',
		organization: 'LinkedIn',
		// date: 'Mar 2022',
	},
	{
		category: 'User Experience',
		certificate: 'Vue.js Testing and Debugging',
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
