export interface Experience {
	company: string;
	role: string;
	location: string;
	date: string;
	description: string;
}

export const experienceData: Experience[] = [
	{
		company: 'Pointer - Hosting Experts · Full-time',
		role: 'User Interface Developer',
		location: 'Thessaloniki, Greece',
		date: 'May 2018 - Present',
		description: `<ul>
    <li>Design and front-end development of Pointer's core product. Worked on multiple features and implemented products in collaboration with marketing managers, backend, and JavaScript developers.</li>
    <li>Developed, maintained, and extended Pointer's website based on the principles of reusability of components.</li>
    <li>Dedicated to the ongoing maintenance and optimization of existing client websites.</li>
    <li>Custom Design and development of websites primarily using WordPress as a CMS.</li>
    <li>Teaching Clients How to Use and Manage Their Websites and Online Stores.</li>
            </ul>`,
	},
	{
		company: 'Pointer - Hosting Experts · Internship',
		role: 'Technical Support Specialist',
		location: 'Thessaloniki, Greece',
		date: 'May 2018 - Present',
		description: `<p>Providing technical support for Level I issues via help desk and the telephone.</p>
      <ul>
      <li>Walk customers through set up of email, cPanel, and FTP clients.</li>
      <li>Restore, migrate websites manually or via web panels (Plesk, cPanel)</li>
      <li>Taking ownership of issues from identification through resolution.</li>
      </ul>`,
	},
];
