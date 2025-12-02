/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    50: '#e0f7fa',
                    100: '#b3e5fc',
                    200: '#81d4fa',
                    300: '#4fc3f7',
                    400: '#29b6f6',
                    500: '#0E8AA8',
                    600: '#0d7d97',
                    700: '#0c7086',
                    800: '#0b6375',
                    900: '#085060',
                },
                secondary: {
                    50: '#f3e5f5',
                    100: '#e1bee7',
                    200: '#ce93d8',
                    300: '#ba68c8',
                    400: '#ab47bc',
                    500: '#4A2E8A',
                    600: '#42257a',
                    700: '#3a1f6a',
                    800: '#32185a',
                    900: '#2a1150',
                },
                accent: {
                    50: '#fff3e0',
                    100: '#ffe0b2',
                    200: '#ffcc80',
                    300: '#ffb74d',
                    400: '#ffa726',
                    500: '#FF8B2B',
                    600: '#e67e22',
                    700: '#d97706',
                    800: '#cc5de8',
                    900: '#bf360c',
                },
                success: {
                    50: '#e8f5e9',
                    100: '#c8e6c9',
                    200: '#a5d6a7',
                    300: '#81c784',
                    400: '#66bb6a',
                    500: '#39A54A',
                    600: '#2e7d32',
                    700: '#27632a',
                    800: '#1f4d1f',
                    900: '#173a17',
                },
            },
            animation: {
                'gradient-x': 'gradient-x 15s ease infinite',
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                'gradient-x': {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center'
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center'
                    }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-30px) rotate(5deg)' }
                },
                'pulse-glow': {
                    '0%, 100%': {
                        opacity: 1,
                        boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)'
                    },
                    '50%': {
                        opacity: 0.8,
                        boxShadow: '0 0 60px rgba(139, 92, 246, 0.8)'
                    }
                },
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
                display: ['Space Grotesk', 'monospace'],
            },
        },
    },
    plugins: [],
}