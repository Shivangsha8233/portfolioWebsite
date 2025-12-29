/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                paper: '#e3dac9',
                ink: '#3b2f2f',
                'paper-dark': '#d1c7b7',
                'accent-tape': '#f4e7c3', // Light masking tape color
            },
            fontFamily: {
                hand: ['"Patrick Hand"', 'cursive', 'sans-serif'], // We will import this font
                sans: ['"Inter"', 'sans-serif'],
            },
            boxShadow: {
                'paper': '2px 3px 5px rgba(0,0,0,0.15)',
                'paper-lift': '5px 8px 15px rgba(0,0,0,0.2)',
            },
            rotate: {
                '1': '1deg',
                '-1': '-1deg',
                '2': '2deg',
                '-2': '-2deg',
            }
        },
    },
    plugins: [],
}
