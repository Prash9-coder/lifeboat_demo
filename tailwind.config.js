/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#3234a2',
                    light: '#4a4cff',
                    dark: '#2a2b8a',
                },
                accent: {
                    DEFAULT: '#32a162',
                    light: '#3bc475',
                    dark: '#288a52',
                },
            },
            fontFamily: {
                display: ['Space Grotesk', 'sans-serif'],
                body: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}