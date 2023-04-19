/** @type {import('tailwindcss').Config} */
export default {
	content: [ './index.html', './src/**/*.{js,ts,jsx,tsx}' ],
	theme: {
		extend: {
			fontFamily: {
				montserrat: [ 'Montserrat', 'sans-serif' ]
			},
			textColor: {
				primary: '#ff0a65',
				menu: '#281236'
			},
			backgroundColor: {
				menu: '#ff0ac2'
			},
			animation: {
				cover: 'cover 0.5s forwards ease-out'
			},
			keyframes: {
				cover: {
					'100%': { width: '100%' }
				}
			}
		}
	},
	plugins: []
};
