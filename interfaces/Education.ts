export interface Education {
	degree: string;
	school: string;
	location: string;
	date: string;
	description?: string;
}

export const educationData: Education[] = [
	{
		degree: 'MSc in Strategic Product Design',
		school: 'International Hellenic University',
		location: 'Thessaloniki, Greece',
		date: '2021-2023',
	},
	{
		degree: 'Bsc in IT-Applied Informatics',
		school: 'University of Macedonia',
		location: 'Thessaloniki, Greece',
		date: '2010-2015',
	},
];
