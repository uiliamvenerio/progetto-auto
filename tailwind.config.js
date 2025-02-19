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
          DEFAULT: '#f26c4f',
          light: '#f48b74',
          hover: '#d85538'
        },
        navy: '#1b325f',
        skyblue: '#9cc4e4',
        lightblue: '#e9f2f9',
        blue: '#3a89c9',
        coral: '#f26c4f',
        success: '#059669',
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827'
        },
        dark: {
          bg: '#111827',
          card: '#1f2937',
          hover: '#374151'
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      fontFamily: {
        sans: ['"Work Sans"', '"Noto Sans"', 'sans-serif']
      },
      opacity: {
        '15': '0.15'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ]
}