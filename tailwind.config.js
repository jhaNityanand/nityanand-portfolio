/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/app/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c7d7fe',
          300: '#a4b8fc',
          400: '#8190f8',
          500: '#667eea',
          600: '#764ba2',
          700: '#5a3d7a',
          800: '#3d2852',
          900: '#1f1529',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#4facfe',
          600: '#00f2fe',
          700: '#0284c7',
          800: '#0369a1',
          900: '#0c4a6e',
        },
        warm: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#fa709a',
          500: '#fee140',
          600: '#ef4444',
          700: '#dc2626',
          800: '#b91c1c',
          900: '#991b1b',
        },
        orangeAccent: "#e65a00",
        tealDark: "#0b3c5d",
        "orange-accent": "#e65a00"
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(102, 126, 234, 0.3)',
        'glow-lg': '0 0 40px rgba(102, 126, 234, 0.4)',
      },
    }
  },
  plugins: []
}
