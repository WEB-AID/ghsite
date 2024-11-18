import type { Config } from 'tailwindcss'

export default {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))',
                },
            },
            animation: {
                'spin-pause': 'spinPause 2s linear infinite',
            },
            keyframes: {
                spinPause: {
                    '0%': {
                        transform: 'rotate(0deg)',
                    },
                    '50%': {
                        transform: 'rotate(360deg)',
                    },
                    '75%': {
                        transform: 'rotate(360deg)',
                    },
                    '100%': {
                        transform: 'rotate(0deg)',
                    },
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            boxShadow: {
                'inner-premium-gray':
                    'inset 0 0 10px 5px rgba(180, 180, 180, 0.2)',
                'outer-orange': '0 0 15px rgba(255, 165, 0, 0.4)',
            },
            width: {
                '100vh': '100vh',
                '90vh': '90vh',
                '80vh': '80vh',
                '70vh': '70vh',
                '60vh': '60vh',
                '50vh': '50vh',
                '45vh': '45vh',
                '40vh': '40vh',
                '30vh': '30vh',
                '35vh': '35vh',
                '20vh': '20vh',
                '10vh': '10vh',
            },
            height: {
                '100vh': '100vh',
                '90vh': '90vh',
                '80vh': '80vh',
                '70vh': '70vh',
                '60vh': '60vh',
                '50vh': '50vh',
                '45vh': '45vh',
                '40vh': '40vh',
                '30vh': '30vh',
                '35vh': '35vh',
                '20vh': '20vh',
                '10vh': '10vh',
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config
