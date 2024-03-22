import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Romeo Delta',
					sidebar: [
				{
					label: 'About',
					autogenerate: { directory: 'about' },
				},
				{
				label: 'DipPHRM',
				collapsed: true,
				autogenerate: { directory: 'DipPHRM'},
			},
			],
			customCss: ['./src/tailwind.css'],
			tableOfContents: true,
		}),
		tailwind({ applyBaseStyles: false }),

	],
});
