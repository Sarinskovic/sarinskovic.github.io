/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				'left-bottom': '8px 8px 0 rgba(0, 0, 0, 1)', // 3px shadow to the left and bottom
				'left-bottom-hover': '8px 8px 0 #ffffff' // 3px shadow to the left and bottom
			},

			backgroundImage: {
				'gradient-noise': 'url(/noise.svg)',
				dots: 'url(/dots.svg)'
			},
			fontFamily: {
				sans: ['Space Mono', ...defaultTheme.fontFamily.sans],
				bobbyJonesOutline: ['BobbyJonesSoftOutline'],
				bobbyJones: ['BobbyJonesSoft']
			},
			colors: {
				persian: {
					50: '#fff8eb',
					100: '#fdeac8',
					200: '#facb74',
					300: '#f9b850',
					400: '#f79e28',
					500: '#f17b0f',
					600: '#d5580a',
					700: '#b13a0c',
					800: '#902e10',
					900: '#762711',
					950: '#441004'
				},
				glaucous: {
					50: '#f3f7fb',
					100: '#e3eef6',
					200: '#cee3ef',
					300: '#adcfe3',
					400: '#85b6d5',
					500: '#689dc9',
					600: '#5586bb',
					700: '#4e79b2',
					800: '#41608c',
					900: '#385070',
					950: '#263245'
				},
				viridian: {
					50: '#f4f9f7',
					100: '#dbece4',
					200: '#b7d8c9',
					300: '#8bbda8',
					400: '#629f87',
					500: '#509179',
					600: '#386957',
					700: '#305548',
					800: '#2a453d',
					900: '#263b35',
					950: '#12211d'
				},
				oil: {
					50: '#f9f9ed',
					100: '#f0f0d1',
					200: '#e2e0a6',
					300: '#d1ca73',
					400: '#c2b54d',
					500: '#b3a13f',
					600: '#9a8234',
					700: '#7c622c',
					800: '#68502b',
					900: '#5a4429',
					950: '#2d2012'
				}
			}
		}
	},
	plugins: []
}
